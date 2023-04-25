import React, { useState } from 'react'

function PictureComp() {
    const [num, setNum] = useState(0)
    const images = [
        'https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=480&h=320',
        'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg',
        'https://thumbs.dreamstime.com/b/baby-rabbit-eating-grass-outdoor-sunny-summer-day-easter-bunny-garden-home-pet-kid-cute-pets-animals-family-131767995.jpg'
       ]

       const handlePrev = () => {
          num === 0 ? setNum(images.length -1) :
          setNum(num - 1)
       }
       const handleNext = () => {
        images.length -1 === num ? setNum(0) :  setNum(num + 1)      
     }

     const handleSlide =() => {
        setInterval(() => {
            setNum((prevCouunt) => prevCouunt === images.length-1? 0:prevCouunt + 1 )
        }, 1000);
     }
  return (
    <div>
        {/* {
            num !== 0 && <button onClick={handlePrev}>previous</button> 
            
        } */}
        <img  className='size' src={images[num]} alt="" /> 
        
        <button onClick={handlePrev}>previous</button> 
        <button onClick={handleSlide}>start</button>
        {'   '}
      {/* {
        num !== images.length -1 && <button onClick={handleNext}>Next</button>
      } */}
      
        <button onClick={handleNext}>Next</button> 
      
      

    </div>
  )
}

export default PictureComp
