import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(5)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const factorial = useMemo((num) => {fact(num)},[num])

    
  return (
    <div>
        <h1>Factorial: {factorial}</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>increment</button>
    </div>
  )
}

const fact =(num) => {
   const answer = num === 0 ? 1 : num * factorial(num - 1)
     return answer
}
console.log('fact function called')

export default UseMemo
