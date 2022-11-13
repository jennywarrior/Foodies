import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { currentUser, register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      await register(email, password);
      navigate("/");
      console.log(fullName);
    } catch (e) {
      console.log(e);
      alert("Failed to register");
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <header>
        <p>foodies</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder="fullname"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
