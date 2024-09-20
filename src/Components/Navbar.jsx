import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#657ED4] py-4 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="flex items-center">
          <img
            src="logo.jpg"
            alt="Logo"
            className="h-10 md:h-16 hover:opacity-80"
          />
        </div>

        <div className="hidden md:flex items-center bg-gray-800 p-2 rounded-sm w-1/2 lg:w-1/3 xl:w-1/4">
          <CiSearch className="text-white mr-2 hover:text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-transparent rounded-sm border-none outline-none text-white w-full hover:bg-gray-700"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/Jobs" className="text-white hover:text-gray-300">
            Jobs
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/PlansAndSignUp" className="text-white hover:text-gray-300">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex space-x-4">
          {location.pathname === "/Jobs" ? (
            <button className="bg-white text-black py-2 px-4 rounded-sm hover:bg-gray-200">
              Buy Now
            </button>
          ) : (
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-white text-black py-2 px-4 border-none rounded-3xl hover:bg-blue-700 hover:text-black shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-700">
                Sign In
              </button>
              <button className="bg-white text-black py-2 px-4 border-none rounded-3xl hover:bg-orange-700 hover:text-black shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-700">
                Sign Up
              </button>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="bg-[#657ED4] text-blue-500 py-2 rounded-full hover:bg-blue-500 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="108"
              height="20"
              viewBox="0 0 108 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0999756 6.49961C0.0999756 4.93483 0.911223 3.43415 2.35525 2.32768C3.79928 1.22122 5.75781 0.599609 7.79998 0.599609H100.2C102.242 0.599609 104.201 1.22122 105.645 2.32768C107.089 3.43415 107.9 4.93483 107.9 6.49961C107.9 8.06439 107.089 9.56507 105.645 10.6715C104.201 11.778 102.242 12.3996 100.2 12.3996H7.79998C5.75781 12.3996 3.79928 11.778 2.35525 10.6715C0.911223 9.56507 0.0999756 8.06439 0.0999756 6.49961ZM0.0999756 35.9996C0.0999756 34.4348 0.911223 32.9341 2.35525 31.8277C3.79928 30.7212 5.75781 30.0996 7.79998 30.0996H100.2C102.242 30.0996 104.201 30.7212 105.645 31.8277C107.089 32.9341 107.9 34.4348 107.9 35.9996C107.9 37.5644 107.089 39.0651 105.645 40.1715C104.201 41.278 102.242 41.8996 100.2 41.8996H7.79998C5.75781 41.8996 3.79928 41.278 2.35525 40.1715C0.911223 39.0651 0.0999756 37.5644 0.0999756 35.9996ZM0.0999756 65.4996C0.0999756 63.9348 0.911223 62.4341 2.35525 61.3277C3.79928 60.2212 5.75781 59.5996 7.79998 59.5996H100.2C102.242 59.5996 104.201 60.2212 105.645 61.3277C107.089 62.4341 107.9 63.9348 107.9 65.4996C107.9 67.0644 107.089 68.5651 105.645 69.6715C104.201 70.778 102.242 71.3996 100.2 71.3996H7.79998C5.75781 71.3996 3.79928 70.778 2.35525 69.6715C0.911223 68.5651 0.0999756 67.0644 0.0999756 65.4996Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-4">
            <a href="/home" className="text-blue-500 hover:text-blue-700">
              Home
            </a>
            <a href="/Jobs" className="text-blue-500 hover:text-blue-700">
              Jobs
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              About
            </a>
            <a
              href="/PlansAndSignUp"
              className="text-blue-500 hover:text-blue-700"
            >
              Pricing
            </a>
            {location.pathname === "/Jobs" ? (
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Buy Now
              </button>
            ) : (
              <>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
