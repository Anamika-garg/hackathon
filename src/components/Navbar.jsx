import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

  return (
    <div className='navContainer h-[86px] w-[100vw] flex justify-between fixed z-50 nav-backdrop'>
        <div className="logo-sec relative w-[30%] flex items-center justify-start p-4">
            <div className="logo m-auto font-extrabold text-2xl cursor-pointer">AssistPro</div>
        </div>        
        <div className="item-sec flex items-center justify-center w-[50%]">
            <ul className='list-items gap-[25px] h-[100%] flex items-center justify-center w-[100%]'>
                <li className=' font-bold text-[17px] cursor-pointer'>Support</li>
                <li className=''><CiSearch className='h-[25px] w-[25px]'/></li>
                <li className=''><CiShoppingCart className='h-[25px] w-[25px]'/></li>
                <li className=''><CiUser className='h-[25px] w-[25px]'/></li>
            </ul>
            <ul className='list-items gap-[25px] h-[100%] flex items-center justify-center w-[100%] d-none'>
                <li className=''><CiMenuBurger className='h-[25px] w-[25px]'/></li>
            </ul>
        </div>        
    </div>
  )
}

export default Navbar