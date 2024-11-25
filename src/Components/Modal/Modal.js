import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
const BackDrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
      onClick={close}
    ></div>
  );
};
const Overlay = ({ show, children }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
      {children}
    </div>
  );
};

const Modal = ({ children, show, closeModal }) => {
  return (
    show && (
      <Fragment>
        {createPortal(
          <Fragment>
            <BackDrop close={closeModal} show={show} />
            <Overlay show={show} children={children} />
          </Fragment>,
          document.getElementById("modal")
        )}
      </Fragment>
    )
  );
};

export default Modal;
