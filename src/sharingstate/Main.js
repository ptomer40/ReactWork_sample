import { useState } from "react";
import bshake from './bshake.jpg'


function MyChild({title,children,isActive,onShow}){

  

return(
    <>
    <h1>{title}</h1>
{isActive? 
(<p>{children}</p>):(
    <button onClick={onShow}>Show</button>
)
} 
</>
)}


export default function Main(){
const[activeIndex,setActiveIndex]=useState(0);
return(
    <>
    <h2>BreakFast Food</h2>
    <img src={bshake} height={200} width={200} alt='banana'></img>
    <MyChild title="BananaShake" isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}  >
        <p>
This Banana Milkshake recipe includes sweet bananas and coconut milk for a rich and
 creamy consistency that everyone (especially kids) will love. Plus I add a bit of vanilla and cinnamon for an extra delicious drink that’s perfect for breakfast, as a snack, or even for a healthy dessert. This Banana Shake recipe is also vegan.


        </p>
    </MyChild>
 
 <MyChild title ="MangoShake" isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}>
    <p>

    A sweet and refreshing mango shake is the perfect drink to enjoy when mangos are in their peak of the season. Here I share two equally easy and delicious recipes (with step-by-step instructions and photos + video) for making rich and creamy mango milkshakes – 
    one with dairy and a vegan version made with coconut milk.
    </p>
 </MyChild>
 
    </>
)

}