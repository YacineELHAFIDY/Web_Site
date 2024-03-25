import React, { useState } from 'react';
import Logo from "../images/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className=' relative max-w-[1440px] mx-auto flex justify-between items-center py-8 px-8'>
            <div>
                <img src={Logo} className='w-[60px] h-[40px]'/>
            </div>
            <div className='hidden md:flex'>
                <ul className='inter-p flex justify-between items-center gap-16' style={{fontSize:"18px"}}>
                    <li className='hover:text-[#FFCE8A] cursor-pointer'>Home</li>
                    <li className='hover:text-[#FFCE8A] cursor-pointer'>New</li>
                    <li className='hover:text-[#FFCE8A] cursor-pointer'>Popular</li>
                    <li className='hover:text-[#FFCE8A] cursor-pointer'>Trending</li>
                    <li className='hover:text-[#FFCE8A] cursor-pointer'>Categories</li>
                </ul>
            </div>
            <div className='md:hidden block'  onClick={()=>setShowNav(!showNav)}>
            <RxHamburgerMenu size={50} className='cursor-pointer'/>
            </div>
            <div className={`absolute bg-black opacity-55 inset-0 h-screen ${showNav ? "ease-in duration-700 block": "ease-in-out duration-700 hidden"}`}></div>
            <div className={ `h-screen px-4 bg-white absolute ${showNav ? "ease-in duration-700 top-0 right-0": "ease-in-out duration-700 top-0 right-[-100%] opacity-0"} pt-4 w-[60%]` } >
                <IoMdClose onClick={()=>setShowNav(!showNav)} size={60} className='cursor-pointer ml-[80%] mb-24'/>
            <ul className='.inter-m flex flex-col justify-between items-start gap-10 ' style={{fontSize:"22px"}}>
                    <li id='li' className=' hover:text-[#FFCE8A] cursor-pointer '>Home</li>
                    <li id='li' className='hover:text-[#FFCE8A] cursor-pointer '>New</li>
                    <li id='li' className=' hover:text-[#FFCE8A] cursor-pointer '>Popular</li>
                    <li id='li' className=' hover:text-[#FFCE8A] cursor-pointer '>Trending</li>
                    <li id='li' className=' hover:text-[#FFCE8A] cursor-pointer '>Categories</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
