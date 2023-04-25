
function Wish({name, handleDelete, changeEdit, index}) {


  return (
    <div>
        <h1>{index} : Hello {name||"friend"}</h1> 
        <button name={name} id={index} onClick={changeEdit}>Edit</button>
        <button id={index} onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Wish
