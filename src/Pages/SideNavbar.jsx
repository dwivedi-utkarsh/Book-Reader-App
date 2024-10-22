import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className='bg-[#e1c6ab] min-h-screen flex justify-center items-center px-6'>
      {/* Menu button visible only on small screens */}
      <button
        className="sm:block md:hidden bg-[#cba886] px-4 py-2 rounded-lg text-white font-medium absolute top-10 left-6"
        onClick={toggleNavbar}
      >
        Menu
      </button>

      {/* Sidebar - Visible on larger screens or when the menu is open */}
      <div
        className={`fixed top-36 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[15%] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
        } md:translate-x-0`}
      >
        <ul className='space-y-4'>
          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/Home" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              Home
            </Link>
          </li>

          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/Contact" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              Contact
            </Link>
          </li>

          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/About" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              About
            </Link>
          </li>

          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/RateUs" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              Rate Us
            </Link>
          </li>

          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/Setting" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              Setting
            </Link>
          </li>

          <li className='bg-[#cba886] w-full py-3 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <Link to="/Blog" className="block text-lg font-medium text-gray-800 hover:text-gray-900">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
