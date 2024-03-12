import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faCartShopping, faBars} from '@fortawesome/free-solid-svg-icons'


function Header() {

  return (
    <div>
      <h1>DressForDay</h1>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faCartShopping} />
      <FontAwesomeIcon icon={faBars} />

      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Product
        </NavLink>
        <NavLink
          to="/pricing"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contact"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Contact
        </NavLink>
      </nav>
    </div>


  );
}

export default Header;
