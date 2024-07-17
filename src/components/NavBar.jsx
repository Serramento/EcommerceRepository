import React, { useState } from "react";
import MenuItems from "./MenuItems";

const Navbar = () => {
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
    <nav>
      <ul>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button>Kadın</button>
          {isDropdownVisible && <MenuItems value="k" />}
        </li>

        <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <button>Erkek</button>
          {isDropdownVisible2 && <MenuItems value="e" />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
