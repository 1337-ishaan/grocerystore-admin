import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Form, Button } from "react-bootstrap";

const Show = (props) => {
  const [groceryItems, setGroceryItems] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3010/api/groceryItems/" + props.match.params.id)
      .then((res) => {
        setGroceryItems(res.data);
        console.log(groceryItems);
      });
  }, []);

  console.log(groceryItems, "groceryItems in show");

  const deleteItem = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3010/api/groceryItems/" + id)
      .then((result) => {
        props.history.push("/");
      });
  };

  const { price, name, description, category, image, quantity } = groceryItems;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            {/* <h3 className="panel-title">{groceryItems.title}</h3> */}
          </div>
          <div className="mt-2 panel-body">
            <Form
              className="text-light w-50 m-auto"
              encType="multipart/form-data"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={name}
                  name="name"
                  // onChange={(e) => onChange(e)}
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
                  disabled
                  name="price"
                  defaultValue={price}
                  // onChange={(e) => onChange(e)}
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
                  disabled
                  name="description"
                  defaultValue={description}
                  // onChange={(e) => onChange(e)}
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
                  disabled
                  name="quantity"
                  defaultValue={quantity}
                  // onChange={(e) => onChange(e)}
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
                  disabled
                  defaultValue={category}
                  // onChange={(e) => onChange(e)}
                  aria-label="Default select example"
                >
                  <option>{category}</option>
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
                  disabled
                  name="file"
                  // defaultValue={image}
                  type="file"
                  // onChange={(e) => handleImage(e)}
                  placeholder="Image"
                  size="sm"
                />
              </Form.Group>
              <div className="d-flex">
                <Button
                  size="lg"
                  // onClick={(e) => onSubmit(e)}
                  className=" mx-auto my-3 d-flex "
                  variant="warning"
                >
                  <Link className="text-dark" to={`/edit/${groceryItems._id}`}>
                    Edit
                  </Link>
                </Button>
                <Button
                  size="lg"
                  onClick={() => deleteItem(groceryItems._id)}
                  className=" mx-auto my-3 d-flex "
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </Form>
            {/* <div className="d-flex ">
            <Link to={`/edit/${groceryItems._id}`} className="btn btn-success">
              Edit
            </Link>
            &nbsp;
            <button
              onClick={() => deleteItem(groceryItems._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
