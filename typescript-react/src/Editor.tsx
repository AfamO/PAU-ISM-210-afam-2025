import React, { useState, useEffect } from "react";

const TextWriter = ()=>  {
    const[message,setMessage] = useState('');
return (
        <div>
        <h1>Guys, Welcome to my Text Editor</h1>
        <div>{message}</div>
        <textarea cols={50} rows={30} placeholder="Type your message pls"
        onChange={(e)=> setMessage(e.target.value)}/>
        </div>
 
);
}
export const Timer = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(counter +1)
        },1000)
    });
    return (
        <div>
            <h1>Timer</h1>
            <div>I have just rendered {counter} times</div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}
    
export default TextWriter;

