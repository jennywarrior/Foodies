import React from 'react'
import './NavBar.css';
import "@fontsource/jetbrains-mono";

function NavBar() {
    return (
      <div className="NavBar">
        
          <h1>Foodies</h1>
          <div className="Buttons">
            <button className='button'>favorites</button>
            <button className='button2'>profile</button>
          </div>
        
      </div>
    );
  }

export default NavBar;