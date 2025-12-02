import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { NavItem } from "../../types.ts";
import hitLogo from "../assets/hit-logo.jpg";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Members", path: "/members" },
  { label: "Gallery", path: "/gallery" },
  { label: "Academics", path: "/academics" },
  { label: "Student Chapter", path: "/students-chapter" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2 group'>
          <div className='w-14 h-14 min-w-[40px]'>
            <img src={hitLogo} alt='hit-logo' />
          </div>
          <div className='text-xl font-bold pl-1 bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent max-w-[210px]'>
            INFORMATION TECHNOLOGY
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center space-x-6'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-1 py-1 text-[14px] font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-500"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId='underline'
                  className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 rounded-full'
                />
              )}
            </Link>
          ))}
          <Link to='/login'>
            <button className='px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5'>
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className='lg:hidden p-2 text-slate-600 hover:text-blue-600'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-white border-t'
          >
            <div className='flex flex-col px-6 py-4 space-y-4'>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-slate-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to='/login' onClick={() => setIsOpen(false)}>
                <button className='w-full px-5 py-3 text-center font-semibold text-white bg-blue-600 rounded-lg shadow-md'>
                  Login
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
