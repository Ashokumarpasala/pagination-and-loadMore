import React from 'react'
import { useState } from 'react'
import Count from './Count'
import Button from './Button'
import { useCallback } from 'react'

function UseCallBack() {
    const [age, setAge] = useState(25)
    const [salary, setsalary] = useState(25000)

    const handleIncAge = useCallback(() => {
        setAge(age + 1)
        }, [age]) 

    const handleIncSalary = useCallback(() => {
        setsalary(salary + 10000)
    },[salary])    
  return (
    <div>
     <Count text='Age' count={age} />
     <Button handleClick={handleIncAge} >increment age</Button>
     <Count text='Salary' count={salary}/>
     <Button handleClick = {handleIncSalary}>increment salary</Button>
    </div>
  )
}

export default UseCallBack
