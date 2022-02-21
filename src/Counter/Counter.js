import React, { useState } from "react";

function Counter()
{
    const [counter,setCounter]=useState(0);
    const [counterValue,setCounterValue]=useState(1);
    function clickHandler()
    {
        setCounter(counter+counterValue)
    }
    function clickHandler2()
    {
        setCounter(counter-counterValue)
    }
    return(
        <React.Fragment>
        <h1 data-testid="heading">My Counter</h1>
        <h1 data-testid="counter">{counter}</h1>
        <button onClick={clickHandler} data-testid="increment">+</button>
        <input data-testid="input" type="number" value={counterValue} onChange={(e)=>{setCounterValue(parseInt(e.target.value))}}></input>
        <button onClick={clickHandler2} data-testid="decrement">-</button>
        </React.Fragment>
    )
}
export default Counter;