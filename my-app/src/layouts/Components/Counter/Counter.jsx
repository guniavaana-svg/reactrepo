import { useState } from "react";
import "./Counter.css";
import Modal from "../Modal/Modal.jsx";

function counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [state, setShow] = useState("pasive");

  function colorHook() {
    if (color == "green") {
      setColor((col) => (col = "red"));
    } else {
      setColor((col) => (col = "green"));
    }
  }

  return (
    <>
      <div className="count">
        <h3>this is counter</h3>
        <a href="https://www.w3schools.com/react/react_usestate.asp">
          go to hooks link
        </a>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>count</button>
      </div>
      <div className="changeColor">
        <h3>this is change box color</h3>
        <div style={{ backgroundColor: color }}>COLOR BOX</div>
        <button onClick={colorHook}>set color</button>
      </div>
      <div className="modal">
        <button onClick={() => setShow("active")}>this is modal</button>
        {state == "active" ? <Modal close={setShow} /> : ""}
      </div>
    </>
  );
}
export default counter;
