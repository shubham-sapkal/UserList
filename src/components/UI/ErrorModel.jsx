import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModel.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModelOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2> {props.title} </h2>
      </header>

      <div className={styles.content}>
        <p> {props.message} </p>
      </div>

      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Ohkay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
   
    <div>
      { ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}

      { ReactDOM.createPortal(
        <ModelOverlay   
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm} />,
            document.getElementById('overlay-root')
        )}
    </div>

  );
};

export default ErrorModel;
