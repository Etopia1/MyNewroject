

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SignUp = ({ togglePage, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     const [loading, setLoading]=useState(true)

  const HandleSubmit = () =>{
    if (!email || !password ){
      toast.error("Please Fill All Details")
    } else {
      setLoading(false)
     const url = "https://bulkmailservice.onrender.com/api/v1/user"
     const datas = { email, password}
     axios.post(url, datas)
     .then((res)=>{
       console.log(res);
       toast.success(res.data.message)
       setLoading(true)
       // setLogin(true)
       setTimeout(()=>{
        //  setLogin(true)
         togglePage()
       }, 2000)
     })
     .catch((error)=>{
       console.log(error);
       toast.error(error.response.data)
       setLoading(true)
     })
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 
             text-white dark:text-black">Create Account</h2>
      <p
        className="text-center mb-8 text-sm 
           text-gray-300 dark:text-gray-500"
        
      >
        Sign up to get started
      </p>
      <Toaster/>
      {/* Name Field */}
     

      {/* Email Field */}
      <div className="mb-6">
        <label
          className="block mb-2 font-semibold text-sm 
             text-white dark:text-black"
          
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 ${

              bg-gray-700 border-gray-600 text-white focus:ring-blue-500
              dark:bg-white border-gray-300 dark:text-black focus:ring-blue-400"
         
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label
          className="block mb-2 font-semibold text-sm 
           text-white dark:text-black"
          
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-3 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 ${
            
              bg-gray-700 border-gray-600 text-white focus:ring-blue-500
               dark:bg-white border-gray-300 dark:text-black focus:ring-blue-400"
      
        />
      </div>

      {/* Sign-Up Button */}
      <button
        onClick={HandleSubmit}
        className="w-full py-4 rounded-lg shadow-md text-lg transform transition-all duration-300 ${
         
            bg-blue-600 hover:bg-blue-700 text-white
            dark:bg-blue-500 hover:bg-blue-600 text-white"
       
      >
      { !loading ? "Loading..." :"Sign Up" }
      </button>

      {/* Switch to Login */}
      <p className="text-center text-white dark:text-black mt-8 text-sm">
        Already have an account?{" "}
        <span
          onClick={togglePage}
          className="cursor-pointer hover:underline 
            text-blue-400 dark:text-blue-600"
         
        >
          Log In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
