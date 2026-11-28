import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileCheck2
} from 'lucide-react';
import { HONEY_PRODUCTS } from '../data/honeyData';

export default function ProductDetail({ onOpenEnquiry }) {
  const { id } = useParams();
  const product = HONEY_PRODUCTS.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.packSizes?.[0] || '');
  const [openAccordion, setOpenAccordion] = useState(0);
  const accordionRefs = useRef([]);

  useEffect(() => {
    if (product?.packSizes?.length) {
      setSelectedSize(product.packSizes[0]);
      setOpenAccordion(0);
    }
  }, [id, product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Other products for quick browsing
  const relatedProducts = HONEY_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs text-stone-600" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#183D32] transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
          <Link to="/products" className="hover:text-[#183D32] transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]">Our Honey</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
          <span className="text-[#183D32] font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Product Image & Clean Origin Caption */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-stone-200/80 aspect-square max-h-[520px] mx-auto shadow-xs flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover flex-1"
                />

                <div className="bg-[#183D32] text-white px-4 py-3 text-xs sm:text-sm flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[#D49B28] font-semibold block text-xs uppercase tracking-wider">
                      Harvest Origin
                    </span>
                    <span className="text-stone-100 font-medium">
                      {product.origin}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#D49B28] bg-[#102B23] px-2.5 py-1 rounded shrink-0">
                    {product.color}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Enquiry Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E3EADF] text-[#183D32] mb-2.5">
                  {product.categoryLabel}
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold text-[#183D32] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#8E620F] mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Short Natural Description */}
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Tasting Profile */}
              {product.tastingNotes && (
                <div className="text-sm text-stone-700 bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200/90 space-y-1.5">
                  <div>
                    <strong className="text-[#183D32]">Aroma:</strong> {product.tastingNotes.aroma}
                  </div>
                  <div>
                    <strong className="text-[#183D32]">Taste:</strong> {product.tastingNotes.taste}
                  </div>
                  <div>
                    <strong className="text-[#183D32]">Texture:</strong> {product.tastingNotes.finish}
                  </div>
                </div>
              )}

              {/* Available Sizes / Formats */}
              <div className="space-y-2.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32]">
                  Available Sizes &amp; Supply Packaging
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32] ${
                        selectedSize === size
                          ? 'bg-[#183D32] text-white shadow-sm ring-2 ring-[#183D32]'
                          : 'bg-[#FAF7F2] text-stone-700 hover:bg-stone-200/80 border border-stone-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="text-xs sm:text-sm text-stone-600 pt-1">
                    <strong className="text-[#183D32]">Selected Format:</strong>{' '}
                    {/(pail|drum|ibc|shipper)/i.test(selectedSize)
                      ? 'Commercial Food-Service & Bulk Supply format (pallet & contract pricing available on enquiry).'
                      : 'Retail & Hospitality Table format (also supplied in master cartons for stockists and cafés).'}
                  </p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${product.name} (${selectedSize})`)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-sm font-bold tracking-wide shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <span>Enquire About This Honey</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onOpenEnquiry &&
                    onOpenEnquiry(`${product.name} (${selectedSize}) – Batch COA & Sample`, 'Wholesale Enquiry')
                  }
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#E3EADF] text-[#183D32] text-sm font-bold border border-[#183D32]/30 transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <FileCheck2 className="w-4 h-4 text-[#8E620F]" aria-hidden="true" />
                  <span>Request Batch COA / Sample</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specifications & Collapsible Information */}
          <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block">
                Product Specifications
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#183D32]">
                Origin &amp; Varietal Profile
              </h2>
              <div className="rounded-2xl border border-stone-200/80 overflow-hidden bg-[#FAF7F2] divide-y divide-stone-200/70 text-sm">
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Harvest Origin</span>
                  <span className="col-span-2 text-stone-700">{product.origin}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Floral Source</span>
                  <span className="col-span-2 text-stone-700">{product.floralSource}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Colour Profile</span>
                  <span className="col-span-2 text-stone-700">{product.color}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Pack Formats</span>
                  <span className="col-span-2 text-stone-700">{product.packSizes.join(' • ')}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Extraction</span>
                  <span className="col-span-2 text-stone-700">Cold gravity settled below 40°C (Unpasteurised)</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Food Standard</span>
                  <span className="col-span-2 text-stone-700">Prepared in alignment with FSANZ Standard 2.8.2 pure honey guidelines (formal records subject to company confirmation)</span>
                </div>
                <div className="grid grid-cols-3 p-3.5">
                  <span className="font-bold text-[#183D32]">Commercial Supply</span>
                  <span className="col-span-2 text-stone-700">
                    <Link to="/services" className="text-[#183D32] font-semibold underline hover:text-[#8E620F] focus-visible:outline-2 focus-visible:outline-[#183D32]">
                      View Bulk Pails, Drums &amp; Packaging Matrix →
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block">
                Buyer &amp; Handling Notes
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#183D32]">
                Handling, Applications &amp; Storage
              </h2>
              <div className="space-y-2.5">
                {[
                  {
                    title: 'Benefits & Raw Purity',
                    body: `${product.highlights.join('. ')}. Cold-extracted below 40°C without pasteurisation or micro-filtration so natural bee pollen and living enzymes remain intact.`
                  },
                  {
                    title: 'Commercial & Culinary Uses',
                    body: `Featuring ${product.flavor.toLowerCase()} Suitable for gourmet retail shelves, daily breakfast and tea service, artisanal cheese pairings, bakery formulations, and food-service kitchens.`
                  },
                  {
                    title: 'Storage & Natural Crystallisation',
                    body: 'Store tightly sealed at cool ambient temperatures (18°C–24°C) away from direct sunlight. Natural crystallisation in unheated raw honey is proof of raw purity—place gently in warm water under 40°C to reliquefy.'
                  }
                ].map((item, idx, arr) => {
                  const isOpen = openAccordion === idx;
                  const triggerId = `product-accordion-trigger-${idx}`;
                  const panelId = `product-accordion-panel-${idx}`;

                  const handleKeyDown = (e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      accordionRefs.current[(idx + 1) % arr.length]?.focus();
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      accordionRefs.current[(idx - 1 + arr.length) % arr.length]?.focus();
                    } else if (e.key === 'Home') {
                      e.preventDefault();
                      accordionRefs.current[0]?.focus();
                    } else if (e.key === 'End') {
                      e.preventDefault();
                      accordionRefs.current[arr.length - 1]?.focus();
                    }
                  };

                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-stone-200/80 bg-[#FAF7F2]"
                    >
                      <button
                        ref={(el) => {
                          accordionRefs.current[idx] = el;
                        }}
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                        onKeyDown={handleKeyDown}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#183D32]">{item.title}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#183D32] shrink-0" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-600 shrink-0" aria-hidden="true" />
                        )}
                      </button>
                      {isOpen && (
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={triggerId}
                          className="px-4 pb-4 pt-2 text-sm text-stone-700 leading-relaxed font-normal border-t border-stone-200/60"
                        >
                          {item.body}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Other Varieties (Simple 3 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
              Natural Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
              Explore Other Raw Varieties
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-bold text-[#183D32] hover:text-[#8E620F] transition-colors hidden sm:inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#183D32]"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col justify-between p-5 group"
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-[#183D32] text-[#D49B28]">
                    {rel.categoryLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#183D32] mb-1">
                  {rel.name}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                  {rel.flavor}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/products/${rel.id}`}
                  className="text-xs font-bold text-[#183D32] hover:text-[#8E620F] transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]"
                >
                  View Details →
                </Link>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(rel.name)}
                  className="px-3 py-1.5 rounded-full bg-[#FAF7F2] text-xs font-semibold text-[#183D32] hover:bg-[#183D32] hover:text-white transition-all"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
