import React from "react";
import { Carousel } from "react-bootstrap/";

const Carrusel = ({ imagenesCarrusel }) => {
   return (
    <Carousel interval={3500} indicators={false}>
      {imagenesCarrusel.map((imagen) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen.enlaceCarrusel}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">{imagen.tituloImagenCarrusel}</h3>
            <p className="text-dark">{imagen.subtituloImagenCarrusel}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
