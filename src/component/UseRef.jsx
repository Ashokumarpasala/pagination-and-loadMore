import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

function UseRef() {
const [timer, setTimer] = useState(0)
const refTime = useRef()

useEffect(() => {
  refTime.current = setInterval(() => {
    setTimer(prevTime => (prevTime + 1))
  }, 1000)
  return () => {
    clearInterval(refTime.current)
  }
}, [])
 

  return (
     <div >
      <h1>StopWatch : {timer}</h1>

       <button onClick={() => clearInterval(refTime.current)}>Stop Timer</button>
     </div>
  )
}

export default UseRef
