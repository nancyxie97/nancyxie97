import './FooterStyles.css'
import {FaBars, FaTimes,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import React, {useState, useEffect} from 'react'
import {GrInstagram} from 'react-icons/gr'
import {MdOutlineEmail} from 'react-icons/md'




const Footer = () => {
    const [windowSize,  setWindowSize] = useState(true);
const changeWindowSize = () =>
    {if(window.innerWidth < 1040){
        setWindowSize(false);
    }else{
        setWindowSize(true);
    }
   
    
    // if(window.scrollY >= 100){
    //     setWindowSize(true);
    // }else{
    //     setWindowSize(false);
    // }

}
useEffect(() => {
    changeWindowSize();
  },[]);
const iconSize = 55;
window.addEventListener('resize', changeWindowSize);
  return (
    <div className='footer'>
        {windowSize? '' :<div className='icon-links'>
        <a href='https://www.instagram.com/madebynanxy/'><GrInstagram className='icon' size={iconSize} style={{color: '#fff'}}/></a>
        <a href='https://www.linkedin.com/in/nancy-xie/'><FaLinkedinIn className='icon' size={iconSize} style={{color: '#fff'}}/></a>
        <a href='https://github.com/nancyxie97'><FaGithub className='icon' size={iconSize} style={{color: '#fff'}}/></a>
        <a href='mailto:nancyxie97@gmail.com'> <MdOutlineEmail className='icon' size={iconSize} style={{color: '#fff'}}/></a>
        </div>}
    </div>
  )
}

export default Footer