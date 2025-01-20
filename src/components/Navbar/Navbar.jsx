import React, { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Addtoken, clearUser } from "../Global/Slice";
import Login from "../../Auth/Login";
import Signup from "../../Auth/Signup";
// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

const Navbar = ({popup , setPopup}) => {
  // const [popup , setPopup]= useState(false)
   const [login, setLogin] = useState(false)
   const token= useSelector((state) => state.token)
   console.log(token)
   const [name, setName]=useState("")
   const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [email2, setEmail2]=useState("")
   const [password2, setPassword2]=useState("")
   const dispatch = useDispatch()
   const Nav = useNavigate()

  return (
    <div className="shadow-md md:w-[100%]   bg-white dark:bg-slate-800 dark:text-white duration-200 relative  backdrop-blur-sm">
 
     
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <MdMarkEmailUnread size="30" color="blue" />
              ErmondMAiler
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
              />
              {/* <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> */}
            {/* </div> */} 

           
            {
              !token ? <button
              onClick={() => Nav("/login")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Login
              </span>
              < IoPersonCircleSharp className="text-xl text-white drop-shadow-sm cursor-pointer"  onClick={()=> setPopup(true)}/>
            </button> : <button
            onClick={()=> dispatch(clearUser())}
               
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Log out
              </span>
              <IoPersonCircleSharp className="text-xl text-white drop-shadow-sm cursor-pointer"  />
            </button>

            }

            {/* Darkmode Switch */}
            <div>
           
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {/* {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))} */}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              {/* Trending Products */}
              {/* <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"  />
              </span> */}
            </a>
            {/* <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
