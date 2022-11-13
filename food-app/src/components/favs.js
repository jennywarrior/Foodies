import React, { useEffect, useState } from "react";
import Modal from "../components/modal";
import db from "../config/firestore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

function Favs({ data }) {
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(false);
  const { currentUser } = useAuth();

  const [favorites, setFavorites] = useState("");

  async function updateFavorites(diet) {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap) {
      setFavorites(docSnap.data().favorites);
    }
    
    if (favorites.includes(diet)) {
      const index = favorites.indexOf(diet);
      favorites.splice(index, 1);
    } else {
      favorites.push(diet);
    }
    setFavorites(favorites);
    await updateDoc(doc(db, "users", currentUser.uid), {
      favorites: favorites,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap) {
        setFavorites(docSnap.data().favorites);
      }
    }
    fetchData();
  }, [liked]);

  return (
    <div>
      {show && <Modal closeModal={setShow} data={data} />}
      <div>
        {!liked && (
          <div
            style={{
              color: "black",
              fontSize: "35px",
              height: "0",
              width: "20px",
              position: "relative",
              right: "-5px",
              top: "-5px",
            }}
            onClick={() => {setLiked(!liked); updateFavorites(data);}}
          >
            &#9829;
          </div>
        )}
        {liked && (
          <div
            style={{
              color: "red",
              fontSize: "35px",
              height: "0",
              width: "20px",
              position: "relative",
              right: "-5px",
              top: "-5px",
            }}
            onClick={() => {setLiked(!liked); updateFavorites(data);}}
          >
            &#9829;
          </div>
        )}
      </div>
      <div
        className="Item"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="Name">{data.name}</div>
        <div className="Distance">
          {data.vicinity} - {data.opening_hours.open_now ? "Open" : "Closed"}
        </div>
        <img src={data.mainImage || data.icon} alt="" style={{ width: "60px" }}></img>
      </div>
    </div>
  );
}

export default Favs;
