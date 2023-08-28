import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const ListingPage = () => {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbn, price, coverPicture);
    setName("");
    setIsbn("");
    setPrice("");
    setCoverPicture("");
  };
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN Number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control
            type="file"
            placeholder="Cover Picture"
            onChange={(e) => setCoverPicture(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default ListingPage;
