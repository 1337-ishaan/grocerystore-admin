import React, { useState, useEffect } from "react";
import { Table, InputGroup, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Catagory = () => {
  const [catagoryData, setCatagoryData] = useState([]);
  const [newCatagory, setNewCatagory] = useState({
    image: "",
    active: "",
  });

  const { image, active } = newCatagory;

  const file = new FormData();
  file.append("image", image);
  file.append("active", active);

  useEffect(() => {
    axios
      .get("http://178.128.51.49:3010/api/category")
      .then((res) => setCatagoryData(res.data));
  });

  const changeCatagoryStatus = (e, id, index) => {
    catagoryData[index]["active"] = e.target.checked;
    setCatagoryData(catagoryData);
    axios.put(
      "http://178.128.51.49:3010/api/category/" + id,
      catagoryData[index]
    );
  };

  const deleteImage = (id) => {
    console.log(id);
    axios
      .delete("http://178.128.51.49:3010/api/category/" + id)
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <>
      <Navbar />
      <Table className="w-75 m-auto mt-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Catagory Image</th>
            <th>Title</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {catagoryData?.map((item, i) => (
            <tr>
              <td>
                <img
                  className="w-25 rounded m-auto"
                  src={`http://178.128.51.49:3010/${item.image}`}
                />
              </td>
              <td>{item.title}</td>
              <td>
                {" "}
                <InputGroup.Checkbox
                  onClick={(e) => changeCatagoryStatus(e, item._id, i)}
                  defaultChecked={item.active}
                  aria-label="Checkbox for following text input"
                />
              </td>
              <td>
                <Button
                  size="lg"
                  onClick={() => deleteImage(item._id)}
                  className=" mx-auto my-3 d-flex "
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <Link to="/newcatagory">
          <h2>Add new Catagory </h2>
        </Link>
      </Table>
    </>
  );
};

export default Catagory;
