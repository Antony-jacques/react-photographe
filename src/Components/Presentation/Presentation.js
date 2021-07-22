import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portrait from "./portrait2.jpg";


export default function Presentation() {
  return (
    <div>
      <Container style={{marginBottom: '2rem'}}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          A propos de moi
        </h2>
        <Row>
          <Col xs={12} md={4}>
            <img src={portrait} alt="portrait" style={{ width: "100%" , marginBottom: '2rem'}} />
          </Col>
          <Col xs={12} md={8} style={{display: 'flex', margin: 'auto'}}>
            <div style={{    lineHeight: '2.5rem',
    padding: '0rem 2rem', }}>
              {" "}
              <p>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Qui suis-je ?{" "}
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                blanditiis dolor ullam voluptatibus fugit quisquam praesentium
                voluptate a, nobis sapiente unde repellendus ut dolorum quo
                similique atque doloremque, nisi assumenda corrupti expedita.
                Nisi obcaecati, similique delectus laborum repudiandae autem
                consequatur rerum ducimus ipsam error voluptatibus ut voluptates
                voluptatum commodi laboriosam, libero molestias sunt
                reprehenderit eius esse. Maiores eveniet quod dolorem illum!.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
