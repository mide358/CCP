import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import useFetch from "./UseFetch";

const Home = () => {
  const [store, setStore] = useState("");
  const history = useHistory();

  let getStore = JSON.parse(localStorage.getItem("login"));

  // console.log(getStore.token.access_token);

  // let token = getStore.token.access_token;

  const logout = (e) => {
    let token = getStore.token.access_token;
    let theToken = `Bearer ${token}`;
    console.log(theToken);
    console.log(token);

    e.preventDefault();
    fetch("https://rest-crudapi.herokuapp.com/api/auth/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: theToken,
      },
      body: {},
    })
      .then((response) =>
        response.json().then((result) => {
          console.log(result);
          history.push("/");
        })
      )
      .catch((error) => {
        alert(`error ${error}`);
      });
  };
  return (
    <div className="home_page">
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        Welcome to your Dashboard
      </h1>

      <div className="form-group row ">
        <div className="col-sm-3 logout justify-content-center">
          <button
            type="submit"
            className="btn btn-success  logout_btn"
            onClick={logout}
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
