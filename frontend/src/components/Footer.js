import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-white font-semibold text-xl">B-Greener</span>
            </div>
            <p className="text-slate-400 mb-4">
              {companyInfo.tagline}
            </p>
            <p className="text-slate-400 text-sm">
              Serving industries since {companyInfo.established} from {companyInfo.location}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Certifications</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              {companyInfo.certifications.map((cert, index) => (
                <li key={index}>• {cert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;