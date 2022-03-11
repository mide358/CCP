import React, { useState } from "react";
import useFetch from "./UseFetch";

const Search = () => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);

  const {
    data: users,
    isPending,
    error,
  } = useFetch("https://rest-crudapi.herokuapp.com/api/user");

  const handleSearch = (search) => {
    let matches = [];
    if (search.length > 0) {
      matches = users.filter((user) => {
        const theId = `${search}`;
        console.log(theId);
        let tes = user.id.toString();
        return tes.match(theId);
      });
    }
    setDetails(matches);
    setSearch(search);
  };
  return (
    <div className="find_list">
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        Search By Id
      </h1>

      <div className="form-group row justify-content-center">
        <label htmlFor="email" className="sr-only col-sm-1 col-form-label">
          Search
        </label>
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            style={{ marginTop: "30px" }}
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {details &&
        details.map((detail) => (
          <div className="card mx-auto" style={{ maxWidth: "24rem" }}>
            <ul className="list-group list-group-flush" key={detail.id}>
              <li className="list-group-item">
                ID: {detail.id}, name:{detail.name}, email:{detail.email} age:
                {detail.age}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Search;
