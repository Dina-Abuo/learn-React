import React, { useEffect, useState } from "react";
import styles from "./User.module.css";
export default function User() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //1-execute render before useEffect
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []); //dependency array
  // console.log("render");

  // ******************************************
  //2-
  //render
  //useEffect
  //update the state -> re-render (sac render)
  //useEffect ->watcher-> dependency-> name?update->yes ->do the effect

  // useEffect(() => {
  //   if (name || phone) {
  //     console.log("update");
  //   }
  // }, [name, phone]); //dependency array

  // ******************************************
  // 3-

  useEffect(() => {
    if (name || phone) {
      console.log("update");
    }
  }, [name, phone]); //dependency array

  return (
    <div className={styles.content}>
      <label htmlFor="name">name:</label>
      <input
        id="name"
        type="text"
        placeholder="enter your name "
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <label htmlFor="phone">phone:</label>
      <input
        id="phone"
        type="text"
        placeholder="enter your phone number "
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <p>
        name: {name} <br /> phone: {phone}
      </p>
    </div>
  );
}
