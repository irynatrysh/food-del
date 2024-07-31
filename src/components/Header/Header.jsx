import React from 'react'
import './Header.css'


const Header = () => {
  const handleButtonClick = () => {
    const element = document.getElementById('explore-menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className='header'>
      <div className="header-contents">
      <h2>Open your <br /> favorite food here</h2>
      <p>Choose from a divers menu featurng a delectable array og dishes crafted with the finest ingridients and culiary expertise. Our mission is to satisfy your gravings and elevate your dining exipirience, one delicious meal at a time.</p>
      <button onClick={handleButtonClick}>View Menu</button>
    </div>
  </div>  
  )
}

export default Header
