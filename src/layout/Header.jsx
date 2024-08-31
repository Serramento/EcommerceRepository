import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../actions/productReducerActions";
import NavBar from "../components/NavBar";
import { setUser } from "../actions/clientReducerActions";
import axios from "axios";

function Header() {
  const userInfo = useSelector((store) => store.clientReducer.user);
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (user) {
      setUser(user);
    }
  }, []);

  const history = useHistory();

  const axiosWithAuth = () => {
    return axios.create({
      baseURL: "https://workintech-fe-ecommerce.onrender.com/",
      headers:
        user && user.token
          ? {
              Authorization: authUser.token,
            }
          : {},
    });
  };

  const logOut = () => {
    axiosWithAuth()
      .get("logout")
      .catch((err) => console.error(err.response.message))
      .finally(() => {
        setUser();
        history.push("/login");
      });
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="font-montserrat">
      <div className="flex flex-col lg:hidden">
        <div className="flex w-[26.5rem] mx-auto justify-between px-8 pt-8">
          <h3 className="text-[#252B42] text-2xl mb-10 font-extrabold">
            DressForDay
          </h3>
          <div className="w-24 flex justify-between">
            <div>
              <i className="fa-solid fa-magnifying-glass fa-lg pt-2.5"></i>
            </div>
            <div>
              <i className="fa-solid fa-cart-shopping fa-lg pt-2.5"></i>
            </div>
            <div>
              <i className="fa-solid fa-bars fa-lg pt-2.5"></i>
            </div>
          </div>
        </div>

        <nav className="flex items-center flex-col relative">
          <NavLink to="/" exact className="text-[#737373] mt-20 text-3xl">
            Home
          </NavLink>

          <div
            className="text-[#737373] mt-7 text-3xl relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-[#737373] text-3xl">Shop</div>
            {isDropdownVisible && <NavBar className="absolute" />}
          </div>

          <NavLink to="/about" className="text-[#737373] mt-7 text-3xl">
            About
          </NavLink>
          <NavLink to="/blog" className="text-[#737373] mt-7 text-3xl">
            Blog
          </NavLink>
          <NavLink to="/contact" className="text-[#737373] mt-7 text-3xl">
            Contact
          </NavLink>
          <NavLink to="/team" className="text-[#737373] mt-7 mb-20 text-3xl">
            Team
          </NavLink>
        </nav>
        <div className="text-bluex flex flex-col text-3xl">
          {userInfo.email || user ? (
            <div>
              <div className="flex flex-row justify-center mt-5">
                <Gravatar
                  email={userInfo.email || user.email}
                  size={45}
                  style={{ margin: "10px" }}
                />
                <Link to="/profile" className="text-[#737373] pt-4 text-xl">
                  {userInfo.email || user.email}
                </Link>
              </div>
              <button onClick={() => logOut()} className="text-bluex px-2 mt-7">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <i className="fa-regular fa-user "></i>
              <Link to="/login" className="text-bluex pl-2">
                Login
              </Link>
              <span className="font-semibold pl-2">/</span>
              <Link to="/signup" className="text-bluex pl-2">
                Register
              </Link>
            </div>
          )}

          <div className="flex flex-col h-44 justify-between mt-20 mb-20">
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            <i className="fa-solid fa-cart-shopping">
              <span className="text-sm pl-3">1</span>
            </i>
            <i className="fa-regular fa-heart fa-lg">
              <span className="text-sm pl-3 font-extrabold">1</span>
            </i>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-row font-semibold justify-between h-12 text-[0.65rem] items-center bg-[#252B42] text-[#FFFFFF] px-8 ">
          <div className="flex justify-between ">
            <div className="flex flex-row pr-4">
              <i className="fa-solid fa-phone pr-1 pt-0.5"></i>
              <h6>(225) 555-0118</h6>
            </div>
            <div className="flex flex-row ">
              <i className="fa-regular fa-envelope pr-1 pt-0.5 "></i>
              <h6>michelle.rivera@example.com</h6>
            </div>
          </div>

          <h6>Follow Us and get a chance to win 80% off</h6>
          <div className="flex flex-row w-36 justify-between">
            <h6>Follow Us :</h6>
            <i className="fa-brands fa-instagram fa-lg pt-1.5"></i>
            <i className="fa-brands fa-youtube fa-lg pt-1.5"></i>
            <i className="fa-brands fa-facebook fa-lg pt-1.5"></i>
            <i className="fa-brands fa-twitter fa-lg pt-1.5"></i>
          </div>
        </div>

        <div className="flex flex-row justify-between p-7 items-center">
          <div className="flex flex-row">
            <h3 className="text-[#252B42] text-xl font-extrabold">
              DressForDay
            </h3>
            <nav className="flex items-center flex-row pl-20 ">
              <NavLink
                to="/"
                exact
                className="text-[#737373] text-xs font-bold pr-2"
              >
                Home
              </NavLink>

              <div
                className="text-[#737373] text-xs font-bold mt-1 pr-2 h-5 relative z-[9999]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-[#737373] text-xs font-bold">Shop</div>
                {isDropdownVisible && <NavBar className="absolute" />}
              </div>

              <NavLink
                to="/about"
                className="text-[#737373]  text-xs font-bold pr-2"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="text-[#737373] text-xs font-bold pr-2"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="text-[#737373] text-xs font-bold pr-2"
              >
                Contact
              </NavLink>
              <NavLink
                to="/team"
                className="text-[#737373] text-xs font-bold pr-2 "
              >
                Team
              </NavLink>
            </nav>
          </div>

          <div className="text-bluex flex flex-row text-xs ">
            <div className="flex flex-row">
              {userInfo.email || user ? (
                <div className="flex flex-row ml-5">
                  <Gravatar email={userInfo.email || user.email} size={15} />
                  <Link to="/profile" className="text-[#737373] font-bold ml-2">
                    {userInfo.email || user.email}
                  </Link>
                  <button
                    onClick={() => logOut()}
                    className="text-bluex px-2 font-semibold"
                  >
                    / Logout
                  </button>
                </div>
              ) : (
                <div>
                  <i className="fa-regular fa-user "></i>
                  <Link to="/login" className="text-bluex font-bold pl-1">
                    Login
                  </Link>
                  <span className="font-bold pl-1">/</span>
                  <Link to="/signup" className="text-bluex font-bold pl-1">
                    Register
                  </Link>
                </div>
              )}
            </div>
            <i className="fa-solid fa-magnifying-glass pl-7"></i>
            <i className="fa-solid fa-cart-shopping pl-5"></i>
            <i className="fa-regular fa-heart fa-lg pt-1.5 pl-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
