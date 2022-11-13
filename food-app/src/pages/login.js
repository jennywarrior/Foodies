import './login.css';
import LoginImg from './../images/loginImg.png';
import "@fontsource/jetbrains-mono";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img style={{width: '450px', margin: '0 150px 0 0'}} src={LoginImg} alt="logo" />
      </div>
      <div>
        <p style={{fontSize: '33px'}}>foodies</p>
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
          <a
            href="/home"
            ><input type="submit" value="Login"  />
            </a>
        </form>
          <a
          className="App-link"
          href="/signup"
          >
          <p style={{fontSize: '12px'}}>create account</p>
          </a>
          
            
      </div>
      </header>
    </div>
  );
}

export default Login;