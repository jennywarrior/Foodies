import './login.css';
import LoginImg from './../images/loginImg.png';
import "@fontsource/jetbrains-mono";


function Login() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img style={{width: '480px', margin: '0 120px 0 0'}} src={LoginImg} alt="logo" />
      </div>
      <div className="App-form">
        <p style={{fontSize: '38px'}}>foodies</p>
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
            className="App-link"
            href="https://www.google.com/"
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