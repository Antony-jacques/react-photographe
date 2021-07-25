import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ReservationList = (props) => {
  console.log("props", props);
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          {props.data.map((val, index) => {
            return (
              <Card style={{ width: "18rem", margin: "1rem" }}>
                <Card.Body>
                  <Card.Title>{val.objectReservation}</Card.Title>
                  <Card.Text>
                    Date de votre réservation : {val.dateReservation}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}

          {/* ReservationList 
            {props.data[0].objectReservation}
 - {props.data[0].dateReservation} */}
          {console.log("props", props)}
        </Row>
      </Container>
    </div>
  );
};

export default ReservationList;
