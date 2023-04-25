import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Pagination() {
    const [post, setPost] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7
    const totalPages = Math.ceil(post.length / itemsPerPage)
    const [displayItem, setDisplayItem] = useState(8)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + displayItem

    const items = post.slice(startIndex, endIndex)
    const pageNum = []
    for (let i = 1; i <= totalPages; i++) {
        pageNum.push(i)
    }

    const handleClick = (num) => {
        setCurrentPage(num)
    }

    const handleDispalyItems = () => {
        setDisplayItem(displayItem + 5)
    }

    useEffect(() => {
        const fetchData = async () =>{
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           setPost(response.data)
        }
        fetchData()
    },[])
  return (
        <div className='m-5'>
            <h1 className='text-primary mt-5'>My Blogs</h1>
            <ul className='list-group'>
            {
                items.map((list) =>{
                    return (
                        <li key={list.id} className='list-group-item'>{list.title}</li>
                        
                    )
                    })
                }
            </ul>
            {/* /.......................pagination......................... */}
                 <ul className='pagination mt-2'>
                    {
                        pageNum.map((num) => {
                            return  <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}><a className='page-link' href="#" onClick={()=> handleClick(num)}>{num}</a></li>
                        })
                    }
                 </ul>
                 {/* _________________.Load more_____________________ */}
                <button className='btn btn-primary mt-2' onClick={handleDispalyItems}>Load More</button>
        </div>
  )
}

export default Pagination
