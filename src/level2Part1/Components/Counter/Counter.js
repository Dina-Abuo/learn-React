import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  increaseByPayload,
} from "../../store/counterSlice";
import { LogIn, logOut } from "../../store/authSlice";
import "../../App/App.css";
import { useCallback } from "react";
const Counter = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterHandler = useCallback(
    (type, value) => {
      if (value && type === "increaseByPayload") {
        dispatch(increaseByPayload(value));
      } else {
        if (type === "increase") {
          dispatch(increase());
        } else {
          dispatch(decrease());
        }
      }
    },
    [dispatch]
  );

  useEffect(() => {
    counterHandler("increaseByPayload", 20);
  }, [counterHandler]);

  const loginHandler = (state) => {
    console.log(state);
    if (state) {
      dispatch(logOut(10));
    } else {
      dispatch(LogIn());
    }
  };
  return (
    <div className="mt-5 text-center">
      {globalState.auth.isLoggedIn && (
        <div>
          <p className="fw-bold">Counter: {globalState.counter.value}</p>
          <button
            className="btn btn-primary"
            onClick={() => counterHandler("increase")}
          >
            increase
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={() => counterHandler("increaseByPayload", 5)}
          >
            increase by payload
          </button>
          <button
            className="btn  btn-primary "
            onClick={() => counterHandler("decrease")}
          >
            decrease
          </button>
          <br />
        </div>
      )}

      <button
        className="btn btn-secondary mt-3"
        onClick={loginHandler(globalState.auth.isLoggedIn)}
      >
        {globalState.auth.isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};
export default Counter;
