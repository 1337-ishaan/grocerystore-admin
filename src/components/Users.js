import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { Table, InputGroup } from "react-bootstrap";
import "../styles/Users.css";

const FormData = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    axios.get("http://178.128.51.49:3010/api/form").then((res) => {
      setForm(res.data);
    });
  }, []);

  const changeUserStatus = (e, id, index) => {
    form[index]["active"] = e.target.checked;
    setForm(form);
    axios.put("http://178.128.51.49:3010/api/form/" + id, form[index]);
    console.log(form);
  };

  return (
    <>
      <Navbar />
      {/* <Link to="/dashboard">Back</Link> */}
      <Table striped bordered hover className="w-75 m-auto mt-3" variant="dark">
        {" "}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {form.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.message}</td>
              <td>
                <InputGroup.Checkbox
                  onClick={(e) => changeUserStatus(e, item._id, i)}
                  defaultChecked={item.active}
                  aria-label="Checkbox for following text input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FormData;
