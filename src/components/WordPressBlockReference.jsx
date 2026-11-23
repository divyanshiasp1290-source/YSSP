import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Check, ExternalLink, X } from 'lucide-react';

export default function WordPressBlockReference() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Blueprint Trigger */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#183D32] text-white border border-[#C99A35]/60 shadow-lg hover:bg-[#295F50] text-xs font-semibold tracking-wide transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          title="View WordPress Gutenberg / Kadence Block Mapping Blueprint"
        >
          <Layers className="w-3.5 h-3.5 text-[#C99A35]" />
          <span>Kadence / WP Blueprint</span>
        </button>
      </div>

      {/* Blueprint Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-2xl bg-[#F8F5EC] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-[#C99A35]/40">
              {/* Header */}
              <div className="bg-[#183D32] px-6 py-4 text-white flex items-center justify-between border-b border-[#295F50]">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-[#C99A35]" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      WordPress Gutenberg / Kadence Architecture Blueprint
                    </h3>
                    <p className="text-[11px] text-[#C99A35]">
                      1:1 Block Mapping for WordPress Theme Implementation
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-[#295F50]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs text-stone-700">
                <div className="bg-[#E3EADF] p-3.5 rounded-xl border border-[#B7C7AE]">
                  <p className="font-bold text-[#183D32] mb-1">
                    Global Kadence Theme Palette Tokens:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-[11px] font-mono">
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#183D32]"></span>
                      <span>#183D32 (Forest)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#C99A35]"></span>
                      <span>#C99A35 (Honey)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#F8F5EC] border"></span>
                      <span>#F8F5EC (Ivory)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#E3EADF] border"></span>
                      <span>#E3EADF (Sage)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#292D28]"></span>
                      <span>#292D28 (Charcoal)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                      <span className="w-3 h-3 rounded-full bg-[#FFFFFF] border"></span>
                      <span>#FFFFFF (White)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-[#183D32] border-b pb-1">
                    Section-to-Block Modular Implementation:
                  </h4>

                  <div className="space-y-2.5">
                    <div className="border border-stone-200 p-3 rounded-lg bg-white">
                      <div className="font-bold text-[#183D32] flex items-center justify-between">
                        <span>1. Hero Section</span>
                        <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          Kadence Row Layout (Full-Width)
                        </span>
                      </div>
                      <p className="mt-1 text-stone-600">
                        Uses Kadence Row Layout with background image, dark gradient overlay, Advanced Headings (Cormorant Garamond / Playfair), and Kadence Advanced Button (Gold #C99A35).
                      </p>
                    </div>

                    <div className="border border-stone-200 p-3 rounded-lg bg-white">
                      <div className="font-bold text-[#183D32] flex items-center justify-between">
                        <span>2. How We Work (Mobile Inshorts Swipe Cards)</span>
                        <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          Kadence Tabs / Kadence Carousel / Custom Shortcode
                        </span>
                      </div>
                      <p className="mt-1 text-stone-600">
                        On desktop: Kadence Row with 4-column layout or Step Process. On mobile: Enclosed lightweight swipe block using Swiper.js or Kadence Slide Carousels mapped 1:1.
                      </p>
                    </div>

                    <div className="border border-stone-200 p-3 rounded-lg bg-white">
                      <div className="font-bold text-[#183D32] flex items-center justify-between">
                        <span>3. Our Honey Product Showcase</span>
                        <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          Kadence Post Grid / Query Loop / Info Boxes
                        </span>
                      </div>
                      <p className="mt-1 text-stone-600">
                        Easily managed via WordPress Custom Post Type (CPT: "honey_products"). Displays floral origin, MGO rating, and enquiry CTA button without WooCommerce overhead.
                      </p>
                    </div>

                    <div className="border border-stone-200 p-3 rounded-lg bg-white">
                      <div className="font-bold text-[#183D32] flex items-center justify-between">
                        <span>4. Wholesale &amp; Bulk Supply</span>
                        <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          Kadence Row Layout + Info Box (Pails, Drums, IBC)
                        </span>
                      </div>
                      <p className="mt-1 text-stone-600">
                        Clear 4-card structure showing food-service pails, steel export drums, and IBC totes with technical bullet points and spec-sheet request CTAs.
                      </p>
                    </div>

                    <div className="border border-stone-200 p-3 rounded-lg bg-white">
                      <div className="font-bold text-[#183D32] flex items-center justify-between">
                        <span>5. Wholesale &amp; Contact Enquiry Form</span>
                        <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          Kadence Advanced Form Block
                        </span>
                      </div>
                      <p className="mt-1 text-stone-600">
                        Recreates fields 1:1: Name, Company, Email, Phone, Enquiry Type dropdown, Product Interest, and Message with native Kadence honeypot spam protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-[#183D32] text-white text-xs font-semibold hover:bg-[#295F50]"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
