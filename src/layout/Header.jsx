import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div class="font-montserrat">
      <div className="lg:hidden">
        <div class="flex justify-between px-10 pt-5">
          <h3 class="text-[#252B42] text-2xl mb-10 font-extrabold">
            DressForDay
          </h3>
          <div class="w-24 flex justify-between">
            <i class="fa-solid fa-magnifying-glass fa-lg pt-2.5"></i>
            <i class="fa-solid fa-cart-shopping fa-lg pt-2.5"></i>
            <i class="fa-solid fa-bars fa-lg pt-2.5"></i>
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

      <div className="hidden lg:flex lg:flex-col">
        <div class="invisible lg:visible flex flex-row font-bold justify-between h-12 text-[0.65rem] items-center bg-[#252B42] text-[#FFFFFF] px-8 ">
          <div className="flex justify-between ">
            <div className="flex flex-row pr-4">
              <i class="fa-solid fa-phone pr-1 pt-0.5"></i>
              <h6>(225) 555-0118</h6>
            </div>
            <div className="flex flex-row ">
              <i class="fa-regular fa-envelope pr-1 pt-0.5 "></i>
              <h6>michelle.rivera@example.com</h6>
            </div>
          </div>

          <h6>Follow Us and get a chance to win 80% off</h6>
          <div className="flex flex-row w-36 justify-between">
            <h6>Follow Us :</h6>
            <i class="fa-brands fa-instagram fa-lg pt-1.5"></i>
            <i class="fa-brands fa-youtube fa-lg pt-1.5"></i>
            <i class="fa-brands fa-facebook fa-lg pt-1.5"></i>
            <i class="fa-brands fa-twitter fa-lg pt-1.5"></i>
          </div>
        </div>

        <div className="flex flex-row">
          <h3 class="text-[#252B42] text-xl mb-10 font-extrabold">
            DressForDay
          </h3>
          <nav className="flex items-center flex-row">
            <NavLink to="/" exact class="text-[#737373] text-sm">
              Home
            </NavLink>
            <NavLink to="/shop" class="text-[#737373] text-sm">
              Shop
            </NavLink>
            <NavLink to="/about" class="text-[#737373]  text-sm">
              About
            </NavLink>
            <NavLink to="/blog" class="text-[#737373] text-sm">
              Blog
            </NavLink>
            <NavLink to="/contact" class="text-[#737373] text-sm">
              Contact
            </NavLink>
            <NavLink to="/pages" class="text-[#737373] text-sm">
              Pages
            </NavLink>
          </nav>
          <div>
            <i class="fa-regular fa-user"></i>
            <a>Login</a>
            <span>/</span>
            <a>Register</a>
          </div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-heart fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
