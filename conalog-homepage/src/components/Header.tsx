"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "회사소개", href: "#about" },
  { label: "솔루션", href: "#solutions" },
  { label: "기술", href: "#technology" },
  { label: "문의하기", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between px-6 md:px-12 lg:px-24 h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            conalog
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-secondary" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            상담 신청
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary text-sm font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-white text-center"
              onClick={() => setMobileOpen(false)}
            >
              상담 신청
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
