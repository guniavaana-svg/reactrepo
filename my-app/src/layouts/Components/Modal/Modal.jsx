import { useState } from "react";
import "./Modal.css";
function modal({ close }) {
  return (
    <p className="show">
      <span onClick={close}> hide</span> Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Modi, nisi, doloremque ullam cupiditate quaerat
      laboriosam aliquam sequi, laborum adipisci fugiat temporibus expedita enim
      ipsam explicabo iste quibusdam unde incidunt. Corrupti!
    </p>
  );
}
export default modal;
