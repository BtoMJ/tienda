import React, {useState} from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './Scroll.css'

function Scroll() {

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false);
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <div>
    <button id='top' className='goToTop' style={{display: visible ? 'inline' : 'none'}}>
        <ArrowUpwardIcon onClick={scrollToTop} />
    </button>

    </div>
  )
}

export default Scroll;


  