import React from "react";
import { Navbar } from "react-bootstrap/";
const Navegacion = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s150x150/52029400_418335958971693_629562396511305728_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=r_ZIQxtBN88AX_u0vTo&oh=0f347f044c6d3b56b8edbf9b53a4de0d&oe=5EA37D2A"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        &nbsp;&nbsp;&nbsp;Never legal
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navegacion;
