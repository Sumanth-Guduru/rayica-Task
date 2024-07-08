"use client";
import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import IOSSwitch from '../Ui/iosSwitch';
import Braveicon from "../assets/brave-icon.svg";
import Appleicon from "../assets/Apple_logo_white.svg.png";
import { FiTrash2 } from "react-icons/fi";
import CircularProgress from "../Ui/progressBar";

const Settings = () => {
  return (
    <div className="bg-customBlack rounded-md flex flex-col p-4 h-full overflow-hidden w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Mia de Silva</h1>
          <p className="text-gray-400 text-sm">Manage your details and preferences here.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-customGray pl-8 pr-2 py-1 rounded-md text-sm"
            />
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="bg-customGray text-white py-1 px-2 rounded-md text-sm flex items-center">
            <FiPlus className="mr-1" /> Invite
          </button>
          <button className="bg-blue-600 text-white py-1 px-2 rounded-md text-sm flex items-center">Upgrade</button>
          <div className="flex items-center relative">
  <img src="https://via.placeholder.com/24" alt="Profile" className="rounded-full w-6 h-6 mr-2" />
  <svg className="w-3 h-3 fill-blue-500 absolute bottom-0 left-4 top-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1c-2.15 0-4.14.85-5.64 2.36C4.85 4.86 4 6.85 4 9s.85 4.14 2.36 5.64c1.5 1.5 3.49 2.36 5.64 2.36s4.14-.85 5.64-2.36C19.14 13.14 20 11.15 20 9s-.85-4.14-2.36-5.64C16.14 1.85 14.15 1 12 1zM9.95 15.46L6 11.5l1.41-1.41 2.54 2.54 5.58-5.58L18 8.93 9.95 15.46z"/>
  </svg>
</div>

        </div>
      </div>

      <div className="flex flex-wrap space-x-2 mb-4 text-sm">
        <a href="#" className="text-gray-400 hover:text-white">General</a>
        <a href="#" className="text-white font-bold">Security</a>
        <a href="#" className="text-gray-400 hover:text-white">Billing</a>
        <a href="#" className="text-gray-400 hover:text-white">Notifications</a>
        <a href="#" className="text-gray-400 hover:text-white">Apps</a>
        <a href="#" className="text-gray-400 hover:text-white">Branding</a>
        <a href="#" className="text-gray-400 hover:text-white">Refer a friend</a>
        <a href="#" className="text-gray-400 hover:text-white">Sharing</a>
      </div>

      <div className="bg-customBlack p-4 rounded-md mb-4 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="relative flex items-center">
           
              <CircularProgress size={30} strokeWidth={5} percentage={80}  />
              <h2 className="text-lg font-bold ml-2">Your account security is 90%</h2>
            </div>
            <p className="text-gray-400">Please review and update your password regularly.</p>
          </div>
          <div className="flex space-x-2">
          <button className="bg-gray-700 text-gray-400 py-1 px-2 rounded-md text-sm">Dismiss</button>
            <button className="bg-blue-600 py-1 px-2 rounded-md text-sm">Review Security</button>
            
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-bold mb-2">Basics</h3>
        <div className="border-t border-customGray p-3 mb-2 flex flex-col md:flex-row items-center text-sm">
          <div className="flex-1 space-y-2">
            <p className="text-gray-400">Password</p>
            <p className='text-white'>Set a password to protect your account</p>
          </div>
          <div className="flex items-center space-x-2">
            <p>●●●●●●●●●●●●●●●●</p>
            <span className="text-green-500"><FaRegCircleCheck className='text-green-500 inline-block mr-1' />Very secure</span>
          </div>
          <button className="bg-customBlack text-gray-400 py-1 px-2 rounded-md text-sm">Edit</button>
        </div>

        <div className="border-t border-b border-customGray p-3 rounded-md flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex-1">
            <p className="text-gray-400">Two-step verification</p>
            <p>We recommend requiring a verification code in addition to your password.</p>
          </div>
          <div className="flex items-center space-x-2">
            <IOSSwitch className="mr-2" />
            <span>Two Factor</span>
          </div>
          <button className="bg-customGray text-gray-400 py-1 px-2 rounded-md text-sm">Edit</button>
        </div>
      </div>

      <div>
        
        <h3 className="text-md font-bold mb-2">Browsers and devices</h3>
     
        <p className="text-gray-400 mb-2 text-sm">These browsers and devices are currently signed in. Remove unauthorized devices.</p>
        
        <div className="border-t border-CustomGray2 p-3  mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex-1 flex items-center">
          <div className="p-2 bg-gray-600 rounded-md mr-2">
            <Image src={Braveicon} alt='' className="w-4 h-4" />
          </div>
          <p className="text-white">Brave on Mac OS X</p>
        </div>
        <div>
          <p className="text-gray-400 mr-10">Ninh Binh, Vietnam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current session</p>
        </div>
      

       
        <FiTrash2 className='text-lg text-gray-600'/>
      </div>

      
        <div className="border-t border-CustomGray2 p-3  mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
          
          <div className="flex-1 flex items-center">
          <div className="p-2 bg-gray-600 rounded-md mr-2">
            <Image src={Appleicon} alt='' className="w-4 h-4" />
          </div>
  <p className="text-white">Mia's MacBook Pro</p>
</div>
          <div>
            <p className="text-gray-400 mr-10">Ninh Binh, Vietnam &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current session</p>
          </div>
          
        
          <FiTrash2 className='text-lg text-gray-600'/>
        </div>
        <div className="border-t border-CustomGray2 p-3 mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex-1 flex items-center">
        <div className="p-2 bg-gray-600 rounded-md mr-2">
            <Image src={Braveicon} alt='' className="w-4 h-4" />
          </div>
  <p className="text-white">Brave on Mac OS X</p>
</div>
          <div>
            <p className="text-gray-400 mr-12">Mexico City, Mexico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 month ago</p>
          </div>
          <FiTrash2 className='text-lg text-gray-600'/>
        </div>
        <div className="border-t border-CustomGray2 p-3 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex-1 flex items-center">
        <div className="p-2 bg-gray-600 rounded-md mr-2">
            <Image src={Appleicon} alt='' className="w-4 h-4" />
          </div>
  <p className="text-white">Mia's MacBook Pro</p>
</div>
          <div>
          <p className="text-gray-400 mr-12">Mexico City, Mexico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 month ago</p>
          </div>
          <FiTrash2 className='text-lg text-gray-600'/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
