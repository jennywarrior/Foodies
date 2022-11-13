import './login.css';
import LoginImg from './../images/loginImg.png';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img src={LoginImg} alt="logo" />
      </div>
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
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            <p>Login</p>
            </a>
            <a
            href="https://reactjs.org"
            target="_blank"
            >
            <p>create account</p>
            </a>
      </div>
      </header>
    </div>
  );
}

export default Login;
