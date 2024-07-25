"use client";
import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import IOSSwitch from '../Ui/iosSwitch';
import Braveicon from "../assets/brave-icon.svg";
import Appleicon from "../assets/Apple_logo_white.svg.png";
import CircularProgress from "../Ui/progressBar";
import Mexicoflag from "../assets/Flag_of_Mexico.svg";
import Vietnamflag from "../assets/Flag_of_Vietnam.svg.png";
import Instatick from "../assets/insta-tick.svg";
import sumanth from "../assets/sumanth.jpg";

const Settings = () => {
  return (
    <div className="bg-customBlack rounded-md flex flex-col p-4 h-full overflow-hidden w-full max-w-7xl mx-auto">
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
              className="bg-customGray pl-8 pr-2 py-1 rounded-md text-sm  "
            />
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 " />
          </div>
          <button className="bg-customGray text-white py-1 px-2 rounded-md text-sm flex items-center">
            <FiPlus className="mr-1" /> Invite
          </button>
          <button className="bg-blue-600 text-white py-1 px-2 rounded-md text-sm flex items-center">Upgrade</button>
          <div className=" items-center relative hidden md:flex">
            <Image src={sumanth} alt="Profile" className="rounded-full w-7 h-7 mr-2 object-cover" />
            <Image alt='bluetick' src={Instatick} className='absolute w-3 h-3 bottom-0 left-5 top-4'/>
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

      <div className="flex-grow overflow-y-auto pr-2">
        <div className="bg-customGray p-4 rounded-md mb-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="relative flex items-center">
                <CircularProgress size={30} strokeWidth={5} percentage={80} />
                <h2 className="text-sm font-bold ml-2">Your account security is 90%</h2>
              </div>
              <p className="text-gray-400">Please review and update your password regularly.</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-CustomGray2 text-gray-400 py-1 px-2 rounded-md text-sm">Dismiss</button>
              <button className="bg-blue-600 py-1 px-2 rounded-md text-sm">Review Security</button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-bold mb-2">Basics</h3>
          <div className="border-t-2 border-customGray p-3 mb-2 flex flex-col md:flex-row items-center text-sm">
            <div className="flex-1 space-y-2">
              <p className="text-gray-400">Password</p>
              <p className='text-white'>Set a password to protect your account</p>
            </div>
            <div className="flex items-center space-x-2 md:mr-72">
              <p>●●●●●●●●●●●●●●●●</p>
              <span className="text-green-500"><FaRegCircleCheck className='text-green-500 inline-block mr-1' />Very secure</span>
            </div>
            <button className="bg-CustomGray2 py-1 px-2 rounded-md text-sm">Edit</button>
          </div>

          <div className="border-t-2 border-b-2 border-customGray p-3 rounded-md flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex-1">
              <p className="text-gray-400">Two-step verification</p>
              <p>We recommend requiring a verification code in addition to your password.</p>
            </div>
            <div className="flex items-center space-x-2 md:mr-80">
              <IOSSwitch className="mr-2" />
              <span>Two-Step verification</span>
            </div>
            <button className="bg-CustomGray2 py-1 px-2 rounded-md text-sm">Edit</button>
          </div>
        </div>

        <div className=''>
          <h3 className="text-md font-bold mb-2">Browsers and devices</h3>
          <p className="text-gray-400 mb-2 text-sm">These browsers and devices are currently signed in. Remove unauthorized devices.</p>
          
          <div className="border-t-2 border-CustomGray2 p-2 mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex-1 flex items-center">
              <div className="p-2 bg-CustomGray2 rounded-md mr-2">
                <Image src={Braveicon} alt='' className="w-4 h-4" />
              </div>
              <p className="text-white">Brave on Mac OS X</p>
            </div>
            <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start md:mr-16">
              <Image src={Vietnamflag} alt="flag" className="rounded-full w-4 h-4 mr-2 inline-block" />
              <p className="text-gray-400">Ninh Binh, Vietnam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current session</p>
              <FiTrash2 className='text-lg text-gray-600 ml-6 md:ml-12'/>
            </div>
           
          </div>

          <div className="border-t-2 border-CustomGray2 p-2 mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex-1 flex items-center">
              <div className="p-2 bg-CustomGray2 rounded-md mr-2">
                <Image src={Appleicon} alt='' className="w-4 h-4" />
              </div>
              <p className="text-white">Mia's MacBook Pro</p>
            </div>
            <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start md:mr-16">
              <Image src={Vietnamflag} alt="flag" className="rounded-full w-4 h-4 mr-2 inline-block" />
              <p className="text-gray-400">Ninh Binh, Vietnam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current session</p>
              <FiTrash2 className='text-lg text-gray-600 ml-6 md:ml-12'/>
            </div>
            
          </div>
          
          <div className="border-t-2 border-CustomGray2 p-2 mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex-1 flex items-center">
              <div className="p-2 bg-CustomGray2 rounded-md mr-2">
                <Image src={Braveicon} alt='' className="w-4 h-4" />
              </div>
              <p className="text-white">Brave on Windows</p>
            </div>
            <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start md:mr-16">
              <Image src={Mexicoflag} alt="flag" className="rounded-full w-4 h-4 mr-2 inline-block" />
              <p className="text-gray-400">Mexico City, Mexico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 month ago&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <FiTrash2 className='text-lg text-gray-600 ml-6 md:ml-12'/>
            </div>
         
          </div>
          <div className="border-t-2 border-CustomGray2 p-2 mb-2 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex-1 flex items-center">
              <div className="p-2 bg-CustomGray2 rounded-md mr-2">
                <Image src={Appleicon} alt='' className="w-4 h-4" />
              </div>
              <p className="text-white">Mia's MacBook Pro</p>
            </div>
            <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start md:mr-16">
              <Image src={Mexicoflag} alt="flag" className="rounded-full w-4 h-4 mr-2 inline-block" />
              <p className="text-gray-400">Mexico City, Mexico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 month ago&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <FiTrash2 className='text-lg text-gray-600 ml-6 md:ml-12'/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
