import { useState } from "react";
export default function MovingCursor(){
    const [initialPosition, setPosition]=useState({x:0,y:0})

    return(
        <>
        <h2>Moving Cursor</h2>
        <h3>x={initialPosition.x}, y={initialPosition.y}</h3>
        
        <div onPointerMove={e=>
            {
            setPosition({
                x:e.clientX, // understand  
                y:e.clientY
            });


            }}
            
            style={{position:'relative',
                    width:'100vw',// check vw and vh
                    height:'10vh'
            }}
            >
        <div style={{
        position:'absolute',
        backgroundColor:'red',
        borderRadius:'50%',
        width:30,
        height:30,
        transform:`translate(${initialPosition.x}px, ${initialPosition.y}px)`,
        left:-10,
        top:-10

        }} />
        </div>
        
        
        
        </>
    )

}