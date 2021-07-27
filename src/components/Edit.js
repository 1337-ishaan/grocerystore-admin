import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Create.css";
import Navbar from "./Navbar";
import { Form, Button } from "react-bootstrap";

const Edit = (props) => {
  const [groceryItems, setGroceryItems] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3010/api/groceryItems/" + props.match.params.id)
      .then((res) => {
        setGroceryItems(res.data);
        // () => setState()({ groceryItems: res.data });
        console.log(res.data);
      });
  }, []);
  console.log(groceryItems, "groceryItems in show");
  const onChange = (e) => {
    // const state = () => groceryItems
    groceryItems[e.target.name] = e.target.value;
    setGroceryItems(groceryItems);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, description, price, image, quantity, category } =
      groceryItems;
    const file = new FormData();

    file.append("image", image);
    file.append("name", name);
    file.append("quantity", quantity);
    file.append("description", description);
    file.append("price", price);
    file.append("category", category);
    axios
      .put(
        "http://localhost:3010/api/groceryItems/" + props.match.params.id,
        file
      )
      .then((response) => {
        console.log(response);
        props.history.push("/show/" + props.match.params.id);
      });
  };

  console.log(groceryItems);
  const { name, category, description, price, image, quantity } = groceryItems;

  const handleImage = (e) => {
    groceryItems["image"] = e.target.files[0];
    setGroceryItems(groceryItems);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="panel panel-default">
          <div className="my-2 mb-3 panel-body">
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
                  name="file"
                  defaultValue={image}
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
          {/* <h4>
              <Link to={`/show/${groceryItems._id}`}>
                <span
                  className="glyphicon glyphicon-eye-open"
                  aria-hidden="true"
                ></span>{" "}
                groceryItems List
              </Link>
            </h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  defaultValue={groceryItems.name}
                  onChange={(e) => onChange(e)}
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  defaultValue={groceryItems.description}
                  onChange={(e) => onChange(e)}
                  placeholder="description"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="quantity"
                  defaultValue={groceryItems.quantity}
                  onChange={(e) => onChange(e)}
                  placeholder="quantity"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  defaultValue={groceryItems.price}
                  onChange={(e) => onChange(e)}
                  placeholder="price"
                />
              </div> */}
          {/* <div className="form-group">
              // <label htmlFor="published_date">Published Date:</label>
              <input
              type="number"
              className="form-control"
              name="published_year"
              defaultValue={groceryItems.publishedYear}
              onChange={(e) => onChange(e)}
              placeholder="Published Year"
              />
              </div>
              <div className="form-group">
              // <label htmlFor="publisher">Publisher:</label>
              <input
              type="text"
              className="form-control"
              name="publisher"
              defaultValue={groceryItems.publisher}
              onChange={(e) => onChange(e)}
              placeholder="Publisher"
              />
            </div> */}
          {/* <input
                type="submit"
                value="Submit"
                className="d-flex submit_button justify-content-center btn btn-default"
              />
              Submit
              </button>
            </form> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Edit;
