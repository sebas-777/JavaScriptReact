import { useState } from "react";

export const CounterApp =({value})=>{
     

    const [counter,setCounter] = useState(value);
    const counterIncrement =()=>{
        setCounter(counter+1);
        console.log('click' + counter);
    } 

    const counterDecrement=()=>{
        setCounter(counter -1);
        console.log('click' + counter);
    }
    
    return (
        <> 
        <h1>El valor del contador es:{ counter} </h1>
        <button onClick={()=>{
            counterIncrement();
        }}>
            Click + 
        </button>
        <button style={{margin:'10px'}} onClick={()=>{
            counterDecrement()
        }}>
            Click - 
        </button>
        </>
    )
   
}