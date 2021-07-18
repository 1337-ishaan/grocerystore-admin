import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Show = (props) => {
  const [groceryItems, setGroceryItems] = useState({});

  useEffect(() => {
    axios.get("http://178.128.51.49:3010/api/groceryItems/" + props.match.params.id).then((res) => {
      setGroceryItems(res.data);
      console.log(groceryItems);
    })
  }, [groceryItems, props.match.params.id]);

console.log(groceryItems, "groceryItems in show")

const deleteItem = (id) => {
    console.log(id);
    axios.delete("http://178.128.51.49:3010/api/groceryItems/" + id).then((result) => {
      props.history.push("/");
    });
  };

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{groceryItems.title}</h3>
        </div>
        <div className="panel-body">
          <h4>
            <Link to="/">
              <span
                className="glyphicon glyphicon-th-list"
                aria-hidden="true"
              ></span>{" "}
              groceryItems List
            </Link>
          </h4>
          <dl>
            <dt>Name: </dt>
            <dd>{groceryItems.name}</dd>
            <dt>Price:</dt>
            <dd>{groceryItems.price}</dd>
            <dt>Description:</dt>
            <dd>{groceryItems.description}</dd>
            <dt>Price:</dt>
            <dd>{groceryItems.price}</dd>
            {/* <dt>Publisher:</dt>
            <dd>{groceryItems.publisher}</dd> */}
          </dl>
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
        </div>
      </div>
    </div>
  );
};

export default Show;
