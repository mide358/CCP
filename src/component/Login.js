import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    axios
      .post("https://rest-crudapi.herokuapp.com/api/auth/login", loginUser)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "login",
          JSON.stringify({ login: true, token: response.data })
        );
        history.push("/home");
      })
      .catch((error) => {
        alert(`error ${error}`);
      });
  };

  return (
    <div className="login_page ">
      <h1 className=" text-success mt-5 p-3 text-center rounded">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group row login_group justify-content-center">
          <label htmlFor="email" className="col-sm-1 col-form-label">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row login_group justify-content-center">
          <label htmlFor="password" className="col-sm-1 col-form-label">
            Password
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row login_group_btn justify-content-center">
          <div className="col-sm-2">
            <button
              type="submit"
              className="btn btn-success btn-block login_btn"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
