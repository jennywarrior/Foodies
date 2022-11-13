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

const restaurant_data = {
  "ChIJyRFcYlAfTIYRMMP4n3ED68Q": {
    "diet_restrictions": []
  },
  "ChIJg_FQAVAfTIYRKgQ-OZJRIy8": {
    "diet_restrictions": ["dairy", "vegan", "nuts", "gluten free"]
  },
  "ChIJg_FQAVAfTIYRKgQ": {
    "diet_restrictions": ["dairy", "vegan", "nuts", "seafood", "vegetarian"]
  },
  "ChIJEVZ58PAhTIYRY7A04xeju48": {
    "diet_restrictions": ["dairy", "nuts", "seafood"]
  },
  "ChIJgabyAVAfTIYRDmr_Bq1GG8U": {
    "diet_restrictions": ["dairy", "nuts", "seafood", "vegan", "vegetarian"]
  },
  "ChIJg18nmgAiTIYRtstpb0QmNvY": {
    "diet_restrictions": ["seafood", "vegan"]
  },
  "ChIJ__-_YgEiTIYRPA4ez3r780Q": {
    "diet_restrictions": [
      "halal",
      "vegan",
      "nuts",
      "dairy",
      "gluten free",
      "dairy",
      "vegan",
      "seafood"
    ]
  },
  "ChIJX8WyQwciTIYRsXn8aJaoVfA": {
    "diet_restrictions": [
      "halal",
      "vegan",
      "nuts",
      "dairy",
      "gluten free",
      "seafood"
    ]
  },
  "ChIJBbMz4akYTIYRUDgvXmLcJYw": {
    "diet_restrictions": ["Seafood", "nuts", "dairy", "gluten"]
  },
  "ChIJRX1Di4MfTIYRBAuz": {
    "diet_restrictions": ["halal"]
  },

  "ChIJHbZd0wcZTIYREoBy1HSbX2k": {
    "diet_restrictions": ["vegetarian"]
  },

  "ChIJ2TTATZMfTIYRRZIl1w9ZxdQ": {
    "diet_restrictions": ["vegetarian", "vegan"]
  },

  "ChIJ9SKrF1AfTIYRfscbrnWa2ag": {
    "diet_restrictions": ["vegetarian"]
  },

  "ChIJN3DtalAfTIYRR": {
    "diet_restrictions": []
  },

  "ChIJxXycmqwYTIYRMR7jbZM26WA": {
    "diet_restrictions": []
  },

  "ChIJBU5hFlAfTIYRezywU4A0N3o": {
    "diet_restrictions": ["halal"]
  },

  "ChIJU9rMFlAfTIYR-WAnJcYbmRQ": {
    "diet_restrictions": ["seafood"]
  }
}

function Home({ closeModal }) {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const { currentUser } = useAuth();
  const [markers, setMarkers] = useState([]);

  let list = [1, 2, 3, 4, 5];

  async function convert(maps){
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);
    const preferences = docSnap.data().preferences;
  
    return new Promise((resolve, reject) => {
      var finalData = [];
      for(let restaurant of maps){
        let meetsCriteria = true;
        const diet_restrictions = restaurant_data[restaurant.place_id]?.diet_restrictions;
        
        if(!diet_restrictions){
          continue;
        }
  
        for(let userP of preferences){
            if(!diet_restrictions.includes(userP)){
              meetsCriteria = false;
              break;
            }
        }
  
        if(meetsCriteria){
          finalData.push(restaurant);
        }
      }
      resolve(finalData);
    })
  }

  const params = {
    location: "32.98583687176648%2C-96.75025276660631",
    radius: "1500",
    type: "restaurant",
    key: "AIzaSyCeeAjKW3hefYIt0pYIIfQxiJP9cpo-QP0",
  };

  useEffect(() =>{
    axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&radius=${params.radius}&type=${params.type}&key=${params.key}`,
      {
        params,
      }
    )
    .then((res) => {
      convert(res.data.results).then((json) => {
      console.log(json);
      setMarkers(json);}
      ); 
    }).catch((error) => {
      console.log(error);
    })
  },[])


  return (
    <>
      <div>
        <NavBar />
        <div className="Home">
          <div className="Map">
            <MapComponent />
          </div>
          <div className="Restaurants">
            <p>Restaurants Near You</p>
            {list.map(() => (
              <Favs />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
