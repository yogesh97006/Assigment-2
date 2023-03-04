import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Top.css'


function Top() {
  const [Nav,setNav]=useState(false)
  const Navbar=()=>{
        setNav(!Nav)
  }
  return (
    <div className='Navbar'>
      {
        Nav&&(
          <div className='Navbar__Mobile'>
            <div className='d-flex justify-content-between mx-4 py-4'>
           <h2>loopstudios</h2>
           <div onClick={Navbar}>
           <i className="bi bi-x-lg" />
           </div>
             </div>
           <ui className='Nav__ItemsMobile'>
           <li>ABOUT</li>
            <li>CAREERS</li>
            <li>EVENTS</li>
            <li>PRODUCTS</li>
            <li>SUPPORT</li>
           </ui>
          </div>
        )
      }
      <div className='d-flex justify-content-between mx-5 py-5'>
        <h2 className='text-white Top__Heading'>loopstudios</h2>
        <div className='d-flex'>
        <ui className='text-white List__Items'>
            <li className='mx-3'>About</li>
            <li className='mx-3'>Careers</li>
            <li className='mx-3'>Events</li>
            <li className='mx-3'>Products</li>
            <li className='mx-3'>Support</li>
        </ui>
        <div onClick={Navbar}>
    <i className='bi bi-list fs-3 text-white Top__Icon my-2 mx-3' />
    </div>
        </div>
      </div>  
      <h1 className='Paragraph__Top text-center '>IMMERSIVE 
        EXPERIENCES
        THAT   DELIVER
      </h1>
    </div>
  )
}

export default Top