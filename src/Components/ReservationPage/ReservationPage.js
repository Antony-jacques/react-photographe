import React, { useState } from "react";
import "./ReservationPage.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import dataforfaits from "./dataforfaits";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

// import the datepickercomponent

export default function ReservationPage() {
  console.log("dataforfaits", dataforfaits);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [dateReservation, setDateReservation] = useState();
  const [objectReservation, setObjectReservation] = useState('Entreprise');

  const [startDate, setStartDate] = useState(new Date());
  console.log("startDate", startDate.toLocaleDateString());

  // alert(date.toLocaleDateString("fr-FR", options));

  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h2>TARIFS PRESTATIONS PHOTO</h2>
        </div>
      </div>
      <section id="forfaits">
        <h3>Des forfaits adaptés à vos besoins</h3>
        <Container>
          <Row className="justify-content-md-center">

          </Row>
          <Row className="justify-content-md-center">
            {dataforfaits.map((val, index) => {
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="card-title">{val.titre}</Card.Title>
                    <div className="price">{val.prix}€</div>
                    <Card.Text>
                      {val.prestation.map((value, index) => {
                        return (
                          <div key={index} className="sous-prestation-general">
                            <div className="sous-prestation">
                              {value.sousPrestation}{" "}
                              {value.prix && value.prix + "€"}
                            </div>
                            <div className="description">
                              {value.description}
                            </div>
                          </div>
                        );
                      })}
                    </Card.Text>
                    <Button onClick={() => setLgShow(true)}>Je réserve</Button>

                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Demande de réservation
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupName"
                          >
                            <Form.Label>Choisissez une date </Form.Label>
                            {/* <Form.Control
                              type="date"
                              onChange={(e) => {
                                setDateReservation(e.target.value);
                                console.log(dateReservation);
                                // console.log(e.target.value)
                              }}
                            /> */}
                            <div>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              locale="fr"
                              dateFormat="dd/MMM/yyyy"
                              minDate={new Date()}
                            />

                            </div>
                          </Form.Group>

                          <Form.Group controlId="formGridState">
                            <Form.Label>Choisissez une prestation</Form.Label>

                            <Form.Control
                              as="select"
                              onChange={(e) => setObjectReservation(e.target.value)}
                            >
                              {dataforfaits.map((val, index) => {
                                return (
                                  <option key={index} 
                                  // value={val.titre}
                                  >
                                    {val.titre}
                                    
                                  </option>
                                );
                              })}
                            </Form.Control>
                            
                            <p>
                              Vous avez choisi {objectReservation} le{" "}
                              {startDate.toLocaleDateString()}
                            </p>

                          </Form.Group>

                          <Button
                            variant="warning"
                            type="submit"
                            style={{ margin: "1rem 0" }}
                          >
                            Envoyer
                          </Button>
                          {dateReservation}
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
