import React from 'react'

function Count({text, count}) {
    console.log('render', text)
  return (
    <div>
      <h1>{text} :{count}</h1>
    </div>
  )
}

export default React.memo(Count)
