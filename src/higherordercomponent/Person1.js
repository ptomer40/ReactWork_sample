import { useState } from "react";
import HigherOrder from "./HigherOrder";

function Person1({count,handleCounter}){
{/*
    const [count,setCount]=useState(10);
 
function handleCounter(){
    setCount(count+1);
}

*/}
return(
    <>
    <h2>
        Counter value={count}
    <button onClick={handleCounter} >Counter</button>
    
    </h2>
    </>
)

}

export default HigherOrder(Person1);