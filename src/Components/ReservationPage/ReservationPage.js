import React, { useState } from "react";
import "./ReservationPage.css";

import ReservationList from "../ReservationList/ReservationList.js";
import Footer from '../Footer/Footer.js'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import dataforfaits from "./dataforfaits";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

export default function ReservationPage() {
  // console.log("dataforfaits", dataforfaits);

  const [lgShow, setLgShow] = useState(false);

  const [dateReservation, setDateReservation] = useState();
  const [objectReservation, setObjectReservation] = useState("Entreprise - Shooting journée - 1900€");

  const [startDate, setStartDate] = useState(new Date());
  const [hasReserved, setHasReserved] = useState(false);

  const [data, setData] = useState([]);

  const handleReservation = () => {
    setLgShow(false);

    const newResa = {
      dateReservation: startDate.toLocaleDateString(),
      objectReservation: objectReservation,
    };
    setData((data) => [...data, newResa]); // récupère le tableau précédent et ajoute la nouvelle résa
    console.log("newResa", newResa);
    console.log("data46", data);

    setHasReserved(true);
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h2>TARIFS PRESTATIONS PHOTO</h2>
        </div>
      </div>
      {hasReserved && (
        <section className="section" id="reservation">
          <h3>Votre demande de réservation en cours</h3>
          <Container>
            <Row className="justify-content-md-center">
              <ReservationList data={data}></ReservationList>
            </Row>
          </Container>
        </section>
      )}

      <section className="section reservationPage">
        <h3>Des forfaits adaptés à vos besoins</h3>
        <Container>
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
                    <div className="space"></div>
                     <div className="btn-box" style={{display:'flex'}}>
                     <Button variant="warning" onClick={() => setLgShow(true)} style={{margin:'auto'}}>
                      Je réserve
                    </Button>
                     </div>


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
                              onChange={(e) =>
                                setObjectReservation(e.target.value)
                              }
                            >
                              {dataforfaits.map((val, index) => {
                                return (
                                  // <option
                                  //   key={index}
                                  //   // value={val.titre}
                                  // >
                                  //   {val.titre}
                                  // </option>
                                  <>
                                    {val.prestation.map((val, index) => {
                                      return (
                                        <option
                                          key={index}
                                          // value={val.titre}
                                        >
                                          {val.categorie} - {val.sousPrestation}{" "}
                                          - {val.prix}€
                                        </option>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </Form.Control>

                            {/* {console.log("val", val)} */}
                            {/* {val.prestation.map((vals,index)=>{
                              return(
                                <div  key={index} >
                                  {vals.sousPrestation}
                                </div>
                              )
                            })} */}

                            {/* <Form.Group as={Row} className="mb-3">
                              <Form.Label as="legend" column sm={2}>
                                Radios
                              </Form.Label>
                              <Col sm={10}>
                                <Form.Check
                                  type="radio"
                                  label="first radio"
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios1"
                                />
                                <Form.Check
                                  type="radio"
                                  label="second radio"
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios2"
                                />
                                <Form.Check
                                  type="radio"
                                  label="third radio"
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios3"
                                />
                              </Col>
                            </Form.Group> */}

                            <Alert
                              variant="primary"
                              style={{ marginTop: "2rem" }}
                            >
                              Vous avez choisi: {objectReservation} le{" "}
                              {startDate.toLocaleDateString()}
                            </Alert>
                          </Form.Group>

                          <Button
                            variant="warning"
                            style={{ margin: "1rem 0" }}
                            onClick={handleReservation}
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
<Footer/>
    </div>
  );
}
