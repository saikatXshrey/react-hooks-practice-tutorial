import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        name: 'Saikat Das', age: 21
    })

    const changeObject = () => {
        setMyObject({ ...myObject, name: 'Shrey' });
    }

    return (
        <div>
            <h1>Name:{myObject.name} & Age:{myObject.age}</h1>
            <button onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject;