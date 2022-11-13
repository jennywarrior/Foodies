import NavBar from "./../components/NavBar";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const dietChoices = [
    "halah",
    "vegan",
    "dairy",
    "nuts",
    "gluten free",
    "seafood",
    "vegetarian",
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
        {dietChoices.map((val) => {
          return (
            <>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
              <label for="vehicle1">{val}</label>
              <br></br>
            </>
          )
        })}
        <button type="submit">Save</button>
      </form>
      <button className="button2" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}

export default Profile;
