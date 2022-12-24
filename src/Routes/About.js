import React from 'react'

import memoji from '../Assets/memoji.png'

const About = () => {
  return (
    
    <div className='about-page'>
      <div className='about-header'>
        <div className='image-wrapper'>
        <img className='about-memoji' src={memoji}/>
        </div>
        
        <h1>about</h1>
      </div>
      
      <div className="paragraph-section">
        
      <p>hey there! my name is nancy xie and i am a nyc based fullstacks developer! i predominately focus on UI devlopment using React. <br/>in my free time, outside of coding, i enjoy film photgraphy and running!</p>
      <p>go ahead and explore around! <br/><br/>if you need to reach my my socials are in the sidebar to the 👈 </p>
      </div>
    </div>
  )
}

export default About