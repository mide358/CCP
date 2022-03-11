import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const theUser = {
      name,
      email,
      phone_no,
      password,
      sex,
      age: Number(age),
      role,
    };
    axios
      .post("https://rest-crudapi.herokuapp.com/api/user", theUser)
      .then((response) => {
        console.log(response);
        history.push("/allusers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add">
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        Add User
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row justify-content-center">
          <label htmlFor="name" className="col-sm-1 col-form-label">
            Name
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              value={name}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <label htmlFor="phone" className="col-sm-1 col-form-label">
            Phone
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Must be 11 digits"
              required
              pattern="[0-9]{11}"
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
          <div className="col-sm-2">
            <button type="submit" class="btn btn-success btn-block add_btn">
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
