import React, { useState, useEffect } from "react";
import { Table, InputGroup, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [newBanner, setNewBanner] = useState({
    image: "",
    active: "",
  });

  const { image, active } = newBanner;

  const file = new FormData();
  file.append("image", image);
  file.append("active", active);

  useEffect(() => {
    axios.get("API").then((res) => setBannerData(res.data.result));
  });

  const changeBannerStatus = (e, id, index) => {
    bannerData[index]["active"] = e.target.checked;
    setBannerData(bannerData);
    axios.put("API" + id, bannerData[index]);
    console.log(bannerData);
  };

  const addImage = (e, id, index) => {
    axios.post("API", newBanner);
  };

  const deleteImage = (id) => {
    console.log(id);
    axios.delete("API" + id).then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <Navbar />
      <Table className="w-75 m-auto mt-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Banner Image</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bannerData.map((item, i) => (
            <tr>
              <td>
                <img src="CHANGE" />
              </td>
              <td>
                {" "}
                <InputGroup.Checkbox
                  onClick={(e) => changeBannerStatus(e, item._id, i)}
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
        <Link to="/newbanner">
          <h2>Add new banner image</h2>
        </Link>
      </Table>
    </>
  );
};

export default Banner;
