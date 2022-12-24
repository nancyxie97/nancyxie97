import './HeroImgStyles.css'
import IntroImg  from '../Assets/image1.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className= 'hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
            
        </div>
        <div className='content'>
                <p>IM A FREELANCEr</p>
                <h1>React Developer</h1>
                <div>
                    <Link to='/Project' className='btn'>Projects</Link>
                    <Link to='/Contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
    </div>
  )
}

export default HeroImg