import React from 'react'
import Wish from './Wish'

function List({list, handleEdit, handleDelete}) {
  return (
    <div>
      {
        list.map((name, index) => <Wish name={name} key={index} changeEdit= {handleEdit} handleDelete={handleDelete} index={index} />)
      }
    </div>
  )
}

export default List
