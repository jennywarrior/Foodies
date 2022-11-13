import React from 'react'
import './NavBar.css';
import "@fontsource/jetbrains-mono";

function NavBar() {
    return (
      <div className="NavBar">
        <a href="/home">
          <h1 >Foodies</h1>
        </a>
        <a href="/favorites">
          <button>favorites</button>
        </a>
        <a href="/profile">
          <button>profile</button>
        </a>
      </div>
    );
  }

export default NavBar;