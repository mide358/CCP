import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [role, setRole] = useState("");
  const [phone_no, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_again, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign_Up = {
      name,
      email,
      sex,
      role,
      phone_no,
      password,
      age,
      password_again,
    };
    axios
      .post("https://rest-crudapi.herokuapp.com/api/auth/register", sign_Up, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container fluid className="signup_page">
      <form fluid onSubmit={handleSubmit} className="signup_page">
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Register
        </h1>
        <div className="form-group row justify-content-center">
          <label htmlFor="name" className="col-sm-1 col-form-label">
            Name
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              value={name}
              pattern="[A-Z a-z]{3,}"
              title="Name must contain only letters and must be more then 3 letters"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <label htmlFor="email" className="col-sm-1 col-form-label">
            Email
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              value={email}
              title="Please enter a valid email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <label htmlFor="age" className="col-sm-1 col-form-label">
            Age
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <label htmlFor="sex" className="col-sm-1 col-form-label">
            Sex
          </label>
          <div className="col-sm-4">
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <label htmlFor="role" className="col-sm-1 col-form-label">
            Role
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <label htmlFor="role" className="col-sm-1 col-form-label">
            Phone
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Must be 11 digits"
              required
              pattern="[0-9]{10,}"
              title="Phone number must contain a minimum of 10 digits"
              value={phone_no}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
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
        <div className="form-group row justify-content-center">
          <label htmlFor="password" className="col-sm-1 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              required
              value={password_again}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <div className="col-sm-2">
            <button type="submit" class="btn btn-success btn-block add_btn">
              SIGNUP
            </button>
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <p>
            If you have an account already, <Link to="/"> Login</Link>
          </p>
        </div>
      </form>
    </Container>
  );
};

export default Signup;
