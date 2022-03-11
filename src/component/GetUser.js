import { useState } from 'react';
const GetUser = () => {
  const [getId, setGetId] = useState('');
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    let id = getId;

    fetch(`https://rest-crudapi.herokuapp.com/api/user/${id}`)
      .then((response) =>
        response.json().then((data) => {
          console.log(response);
          if (response.statusText === 'Not Found') {
            throw Error(`User not found`);
          }

          setUser(data);
          setError(null);
        })
      )
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="get">
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        Get User by ID
      </h1>
      <p>The user</p>

      <div className="searchBox">
        <form
          onSubmit={handleSearch}
          className="form-inline justify-content-center "
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            required
            aria-label="Search"
            value={getId}
            onChange={(e) => setGetId(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {error && (
          <div>
            <h2>{error}</h2>
          </div>
        )}

        {user && (
          <div>
            {/* <h2> {user.id}</h2> */}
            <h2>Name: {user.name} </h2>
            <h2>Email: {user.email}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUser;
