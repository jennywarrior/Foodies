import "./signup.css";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../config/firestore";
import { setDoc, doc } from "firebase/firestore";
import React from "react";
import "@fontsource/jetbrains-mono";
import KosherSymbol from "./../images/kosher.png";
import HalalSymbol from "./../images/halal.png";
import DairyFreeSymbol from "./../images/dairy-free.png";
import GlutenFreeSymbol from "./../images/gluten-free.png";
import NutFreeSymbol from "./../images/nut-free.png";
import SoyFreeSymbol from "./../images/soy-free.png";
import VeganSymbol from "./../images/vegan.png";
import VegetarianSymbol from "./../images/vegetarian.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [preferences, setPreferences] = useState([]);

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

  function updatePreferenceList(diet) {
    if (preferences.includes(diet)) {
      const index = preferences.indexOf(diet);
      preferences.splice(index, 1);
    } else {
      preferences.push(diet);
    }
    setPreferences(preferences);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        setDoc(doc(db, "users", userCredentials.user.uid), {
          fullName: fullName,
          preferences: preferences,
          favorites: [],
        }).then((res)=>{
          navigate("/");
        })
      })
    } catch (e) {
      console.log(e);
      alert("Failed to register");
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <header>
        <p className="title">create account</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="fullname"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>
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
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
