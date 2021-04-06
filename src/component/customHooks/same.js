import React, { useState } from 'react'
import UseCount from './useCount';

const Same = () => {

    const [count, setCount] = useState(0);

    UseCount(count);

    console.log("Hello Outside");

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Click Same😄</button>
        </div>
    )
}

export default Same;