import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap/";

const Administracion = ({guardarImagenCarrusel}) => {
  const [imagenCarrusel, setImagenCarrusel] = useState({
    enlaceCarrusel: "",
    tituloImagenCarrusel: "",
    subtituloImagenCarrusel: ""
  });

  const {
    enlaceCarrusel,
    tituloImagenCarrusel,
    subtituloImagenCarrusel
  } = imagenCarrusel;

  const handleChange = e => {
    setImagenCarrusel({ ...imagenCarrusel, [e.target.name]: e.target.value });
    console.log(imagenCarrusel);
  }
  const guardar = e => {
    e.preventDefault();
    guardarImagenCarrusel(imagenCarrusel);
   
  };
  return (
    <Container>
      <Form onSubmit={guardar}>
        <Form.Group>
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control
            type="text"
            name="enlaceCarrusel"
            placeholder="Ingrese url"
            onChange={handleChange}
            value={enlaceCarrusel}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            name="tituloImagenCarrusel"
            placeholder="Ingrese un titulo"
            onChange={handleChange}
            value={tituloImagenCarrusel}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subtitulo</Form.Label>
          <Form.Control
            type="text"
            name="subtituloImagenCarrusel"
            placeholder="Ingrese un subtitulo"
            onChange={handleChange}
            value={subtituloImagenCarrusel}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Administracion;
