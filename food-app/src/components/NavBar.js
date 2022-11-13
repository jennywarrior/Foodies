import React from 'react'
import './NavBar.css';
import "@fontsource/jetbrains-mono";

function NavBar() {
    return (
      <div className="NavBar">
        <h1>Foodies</h1>
        <button>favorites</button>
        <button>profile</button>
      </div>
    );
  }

export default NavBar;