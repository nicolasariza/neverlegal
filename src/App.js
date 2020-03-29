import React, {Fragment, useState} from "react";
import "./App.css";
import { Card, CardGroup } from "react-bootstrap/";
import Navegacion from './components/Navegacion';
import Carrusel from './components/Carrusel';
import Administracion from './components/Administracion';

function App() {

  const imagenesCarruselInicial = [{enlaceCarrusel: "https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/89960019_857462261422161_7052088291440459776_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=cjiw5GtrMgwAX8Bq7Fr&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=b31dedd233f2dd805d3fca44830df74e&oe=5E9F390B",
  tituloImagenCarrusel: "Rebajas",
  subtituloImagenCarrusel: "Aprovecha los mejores precios"}, {enlaceCarrusel: "https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/88025539_851496315352089_3207659985299308544_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=l_6Io1uE3XEAX8IbVgr&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=cd320758b69dfdf092a406c7270a848f&oe=5E9FA3EE",
  tituloImagenCarrusel: "Aprovecha",
  subtituloImagenCarrusel: "Descuentos"}];
  
  const[imagenesCarrusel, setImagenesCarrusel] = useState(imagenesCarruselInicial);
  
  
  const guardarImagenCarrusel=imagen=> setImagenesCarrusel([...imagenesCarrusel,imagen]);


  return (
    <Fragment>
      <Navegacion/>      
      <Carrusel  imagenesCarrusel={imagenesCarrusel}/>
      <Administracion guardarImagenCarrusel={guardarImagenCarrusel} />
      <Card>
    <Card.Body>
    <Card.Text className="text-center mt-4 mb-4 text-dark" ><h1>Contactanos</h1></Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/53257544_597189614116095_5476451664565108736_n.jpg?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=NSRszaVXeqIAX-MWz11&_nc_ht=scontent.fbog5-1.fna&oh=f9655f5a866985717a55971283f15dc6&oe=5E9E785F"/>
  </Card>
  <CardGroup>
  <h1 className="text-center mt-4 mb-4 text-dark" >Productos</h1>
  <Card>
    <Card.Img variant="top" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/86731420_838928836608837_6883012312513380352_o.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_ohc=oyzVps0n7pEAX92AtHZ&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=1df8a133d614d3c7ffc6c408c112f38b&oe=5E9F3C4B" />
    <Card.Body>
      <Card.Title>Boyfriend</Card.Title>
      <Card.Text>
        Blusa:lis.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$30.000</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/85114264_844411756060545_3567352350899175424_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=2yIOY_yUSMIAX_5ptlL&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=8291276c42db6591cb5a1af6e7e04e5d&oe=5E9E4737" />
    <Card.Body>
      <Card.Title>Jean</Card.Title>
      <Card.Text>
        Begonia
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$45.000</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.fbog5-1.fna.fbcdn.net/v/t1.0-9/p960x960/86720733_838925786609142_7318223401611427840_o.jpg?_nc_cat=104&_nc_sid=2d5d41&_nc_ohc=yTnah7BBaTAAX_jAjQ5&_nc_ht=scontent.fbog5-1.fna&_nc_tp=6&oh=a05aa3336e4470c0cb92c93617a5a339&oe=5E9FCE9D" />
    <Card.Body>
      <Card.Title>Blusa</Card.Title>
      <Card.Text>
        Jean: Violeta
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$45.000</small>
    </Card.Footer>
  </Card>
</CardGroup>
  <div class="card-footer text-muted">
    Never legal - 2020
  </div>
  </Fragment>
  );
}

export default App;
