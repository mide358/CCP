import { useRef } from "react";

const Signup = () => {
  const fullName = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const sex = useRef();
  const age = useRef();

  const clicked = (e) => {
    const userName = fullName.current.value;
    const userEmail = email.current.value;
    const userPhone = phone.current.value;
    const userPassword = password.current.value;
    const userSex = sex.current.value;
    const userAge = age.current.value;
  };

  return (
    <div className="container">
      <div className="row location">
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={fullName}
            type="text"
            className="form-control"
            id="full-name"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={email}
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={phone}
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={password}
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={sex}
            type="text"
            className="form-control"
            id="sex"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <input
            ref={age}
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Fullname..."
          />
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <button
            onClick={clicked}
            className="btn text-white bg-orange-b form-control"
            type="button"
            id="get-weather"
          >
            Get Weather
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
