import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/honeyData';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#122E25] text-[#FAF7F2] border-t border-[#1F4C3F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#183D32] border border-[#D49B28] flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                <img
                  src="/images/yssp-logo.png"
                  alt="YSSP Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-3xl font-bold text-white tracking-tight">
                  YSSP
                </p>
                <p className="text-sm text-[#D49B28] font-medium tracking-wide">
                  Yellow Sapphire Strategic Partners Pty Ltd
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#E3EADF]/95 leading-relaxed font-normal">
              Supplying pure, unpasteurised, unblended raw Australian honey directly from native forest sanctuaries. Never heated, never blended with syrups, and bottled in clean glass jars and food-grade pails.
            </p>
          </div>

          {/* Column 2: Navigation Links (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D49B28]">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#E3EADF]/85">
              <li>
                <Link to="/" className="hover:text-[#D49B28] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D49B28] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#D49B28] transition-colors">Our Honey Range</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D49B28] transition-colors">Services &amp; Wholesale</Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#D49B28] transition-colors">Quality &amp; Sourcing</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D49B28] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Honey Varieties (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D49B28]">
              Our Honey
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#E3EADF]/85">
              <li>
                <Link to="/products/wild-forest-honey" className="hover:text-[#D49B28] transition-colors">
                  Raw Wild Forest Honey
                </Link>
              </li>
              <li>
                <Link to="/products/pure-eucalyptus-honey" className="hover:text-[#D49B28] transition-colors">
                  Pure Raw Eucalyptus Honey
                </Link>
              </li>
              <li>
                <Link to="/products/wildflower-blossom-honey" className="hover:text-[#D49B28] transition-colors">
                  Raw Wildflower Blossom Honey
                </Link>
              </li>
              <li>
                <Link to="/products/raw-cut-honeycomb" className="hover:text-[#D49B28] transition-colors">
                  100% Raw Cut Honeycomb
                </Link>
              </li>
              <li>
                <Link to="/products/bulk-food-service-honey" className="hover:text-[#D49B28] transition-colors">
                  Commercial Bulk Pails &amp; Drums
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sydney Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D49B28]">
              Sydney Headquarters
            </h2>
            <div className="space-y-2.5 text-sm sm:text-base text-[#E3EADF]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D49B28] shrink-0" />
                <a href={`mailto:${BRAND_INFO.emails.wholesale}`} className="hover:text-[#D49B28] transition-colors">
                  {BRAND_INFO.emails.wholesale}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D49B28] shrink-0" />
                <span>{BRAND_INFO.phones.primary}</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Footer Quick CTA')}
                className="w-full py-2.5 px-4 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#183D32] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Wholesale Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#1F4C3F]/60 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#E3EADF]/85 gap-4">
          <p>© {new Date().getFullYear()} {BRAND_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>100% Pure Australian Honey</span>
            <span>•</span>
            <span>FSANZ Standard 2.8.2 Alignment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
