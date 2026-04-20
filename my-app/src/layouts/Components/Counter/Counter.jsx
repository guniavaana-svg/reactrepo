import { useState } from "react";
import "./Counter.css";

function counter(){
    const [count, setCount]=useState(0);
    const[color,setColor]=useState("green");
    return(
        <>
        <div className="count">
            <p>this is counter</p>
            <a href="https://www.w3schools.com/react/react_usestate.asp">go to hooks link</a>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
        <div className="changeColor">
            <div style={{backgroundColor:color}}>COLOR BOX</div>
            <button onClick={(color=="green")?()=>setColor("red"):()=>setColor("green")}>set color</button>
        </div>
        </>
    )
}
export default counter; 