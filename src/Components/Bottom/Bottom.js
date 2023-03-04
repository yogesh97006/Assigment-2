import React from "react";
import './Bottom.css'
import Img1 from '../../images/desktop/image-deep-earth.jpg'
import Img2 from '../../images/desktop/image-night-arcade.jpg'
import Img3 from '../../images/desktop/image-soccer-team.jpg'
import Img4 from '../../images/desktop/image-grid.jpg'
import Img5 from '../../images/desktop/image-from-above.jpg'
import Img6 from '../../images/desktop/image-pocket-borealis.jpg'
import Img7 from '../../images/desktop/image-curiosity.jpg'
import Img8 from '../../images/desktop/image-fisheye.jpg'
import ImgM1 from '../../images/mobile/image-deep-earth.jpg'
import ImgM2 from '../../images/mobile/image-night-arcade.jpg'
import ImgM3 from '../../images/mobile/image-soccer-team.jpg'
import ImgM4 from '../../images/mobile/image-grid.jpg'
import ImgM5 from '../../images/mobile/image-from-above.jpg'
import ImgM6 from '../../images/mobile/image-pocket-borealis.jpg'
import ImgM7 from '../../images/mobile/image-curiosity.jpg'
import ImgM8 from '../../images/mobile/image-fisheye.jpg'



function Bottom() {
  return (
    <div>
      <div className="d-flex justify-content-between mx-3">
        <h1>OUR CREATIONS</h1>
        <div className="Bot__Button1"> <button className="p-2 my-2" >SEE ALL</button></div>
      </div>
      <div>
        <div className="Set__Image">
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img1} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM1} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>DEEP
             EARTH</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img2} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM2} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>NIGHT
             ARCADE</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img3} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM3} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>SOCCER 
            TEAM VR</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img4} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM4} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>THE
             GRID</h3>
          </div>
        </div>
        <div className="Set__Image">
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img5} alt='img' /></div><div className='Image__Change ' style={{margin:'10px'}}>
            <img   src={ImgM5} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>FROM UP
             ABOVE VR</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img6} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM6} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>POCKET
             BOREALIS</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img7} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM7} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>THE 
            CURIOSITY</h3>
          </div>
          <div className="Images__Styles">
            <div className="Image__Desk">
            <img   src={Img8} alt='img' /></div><div className='Image__Change '>
            <img   src={ImgM8} alt='img' style={{width:'320px'}} />
            </div>
            <h3 className='Image__Info '>MAKE 
            IT FISHEYE</h3>
          </div>
        </div>
        <div className="Bot__Button2"> <button >SEE ALL</button></div>
      </div>
    </div>
  );
}

export default Bottom;
