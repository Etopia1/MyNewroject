import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './EmailApp/Hedaer';
import Sidebar from './EmailApp/SideBar';
import { useSelector } from 'react-redux';

const PrivaRoue = () => {
  const token= useSelector((state) => state.token)
  return (
    <>
      <div className='w-[100%] h-[100vh]  flex items-center justify-center  '>
        <div className="w-[10%] h-[100%] hidden md:flex  ">
            <Sidebar/>
        </div>
        <div className=" w-[100%] h-[100%] md:w-[100%]  flex items-center justify-center flex-col">
          <div className=" w-[100%] h-[10%] ">
            <Header/>
          </div>
          <div className=" w-[100%] h-[90%]  items-center justify-center flex  ">
          { token ? <Outlet/> : <Navigate to='/login'/>}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default PrivaRoue;
