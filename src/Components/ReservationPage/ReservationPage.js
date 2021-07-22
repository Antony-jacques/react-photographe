import React from "react";
import "./ReservationPage.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import dataforfaits from "./dataforfaits";

export default function ReservationPage() {
  console.log("dataforfaits", dataforfaits);
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
            {dataforfaits.map((val, index) => {
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Body>
              <Card.Title className='card-title'>{val.titre}</Card.Title>
              <div className='price'>
                  {val.prix}€
              </div>
                    <Card.Text>
                      {
                          val.prestation.map((value,index)=>{
                              return(
                                  <div className='sous-prestation-general'>
                                      <div className='sous-prestation'>{value.sousPrestation} {value.prix && value.prix + '€' }</div>
                                      <div className='description'>{value.description}</div>
                                      
                                  </div>
                              )
                          })
                      }
                    </Card.Text>
                    <Button variant="primary">Je réserve</Button>
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
