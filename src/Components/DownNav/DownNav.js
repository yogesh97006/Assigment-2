import React from 'react'
import './DownNav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function DownNav() {
  return (
    <div className='text-white bg-black d-flex justify-content-between p-2 All_Items'>
        <div >
            <h3 className='Bottom__Heading'>loopstudios</h3>
            <ui className='Bottom__Navbar__Items'>
                <li className='mx-3 my-3'>About</li>
                <li className='mx-3 my-3'>Careers</li>
                <li className='mx-3 my-3'>Events</li>
                <li className='mx-3 my-3'>Products</li>
                <li className='mx-3 my-3'>Support</li>
            </ui>
        </div>
        <div >
        <div className='Icons__Bottoms'>
            <i className="bi bi-facebook mx-2" />
            <i className="bi bi-twitter mx-2" />
            <i className="bi bi-pinterest mx-2" />
            <i className="bi bi-instagram mx-2" />
            </div>
            <p className='text-secondary'>©2021 Loopstudios. All rights reserved.
</p>
        </div>
    </div>
  )
}

export default DownNav