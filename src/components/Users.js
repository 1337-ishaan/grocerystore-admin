import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';
import { Table } from "react-bootstrap";

const FormData = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    axios.get("http://178.128.51.49:3010/api/form").then((res) => {
      setForm(res.data);
    });
  }, []);



  return (
    <>
    <Navbar />
      {/* <Link to="/dashboard">Back</Link> */}
      <Table
          striped
          bordered
          hover
          className="w-75 m-auto mt-3"
          variant="dark"
        >    <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {form.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FormData;
