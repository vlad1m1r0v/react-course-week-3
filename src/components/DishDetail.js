import { Card, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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

export default function DishDetail({ dish, comments }) {
  if (!dish) return <></>;

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={comments} />
        </div>
      </div>
    </div>
  );
}
