import React, { useState } from "react";
const FilterInput = ({ filtration }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    console.log(name);
    filtration(name);
  };
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={filterHandler}
        style={{ padding: "5px" }}
      />
    </div>
  );
};

export default FilterInput;
