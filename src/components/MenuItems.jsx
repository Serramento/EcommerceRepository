import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = ({ value }) => {
  const categories = useSelector((store) => store.productReducer.categories);

  const categoriesArray = categories.filter((category) =>
    category.code.startsWith(value)
  );

  return (
    <ul>
      {categoriesArray.map((category, index) => (
        <li
          key={index}
          className="w-60 h-12 bg-[#FFFFFF] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none text-2xl lg:text-sm flex items-center justify-center"
        >
          {value === "k" ? (
            <Link
              to={
                "/shop/kadın/" + category.code.substring(2) + "/" + category.id
              }
            >
              {category.title}
            </Link>
          ) : (
            <Link
              to={
                "/shop/erkek/" + category.code.substring(2) + "/" + category.id
              }
            >
              {category.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
