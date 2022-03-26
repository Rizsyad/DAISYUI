import { useState } from "react";

const Nav = ({ hover }) => {
  const [menuSelect, setMenuSelect] = useState("Explore");

  const handleOnClickmenu = (menu) => setMenuSelect(menu);

  const isHover = hover ? "hover:text-gray-500" : "";
  const menus = ["Explore", "Discover", "Popular", "About Us"];

  return (
    <>
      {menus.map((menu, i) => {
        const isActive =
          menuSelect === menu
            ? "no-underline lg:underline lg:underline-offset-8"
            : isHover;

        return (
          <li>
            <a
              className={`font-poppins ${isActive}`}
              href="#"
              onClick={() => handleOnClickmenu(menu)}
            >
              {menu}
            </a>
          </li>
        );
      })}
      <li className="visible lg:invisible">
        <a className={`font-poppins ${isHover}`} href="#">
          Register
        </a>
      </li>
    </>
  );
};

export default Nav;
