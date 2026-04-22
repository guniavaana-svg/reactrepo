import { useState } from "react";
import "./Counter.css";

function counter(){
    const [count, setCount]=useState(0);
    const [color,setColor]=useState("green");
    const [state,setShow]=useState("active");

    function colorHook(){
      if(color=="green"){
        setColor(col=>col="red")
      }else{
        setColor(col=>col="green")
      }
    }
    function show(){
        if(state=="active"){
            setShow(st=>st="pasive")
        }else{
            setShow(st=>st="active")
        }
    }
    return(
        <>
        <div className="count">
            <h3>this is counter</h3>
            <a href="https://www.w3schools.com/react/react_usestate.asp">go to hooks link</a>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
        <div className="changeColor">
            <h3>this is change box color</h3>
            <div style={{backgroundColor:color}}>COLOR BOX</div>
            <button onClick={colorHook}>set color</button>
        </div>
        <div className="modal">
            <h3 onClick={show}>this is modal</h3>
            <p className={`show ${state}`} ><span onClick={show} > hide</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, nisi, doloremque ullam cupiditate quaerat laboriosam aliquam sequi, laborum adipisci fugiat temporibus expedita enim ipsam explicabo iste quibusdam unde incidunt. Corrupti!</p>
        </div>
        </>
    )
}
export default counter; 