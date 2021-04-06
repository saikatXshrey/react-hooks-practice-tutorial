import React, { useEffect } from 'react'

const UseCount = (count) => {

    useEffect(() => {
        console.log("Hello useEffect");
        if (count > 0) {
            document.title = `chats(${count})`;
        } else {
            document.title = `chats`;
        }
    }, [count]);
}

export default UseCount;