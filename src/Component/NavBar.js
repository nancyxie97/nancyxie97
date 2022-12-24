import './NavBarStyles.css' 

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {MdOutlineEmail} from 'react-icons/md'

const NavBars = () => {
    const [click,setClick] = useState(true);
    const handleClick = () => setClick(!click);

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
    
    window.addEventListener('resize', changeWindowSize);
  return (
    <div className='header'>
        <div className='title-line'>
        
        <div  className='name-plate'>
            <Link to='/nancyxie97'>
                <h1>nancy xie.</h1>
            </Link>
            {windowSize ? <p>front-end ui engineer</p> : ''}
        </div>
        <div className='hamburger' onClick= {handleClick}>
            {click?  (<FaBars size={15} style={{color: '#fff'}}/>):  (<FaTimes size={15} style={{color: '#fff'}}/>)}
        </div>
        </div>
        
        <div className={click ? 'nav-menu': 'nav-menu active'}>
        <ul >
            <li>
                <Link to='/about'>about</Link>
            </li>
            <li>
                <Link to='/project'>work</Link>
            </li>

            {windowSize ?<li>
                <Link to='/sandbox'>sandbox</Link>
            </li> : ''}
            
        </ul>
        {windowSize ?<div className='icon-links'>
        <a href='https://www.instagram.com/madebynanxy/'><GrInstagram className='icon' size={50} style={{color: '#fff'}}/></a>
        <a href='https://www.linkedin.com/in/nancy-xie/'><FaLinkedinIn className='icon' size={50} style={{color: '#fff'}}/></a>
        <a href='https://github.com/nancyxie97'><FaGithub className='icon' size={50} style={{color: '#fff'}}/></a>
        <a href='mailto:nancyxie97@gmail.com'> <MdOutlineEmail className='icon' size={50} style={{color: '#fff'}}/></a>
        </div>:''}
        </div>
        
        
    </div>
  )
}

export default NavBars