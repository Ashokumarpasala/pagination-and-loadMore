import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

function CompC() {
    const user = useContext(userContext)
  return (
    <div>
      Final component - {user}
    </div>
  )
}

export default CompC
