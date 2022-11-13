import "./home.css";
import "@fontsource/jetbrains-mono";
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import Modal from "../components/modal";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Home({ closeModal }) {
  const [show, setShow] = useState(false);
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <div className="Item" onClick={() => setShow(!show)}>
        <div className="Name">Very Awesome Restaurant</div>
        <div className="Distance">3.2 miles away - Open until 9 PM</div>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
          alt=""
        ></img>
      </div>
    );
  }

  return (
    <>
      <div>
        <NavBar />
        {show && <Modal closeModal={setShow} />}
        <div className="Home">
          <div className="Map"></div>
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
