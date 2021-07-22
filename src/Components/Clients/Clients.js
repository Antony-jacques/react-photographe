import React from "react";
import dataClients from "./dataClients.js";
import dataTestimonials from "./dataTestimonials.js";


import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./styles.css";

export default function Clients() {
  console.log(dataClients);
  return (
    <div style={{ padding: "2rem 0" }}>
      <div>
        <h2 style={{ textAlign: "center" }}>
          A qui s'adressent mes prestations ?
        </h2>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Row style={{ position: "relative" }}>
            {dataClients.map((val, index) => {
              console.log(val.img);
              return (
                <Card
                  key={index}
                  className={"card-client"}
                  // style={{ width: "18rem", margin: "1rem", textAlign: "center", padding: '0',   boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                  // }}
                >
                  {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + `/Imgs/${val.img}.jpg`} /> */}

                  <img src={require(`./${val.img}.jpg`).default} alt="" />

                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                      {val.content}
                      <br></br>
                      {val.content2}
                    </Card.Text>
                    <Button variant="outline-warning">Voir plus</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        {" "}
        <h2 className='client-title' style={{ textAlign: "center" }}>Ils m'ont fait confiance</h2>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            {dataTestimonials.map((val,index)=>{
              console.log(index+1)
              return(
                <Card
                  key={index}
                  className={"card-testimonial"}
                >

                  {/* <img src={} alt="testimonial" /> */}

                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text className={'testimonial-text'}>
                      <span>❝ </span>
                      {val.content}                      <span> ❞</span>

                      

                      
                    </Card.Text>
                    <div className={'testimonial-background'} style={{backgroundImage: 'url('+(require('./vector1.jpg').default)+')'}}>
                      <img className={'testimonial-img'} src={require(`./testi${index+1}.jpg`).default} alt=""/>
                      <span style={{display:'block', color:'#ffc107', fontWeight:'bold'}}>{val.name}</span>

                    </div>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
