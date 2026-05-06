"use client";

import { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenDoc: (docId: string) => void;
}

export default function Header({ onOpenDoc }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDocsDropdownOpen, setIsDocsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Equipment", href: "#equipment" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-batech-blue rounded-md flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <span className={`font-black text-2xl tracking-tight ${isScrolled ? "text-batech-blue" : "text-white"}`}>
                BA TECH
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? "text-gray-700" : "text-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Docs Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDocsDropdownOpen(true)}
                onMouseLeave={() => setIsDocsDropdownOpen(false)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? "text-gray-700" : "text-gray-100"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>기술 자료실</span>
              </button>

              {isDocsDropdownOpen && (
                <div
                  className="absolute right-0 top-full pt-2 w-48"
                  onMouseEnter={() => setIsDocsDropdownOpen(true)}
                  onMouseLeave={() => setIsDocsDropdownOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <button
                      onClick={() => onOpenDoc("company_profile")}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-batech-light hover:text-batech-blue transition-colors"
                    >
                      지명원
                    </button>
                    <button
                      onClick={() => onOpenDoc("manual")}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-batech-light hover:text-batech-blue transition-colors"
                    >
                      유지관리지침서
                    </button>
                    <button
                      onClick={() => onOpenDoc("photos")}
                      className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-batech-light hover:text-batech-blue transition-colors"
                    >
                      사진대장
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-batech-blue"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">기술 자료실</p>
              <button
                onClick={() => { onOpenDoc("company_profile"); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-batech-blue"
              >
                지명원
              </button>
              <button
                onClick={() => { onOpenDoc("manual"); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-batech-blue"
              >
                유지관리지침서
              </button>
              <button
                onClick={() => { onOpenDoc("photos"); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-batech-blue"
              >
                사진대장
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
