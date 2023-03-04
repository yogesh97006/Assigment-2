import React, { useState } from 'react'
import './Middile.css'
import IMG1 from '../../images/desktop/image-interactive.jpg'
import IMG2 from '../../images/mobile/image-interactive.jpg'

function Middle() {
    return (
    <div>
        <div > 
            <div>
                <div className='Desk__Image'>
                <img  src={IMG1} alt='img' />
                </div>
            <div className='Mobile__Image'>
                  <img src={IMG2} alt='img' style={{width:'300px',margin:'50px 35px 30px 20px'}} />
            </div>
            </div>
       <div className='Mid__Info'>
        <h1 style={{fontWeight:'300',}}>THE LEADER IN
            INTERACTIVE VR
        </h1>
        <p className='Mid__Paragraph'>Founded in 2011, Loopstudios has been producing world-class
           virtual reality projects for some of the best companies around the
           globe.Our award-winning creations have transformed
           businesses through digital experiences that bind to their brand.
        </p>
       </div>
        </div>
    </div>
  )
}

export default Middle