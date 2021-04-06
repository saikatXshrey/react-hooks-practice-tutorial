import React, { useState } from 'react'

const UseStateArray = () => {

    const myBioData = [
        { id: 0, myName: 'Saikat', age: 21 },
        { id: 1, myName: 'Sia', age: 21 }
    ]

    console.log(myBioData);

    const [myArray, setmyArray] = useState(myBioData)

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElem = (id) => {
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id !== id;
        })
        setmyArray(myNewArray);
    }

    return (
        <>
            {
                myArray.map((currEle) => {
                    return (
                        <h1 key={currEle.id}>
                            Name:{currEle.myName} &
                            age:{currEle.age}
                            <button onClick={() => removeElem(currEle.id)}>Remove</button>
                        </h1>
                    );
                })
            }
            <button onClick={clearArray}>Click</button>
        </>
    )
}

export default UseStateArray;