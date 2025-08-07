import { useState, useEffect } from "react";

const Timer = () => {
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
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
}
export default Timer;