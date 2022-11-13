import "./login.css";
import LoginImg from "./../images/loginImg.png";
import "@fontsource/jetbrains-mono";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleFormSubmit(e){
    e.preventDefault();
    try{
      await login(email,password);
    }catch{
      alert("Failed to login user");
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            style={{ width: "480px", margin: "0 120px 0 0" }}
            src={LoginImg}
            alt="logo"
          />
        </div>
        <div className="App-form">
          <p style={{ fontSize: "38px" }}>foodies</p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
          <a className="App-link" href="/signup">
            <p style={{ fontSize: "12px" }}>create account</p>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Login;
