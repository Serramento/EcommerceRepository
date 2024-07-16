import React from "react";

const MenuItems = ({ categories }) => {
  return (
    <ul className="dropdown">
      {categories.map((category, index) => (
        <li key={index} className="menu-items">
          <>{category.title}</>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
