import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../styles/Create.css";
import Navbar from "./Navbar";
import { Form, Button } from "react-bootstrap";
const Create = (props) => {
  const [state, setState] = useState({
    name: "",
    quantity: "",
    description: "",
    image: "image",
    price: "",
    category: "",
  });

  let history = useHistory();

  const onChange = (e) => {
    state[e.target.name] = e.target.value;
    setState(state);
  };

  const handleImage = (e) => {
    state[image] = e.target.files[0];
    setState(state);
    console.log(state, "state is here");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const file = new FormData();

    const { name, category, quantity, description, image, price } = state;
    file.append("image", image);
    file.append("name", name);
    file.append("quantity", quantity);
    file.append("description", description);
    file.append("price", price);
    file.append("category", category);

    console.log(image, "image in onSubmit");
    axios
      .post("http://localhost:3010/api/groceryItems", file)
      .then((response) => {
        history.push("/");
      });
  };

  const { name, category, quantity, description, image, price } = state;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-light text-center mt-5">
              ADD ITEM
            </h3>
          </div>
          <div className="panel-body">
            <Form
              className="text-light w-50 m-auto"
              onSubmit={(e) => onSubmit(e)}
              encType="multipart/form-data"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  defaultValue={name}
                  name="name"
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Eg: Nike shoes, Honey, ..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  defaultValue={price}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Eg: 2000?"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  name="description"
                  defaultValue={description}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Can mention any conditions for the usage ... "
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  name="quantity"
                  defaultValue={quantity}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Is it a pack of 6?"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  defaultValue={category}
                  onChange={(e) => onChange(e)}
                  aria-label="Default select example"
                >
                  <option>Category type?</option>
                  <option value="Instant Food">Instant Food</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Daily Gift">Daily Gift</option>
                  <option value="Home Supplies">Home Supplies</option>
                  <option value="Beverages">Beverages</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Product Image to display</Form.Label>
                <Form.Control
                  name="file"
                  // defaultValue={image}
                  type="file"
                  onChange={(e) => handleImage(e)}
                  placeholder="Image"
                  size="sm"
                />
              </Form.Group>
              <Button
                size="lg"
                onClick={(e) => onSubmit(e)}
                className=" mx-auto my-3 d-flex "
                variant="primary"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
