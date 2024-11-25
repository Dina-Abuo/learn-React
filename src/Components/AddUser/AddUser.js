import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
const AddUser = ({ addNewUserHandler, closeModal }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewUserHandler({
      id: Math.round(Math.random() * 100),
      ...input,
      type: "male",
    });
    setInput({
      name: "",
      age: "",
      phone: "",
    });
    closeModal();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          placeholder="Enter Age"
          value={input.age}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter Phone"
          value={input.phone}
          onChange={inputHandler}
        />
      </Form.Controller>
      <div style={{ marginTop: "10px" }}>
        <Button type="submit" style={{ marginRight: "30px" }}>
          Save
        </Button>
        <Button type="rest" style={{ backgroundColor: "gray" }}>
          Rest
        </Button>
      </div>
    </Form>
  );
};

export default AddUser;
