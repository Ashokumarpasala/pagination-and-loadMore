// import React, { useState } from 'react'
// import List from './component/List'
// import IamgeComp from './component/IamgeComp'
// import Wish from './component/Wish'

// import { createContext } from "react"
import Pagination from "./component/Pagination"
// import UseContext from "./component/UseContext"

// import UseMemo from "./component/UseMemo"
// import UseCallBack from "./component/UseCallBack"
// import UseRef from "./component/UseRef'
// import PictureComp from "./component/PictureComp"
// import Table from "./component/Table"

// export const userContext = createContext()
// export const chanelContext = createContext()

function App() {
  // const [list, setList] = useState(['sai'])
  // const [currentId, setCurrentId] = useState(-1)

  // const [name, setName] = useState('')
  // const [search, setSearch] = useState('')
  
   
  // const handleChange =(e) => {
  //   setName(e.target.value) 
  // }
   
  
  // const handleAdd =() => {
   
  //   if(currentId > -1){
  //     setList(list.map((person, i)=> i == currentId ? name : person))
  //   }else {
  //     setList([...list, name]) 
  //   }

  //   setCurrentId(-1)
  //   setName('')
  // }

  // const handleEdit = (e) =>{
  //   setCurrentId(e.target.id)
  //   setName(e.target.name)   
  // }

  // const handleDelete = (e) => {
  //   setList(list.filter((str, i) =>i != e.target.id ))
    
  // }

  // const handleSearch = (e) => {
  //   setSearch(e.target.value)
  // }

  // const finalList = list.filter(li => li.includes(search))


  return (
    <center>
      <Pagination />
      {/* <userContext.Provider value={'Ashok'}>
         <UseContext />
      </userContext.Provider> */}
      {/* <Table /> */}
      {/* <UseRef /> */}
      {/* <UseCallBack /> */}
      {/* <UseMemo /> */}
      {/* <PictureComp /> */}
      {/* <input type="text" value={name} onChange={handleChange} placeholder='tpe your name'/>
      <button onClick={handleAdd}>Add-Name</button>
      <div>
      <input type='text' onChange={handleSearch} placeholder='search name'/>
      </div>
      <List list={finalList} handleEdit={handleEdit} handleDelete={handleDelete}/>
      <hr />
       {/* <Wish  />
       <Wish name='suri'/> */}
       {/* <Wish name='Ashok'/> */}
       {/* <IamgeComp /> */} 
    </center>
  )
}

export default App
