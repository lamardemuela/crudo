import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap/esm";
import { useNavigate,useParams } from "react-router-dom";

function EditFoodPlanning() {
  const navigate = useNavigate()
  const params = useParams();
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

  // cogemos el id de los dishes
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/dishes`)
    .then((response) => {
      setDishesList(response.data);
    }).catch((error)=>{
      navigate('/error')
      //console.log(error)
    })
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${
      params.foodPlanningId}`)
      .then((respuesta)=>{
        //console.log(respuesta.data)
        setImageUrl(respuesta.data.image)
        setTitle(respuesta.data.title)
        setDescription(respuesta.data.description)
        setBreakfast(respuesta.data.breakFastDishId)
        setLunch(respuesta.data.lunchDishId)
        setDinner(respuesta.data.dinnerDishId)
        setGlutenFree(respuesta.data.tags.includes("gluten-free"))
        setLactoseFree(respuesta.data.tags.includes("lactose-free"))
        setLowCarb(respuesta.data.tags.includes("low-carb"))
        setHighProtein(respuesta.data.tags.includes("high-protein"))
      })
      .catch((error)=>{
        navigate('/error')
        //console.log(error)
      })
  }, []);

  if (dishesList === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const tagsArr = []
    if(glutenFree) tagsArr.push("gluten-free")
    if(lactoseFree) tagsArr.push("lactose-free")
    if(highProtein) tagsArr.push("high-protein")
    if(lowCarb) tagsArr.push("low-carb")
    const newFoodPlanning = {
      image: imageUrl,
      title,
      description,
      tags: tagsArr,
      breakFastDishId: breakfast,
      lunchDishId: lunch,
      dinnerDishId: dinner,
    };

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/foodPlanning/${params.foodPlanningId}`, newFoodPlanning)
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
      onSubmit={handleShow}
    >
      <h2> Edit Food Planning </h2>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Paste the image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Title *</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter a title for the Food Planning"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Description *</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          value={description}
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
          <option value={breakfast}>{dishesList.map((eachDish) => {
            return (
              eachDish.id===breakfast&&eachDish.title
            )
          })}</option>

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
          <option value={lunch}>{dishesList.map((eachDish) => {
            return (
              eachDish.id===lunch&&eachDish.title
            )
          })}</option>
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
          <option value={dinner}>{dishesList.map((eachDish) => {
            return (
              eachDish.id===dinner&&eachDish.title
            )
          })}</option>
          {dishesList.map((eachDish) => {
            return (
              <option key={eachDish.id} value={eachDish.id}>
                {eachDish.title}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button onClick={handleShow}> Save new Food Planning </Button>

      <Modal show={show}>
    <Modal.Header>
      <Modal.Title>Edit</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to edit this Food Planning?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Back
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Edit
      </Button>
    </Modal.Footer>
  </Modal> 

    </Form>
   
  );
}

export default EditFoodPlanning