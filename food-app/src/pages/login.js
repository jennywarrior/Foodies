import './login.css';
import LoginImg from './../images/loginImg.png';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LoginImg} alt="logo" rel="noreferrer" />
      <div>
        <p>foodies</p>
        <form>
           <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <form>
           <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
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
