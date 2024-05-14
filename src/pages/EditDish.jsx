import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function EditDish() {
  const navigate = useNavigate();
  const params = useParams();

  // estados para la propiedad del Dish actualizado
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [lowCarb, setLowCarb] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [highProtein, setHighProtein] = useState(false);

  // estado para el modal
  const [show, setShow] = useState(false);

  useEffect(() => {
    // actualizamos la data cogiendo la del dishId en el que estemos
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`)
      .then((response) => {
        setImageUrl(response.data.image);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setGlutenFree(response.data.tags.includes("gluten-free"));
        setLactoseFree(response.data.tags.includes("lactose-free"));
        setLowCarb(response.data.tags.includes("low-carb"));
        setHighProtein(response.data.tags.includes("high-protein"));
      })
      .catch((error) => {
        navigate("/error");
      });
  }, []);

  // events del modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
    const updatedDish = {
      image: imageUrl,
      title,
      description,
      tags: tagsArr,
    };
    // actualizamos el componente en nuestra lista
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/dishes/${params.dishId}`,
        updatedDish
      )
      .then(() => {
        navigate("/dishes-list");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
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
      <h2> Edit Dish </h2>
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
          placeholder="Enter a dish title"
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
          placeholder="Enter a dish description"
          value={description}
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
      <Button onClick={handleShow}> Save changes </Button>

      {/* MODAL */}
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to edit this dish?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default EditDish;
