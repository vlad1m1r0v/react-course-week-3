import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish }) {
  return (
    <Card key={dish.id}>
      <Link to={`/menu/${dish.id}`}>
        <Card.Img src={dish.image} alt={dish.name} />
        <Card.ImgOverlay>
          <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
}

export default function Menu({ dishes, onClick }) {
  const menu = dishes.map((dish) => (
    <div className="col-12 col-md-5 m-1">
      <RenderMenuItem dish={dish} onCLick={onClick} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}
