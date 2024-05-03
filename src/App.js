import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import c1 from "./마키마 사진/마키마 상품1.jpg";
import c2 from "./마키마 사진/마키마 상품2.jpg";
import c3 from "./마키마 사진/마키마 상품3.jpg";
import c4 from "./마키마 사진/마키마 상품4.jpg";
import c5 from "./마키마 사진/마키마 상품5.jpg";
import React, { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail.js";
const images = [c1, c2, c3, c4, c5];

function App() {
  let [makima] = useState(data);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">マキマ's SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="nav-dropdown-menu"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="nav-dropdown-item"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="nav-dropdown-item"
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="nav-dropdown-item"
                >
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="nav-dropdown-item"
                >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" alt="마키마의 사진"></div>
              <div className="bridge"></div>
              <div className="card-container">
                {makima.map((item, index) => (
                  <Card key={index} makima={item} i={index} />
                ))}
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail></Detail>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="container">
      <img src={images[props.i]} alt={`마키마 상품 ${props.i + 1}`} />
      <h4>{props.makima.title}</h4>
      <p>{props.makima.content}</p>
    </div>
  );
}
export default App;
