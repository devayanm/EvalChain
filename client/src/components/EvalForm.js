import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EvalForm({ onSubmit }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setData((prevData) => ({ ...prevData, document: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group controlId="description" className="mt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </Form.Group>

      <Form.Group controlId="document" className="mt-3">
        <Form.Label>Document</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default EvalForm;
