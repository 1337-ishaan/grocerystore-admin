import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Create = (props) => {
  const [state, setState] = useState({
    name: "",
    quantity: "",
    description: "",
    image: "",
    price: "",
  });

  let history = useHistory();

  const onChange = (e) => {
    state[e.target.name] = e.target.value;
    setState(state);
    console.log(state, "state is here");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, quantity, description, image, price } = state;

    axios
      .post("http://178.128.51.49:3010/api/groceryItems", {
        name,
        quantity,
        description,
        image,
        price,
      })
      .then((response) => {
        console.log(response);
        history.push("/");
      });
  };

  const { name, quantity, description, image, price } = state;
  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">ADD BOOK</h3>
        </div>
        <div className="panel-body">
          <h4>
            <Link to="/">
              <span
                className="glyphicon glyphicon-th-list"
                aria-hidden="true"
              ></span>{" "}
              Grocery List
            </Link>
          </h4>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="isbn">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={name}
                onChange={(e) => onChange(e)}
                placeholder="Name"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue={title}
                onChange={(e) => onChange(e)}
                placeholder="Title"
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                className="form-control"
                name="price"
                defaultValue={price}
                onChange={(e) => onChange(e)}
                placeholder="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                name="description"
                onChange={(e) => onChange(e)}
                placeholder="Description"
                cols="80"
                rows="3"
              >
                {description}
              </textarea>
            </div>
            {/* <div className="form-group">
              <label htmlFor="published_date">Published Date:</label>
              <input
                type="number"
                className="form-control"
                name="publishedYear"
                defaultValue={publishedYear}
                onChange={(e) => onChange(e)}
                placeholder="Published Year"
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="text"
                className="form-control"
                name="quantity"
                defaultValue={quantity}
                onChange={(e) => onChange(e)}
                placeholder="quantity"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
