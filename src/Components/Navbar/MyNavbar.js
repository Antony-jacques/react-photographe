import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import PresentationPage from "../PresentationPage/PresentationPage.js";
import PortfolioPage from "../PortfolioPage/PortfolioPage.js";
import HomePage from "../HomePage/HomePage.js";
import ReservationPage from "../ReservationPage/ReservationPage.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">A.Dupont Photographe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className={"router-link"} to="/">
                Accueil
              </Link>

              <Link className={"router-link"} to="/presentation">
                Présentation
              </Link>

              <Link className={"router-link"} to="/reservation">
                Réservation
              </Link>

              <Link className={"router-link"} to="/portfolio">
                Portfolio
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/presentation">
          <PresentationPage />
        </Route>

        <Route path="/portfolio">
          <PortfolioPage />
        </Route>

        <Route path="/reservation">
          <ReservationPage />
        </Route>

        <Route path="/"> {/* route à mettre en dernier. Toutes les routes après celle-ci renvoient à HomePage */}
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
