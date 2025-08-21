'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#technology", label: "Technology" },
    { href: "/science", label: "Science" }, 
    { href: "/#research", label: "Research" },
    { href: "/#about", label: "About" }
  ];

  return (
    <header className="border-b border-gray-200/20 backdrop-blur-xl sticky top-0 z-50 bg-background/95">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Image
                src="/assets/logo/neurality-logo.png"
                alt="Neurality Solutions"
                width={320}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-secondary hover:text-accent transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            <motion.button 
              className="bg-accent text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-secondary hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden mt-6 pb-4 border-t border-gray-200/20 pt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-accent text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors w-full">
                Contact Us
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}