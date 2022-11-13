import NavBar from "./../components/NavBar";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useAuth } from "../contexts/AuthContext";
import KosherSymbol from "./../images/kosher.png";
import HalalSymbol from "./../images/halal.png";
import DairyFreeSymbol from "./../images/dairy-free.png";
import GlutenFreeSymbol from "./../images/gluten-free.png";
import NutFreeSymbol from "./../images/nut-free.png";
import SoyFreeSymbol from "./../images/soy-free.png";
import VeganSymbol from "./../images/vegan.png";
import VegetarianSymbol from "./../images/vegetarian.png";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import db from "../config/firestore";
import { async } from "@firebase/util";

function Profile() {
  const dietChoices = [
    {
      type: "halal",
      image: HalalSymbol,
    },
    {
      type: "vegan",
      image: VeganSymbol,
    },
    {
      type: "dairy",
      image: DairyFreeSymbol,
    },
    {
      type: "nuts",
      image: NutFreeSymbol,
    },
    {
      type: "gluten free",
      image: GlutenFreeSymbol,
    },
    {
      type: "vegetarian",
      image: VegetarianSymbol,
    },
    {
      type: "kosher",
      image: KosherSymbol,
    },
    {
      type: "soy",
      image: SoyFreeSymbol,
    },
  ];

  const [fullName, setFullName] = useState("");
  const { logout, currentUser } = useAuth();
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
      alert("Failed to logout");
    }
  }

  function updatePreferenceList(diet) {
    if (preferences.includes(diet)) {
      const index = preferences.indexOf(diet);
      preferences.splice(index, 1);
    } else {
      preferences.push(diet);
    }

    setPreferences(preferences);
  }

  async function savePreferenceList() {
    console.log(preferences);
    await updateDoc(doc(db, "users", currentUser.uid), {
      preferences: preferences,
    });
  }

  useEffect(() => {
    console.log(currentUser.uid);
    async function fetchData() {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap) {
        setFullName(docSnap.data().fullName);
        setPreferences(docSnap.data().preferences);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main">
        <h1>{fullName}</h1>
        <h2>{currentUser.email}</h2>
        <div className="allBtns">
          <p className="restricts">choose your dietary restirctions:</p>
          <div className="prefBtns2">
            {dietChoices.map((diet, idx) => {
              if (idx < 4) {
                return (
                  <div
                    id={idx}
                    className="prefs"
                    onClick={() => updatePreferenceList(diet.type)}
                  >
                    <img
                      className="image"
                      src={diet.image}
                      alt={diet.type + "symbol"}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="prefBtns2">
            {dietChoices.map((diet, idx) => {
              if (idx >= 4) {
                return (
                  <div
                    id={idx}
                    className="prefs"
                    onClick={() => updatePreferenceList(diet.type)}
                  >
                    <img
                      className="image"
                      src={diet.image}
                      alt={diet.type + "symbol"}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <p>change dietary preferences</p>
        <div className="button-group">
          <button className="button2"
            onClick={async (e) => {
              await savePreferenceList(e);
            }}
          >
            Save
          </button>
          <button className="button2" onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
