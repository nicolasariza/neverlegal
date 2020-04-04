import React from "react";
import Producto from "./Producto";
import { CardDeck, Container } from "react-bootstrap/";

const ListaProductos = ({ productos }) => {
  return (
    <Container>
      <CardDeck>
        {productos.map((producto) => (
          <Producto producto={producto} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default ListaProductos;
