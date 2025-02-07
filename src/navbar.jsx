import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-gray-800 lg:text-2xl flex gap-2 items-center font-semibold">
          <img className="h-16 w-20" src="src/assets/logo.png" alt="Logo" />
          <p className="font-bold hidden lg:flex text-yellow-500">Admin Dashboard</p>
          
        </div>
        <div className="lg:hidden">
        <p className="font-bold text-yellow-500">Admin Dashboard</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-xl">✖</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex gap-4 items-center ${isOpen ? "block" : "hidden"} absolute lg:static top-24 left-0 w-full bg-white lg:w-auto lg:top-0 lg:flex-row lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 transition-all`}
        >
          <Link to="/studentlist" className="block lg:inline-block mb-2 lg:mb-0">
            <button className="w-full lg:w-auto bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-all">
              Student List
            </button>
          </Link>
          <Link to="/login" className="block lg:inline-block mb-2 lg:mb-0">
            <button className="w-full lg:w-auto bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-all">
              Login
            </button>
          </Link>
          <Link to="/signup" className="block lg:inline-block">
            <button className="w-full lg:w-auto bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
