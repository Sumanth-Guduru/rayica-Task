"use client"
import React from 'react';
import * as Icons from 'react-icons/ri'; 
import { RiHomeSmile2Line } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiFolderBold } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import { PiNotificationBold } from "react-icons/pi";
import { TbUsersPlus } from "react-icons/tb";
import { PiFolderLock } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { usePathname } from 'next/navigation';


const Sidebar = () => {

  return (
    <div className="h-screen bg-customGray text-white p-4 flex flex-col ">
     <div className="flex justify-between items-center mb-8">
  <div className="flex items-center">
    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
      {/* Icon or Logo here */}
    </div>
    <span className="ml-2 text-lg font-bold ">Untitled UI</span>
  </div>
  <span className="flex items-center text-sm">
    v4.0
    <FaExternalLinkAlt className="inline-block ml-2 " />
  </span>
</div>

      <nav className="space-y-0">
      <a href="#" className="flex items-center space-x-2 hover:bg-backgroundSoft p-2 rounded-md text-sm transition-colors duration-300 ease-in-out">
          <RiHomeSmile2Line className="inline-block mr-2 mb-1 text-2xl text-customSliver" />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><PiFolderBold className='inline-block mr-2 mb-1 text-2xl text-customSliver' />All files</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><PiFolderLock className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Private files</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><TbUsersPlus className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Shared with me</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><FiTrash2 className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Deleted files</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><FaCircleHalfStroke className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Design</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><PiNotificationBold className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Notifications</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-customHovercolour p-2 rounded-md text-sm">
          <span><IoSettingsOutline className='inline-block mr-2 mb-1 text-2xl text-customSliver' />Settings</span>
        </a>
      </nav>
      <div className="mt-auto  bg-customBlack rounded-md overflow-hidden">
        <div className="pt-2 px-2">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-400">Storage</div>
            <button className=" text-white px-4  rounded-md text-sm">Upgrade</button>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
              <div className="bg-slate-100 h-full" style={{ width: '92%' }}></div>
            </div>
           
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">9.2 GB of 10 GB used</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
