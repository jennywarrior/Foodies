import NavBar from './../components/NavBar';
import './favorites.css';
import React from 'react';
import Favs from '../components/favs';

function Profile() {
  let list = [1, 2, 3, 4, 5];

    return (
      <div className='favorites'>
        <NavBar/>
        <div className="Restaurant">
          {list.map(() => (
            <Favs/>
          ))}
        </div>
      </div>
    );
  }
  
  export default Profile;
    