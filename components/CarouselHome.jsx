import Carousel from "react-bootstrap/Carousel";
import "../styles/carousel.css";
import invierno from "../assets/invierno.jpg";
import verano from "../assets/verano.jpg";
import otoño from "../assets/otoño.jpg";
import primavera from "../assets/primavera.jpg";

const jpg = [{
  invierno,
  verano,
  otoño,
  primavera
}];

export default function CarouselHome() {

  return (
    <div className="carousel">
      <Carousel style={{ maxWidth: "35rem" }}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={jpg.map((e)=>e.verano)}
            alt="First slide"
            style={{ borderRadius: ".5rem", height:"27rem", backgroundSize: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={jpg.map((e)=>e.primavera)}
            alt="Second slide"
            style={{ borderRadius: ".5rem", height:"27rem",  backgroundSize: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={jpg.map((e)=>e.invierno)}
            alt="Third slide"
            style={{ borderRadius: ".5rem", height:"27rem",  backgroundSize: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={jpg.map((e)=>e.otoño)}
            alt="Fourth slide"
            style={{ borderRadius: ".5rem", height:"27rem",  backgroundSize: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
