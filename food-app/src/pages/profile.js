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

function Profile() {
  const dietChoices = [
    "halah",
    "vegan",
    "dairy",
    "nuts",
    "gluten free",
    "seafood",
    "vegetarian",
    "kosher",
    "soy",
  ];
  const { logout, currentUser } = useAuth();
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

  return (
    <div>
      <NavBar />
      <h1>{currentUser.email}</h1>

      <form>
        <div className="allBtns">
          <p className="restricts">choose your dietary restirctions:</p>
          <div className="prefBtns2">
            <div className="prefs">
              <img className="image" src={KosherSymbol} alt="kosher symbol" />
            </div>
            <div className="prefs">
              <img className="image" src={HalalSymbol} alt="halal symbol" />
            </div>
            <div className="prefs">
              <img
                className="image"
                src={DairyFreeSymbol}
                alt="dairy free symbol"
              />
            </div>
            <div className="prefs">
              <img
                className="image"
                src={GlutenFreeSymbol}
                alt="gluten free symbol"
              />
            </div>
          </div>
          <div className="prefBtns2">
            <div className="prefs">
              <img
                className="image"
                src={NutFreeSymbol}
                alt="nut free symbol"
              />
            </div>
            <div className="prefs">
              <img
                className="image"
                src={SoyFreeSymbol}
                alt="soy free symbol"
              />
            </div>
            <div className="prefs">
              <img className="image" src={VeganSymbol} alt="vegan symbol" />
            </div>
            <div className="prefs">
              <img
                className="image"
                src={VegetarianSymbol}
                alt="vegetarian symbol"
              />
            </div>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
      <button className="button2" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}

export default Profile;
