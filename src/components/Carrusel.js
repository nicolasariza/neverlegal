import React from "react";
import { Carousel } from "react-bootstrap/";

const Carrusel = ({ imagenesCarrusel }) => {
  return (
    <Carousel interval={1500} indicators={false}>
      {imagenesCarrusel.map(imagen => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen.enlaceCarrusel}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{imagen.tituloImagenCarrusel}</h3>
            <p>{imagen.subtituloImagenCarrusel}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;

/*
https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/89960019_857462261422161_7052088291440459776_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=cjiw5GtrMgwAX8Bq7Fr&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=b31dedd233f2dd805d3fca44830df74e&oe=5E9F390B
https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/88025539_851496315352089_3207659985299308544_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=l_6Io1uE3XEAX8IbVgr&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=cd320758b69dfdf092a406c7270a848f&oe=5E9FA3EE
https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/86348332_838929006608820_2127244997597069312_o.jpg?_nc_cat=108&_nc_sid=2d5d41&_nc_ohc=zG2QU0n0un4AX-J7Zou&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=7b1a1e004ecaa09a4325fd8cdaa2019c&oe=5E9EB458
*/
