"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartProvider";
import { useState } from "react";

export default function Header() {
  const { open, items } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      {/* Top shipping bar */}
      <motion.div
        className="bg-[#80461B] text-white text-center text-base py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        🎀 WALK-INS ONLY except VIP lounge
      </motion.div>

      {/* Main nav */}
      <motion.div
        className="max-w-[1360px] mx-auto md:px-4 py-6 px-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Brand */}
        <Link href="/" className="tracking-[0.2em] text-sm font-semibold">
          BRAID AND BEYOND
        </Link>

        {/* Center menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link
            href="/services"
            className="hover:opacity-80 transition-opacity"
          >
            Services
          </Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* <button
            aria-label="Search"
            className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button> */}
          {/* <button
            aria-label="Account"
            className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center"
          > */}
          {/* User icon */}
          {/* <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21a8 8 0 1 0-16 0"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
          {/* </button> */}
          <button
            aria-label="Cart"
            onClick={() => {
              if (count > 0) open();
            }}
            className="relative h-10 w-10 rounded-full border border-black/10 flex items-center justify-center"
          >
            {/* Cart icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full bg-[#80461B] text-white text-xs flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          {/* Mobile hamburger menu */}
          <button
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-10 w-10 rounded-full border border-black/10 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              // Close icon (X)
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger icon
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu tray */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu tray */}
            <motion.div
              className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-lg"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <nav className="max-w-[1360px] mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-black hover:text-[#80461B] transition-colors py-2"
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-black hover:text-[#80461B] transition-colors py-2"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-black hover:text-[#80461B] transition-colors py-2"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
