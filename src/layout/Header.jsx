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
    <div class="font-montserrat ">
      <div class="flex justify-between">
        <h3 class="text-[#252B42] text-2xl mb-10 font-extrabold">
          DressForDay
        </h3>
        <div class="w-28 flex justify-between">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>

      <nav className="flex items-center flex-col h-96">
        <NavLink to="/" exact class="text-[#737373] mt-20 text-3xl">
          Home
        </NavLink>
        <NavLink to="/product" class="text-[#737373] mt-7 text-3xl">
          Product
        </NavLink>
        <NavLink to="/pricing" class="text-[#737373] mt-7 text-3xl">
          Pricing
        </NavLink>
        <NavLink to="/contact" class="text-[#737373] mt-7 mb-20 text-3xl">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
