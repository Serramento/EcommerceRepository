import React, { useState } from "react";
import MenuItems from "./MenuItems";

const Navbar = ({ categories }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav>
      <ul>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button>Kadın</button>
          {isDropdownVisible && <MenuItems categories={categories} />}
        </div>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button>Erkek</button>
          {isDropdownVisible && <MenuItems categories={categories} />}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
