import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  ArrowRight,
  Droplets,
  Package,
  Compass
} from 'lucide-react';
import { HONEY_PRODUCTS } from '../data/honeyData';

const REGIONAL_ORIGINS_SUMMARY = [
  {
    region: 'Eastern Australia',
    fullOrigin: 'Native Forest Reserves, Eastern Australia',
    productId: 'wild-forest-honey',
    suggestedUse: 'Full-bodied raw table & culinary honey (seasonal harvest calendar awaiting company confirmation).'
  },
  {
    region: 'Riverina Basin',
    fullOrigin: 'Riverina Basin & Western Slopes, Australia',
    productId: 'pure-eucalyptus-honey',
    suggestedUse: 'Gourmet kitchens, daily tea service, and hospitality chefs (smooth flow resisting crystallisation).'
  },
  {
    region: 'Coastal Valleys NSW',
    fullOrigin: 'Coastal Valleys, New South Wales',
    productId: 'wildflower-blossom-honey',
    suggestedUse: 'Daily breakfast, fruit bowls, and herbal teas.'
  }
];

function formatRetailJars(product) {
  const jars = product.packSizes.filter((s) => /jar/i.test(s));
  if (jars.length > 0) return jars.join(', ');
  if (product.id === 'raw-cut-honeycomb') {
    return 'Not in glass jars (200g Cassette, 400g Dish Tray)';
  }
  return 'Not offered in retail glass jars';
}

function formatBulkFormats(product) {
  const bulk = product.packSizes.filter((s) => /(pail|drum|ibc|shipper)/i.test(s));
  if (bulk.length > 0) return bulk.join(', ');
  return 'Awaiting company confirmation';
}

export default function Products() {
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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-semibold uppercase tracking-wider shadow-sm">
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-[#8E620F] shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#183D32]">
                Categories:
              </span>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar md:flex-wrap md:overflow-visible pb-1 md:pb-0">
              {categories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? HONEY_PRODUCTS.length
                    : HONEY_PRODUCTS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32] ${
                      activeCategory === cat.id
                        ? 'bg-[#183D32] text-white shadow-xs'
                        : 'bg-[#FAF7F2] text-stone-700 hover:bg-stone-200/80 border border-stone-300'
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
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
                <div className="p-6 pt-3 space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#183D32] group-hover:text-[#8E620F] transition-colors leading-snug">
                    {product.name}
                  </h2>
                  <p className="text-sm font-semibold text-[#8E620F]">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-stone-700">
                    {product.origin}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium pt-0.5">
                    {product.packSizes.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </div>

              {/* Clean Single Action */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                <Link
                  to={`/products/${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs group-hover:bg-[#D49B28] group-hover:text-[#102B23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3B. PRODUCT VARIETAL QUICK-COMPARISON MATRIX */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
            Side-by-Side Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
            Product Varietal Quick-Comparison Matrix
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-1.5 font-normal">
            Compare floral origins, colour profiles, tasting character, and documented retail or bulk container formats across all five varieties.
          </p>
        </div>

        {/* Desktop & Tablet Table */}
        <div className="hidden md:block overflow-x-auto rounded-3xl border border-stone-200/90 bg-white shadow-2xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#183D32] text-white text-xs uppercase tracking-wider font-semibold">
                <th className="py-4 px-5">Product / Varietal</th>
                <th className="py-4 px-5">Floral Source</th>
                <th className="py-4 px-5">Colour</th>
                <th className="py-4 px-5">Flavour Profile</th>
                <th className="py-4 px-5">Retail Jar Formats</th>
                <th className="py-4 px-5">Bulk Pail / Drum Formats</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/80 text-sm text-stone-700">
              {HONEY_PRODUCTS.map((p) => (
                <tr key={p.id} className="hover:bg-[#FAF7F2] transition-colors align-top">
                  <td className="py-4 px-5 font-bold text-[#183D32]">
                    <Link to={`/products/${p.id}`} className="hover:text-[#8E620F] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-[#183D32]">
                      {p.name}
                    </Link>
                  </td>
                  <td className="py-4 px-5">{p.floralSource}</td>
                  <td className="py-4 px-5 font-medium text-[#183D32] whitespace-nowrap">{p.color}</td>
                  <td className="py-4 px-5 font-normal">{p.flavor}</td>
                  <td className="py-4 px-5">{formatRetailJars(p)}</td>
                  <td className="py-4 px-5">{formatBulkFormats(p)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {HONEY_PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-2xs space-y-2.5 text-sm">
              <div className="flex items-start justify-between gap-2">
                <Link to={`/products/${p.id}`} className="text-base font-bold text-[#183D32] hover:text-[#8E620F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32] rounded">
                  {p.name}
                </Link>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-stone-200 text-[11px] font-semibold text-[#183D32] shrink-0">
                  {p.color}
                </span>
              </div>
              <p><strong className="text-[#183D32]">Floral Source:</strong> {p.floralSource}</p>
              <p><strong className="text-[#183D32]">Flavour:</strong> {p.flavor}</p>
              <p><strong className="text-[#183D32]">Retail Jars:</strong> {formatRetailJars(p)}</p>
              <p><strong className="text-[#183D32]">Bulk Formats:</strong> {formatBulkFormats(p)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3C. REGIONAL FLORAL ORIGINS OVERVIEW */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
            Australian Terroir
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
            Regional Floral Origins Overview
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-1.5 font-normal">
            Overview of the primary Australian regions currently referenced across our single-origin honey range.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGIONAL_ORIGINS_SUMMARY.map((entry) => {
            const product = HONEY_PRODUCTS.find((p) => p.id === entry.productId);
            if (!product) return null;
            return (
              <div
                key={entry.region}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8E620F]">
                      <Compass className="w-4 h-4" aria-hidden="true" />
                      <span>{entry.region}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF7F2] border border-stone-200 text-[#183D32]">
                      {product.color}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#183D32]">
                    {entry.fullOrigin}
                  </h3>

                  <div className="space-y-1.5 text-sm text-stone-600 font-normal">
                    <p>
                      <strong className="font-semibold text-[#183D32]">Floral Origin:</strong> {product.floralSource}
                    </p>
                    <p>
                      <strong className="font-semibold text-[#183D32]">Flavour Profile:</strong> {product.flavor}
                    </p>
                    <p>
                      <strong className="font-semibold text-[#183D32]">Suggested Use:</strong> {entry.suggestedUse}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#183D32] hover:text-[#8E620F] transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  >
                    <span>Explore {product.name}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mt-4 font-normal">
          Note: Exact harvest seasons, flowering calendars, seasonal availability windows, and specific apiary coordinates are not published and await company confirmation.
        </p>
      </section>

      {/* 3D. RAW HONEY STORAGE, CRYSTALLISATION & FORMAT GUIDANCE */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-[#8E620F]" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-[#183D32]">
                Natural Crystallisation &amp; Raw Care
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Unheated, raw honey may naturally crystallise over time—a hallmark of intact natural glucose and bee pollen. Store sealed at ambient room temperature away from direct sunlight; gently stand the jar in warm water below 40°C if liquid flow is preferred.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 text-[#8E620F]" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-[#183D32]">
                Retail Jars vs. Commercial Bulk &amp; Biosecurity
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                Varieties are offered in recyclable flint glass jars (225g–1kg) where listed, and food-grade 14kg/28kg pails or 300kg export drums for commercial buyers. Dispatches from Sydney are prepared in alignment with FSANZ Standard 2.8.2 pure honey guidelines (state-specific biosecurity rules subject to company confirmation).
              </p>
            </div>
          </div>
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
              to="/services"
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
