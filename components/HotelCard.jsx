import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/hotelCard.css"

export default function HotelCard({ name, url }) {
  return (
    <Card className="hotelCard">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" type="placeHolder" href={url}>
          Conoce hospedajes
        </Button>
      </Card.Body>
    </Card>
  );
}
