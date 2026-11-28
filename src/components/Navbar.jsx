import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Honey', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Quality & Sourcing', path: '/quality' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Professional Announcement Strip */}
      <div className="bg-[#102B23] text-[#E3EADF] text-xs py-2 px-4 border-b border-[#1F4C3F]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <span className="tracking-wide text-stone-200">
            100% Pure Australian Raw Honey • Unheated &amp; Single-Origin
          </span>
          <div className="hidden md:flex items-center gap-5 text-[#E3EADF]/90 text-xs">
            <a href="mailto:wholesale@ysspartners.com" className="flex items-center gap-1.5 hover:text-[#D49B28] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28]">
              <Mail className="w-3.5 h-3.5 text-[#D49B28]" aria-hidden="true" />
              <span>wholesale@ysspartners.com</span>
            </a>
            <span className="text-[#D49B28]/60" aria-hidden="true">•</span>
            <span>Sydney, Australia</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#183D32]/95 backdrop-blur-md shadow-md py-3 border-b border-[#225344]'
            : 'bg-[#183D32] py-4 border-b border-[#225344]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28] rounded-lg p-1"
            aria-label="YSSP Australian Honey Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#0D221C] border border-[#D49B28]/50 flex items-center justify-center overflow-hidden shrink-0 shadow-inner group-hover:border-[#D49B28] transition-colors">
              <img
                src="/images/yssp-logo.png"
                alt="YSSP Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                YSSP
              </span>
              <span className="text-xs text-[#D49B28] tracking-wide font-medium">
                Australian Raw Honey
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28] ${
                    active
                      ? 'text-[#D49B28] bg-[#0D221C]/60 shadow-2xs font-semibold'
                      : 'text-[#F8F5EC] hover:text-[#D49B28] hover:bg-[#1F4C3F]/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry('General Wholesale')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D49B28] text-[#102B23] hover:bg-[#E5A83B] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Wholesale Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Header')}
              className="px-3.5 py-2 text-xs font-bold tracking-wide uppercase rounded-full bg-[#D49B28] text-[#102B23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F8F5EC] hover:bg-[#1F4C3F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#102B23] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#295F50]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#295F50]/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#183D32] border border-[#D49B28] flex items-center justify-center overflow-hidden">
                    <img src="/images/yssp-logo.png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">YSSP Raw Honey</div>
                    <div className="text-xs text-[#D49B28] tracking-wide">Australian Raw Honey</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-stone-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1.5" aria-label="Mobile Navigation">
                {navLinks.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28] ${
                        active
                          ? 'bg-[#183D32] text-[#D49B28] font-semibold border-l-4 border-[#D49B28]'
                          : 'text-[#E3EADF] hover:bg-[#183D32]/50 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${active ? 'text-[#D49B28]' : 'text-stone-400'}`} />
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquiry) onOpenEnquiry('Mobile Wholesale Button');
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D49B28] text-[#102B23] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Wholesale Enquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#295F50]/60 text-xs text-[#E3EADF]/75 space-y-1">
              <p>wholesale@ysspartners.com</p>
              <p>+61 (02) 8000 7890</p>
              <p className="text-[11px] text-stone-400">Sydney, NSW, Australia</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
