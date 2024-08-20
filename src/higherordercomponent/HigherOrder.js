import { useState } from "react";
function HigherOrder(OriginalComponent){

    function NewComponent(){
    const [count,setCount]=useState(10);
 
function handleCounter(){
    setCount(count+1);
}
return <OriginalComponent handleCounter={handleCounter} count={count} ></OriginalComponent>
}

return NewComponent;

}

export default HigherOrder;