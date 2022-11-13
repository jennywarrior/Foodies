import './signup.css';
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../config/firestore";
import { collection, setDoc, doc } from "firebase/firestore";
import React from 'react';
import "@fontsource/jetbrains-mono";
import KosherSymbol from './../images/kosher.png';
import HalalSymbol from './../images/halal.png';
import DairyFreeSymbol from './../images/dairy-free.png';
import GlutenFreeSymbol from './../images/gluten-free.png';
import NutFreeSymbol from './../images/nut-free.png';
import SoyFreeSymbol from './../images/soy-free.png';
import VeganSymbol from './../images/vegan.png';
import VegetarianSymbol from './../images/vegetarian.png';

export default function SignUp() {
  const navigate = useNavigate();
  const { currentUser, register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const user = await register(email, password, fullName);
      await setDoc(doc(db, "users", user.user.uid), {
        preferences: [],
        favorites: [],
      });
      navigate("/");
      console.log(fullName);
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
      <p className='title'>create account</p>
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
          <div className='allBtns'>
                <p className='restricts'>choose your dietary restirctions:</p>
                <div className='prefBtns2'>
                    <div className="prefs">
                        <img className="image" src={KosherSymbol} alt="kosher symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={HalalSymbol} alt="halal symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={DairyFreeSymbol} alt="dairy free symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={GlutenFreeSymbol} alt="gluten free symbol"/>
                    </div>
                </div>
                <div className='prefBtns2'>
                    <div className="prefs">
                        <img className="image" src={NutFreeSymbol} alt="nut free symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={SoyFreeSymbol} alt="soy free symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={VeganSymbol} alt="vegan symbol"/>
                    </div>
                    <div className="prefs">
                        <img className="image" src={VegetarianSymbol} alt="vegetarian symbol"/>
                    </div>
                </div>
            </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
