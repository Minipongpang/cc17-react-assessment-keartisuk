import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthenContext";
function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmailOrMobile = (e) => setEmailOrMobile(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (emailOrMobile === "pluem@mail.com" && password === "qwerty") {
      await login(emailOrMobile, password);
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="logIn-root">
      <form className="logIn-main" onSubmit={handleSubmitLogin}>
        <div>
          <div className="logIn-title">
            <h1>Welcome</h1>
          </div>
          <div className="logIn-input">
            <h4>EmailOrMobile</h4>
            <input
              type="text"
              value={emailOrMobile}
              onChange={handleChangeEmailOrMobile}
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div className="logIn-button">
          <button>LOG IN</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
