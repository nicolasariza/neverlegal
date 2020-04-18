import React, { Fragment, useState } from "react";
import { Card, Container } from "react-bootstrap/";
import Navegacion from "./components/Navegacion";
import Carrusel from "./components/Carrusel";
import Administracion from "./components/Administracion";
import ListaProductos from "./components/ListaProductos";
import { imagenesCarruselInicial } from "./content/imgSlides";
import { productosInicial } from "./content/productos";
import RedesSociales from "./components/RedesSociales";
import Video from "./components/Video";

function App() {
  const [imagenesCarrusel, setImagenesCarrusel] = useState(
    imagenesCarruselInicial
  );

  const [productos, setProductos] = useState(productosInicial);

  const guardarImagenCarrusel = (imagen) =>
    setImagenesCarrusel([...imagenesCarrusel, imagen]);

  return (
    <Fragment>
      <Navegacion />
      <RedesSociales />
      <Container>
        <Carrusel imagenesCarrusel={imagenesCarrusel} />
      </Container>

      {/* <Administracion guardarImagenCarrusel={guardarImagenCarrusel} /> */}
      <h1 className="text-center mb-2 text-dark">Productos</h1>
      
        <ListaProductos productos={productos} />
      <Container>
        <Card border="light">
          <Card.Body>
            <Card.Text className="text-center mt-4 mb-4 text-dark">
              <h1>Contactanos</h1>
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={require("./images/1.png")} />
        </Card>
        <Video />
      </Container>

      <div class="card-footer text-muted mt-4">Never legal - 2020</div>
    </Fragment>
  );
}

export default App;
