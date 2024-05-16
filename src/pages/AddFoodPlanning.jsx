import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Spinner } from "react-bootstrap/esm";
import { useNavigate } from "react-router-dom";

function AddFoodPlanning() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [lowCarb, setLowCarb] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [highProtein, setHighProtein] = useState(false);
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [dishesList, setDishesList] = useState(null);
  const [whatDish, setWhatDish] = useState("");
  const [bTitle, setbTitle] = useState("");
  const [lTitle, setlTitle] = useState("");
  const [dTitle, setdTitle] = useState("");

  // cogemos el id de los dishes
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes`).then((response) => {
      //console.log(response.data);
      setDishesList(response.data);
    });
  }, []);

  if (dishesList === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleBdish = () => {
    setWhatDish("b");
    setShow(true);
  };
  const handleLdish = () => {
    setWhatDish("l");
    setShow(true);
  };
  const handleDdish = () => {
    setWhatDish("d");
    setShow(true);
  };
  const handleCloseB = (eachDish) => {
    setBreakfast(eachDish.id);
    setbTitle(eachDish);
    setShow(false);
  };
  const handleCloseL = (eachDish) => {
    setLunch(eachDish.id);
    setlTitle(eachDish);
    setShow(false);
  };
  const handleCloseD = (eachDish) => {
    setDinner(eachDish.id);
    setdTitle(eachDish);
    setShow(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const tagsArr = [];
    if (glutenFree) tagsArr.push("gluten-free");
    if (lactoseFree) tagsArr.push("lactose-free");
    if (highProtein) tagsArr.push("high-protein");
    if (lowCarb) tagsArr.push("low-carb");
    const newFoodPlanning = {
      image: imageUrl,
      title,
      description,
      tags: tagsArr,
      breakFastDishId: breakfast,
      lunchDishId: lunch,
      dinnerDishId: dinner,
      isFav: false,
    };
    //console.log(newFoodPlanning);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`, newFoodPlanning)
      .then(() => {
        navigate("/food-planning-list");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // funciones para el onChange de cada tag
  const glutenFreenChange = () => setGlutenFree(!glutenFree);
  const lowCarbChange = () => setLowCarb(!lowCarb);
  const lactoseFreeChange = () => setLactoseFree(!lactoseFree);
  const highProteinChange = () => setHighProtein(!highProtein);

  return (
    <Form
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onSubmit={handleSubmit}
    >
      <h2> Add a new Food Planning </h2>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Paste the image URL"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Title *</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter a title for the Food Planning"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Description *</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          placeholder="Enter a description for the Food Planning"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        controlId="formFile"
        className="mb-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Form.Label>Select tags</Form.Label>

        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Gluten-Free"
          checked={glutenFree}
          onChange={glutenFreenChange}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Low-Carb"
          checked={lowCarb}
          onChange={lowCarbChange}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Lactose-Free"
          checked={lactoseFree}
          onChange={lactoseFreeChange}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="High Protein"
          checked={highProtein}
          onChange={highProteinChange}
        />
      </Form.Group>
      <Form.Group
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <Button variant="light" onClick={handleBdish}>
          Select your breakfast dish | Actual: {bTitle.title} -{" "}
          <img width={"40px"} height={"40px"} src={bTitle.image} style={{ borderRadius: "50%" }} />
        </Button>
        <Button variant="light" onClick={handleLdish}>
          Select your lunch dish | Actual: {lTitle.title} -{" "}
          <img width={"40px"} height={"40px"} src={lTitle.image} style={{ borderRadius: "50%" }} />
        </Button>
        <Button variant="light" onClick={handleDdish}>
          Select your dinner dish | Actual: {dTitle.title} -{" "}
          <img width={"40px"} height={"40px"} src={dTitle.image} style={{ borderRadius: "50%" }} />
        </Button>
      </Form.Group>
      <Button type="submit"> Save new Food Planning </Button>

      {/* MODAL */}
      <Modal
        show={show}
        size="lg"
        fullscreen="sm-down"
        centered
        scrollable="true"
        onEscapeKeyDown={handleClose}
      >
        <Modal.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Modal.Title as="h3" class="modal-title">
            Select dish for{" "}
            {whatDish === "b"
              ? "breakfast "
              : whatDish === "l"
              ? "lunch "
              : whatDish === "d"
              ? "dinner "
              : null}
          </Modal.Title>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {whatDish === "b"
            ? dishesList.map((eachDish) => {
                return (
                  <Button
                    variant="light"
                    key={eachDish.id}
                    onClick={() => handleCloseB(eachDish)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {eachDish.title}
                    <img
                      width={"50px"}
                      height={"50px"}
                      src={eachDish.image}
                      style={{ borderRadius: "50%" }}
                    />
                  </Button>
                );
              })
            : whatDish === "l"
            ? dishesList.map((eachDish) => {
                return (
                  <Button
                    variant="light"
                    key={eachDish.id}
                    onClick={() => handleCloseL(eachDish)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {eachDish.title} -
                    <img
                      width={"50px"}
                      height={"50px"}
                      src={eachDish.image}
                      style={{ borderRadius: "50%" }}
                    />
                  </Button>
                );
              })
            : whatDish === "d"
            ? dishesList.map((eachDish) => {
                return (
                  <Button
                    variant="light"
                    key={eachDish.id}
                    onClick={() => handleCloseD(eachDish)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {eachDish.title} -
                    <img
                      width={"50px"}
                      height={"50px"}
                      src={eachDish.image}
                      style={{ borderRadius: "50%" }}
                    />
                  </Button>
                );
              })
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default AddFoodPlanning;
