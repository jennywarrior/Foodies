import "./home.css";
import "@fontsource/jetbrains-mono";
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import Modal from "../components/modal";
import MapComponent from "../components/MapComponent"

function Home({closeModal}) {
  const [show, setShow] = useState(false);  
  const [liked, setLiked] = useState(false);


  
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <div key={i}>
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
    );
  }

  return (
    <>
      <div>
        <NavBar />
        {show && <Modal closeModal={setShow} />}
        <div className="Home">
          <div className="Map">
            <MapComponent/>
          </div>
          <div className="Restaurants">
            <p>Restaurants Near You</p>
            {list}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
