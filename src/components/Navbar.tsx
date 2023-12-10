import React, { useState } from 'react';

const Navbar: React.FC = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };

   return (
      <nav className="w-full flex flex-col lg:flex-row justify-between items-center h-[120px]">
         <div className="flex items-center justify-between w-full lg:w-auto h-[120px]">
            <a href="#" className="logo block w-[100px] bg-[#0D28A6] h-[34px]"></a>
            <button
               className="lg:hidden focus:outline-none z-50"
               onClick={toggleNav}
            >
               <svg
                  className="w-6 h-6 text-[#0D28A6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
               </svg>
            </button>
         </div>

         {/* Desktop Navigation */}
         <ul className="hidden gap-8 lg:flex lg:items-center lg:w-auto">
            <li>
               <a href="#">Our Services</a>
            </li>
            <li>
               <a href="#">Why Us</a>
            </li>
            <li>
               <a href="#">Testimonial</a>
            </li>
            <li>
               <a href="#">FAQ</a>
            </li>
            <li>
               <a href="#" className="block text-white bg-[#5CB85F] px-3 py-2">
                  Register
               </a>
            </li>
         </ul>

         {/* Mobile Navigation */}
         <ul
            className={` bg-white w-1/2 right-0 p-6 h-screen z-40 fixed pt-28 lg:hidden flex-col gap-6 ${isNavOpen ? 'flex' : 'hidden'}`}
         >
            <li>
               <a href="#">Our Services</a>
            </li>
            <li>
               <a href="#">Why Us</a>
            </li>
            <li>
               <a href="#">Testimonial</a>
            </li>
            <li>
               <a href="#">FAQ</a>
            </li>
            <li>
               <a href="#" className="block text-white bg-[#5CB85F] px-3 py-2">
                  Register
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
