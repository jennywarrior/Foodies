import './signup.css';
import React from 'react';
import KosherSymbol from './../images/kosher.png';
import HalalSymbol from './../images/halal.png';
import DairyFreeSymbol from './../images/dairy-free.png';
import GlutenFreeSymbol from './../images/gluten-free.png';
import NutFreeSymbol from './../images/nut-free.png';
import SoyFreeSymbol from './../images/soy-free.png';
import VeganSymbol from './../images/vegan.png';
import VegetarianSymbol from './../images/vegetarian.png';

function SignUp() {
  return (
    <div>
      <header>
        <p className='title'>create account</p>
        <form>
            <div>
                <label>
                    <input type="text" placeholder="email" />
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="password" />
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="full name"/>
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
            <a
            href="/home"
            >
             <input type="submit" value="Submit" />
            </a>
        </form>
      </header>
    </div>
  );
}

export default SignUp;
