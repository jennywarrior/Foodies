import './login.css';
import LoginImg from './../images/loginImg.png';

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
            <input type="submit" value="Submit" placeholder="Login" />
        </form>
            <a
            className="App-link"
            href="/home"
            >
            <p>Login</p>
            </a>
            <a
            className="App-link"
            href="/signup"
            >
            <p>create account</p>
            </a>
      </div>
      </header>
    </div>
  );
}

export default Login;
