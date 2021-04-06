import React, { useState } from 'react'

const ShortCirEval = () => {

    const [demo, setDemo] = useState("")

    return (
        <div>
            {
                demo ||
                <>
                    <h1>Mast</h1>
                    <p>Do anything u want to</p>
                </>
            }
        </div>
    )
}

export default ShortCirEval;
