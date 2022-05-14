import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const initialFormState = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  };

  const initialBlurState = {
    firstname: false,
    lastname: false,
    telnum: false,
    email: false,
  };

  const initialErrorState = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  };

  const validationRules = {
    firstname: [
      (field) =>
        field.length >= 3 ? "" : "First Name should be >= 3 characters",
      (field) =>
        field.length <= 10 ? "" : "First Name should be <= 10 characters",
    ],
    lastname: [
      (field) =>
        field.length >= 3 ? "" : "Last Name should be >= 3 characters",
      (field) =>
        field.length <= 10 ? "" : "Last Name should be <= 10 characters",
    ],
    telnum: [
      (field) =>
        new RegExp(/^\d+$/).test(field)
          ? ""
          : "Tel. Number should contain only numbers",
    ],
    email: [
      (field) =>
        field.split("").filter((x) => x === "@").length === 1
          ? ""
          : "Email should contain a @",
    ],
  };

  const [formState, setFormState] = useState(initialFormState);

  const [blurState, setBlurState] = useState(initialBlurState);

  const [errorState, setErrorState] = useState(initialErrorState);

  function handleValidate(field, value) {
    if (!blurState[field]) return;

    const error = validationRules[field]
      .map((rule) => rule(value))
      .find((message) => message !== "");
    setErrorState({ ...errorState, [field]: error });
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    handleValidate(name, value);
    setFormState({ ...formState, [name]: value });
  }

  function handleBlurChange(event) {
    const field = event.target.name;
    setBlurState({
      ...blurState,
      [field]: true,
    });
  }

  function handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(formState));
    alert(
      "Current State is: " +
        JSON.stringify(formState) +
        JSON.stringify(errorState)
    );
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      {/*form*/}
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formFirstName">
              <Form.Label column sm={2}>
                First name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  isValid={!errorState.firstname}
                  isInvalid={errorState.firstname}
                  onChange={handleInputChange}
                  onFocus={handleBlurChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errorState.firstname}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formLastName">
              <Form.Label column sm={2}>
                Last name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  isValid={!errorState.lastname}
                  isInvalid={errorState.lastname}
                  onChange={handleInputChange}
                  onFocus={handleBlurChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errorState.lastname}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formLastName">
              <Form.Label column sm={2}>
                Contact Tel.
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="tel"
                  placeholder="Tel. Number"
                  name="telnum"
                  isValid={!errorState.telnum}
                  isInvalid={errorState.telnum}
                  onChange={handleInputChange}
                  onFocus={handleBlurChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errorState.telnum}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  isValid={!errorState.email}
                  isInvalid={errorState.email}
                  onChange={handleInputChange}
                  onFocus={handleBlurChange}
                />
                <Form.Control.Feedback type="invalid">
                  {errorState.email}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formCheckBox">
              <Col md={{ size: 6, offset: 2 }}>
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  label={<strong>May we contact you?</strong>}
                  name="agree"
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={{ size: 2, offset: 1 }}>
                <Form.Select
                  aria-label="Default select example"
                  name="contactType"
                  onChange={handleInputChange}
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formMessage">
              <Form.Label column sm={2}>
                Your Feedback
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={10}
                  name="message"
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
