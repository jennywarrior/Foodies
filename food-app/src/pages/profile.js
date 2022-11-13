import NavBar from './../components/NavBar';
import './profile.css';
import KosherSymbol from './../images/kosher.png';
import HalalSymbol from './../images/halal.png';
import DairyFreeSymbol from './../images/dairy-free.png';
import GlutenFreeSymbol from './../images/gluten-free.png';
import NutFreeSymbol from './../images/nut-free.png';
import SoyFreeSymbol from './../images/soy-free.png';
import VeganSymbol from './../images/vegan.png';
import VegetarianSymbol from './../images/vegetarian.png';
import SpinachImg from './../images/spinach.png';

function Profile() {
    return (
      <div>
        <NavBar/>
        <h2>Hi Blah Blah!</h2>
        <p>email: blah@gamil.com</p>
        <p>change dietary preferences</p>
        <div className='allBtns2'>
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
        <br/>
        <img className="spinach" alt="" src={SpinachImg}/>
      </div>
      
    );
  }
  
  export default Profile;
  