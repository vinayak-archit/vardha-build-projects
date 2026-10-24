'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/vardha-build-projects' : '';

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-3 min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={`${basePath}/images/vardha-logo.png`}
              alt="Vardha Build Projects logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain shrink-0"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-700 text-sm whitespace-nowrap">
            <a href="#services" className="hover:text-cyan-600 transition-colors">Services</a>
            <a href="#puf-specs" className="hover:text-cyan-600 transition-colors">PUF Specifications</a>
            <a href="#process" className="hover:text-cyan-600 transition-colors">Construction Process</a>
            <a href="#benefits" className="hover:text-cyan-600 transition-colors">Why Choose Us</a>
            <a href="#projects" className="hover:text-cyan-600 transition-colors">Featured Projects</a>
          </div>

          <div className="hidden sm:flex items-center gap-3 whitespace-nowrap">
            <button
              onClick={onOpenQuote}
              className="soft-hover bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-semibold px-4 lg:px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm"
            >
              <span>Get Instant Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Services</a>
          <a href="#puf-specs" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-cyan-600">PUF Specs</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Construction Process</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Projects</a>
          <button
            onClick={() => { setIsMenuOpen(false); onOpenQuote(); }}
            className="w-full mt-2 bg-cyan-600 text-white font-semibold py-2.5 rounded-lg shadow"
          >
            Get Instant Quote
          </button>
        </div>
      )}
    </nav>
  );
};