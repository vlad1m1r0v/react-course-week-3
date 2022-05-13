import { Card } from "react-bootstrap";

function RenderMenuItem({ dish, onCLick }) {
  return (
    <Card key={dish.id} onClick={() => onCLick(dish.id)}>
      <Card.Img src={dish.image} alt={dish.name} />
      <Card.ImgOverlay>
        <Card.Title>{dish.name}</Card.Title>
      </Card.ImgOverlay>
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
