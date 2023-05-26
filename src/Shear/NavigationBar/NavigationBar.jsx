import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";


const NavigationBar = () => {
  const { user, loggedOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="ps-4" to="/home">
                Home
              </Link>
              <Link className="ps-4" to="/blog">
                Blog
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-3xl font-bold">
            Mamun's Recipe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-3xl font-bold">
            <Link className="mr-3" to="/home">
              Home
            </Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user && (
              <Link>
                {/* <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle> */}
                <img src={user.photoUrl} alt="" />
              </Link>
            )}

            {user ? (
              <button onClick={loggedOut} className=" btn-primary">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className=" btn-primary">Login</button>
              </Link>
            )}
          </div>
          <Link to="/register" className="btn-primary font-bold">
            Register
          </Link>
          {/* <Link to='/login' className="btn font-bold">Login</Link> */}
        </div>
      </div>
     
    </div>
  );
};

export default NavigationBar;
