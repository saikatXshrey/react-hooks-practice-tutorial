import React, { useState } from 'react'
import UseCount from './useCount';

const UseEffects1 = () => {

    const [count, setCount] = useState(0);

    UseCount(count);

    console.log("Hello Outside");

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Click Test😄</button>
        </div>
    )
}

export default UseEffects1;