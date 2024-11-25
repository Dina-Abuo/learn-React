import React, { Fragment, useState } from "react";
import CardList from "../Components/CardList/CardList";
import FilterInput from "../Components/FilterInput/FilterInput";
import Modal from "../Components/Modal/Modal";
import Button from "../Components/Layout/Button";
import AddUser from "../Components/AddUser/AddUser";
import "./App.css";
function App() {
  const [cardToggle, setCardToggle] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [state, setState] = useState([
    { id: "1", name: "dina", phone: "01062662147", age: 22, type: "female" },
    { id: "7", name: "Tah", phone: "01074662147", age: 23, type: "male" },
    { id: "2", name: "aya", phone: "01062862147", age: 22, type: "female" },
    { id: "5", name: "Mahmoud", phone: "01062662147", age: 22, type: "male" },
    { id: "4", name: "Hadeel", phone: "01062662547", age: 23, type: "female" },
    { id: "6", name: "Ahmed", phone: "01062689147", age: 22, type: "male" },
    { id: "3", name: "mai", phone: "01062623647", age: 32, type: "female" },
    { id: "8", name: "mohamed", phone: "01062668947", age: 26, type: "male" },
  ]);

  const deleteHandle = (id) => {
    setState((prevState) => {
      return prevState.filter((e) => e.id !== id);
    });
  };
  const filterName = (name) => {
    setFilter(name);
  };

  const nameHandel = () => {
    if (filter.length !== 0) {
      return state.filter((e) => e.name.includes(filter));
    }
    return state;
  };

  const addNewUserHandler = (data) => {
    setState((prevState) => [...prevState, data]);
  };

  return (
    <Fragment>
      <div className="mainContainer">
        <h1> List of Data</h1>
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => setCardToggle(!cardToggle)}
            style={{ marginRight: "20px" }}
          >
            {cardToggle ? "Hide Names" : "Show Names"}
          </Button>
          <Button onClick={() => setShowModal(true)}>New Record</Button>
        </div>
        <div className={cardToggle ? "show" : "hide"}>
          <FilterInput filtration={filterName} />
          <CardList nameList={nameHandel()} deleteFunc={deleteHandle} />
        </div>
      </div>
      <Modal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        <AddUser
          addNewUserHandler={addNewUserHandler}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      </Modal>
    </Fragment>
  );
}

export default App;
