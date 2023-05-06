import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/cityCard.css";
import Form from "react-bootstrap/Form";
import "../styles/cityCard.css";

export default function CityCard({ nombre, pais, imagen, id, atracciones }) {
  return (
    <Card className="cityCards">
      <Card.Img
        variant="top"
        src={imagen}
        style={{ minHeight: "14rem", minWidth: "16rem" }}
      />
      <Card.Body>
        <Card.Title>{pais}</Card.Title>
        <Card.Text>{nombre}</Card.Text>
        <Form.Select
          size="sm"
          style={{ marginBottom: "2rem" }}
          onChange={(e) => window.open(e.target.value, "_blank")}
        >
          <option hidden disabled selected value>
            Atracciones principales
          </option>
          {atracciones.map((atraccion, index) => (
            <option key={index} value={atraccion.url} target="_blank">
              {atraccion.nombre}
            </option>
          ))}
        </Form.Select>

        <Button variant="primary" type="placeHolder" href={`/hotels/${id}`}>
          Conoce hospedajes
        </Button>
      </Card.Body>
    </Card>
  );
}
