import React, { useState } from "react";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

  return (
    <div>
      <ul className="shadow-md rounded-md absolute lg:hidden">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="lg:flex lg:flex-row"
        >
          <button className="w-60 h-16 flex items-center justify-center bg-[#FFFFFF] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none">
            Kadın
          </button>
          {isDropdownVisible && <MenuItems value="k" />}
        </li>

        <li
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className="lg:flex lg:flex-row"
        >
          <button className="w-60 h-16 flex items-center justify-center bg-[#FFFFFF] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none">
            Erkek
          </button>
          {isDropdownVisible2 && <MenuItems value="e" />}
        </li>

        <div></div>
      </ul>
      <ul className="shadow-md rounded-md absolute hidden lg:flex lg:flex-row">
        <div>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lg:flex lg:flex-row"
          >
            <button className="w-60 h-16 flex items-center justify-center bg-[#FFFFFF] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none">
              Kadın
            </button>
          </li>

          <li
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="lg:flex lg:flex-row"
          >
            <button className="w-60 h-16 flex items-center justify-center bg-[#FFFFFF] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none">
              Erkek
            </button>
          </li>
        </div>
        <div>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lg:flex lg:flex-row"
          >
            {isDropdownVisible && <MenuItems value="k" />}
          </li>
          <li
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="lg:flex lg:flex-row"
          >
            {isDropdownVisible2 && <MenuItems value="e" />}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
