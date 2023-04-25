import React, { useState } from 'react'

function IamgeComp() {
    const [number, setNumber] = useState(0)

    const handleAdd =() => {
        setNumber( number + 1)
    }
    const handleSub =() => {
        if (number !== 0) {
            setNumber(number - 1)
        } else {
            setNumber(0)
        }
    }
    
  return (
    <div>
        <button onClick={handleSub} disabled={number === 0}>-</button> {" "}    
           {number} {' '}
        <button onClick={handleAdd} >+</button>
    </div>
  )
}

export default IamgeComp
