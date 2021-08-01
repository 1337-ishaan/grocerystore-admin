import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Table,InputGroup } from "react-bootstrap";

const App = () => {
  const [groceryItems, setGroceryItems] = useState([]);


  const changeItemStatus = (e, id, index) => {
    groceryItems[index]["active"] = e.target.checked;
    setGroceryItems(groceryItems);
    axios.put("http://178.128.51.49:3010/api/groceryItems/checked/" + id, groceryItems[index]);
    console.log(groceryItems);
  };
  
  useEffect(() => {
    axios.get("http://178.128.51.49:3010/api/groceryItems").then((res) => {
      setGroceryItems(res.data);
      console.log(res.data);
      console.log(groceryItems);
    });
  }, []);

  return (
    <div class="containe">
      <Navbar />
      <div class="panel panel-default">
        {/* <div class="panel-heading">
          <h3 class="panel-title">GROCERY CATALOG</h3>
        </div>
        <div class="panel-body navbar">
          <h4>
            <Link to="/create">
              <span
                class="glyphicon glyphicon-plus-sign"
                aria-hidden="true"
              ></span>{" "}
              Add Grocery Item
            </Link>
          </h4>
          <h4>
            <Link to="/viewAllOrders">
              <span
                class="glyphicon glyphicon-plus-sign"
                aria-hidden="true"
              ></span>{" "}
              Orders History
            </Link>
          </h4>
          <h4>
            <Link to="/users">
              <span
                class="glyphicon glyphicon-plus-sign"
                aria-hidden="true"
              ></span>
              Users
            </Link>
          </h4> */}
        <Table
          striped
          bordered
          hover
          className="w-75 m-auto mt-3"
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Category</th>
              <th className="text-center w-50">Product Image</th>
              <th>Status</th>
           
            </tr>
          </thead>
          <tbody className="">
            {groceryItems.map((item, i) => (
              <tr>
                <td>{i + 1}</td>

                <td>
                  <Link to={`/show/${item._id}`}>{item.name}</Link>
                </td>

                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className="text-center">
                  <img
                    className="w-25 rounded m-auto"
                    src={`http://178.128.51.49:3010/${item.image}`}
                  />
                </td>
                <td className="">
                <InputGroup.Checkbox
                  onClick={(e) => changeItemStatus(e, item._id, i)}
                  defaultChecked={item.active}
                  aria-label="Checkbox for following text input"
                />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    // </div>
  );
};

export default App;
