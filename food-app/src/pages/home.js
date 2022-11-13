import "./home.css";
import "@fontsource/jetbrains-mono";
import NavBar from "../components/NavBar";
import React from "react";
import Favs from '../components/favs';

function Home({closeModal}) { 
  let list = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <NavBar />
        <div className="Home">
          <div className="Map"></div>
          <div className="Restaurants">
            <p>Restaurants Near You</p>
            {list.map(() => (
              <Favs/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
