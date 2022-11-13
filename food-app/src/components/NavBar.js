import React from 'react'
import './NavBar.css';
import "@fontsource/jetbrains-mono";

function NavBar() {
    return (
      <div className="NavBar">
          <a href="/home">
            <h1>Foodies</h1>
          </a>
          <div className="Buttons">
            <a href="/favorites">
              <button className='button'>favorites</button>
            </a>
            <a href="/profile">
              <button className='button2'>profile</button>
            </a>

          </div>
              </div>
    );
  }

export default NavBar;