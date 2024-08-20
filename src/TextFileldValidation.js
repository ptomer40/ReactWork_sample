import { useState } from "react";
function TextFieldValidation(){
   const [name,setName]=useState("Ram");
   const[buttonStatus,SetButtonStatus]=useState(true);

   function disp(e){
    if(e.target.value){
        SetButtonStatus(false);
       setName(e.target.value);
    }
    else
    {
        SetButtonStatus(true);
    }
   }

   function sendData(){
    
    setName();

    
    
    }
         

    return(
        <>
        <input type="text" placeholder="enter name" onChange={disp} />
        <button disabled={buttonStatus} onClick={sendData}>Send Data</button>
        
        
        {name}
        
        </>
    )

}



export default TextFieldValidation