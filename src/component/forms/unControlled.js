import React, { useRef, useState } from 'react'

const UnControlled = () => {

    const luckyName = useRef(null);

    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("Please enter your lucky name") : setShow(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">enter your lucky name</label>
                    <input type="text" id="luckyName" ref={luckyName} />
                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
        </div>
    )
}

export default UnControlled;