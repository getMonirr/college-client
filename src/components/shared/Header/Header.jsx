import { Link, NavLink } from "react-router-dom";
import ColContainer from "../ColContainer/ColContainer";
import useAuth from "../../../hooks/useAuth";
import { SearchContext } from "../../../provider/SearchProvider";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Headers = () => {
  const { user, logOut } = useAuth();
  const { setSearchResult } = useContext(SearchContext);
  console.log(user);

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/colleges">Colleges</NavLink>
      </li>
      <li>
        <NavLink to="/admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/my-colleges">My Colleges</NavLink>
      </li>
    </>
  );

  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText.length >= 3) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/colleges/search/${searchText}`)
        .then((res) => setSearchResult(res.data));
    }
  };

  // handle logout
  const handleLogout = () => {
    logOut().then(() => {
      toast.success("logout successful");
    });
  };

  return (
    <div className="bg-base-100">
      <ColContainer>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              College Hunter
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="form-control">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search by college name"
                className="input input-bordered w-24 md:w-auto mr-4"
              />
              <span className="text-xs">At least three character</span>
            </div>
            {user ? (
              <>
                <Link to="/profile">
                  <div className="avatar mr-4">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          user?.photoURL ||
                          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                        }
                      />
                    </div>
                  </div>
                </Link>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </ColContainer>
    </div>
  );
};

export default Headers;
