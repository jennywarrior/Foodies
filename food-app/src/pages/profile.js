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
  
  const [halal, setHalal] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [dairy, setDairy] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [vegetarian, setVeggie] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [soy, setSoy] = useState(false);
  const dietChoices = [
    {
      type: "halal",
      image: HalalSymbol,
      state: halal,
    },
    {
      type: "vegan",
      image: VeganSymbol,
      state: vegan,
    },
    {
      type: "dairy",
      image: DairyFreeSymbol,
      state: dairy,
    },
    {
      type: "nuts",
      image: NutFreeSymbol,
      state: nuts,
    },
    {
      type: "gluten free",
      image: GlutenFreeSymbol,
      state: gluten,
    },
    {
      type: "vegetarian",
      image: VegetarianSymbol,
      state: vegetarian,
    },
    {
      type: "kosher",
      image: KosherSymbol,
      state: kosher,
    },
    {
      type: "soy",
      image: SoyFreeSymbol,
      state: soy,
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

  function setPref(type) {
    if (type == "halal"){
      setHalal(!halal)
    } else if (type == "vegan"){
      setVegan(!vegan)
    } else if (type == "dairy"){
      setDairy(!dairy)
    } else if (type == "nuts"){
      setNuts(!nuts)
    } else if (type == "gluten free"){
      setGluten(!gluten)
    } else if (type == "vegetarian"){
      setVeggie(!vegetarian)
    } else if (type == "kosher"){
      setKosher(!kosher)
    } else if (type == "soy"){
      setSoy(!soy)
    }
  }
  return (
    <div>
      <NavBar />
      <div className="main">
        <h1>{fullName}</h1>
        <h2>{currentUser.email}</h2>
        <div className="allBtns">
          <p className="restricts">change your dietary restirctions:</p>
          <div className="prefBtns2">
            {dietChoices.map((diet, idx) => {
              if (idx < 4) {
                return (
                  <div
                    id={idx}
                    className={diet.state ? "prefs2" : "prefs" }
                    onClick={() => {updatePreferenceList(diet.type); setPref(diet.type);}}
                  >
                    <img
                      className="image2"
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
                    className={diet.state ? "prefs2" : "prefs" }
                    onClick={() => {updatePreferenceList(diet.type); setPref(diet.type);}}
                  >
                    <img
                      className="image2"
                      src={diet.image}
                      alt={diet.type + "symbol"}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
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
