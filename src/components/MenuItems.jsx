import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = ({ value }) => {
  const categories = useSelector((store) => store.productReducer.categories);
  const categoriesArray = categories[0].filter((category) =>
    category.code.startsWith(value)
  );

  return (
    <ul>
      {categoriesArray.map((category, index) => (
        <li key={index}>
          {value === "k" ? (
            <Link to={"/shop/kadın/" + category.code.substring(2)}>
              {category.title}
            </Link>
          ) : (
            <Link to={"/shop/erkek/" + category.code.substring(2)}>
              {category.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
