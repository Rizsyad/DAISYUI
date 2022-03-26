import Button from "./Button";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="navbar mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Nav />
          </ul>
        </div>
        <a
          className="font-poppins text-xl uppercase font-semibold text-white"
          href="#"
        >
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white font-semibold content-center">
          <Nav hover />
        </ul>
      </div>
      <div className="navbar-end invisible lg:visible">
        <Button className="btn-sm normal-case" variant="outline-white" link="#">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
