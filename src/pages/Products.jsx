import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle,
  SlidersHorizontal,
  ChevronRight,
  ArrowRight,
  Droplets,
  Package
} from 'lucide-react';
import { HONEY_PRODUCTS } from '../data/honeyData';

export default function Products({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Varieties' },
    { id: 'wild-forest', label: 'Wild Forest' },
    { id: 'eucalyptus', label: 'Single-Origin Eucalyptus' },
    { id: 'wildflower', label: 'Wildflower Blossom' },
    { id: 'comb', label: 'Raw Honeycomb' },
    { id: 'bulk', label: 'Commercial Bulk' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? HONEY_PRODUCTS
    : HONEY_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER WITH VIBRANT BACKGROUND IMAGE (Light Shadow for Maximum Image Clarity) */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-products-bg.jpg"
            alt="Australian raw honey harvest and honeycomb jars"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay so the golden honey products are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
            <span>100% Raw Australian Harvests</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Our Pure Honey Range
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Unpasteurised single-origin eucalyptus, dark forest nectars, and fresh raw cut honeycomb. Available in artisan glass jars and commercial food service pails.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="bg-white border-b border-stone-200/80 sticky top-[73px] z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2.5">
              <SlidersHorizontal className="w-5 h-5 text-[#D49B28] shrink-0" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#183D32] hidden sm:inline">
                Categories:
              </span>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#183D32] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-stone-700 hover:bg-stone-200/80 border border-stone-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE GRID */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/90 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-[#FAF7F2] p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-6 left-6 px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-[#183D32] border border-stone-200 shadow-2xs">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Clean, Minimal Content */}
                <div className="p-6 pt-3 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] group-hover:text-[#D49B28] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#D49B28]">
                    {product.subtitle}
                  </p>
                  <p className="text-xs text-stone-500 font-medium pt-0.5">
                    {product.packSizes.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </div>

              {/* Clean Single Action */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                <Link
                  to={`/products/${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs group-hover:bg-[#D49B28] group-hover:text-[#183D32]"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHOLESALE NOTICE BAR */}
      <section className="py-16 bg-[#183D32] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-bold">
            Looking for Bulk Food Service Pails or Private Label?
          </h2>
          <p className="text-xs sm:text-sm text-[#E3EADF]/85 font-light">
            We supply commercial bakeries, food processors, and gourmet retailers with flexible wholesale packaging from 14kg buckets to full pallet loads.
          </p>
          <div className="pt-2">
            <Link
              to="/wholesale"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#183D32] font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              <span>Explore Wholesale &amp; Bulk Formats</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
