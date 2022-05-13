import { Card } from "react-bootstrap";

const RenderDish = ({ dish }) => (
  <Card key={dish.id}>
    <Card.Img src={dish.image} alt={dish.name} />
    <Card.Body>
      <Card.Title>{dish.name}</Card.Title>
      <Card.Text>{dish.description}</Card.Text>
    </Card.Body>
  </Card>
);

const RenderComments = ({ comments }) => {
  return (
    <>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <div>
            --{comment.author}, {new Date(comment.date).toDateString()}
          </div>
        </div>
      ))}
    </>
  );
};

export default function DishDetail({ dish }) {
  if (!dish) return <></>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1"></div>
        <RenderComments comments={dish.comments} />
      </div>
    </div>
  );
}
