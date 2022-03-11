import React, { useState, useEffect } from "react";
import axios from "axios";

// import useFetch from "./UseFetch";
// import UserList from "./UserList";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("https://rest-crudapi.herokuapp.com/api/user").then((response) => {
      response.json().then((result) => {
        setUsers(result);
        // setName(result[0].name);
        // setEmail(result[0].email);
        // setPhone(result[0].phone_no);
        // setUserId(result[0].id);
      });
    });
  }
  const deleteUser = (id) => {
    axios
      .delete(`https://rest-crudapi.herokuapp.com/api/user/${id}`)
      .then((response) => {
        console.log(response);
        getUsers();
      });
  };

  function selectUser(id) {
    // let obj = Object.keys(users);
    let item = { name, email, phone_no, id };
    console.log(item);
    // console.log(obj);
    // console.log(users.length);
    // for (let i = 0; i <= users.length; i++) {
    //   // if(users[i] === )
    //   console.log(obj[i]);
    // }
    // let theId = id;
    // console.log(users[0]);
    // const [arr] = [users];
    // console.log(arr);
    // console.log(Object.keys(users[theId]));
    // console.log(id);

    // let user = users[id];
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone_no);
    setUserId(item.id);
  }

  function updateUser() {
    let item = { name, email, phone_no };
    console.log(item.userId);
    axios
      .put(`https://rest-crudapi.herokuapp.com/api/user/${userId}`, {
        body: JSON.stringify(item),
      })
      .then((response) => {
        console.log(response);
        getUsers();
      });
  }

  return (
    <div className="all">
      <h1 className="shadow-sm text-success mt-5 mb-3 p-3 text-center rounded">
        User List
      </h1>
      {users.map((user, i) => (
        <div className="row row-cols-1 row-cols-md-3 allusers" key={i}>
          <div
            className="card text-white bg-info mb-3 all_card"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">
              <div className="card-body">
                <h6 className="card-title">name: {user.name}</h6>
                <p className="card-text">
                  {" "}
                  id: {user.id} email:{user.email}{" "}
                </p>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-danger del-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className="all">
    //   {users.map((user, i) => (
    //     <div className="allusers" key={i}>
    //       <ul>
    //         <li>
    //           id: {user.id}; name: {user.name}
    //         </li>
    //         <li> email:{user.email}</li>
    //         <li>sex:{user.sex} </li>
    //         <button onClick={() => deleteUser(user.id)} className="del-btn">
    //           Delete
    //         </button>
    //         <button onClick={() => selectUser(user.id)} className="del-btn">
    //           Update
    //         </button>
    //       </ul>
    //       {/* <p>{user.name}</p>
    //           <p>{user.email}</p>
    //           <p>{user.sex}</p>
    //           <p>{user.role}</p> */}
    //     </div>
    //   ))}

    //   <div className="update">
    //     <input
    //       type="text"
    //       placeholder="name"
    //       value={name}
    //       onChange={(e) => {
    //         setName(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <br />
    //     <input
    //       type="text"
    //       placeholder="email"
    //       value={email}
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <br />
    //     <input
    //       type="text"
    //       placeholder="phone_no"
    //       value={phone_no}
    //       onChange={(e) => {
    //         setPhone(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <br />

    //     <button onClick={updateUser}>Update User</button>
    //   </div>
    // </div>
  );
};

export default AllUsers;
