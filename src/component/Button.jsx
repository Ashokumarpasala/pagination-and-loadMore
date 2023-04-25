import React from 'react'
import { memo } from 'react'

function Button({handleClick, children}) {
    console.log('Button-render', children)
  return (
      <button onClick={handleClick}>
        {children}
      </button>
  )
}

export default memo(Button)
