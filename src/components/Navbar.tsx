import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-black' : 'bg-transparent bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-netflix-red font-bold text-2xl tracking-tighter cursor-pointer">NETFLIX</h1>
          <ul className="hidden lg:flex gap-4 text-white text-sm">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
            <li className="cursor-pointer hover:text-gray-300">Movies</li>
            <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
            <li className="cursor-pointer hover:text-gray-300">My List</li>
          </ul>
        </div>
        
        <div className="flex items-center gap-6 text-white">
          <Search className="w-5 h-5 cursor-pointer" />
          <span className="hidden sm:inline text-sm cursor-pointer">DVD</span>
          <Bell className="w-5 h-5 cursor-pointer" />
          <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;