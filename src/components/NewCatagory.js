import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewCategoryForm = () => {
  const [state, setState] = useState({
    title: "",
    image: "",
    active: true,
  });
  const history = useHistory();

  const handleImage = (e) => {
    setState((state) => {
      return { ...state, image: e.target.files[0] };
    });
  };
  console.log(state);
  const onSubmit = (e) => {
    e.preventDefault();
    const file = new FormData();

    const { title, active, image } = state;

    file.append("image", image);
    file.append("active", active);
    file.append("title", title);

    console.log(image, "image in onSubmit");
    axios
      .post("http://178.128.51.49:3010/api/category", file)
      .then((response) => {
        history.push("/catagory");
      });
  };

  const { image, active } = state;
  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-light text-center mt-5">
            ADD NEW Category
          </h3>
        </div>
        <div className="panel-body">
          <Form.Group
            className="text-light w-50 m-auto"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) =>
                setState((state) => {
                  return { ...state, title: e.target.value };
                })
              }
              type="text"
              placeholder="Can mention any conditions for the usage ... "
            />
          </Form.Group>
          <Form
            className="text-light w-50 m-auto"
            onSubmit={(e) => onSubmit(e)}
            encType="multipart/form-data"
          >
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                defaultChecked={true}
                type="checkbox"
                label="Active"
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
      </div>
    </div>
  );
};

export default NewCategoryForm;