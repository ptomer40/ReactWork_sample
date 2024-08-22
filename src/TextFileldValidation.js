import { useState } from "react";
function TextFieldValidation(){
   const [name,setName]=useState("");
   const[buttonStatus,SetButtonStatus]=useState(true);
const[msgstatus,setMsgStatus]=useState('typing');

    async function disp(e){
    if(e.target.value){
        SetButtonStatus(false);
       await setName(e.target.value);
       
    }
    else
    {
        SetButtonStatus(true);
    }
   }
   async function sendData(){
    await alert("hi,"+name);
    setName("");   
    
    
 }
       

    return(
        <>
        <input type="text" value={name} placeholder="enter name" onChange={disp} />
        <button disabled={buttonStatus} onClick={sendData}>Send Data</button>
        
        
        {name}
        
        </>
    )

}



export default TextFieldValidation