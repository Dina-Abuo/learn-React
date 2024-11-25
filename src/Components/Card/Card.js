import React from "react";
import styles from "./Card.module.css";
const Card = ({ id, name, phone, age, type, deleteFunc }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: type === "male" ? "green" : "pink" }}
    >
      <p>name: {name}</p>
      <p>phone: {phone}</p>
      <p>age: {age}</p>
      <p>type: {type}</p>
      <div
        className={styles.deleteButton}
        onClick={() => {
          deleteFunc(id);
        }}
      >
        <p> x</p>
      </div>
    </div>
  );
};

export default Card;
