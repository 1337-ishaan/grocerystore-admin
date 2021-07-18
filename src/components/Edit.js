import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Edit = (props) => {
  const [groceryItems, setGroceryItems] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://178.128.51.49:3010/api/groceryItems/" + props.match.params.id
      )
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

    const { name, description, price, image, quantity } = groceryItems;

    axios
      .put(
        "http://178.128.51.49:3010/api/groceryItems/" + props.match.params.id,
        {
          name,
          description,
          price,
          image,
          quantity,
        }
      )
      .then((response) => {
        console.log(response);
        props.history.push("/show/" + props.match.params.id);
      });
  };

  console.log(groceryItems);

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">EDIT groceryItems</h3>
        </div>
        <div className="panel-body">
          <h4>
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
              <label htmlFor="name">name:</label>
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
              <label htmlFor="description">description:</label>
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
              <label htmlFor="quantity">quantity:</label>
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
              <label htmlFor="price">price:</label>
              <input
                type="text"
                className="form-control"
                name="price"
                defaultValue={groceryItems.price}
                onChange={(e) => onChange(e)}
                placeholder="price"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="published_date">Published Date:</label>
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
              <label htmlFor="publisher">Publisher:</label>
              <input
                type="text"
                className="form-control"
                name="publisher"
                defaultValue={groceryItems.publisher}
                onChange={(e) => onChange(e)}
                placeholder="Publisher"
              />
            </div> */}
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
