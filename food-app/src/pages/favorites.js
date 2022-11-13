import NavBar from './../components/NavBar';
import './favorites.css';
import Modal from '../components/modal';
import React, { useState } from 'react';

function Profile() {
  const [show, setShow] = useState(false);  
  const [liked, setLiked] = useState(false);
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <div>
        <div>
          {!liked && <div style={{color: "black", fontSize: "35px", height: "0", width: "20px", position: "relative", right: "-5px", top: "-5px"}} onClick={() => setLiked(!liked)}>&#9829;</div> }
          {liked && <div style={{color: "red", fontSize: "35px", height: "0", width: "20px", position: "relative", right: "-5px", top: "-5px"}} onClick={() => setLiked(!liked)}>&#9829;</div>}
        </div>
        <div className="Item" onClick={() => setShow(!show)}>
          <div className='Name'>Very Awesome Restaurant</div>
          <div className="Distance">3.2 miles away - Open until 9 PM</div>
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt=''></img>
          
        </div>
      </div>
    )
  }
    return (
      <div className='favorites'>
        <NavBar/>
        {show && <Modal closeModal={setShow}/>}
        <div className="Restaurant">
          {list}
        </div>
      </div>
    );
  }
  
  export default Profile;
    