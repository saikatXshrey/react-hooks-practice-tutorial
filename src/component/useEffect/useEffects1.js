import React, { useState, useEffect } from 'react'

const UseEffects1 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hello useEffect");
        if (count > 0) {
            document.title = `chats(${count})`;
        } else {
            document.title = `chats`;
        }
    }, [count]);

    console.log("Hello Outside");

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Click😄</button>
        </div>
    )
}

export default UseEffects1;