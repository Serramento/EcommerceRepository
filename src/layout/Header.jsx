import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div class="flex flex-wrap w-full mx-0 ">
      <div class="">
        <p class="text-blue-600">DressForDay</p>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <nav className="flex flex-wrap items-center text-base justify-center">
        <NavLink to="/" exact class="">
          Home
        </NavLink>
        <NavLink to="/product" class="">
          Product
        </NavLink>
        <NavLink to="/pricing" class="">
          Pricing
        </NavLink>
        <NavLink to="/contact" class="">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
