import React from "react";
import Card from "../Card/Card";
const CardList = ({ nameList, deleteFunc }) => {
  const card = nameList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc} />
  ));
  return <div>{card}</div>;
};
export default CardList;
