import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">IT Department - HIT</h3>
          <p className="text-sm leading-relaxed">
            Shaping the future of technology through innovation, research, and excellence in education since its inception.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-blue-400 transition-colors">Academics</Link></li>
            <li><Link to="/research" className="hover:text-blue-400 transition-colors">Research</Link></li>
            <li><Link to="/members" className="hover:text-blue-400 transition-colors">Faculty</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Haldia Institute of Technology, Haldia, West Bengal, India - 721657</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span>hod_it@hithaldia.in</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+91 3224 252900</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Information Technology Department, Haldia Institute of Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
