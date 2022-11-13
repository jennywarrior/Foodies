import "./home.css";
import "@fontsource/jetbrains-mono";
import NavBar from "../components/NavBar";
import Favs from "../components/favs";
import React, { useEffect, useState } from "react";
import Modal from "../components/modal";
import MapComponent from "../components/MapComponent";
import db from "../config/firestore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import restaurant_data from "../data/restaurant_data";
import nearby_data from "../data/nearby_data";

function Home({ closeModal }) {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const { currentUser } = useAuth();
  const [markers, setMarkers] = useState([]);

  let list = [1, 2, 3, 4, 5];

  async function convert(maps) {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);
    const preferences = docSnap.data().preferences;

    return new Promise((resolve, reject) => {
      var finalData = [];
      for (let restaurant of maps) {
        let meetsCriteria = true;
        const diet_restrictions =
          restaurant_data[restaurant.place_id]?.diet_restrictions;

        if (!diet_restrictions) {
          continue;
        }

        for (let userP of preferences) {
          if (!diet_restrictions.includes(userP)) {
            meetsCriteria = false;
            break;
          }
        }

        if (meetsCriteria) {
          restaurant.mainImage = restaurant_data[restaurant.place_id].image;
          finalData.push(restaurant);
        }
      }
      resolve(finalData);
    });
  }

  const params = {
    location: "32.98583687176648%2C-96.75025276660631",
    radius: "1500",
    type: "restaurant",
    key: "AIzaSyCeeAjKW3hefYIt0pYIIfQxiJP9cpo-QP0",
  };

  useEffect(() => {
    convert(nearby_data.results).then((json) => {
      setMarkers(json);
    });
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <div className="Home">
          <div className="Map">
            <MapComponent initialMarkers={markers}/>
          </div>
          <div className="Restaurants">
            <p>Restaurants Near You</p>
            {markers.map((marker) => (
              <Favs data={marker}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
