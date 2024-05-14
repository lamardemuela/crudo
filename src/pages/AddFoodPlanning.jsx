import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap/esm";
import { useNavigate } from "react-router-dom";

function AddFoodPlanning() {
  const navigate = useNavigate()

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

  // cogemos el id de los dishes
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes`).then((response) => {
      console.log(response.data);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFoodPlanning = {
      image: imageUrl,
      title,
      description,
      tags: [
        glutenFree === true && "Gluten-Free",
        lowCarb === true && "Low-Carb",
        lactoseFree === true && "Lactose-Free",
        highProtein === true && "High Protein",
      ],
      breakFastDishId: breakfast,
      lunchDishId: lunch,
      dinnerDishId: dinner,
    };
    console.log(newFoodPlanning);

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning`, newFoodPlanning)
    .then(() => {
      navigate("/food-planning-list")
    })
    .catch((error) => {
      navigate("/error")
    })
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
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setBreakfast(e.target.value)}
        >
          <option>Select your breakfast dish</option>
          <option value=""> None </option>
          {dishesList.map((eachDish) => {
            return (
              <option key={eachDish.id} value={eachDish.id}>
                {eachDish.title}
              </option>
            );
          })}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setLunch(e.target.value)}
        >
          <option>Select your lunch dish</option>
          <option value=""> None </option>
          {dishesList.map((eachDish) => {
            return (
              <option key={eachDish.id} value={eachDish.id}>
                {eachDish.title}
              </option>
            );
          })}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setDinner(e.target.value)}
        >
          <option>Select your dinner dish</option>
          <option value=""> None </option>
          {dishesList.map((eachDish) => {
            return (
              <option key={eachDish.id} value={eachDish.id}>
                {eachDish.title}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button type="submit"> Save new Food Planning </Button>
    </Form>
  );
}

export default AddFoodPlanning;
