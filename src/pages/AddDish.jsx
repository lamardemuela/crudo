import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap/esm";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

function AddDish() {
  const navigate = useNavigate();

  // variables para la propiedad del nuevo Dish
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [lowCarb, setLowCarb] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [highProtein, setHighProtein] = useState(false);
  const [singleStep, setSingleStep] = useState("")
  const [steps, setSteps] = useState([])

 

  // event onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // las tags serán un array vacío al que se irán añadiendo tags según marque el usuario
    const tagsArr = [];
    if (glutenFree) tagsArr.push("gluten-free");
    if (lactoseFree) tagsArr.push("lactose-free");
    if (highProtein) tagsArr.push("high-protein");
    if (lowCarb) tagsArr.push("low-carb");

    // creamos un nuevo componente Dish
    const newDish = {
      image: imageUrl,
      title,
      description,
      tags: tagsArr,
      isFav: false,
      preparation: steps
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/dishes`, newDish)
      .then(() => {
        navigate("/dishes-list");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // event añadir pasos
  const handleClickStep = (event) => {
    event.preventDefault()    
    setSteps([...steps, singleStep])
  }

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
      <h2> Add a new Dish </h2>
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
          placeholder="Enter a dish title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Description *</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          placeholder="Enter a dish description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      {/* STEPS */}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Preparation *</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            required
            placeholder="At least, enter the first step to prepare your dish"
            aria-describedby="basic-addon2"
            // value
            onChange={(e) => {setSingleStep(e.target.value)}}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleClickStep}>
            Add Step
          </Button>
        </InputGroup>
        {steps.map((eachStep, i) => {
          return <p key={i}> {i+1}.  {eachStep} </p>
        })}
      </Form.Group>

      {/* TAGS */}
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
          onChange={() => setGlutenFree(!glutenFree)}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Low-Carb"
          checked={lowCarb}
          onChange={() => setLowCarb(!lowCarb)}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Lactose-Free"
          checked={lactoseFree}
          onChange={() => setLactoseFree(!lactoseFree)}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="High Protein"
          checked={highProtein}
          onChange={() => setHighProtein(!highProtein)}
        />
      </Form.Group>
      <Button type="submit"> Save new Dish </Button>
    </Form>
  );
}

export default AddDish;
