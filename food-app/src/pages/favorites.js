import NavBar from './../components/NavBar';
import './favorites.css';
import React from 'react';
import { useState, useEffect } from 'react';
import db from "../config/firestore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Favs from '../components/favs';
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { currentUser } = useAuth();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap) {
        setMarkers(docSnap.data().favorites);
      }
    }
    fetchData();
  }, []);
    return (
      <div className='favorites'>
        <NavBar/>
        <div className="Restaurant">
          {markers.map((marker) => (
            <Favs data={marker} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Profile;
    