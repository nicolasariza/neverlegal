import React from "react";
import { Card } from "react-bootstrap/";

const Producto = ({ producto }) => {
  return (
    <Card border="light">
      <Card.Img variant="top" src={producto.imagenProducto} />
      <Card.Body>
        <Card.Title className="text-center">
          {producto.tituloProducto}
        </Card.Title>
        <Card.Text>{producto.descripcionProducto}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{producto.precioProducto}</small>
      </Card.Footer>
    </Card>
  );
};

export default Producto;
