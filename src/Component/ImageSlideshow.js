import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlideshow.css' 

import React, {useState, useEffect} from 'react'

function importAll(r) {
    return r.keys().map(r);
  }
  const properties = {showThumbs: false, showStatus: false, autoPlay: true, infiniteLoop: true, stopOnHover: true, showArrows: false};

const ImageSlideshow = () => {
    const filenames = importAll(require.context('../Assets/', false, /\.(jpe?g)$/));
    
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
      <div className='image-carousel'>
          {windowSize? <Carousel 
    {...properties }>
        {filenames.map(file => <img src={file} key={file}/>)}
        
    </Carousel>: <div className='indv-img'>{filenames.map(file => <img src={file} key={file}/>)}</div>}
      </div>
    
  )
}

export default ImageSlideshow