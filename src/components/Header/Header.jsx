import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages-read">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
        <a className="btn btn-ghost text-xl">Book Review</a>
        </Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <a className="btn text-white bg-[#23be0b]">Sign In</a>
        <a className="btn text-white bg-[#59c6d2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
