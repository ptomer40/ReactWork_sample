import HigherOrder from "./HigherOrder";
function Person2({count,handleCounter}){
    
    return(
        <>
        <h2>
        Counter value={count}
    <button onClick={handleCounter} >Counter</button>
    
    </h2>
        </>
    )


}

export default HigherOrder(Person2);