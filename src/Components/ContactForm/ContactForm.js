import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { AiOutlineHome } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactForm() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <div className="contact-section">
              <Container>
                <Row className="section-content">
                  <Col md={4}>
                    <h2>Contact</h2>
                    <ul>
                      <li>
                        <AiOutlineHome /> Lyon, FRANCE
                      </li>
                      <li>
                        <AiTwotonePhone /> +33(0)6 33 36 35 69{" "}
                      </li>
                      <li>
                        <AiOutlineMail /> antony.jacques@laposte.net
                      </li>
                    </ul>

                    <img
                      src={require("./contact.jpg").default}
                      alt="contact"
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col md={8} className="right-col">
                    <div>
                      <p style={{ marginBottom: 0 }}>
                        Parlez-moi de votre projet, de votre besoin, de vos
                        envies.
                      </p>
                      <p>
                        Posez-moi vos questions, je me ferai un plaisir de vous
                        répondre !
                      </p>
                    </div>
                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Nom et prénom</Form.Label>
                        <Form.Control type="text" placeholder="Nom et prénom" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupPhone">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control type="text" placeholder="Téléphone" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupsubject">
                        <Form.Label>Objet</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => console.log(e.target.value)}
                        >
                          <option value="conseil">Besoin d'un conseil</option>
                          <option value="devis">Besoin d'un devis</option>
                          <option value="autre">Autre</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Control
                        as="textarea"
                        placeholder="Votre message"
                        style={{ height: "100px", marginBottom: "1rem" }}
                      />
                      <Button
                        variant="warning"
                        type="submit"
                        style={{ marginBottom: "1rem" }}
                      >
                        Envoyer
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
