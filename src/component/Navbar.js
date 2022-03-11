import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TheNav = () => {
  return (
    <Navbar
      collapseOnSelect
      className="navigation"
      fixed="top"
      expand="lg"
      bg="dark"
    >
      <Navbar.Brand
        style={{ color: "#fffffe", fontSize: "2.1rem", fontWeight: "bolder" }}
        href="/"
      >
        CCP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto all-link">
          <Nav.Link
            className="nav-link"
            id="link"
            eventKey="1"
            as={Link}
            to="/"
            exact="true"
          >
            LOGIN
          </Nav.Link>

          <Nav.Link
            className="nav-item"
            id="link"
            eventKey="2"
            as={Link}
            to="/signup"
          >
            SIGNUP
          </Nav.Link>
          <Nav.Link
            className="nav-item"
            id="link"
            eventKey="3"
            as={Link}
            to="/allusers"
          >
            ALL USERS
          </Nav.Link>
          <Nav.Link
            className="nav-item"
            id="link"
            eventKey="4"
            as={Link}
            to="/user/:id"
          >
            SEARCH
          </Nav.Link>
          <Nav.Link
            className="nav-item"
            id="link"
            eventKey="5"
            as={Link}
            to="/getuser"
          >
            GET
          </Nav.Link>
        </Nav>

        <Nav.Link
          className="nav-item admin"
          id="link"
          eventKey="6"
          as={Link}
          to="/adduser"
        >
          ADD USER
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNav;

// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const TheNav = () => {
//   return (
//     <Navbar
//       collapseOnSelect
//       className="navigation"
//       bg="dark"
//       expand="lg"
//       fixed="top"
//       variant="dark"
//     >
//       <Navbar.Brand
//         style={{ color: "#fffffe", fontSize: "2.1rem", fontWeight: "bolder" }}
//         href="/about"
//       >
//         CCP
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ml-auto all-link">
//           <Nav.Link id="link" eventKey={1} as={Link} to="/" exact="true">
//             Login
//           </Nav.Link>
//           <Nav.Link id="link" eventKey={2} as={Link} to="/adduser">
//             Add Signup User
//           </Nav.Link>
//           <Nav.Link id="link" eventKey={3} as={Link} to="/allusers">
//             All Users
//           </Nav.Link>
//           <Nav.Link id="link" eventKey={4} as={Link} to="/user/:id">
//             User Details
//           </Nav.Link>
//           <Nav.Link id="link" eventKey={5} as={Link} to="/find">
//             Search
//           </Nav.Link>
//         </Nav>
//         <Nav className="ml-auto all-link">
//           <Nav.Link id="link" eventKey={6} as={Link} to="/admin">
//             Admin
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default TheNav;

// // import { Navbar, Nav } from "react-bootstrap/Navbar";
// // // import { Link } from "react-router-dom";

// // const Nav = () => {
// //   return (
// //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// //       <Navbar.Brand to="/">CCP</Navbar.Brand>
// //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //       <Navbar.Collapse id="responsive-navbar-nav">
// //         <Nav className="mr-auto">
// //           <Nav.Link to="/">Login</Nav.Link>
// //           <Nav.Link to="/adduser">Add User</Nav.Link>
// //           {/* <Nav.Link to="/allusers">All Users</Nav.Link> */}
// //           <Nav.Link to="/user/:id">User Details</Nav.Link>
// //           <Nav.Link to="/find">find by email</Nav.Link>
// //         </Nav>

// //         <Nav>
// //           <Nav.Link to="/admin">Admin</Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
// //     </Navbar>
// //   );
// // };
// // export default Nav;

// // // ***********************
// // /*
// //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// //       <Navbar.Brand className="navbar-brand" href="/">
// //         CCP
// //       </Navbar.Brand>
// //       <button
// //         className="navbar-toggler"
// //         type="button"
// //         data-toggle="collapse"
// //         data-target="#navbarSupportedContent"
// //         aria-controls="navbarSupportedContent"
// //         aria-expanded="false"
// //         aria-label="Toggle navigation"
// //       >
// //         <span className="navbar-toggler-icon"></span>
// //       </button>

// //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //         <ul className="navbar-nav mx-auto">
// //           <li className="nav-item active">
// //             <a className="nav-link" href="/">
// //               Home <span className="sr-only">(current)</span>
// //             </a>
// //           </li>
// //           <li className="nav-item">
// //             <a className="nav-link" href="/login">
// //               Login
// //             </a>
// //           </li>
// //           <li className="nav-item">
// //             <a className="nav-link" href="/signup">
// //               Signup
// //             </a>
// //           </li>
// //         </ul>
// //         <div className="nav-item admin">
// //           <a className="nav-link admin" href="/admin">
// //             Admin
// //           </a>
// //         </div>
// //       </div>
// //     </Navbar>
// //   );
// // };

// // */
