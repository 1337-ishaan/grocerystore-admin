import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { Table } from "react-bootstrap";

const ViewAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState([]);

  useEffect(() => {
    axios.get("http://178.128.51.49:3010/api/orders").then((res) => {
      console.log(res.data.orders);
      setOrders(res.data.orders);
    });
    axios.get("http://178.128.51.49:3010/api/groceryItems").then((res) => {
      setProducts(res.data);
    });
  }, [setOrders, setProducts]);

  useEffect(() => {
    setRender(
      orders.map((obj) => {
        return {
          product: products.find(obj.product).name,
          quantity: obj.quantity,
          timestamp: obj.createdAt,
          price: products.find(obj.product).price,
        };
      })
    );
  }, [setRender, orders, products]);

  return (
    <>
      <Navbar />
      {/* <Link to="/dashboard">Back</Link>*/}
      <Table striped bordered hover className="w-75 m-auto mt-3" variant="dark">
        <thead>
          <tr>
            <th>Order Name</th>
            <th>Order Date</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {render?.map((item) => (
            <tr>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.timestamp}</td>
              <td>&#8377;{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViewAllOrders;
