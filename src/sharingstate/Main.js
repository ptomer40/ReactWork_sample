import { useState } from "react";
import bshake from './bshake.jpg'


function MyChild({title,children}){
const [enable,setEnable]=useState(false);

return(
    <>
    <h1>{title}</h1>
{enable? 
(<p>{children}</p>):(
    <button onClick={()=>setEnable(true)}>Show</button>
)
} 
</>
)}


export default function Main(){

return(
    <>
    <h2>BreakFast Food</h2>
    <img src={bshake} height={200} width={200} alt='banana'></img>
    <MyChild title="BananaShake">
        <p>
This Banana Milkshake recipe includes sweet bananas and coconut milk for a rich and
 creamy consistency that everyone (especially kids) will love. Plus I add a bit of vanilla and cinnamon for an extra delicious drink that’s perfect for breakfast, as a snack, or even for a healthy dessert. This Banana Shake recipe is also vegan.


        </p>
    </MyChild>
 
 <MyChild title ="MangoShake">
    <p>

    A sweet and refreshing mango shake is the perfect drink to enjoy when mangos are in their peak of the season. Here I share two equally easy and delicious recipes (with step-by-step instructions and photos + video) for making rich and creamy mango milkshakes – 
    one with dairy and a vegan version made with coconut milk.
    </p>
 </MyChild>
 
    </>
)

}