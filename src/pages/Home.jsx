import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Droplets,
  Package,
  Compass,
  Sparkles,
  ChevronRight,
  Leaf
} from 'lucide-react';
import {
  BRAND_INFO,
  HONEY_PRODUCTS,
  HOW_WE_WORK_SIMPLE,
  WHY_CHOOSE_US_SIMPLE
} from '../data/honeyData';

export default function Home({ onOpenEnquiry }) {
  return (
    <div className="bg-[#FAF7F2] text-[#292D28] overflow-hidden">
      
      {/* 1. SOPHISTICATED MODERN HERO SECTION (Non-Sliding, Senior Frontend Designer Layout) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F2E7] via-[#FAF7F2] to-[#FAF7F2] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Clean, Impactful Sans-Serif Typography */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-none">
              
              {/* Natural Origin Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3EADF] text-[#183D32] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D49B28] animate-pulse"></span>
                <span>100% Pure Australian Raw Honey</span>
              </div>

              {/* Main Headline (Modern Sans-Serif, High Clarity) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#183D32] tracking-tight leading-[1.12]">
                Pure Australian Honey. <br />
                <span className="text-[#D49B28]">
                  Raw, Unheated &amp; Untouched.
                </span>
              </h1>

              {/* Engaging, comfortable body copy (text-base comfortable size) */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Cold-extracted under 40°C directly from pristine native eucalyptus forests and coastal wildflower sanctuaries across Australia. Never heated, never blended with syrups—living enzymes, natural pollen, and delicate floral aromas intact in every jar and wholesale pail.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-sm sm:text-base font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Explore Our Honey Range</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" />
                </Link>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Wholesale CTA')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#183D32] hover:bg-stone-100 border border-stone-300 text-sm sm:text-base font-bold tracking-wide shadow-2xs transition-all duration-200 cursor-pointer"
                >
                  <span>Wholesale Enquiry</span>
                </button>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#183D32]">100%</div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">Raw &amp; Unheated</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#183D32]">&lt; 40°C</div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">Hive Cold Extracted</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#183D32]">Zero</div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">Added Sugars / Syrups</div>
                </div>
              </div>
            </div>

            {/* Right Column: Studio-Lit Dripping Honey Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F4EEDF]">
                <img
                  src="/images/honey-hero-drip.jpg"
                  alt="Golden raw Australian honey dripping from wooden dipper into glass jar"
                  className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-cover"
                />
                
                {/* Floating Fresh Extraction Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-lg border border-stone-200 text-center max-w-[150px]">
                  <Droplets className="w-6 h-6 text-[#D49B28] mx-auto mb-1 animate-bounce" />
                  <span className="text-xs sm:text-sm font-bold text-[#183D32] leading-tight block">
                    Fresh Raw Extraction
                  </span>
                </div>

                {/* Bottom Provenance Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#183D32]/95 backdrop-blur-xs text-white p-4.5 rounded-2xl shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[#D49B28] text-xs font-bold uppercase tracking-widest block">
                      Native Provenance
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      Australian Eucalyptus &amp; Wildflower Sanctuaries
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#D49B28] bg-[#0D221C] px-3 py-1 rounded-md shrink-0">
                    100% Pure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST HIGHLIGHT BAR */}
      <section className="bg-white py-8 border-b border-stone-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#183D32] shrink-0 shadow-2xs">
                <Droplets className="w-5 h-5 text-[#D49B28]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#183D32]">100% Raw &amp; Unheated</h4>
                <p className="text-xs sm:text-sm text-stone-500">Living enzymes and pollen intact</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#183D32] shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#D49B28]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#183D32]">Zero Added Sugar</h4>
                <p className="text-xs sm:text-sm text-stone-500">No corn syrup, rice syrup or dyes</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#183D32] shrink-0 shadow-2xs">
                <Compass className="w-5 h-5 text-[#D49B28]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#183D32]">Single-Origin Forests</h4>
                <p className="text-xs sm:text-sm text-stone-500">Pristine Australian ecosystems</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#183D32] shrink-0 shadow-2xs">
                <Package className="w-5 h-5 text-[#D49B28]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#183D32]">Glass &amp; Bulk Pails</h4>
                <p className="text-xs sm:text-sm text-stone-500">From 250g jars to 14kg wholesale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "HONEY WITH NATURE" - STORY SECTION */}
      <section className="py-20 lg:py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Layered Composition with Jar & Natural Elements */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/product-wild-forest.jpg"
                  alt="Pure Raw Forest Honey Jar in natural setting"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-md border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5 text-[#D49B28]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#183D32] block">
                        Single-Origin Australian Nectar
                      </span>
                      <span className="text-xs text-stone-500">
                        Cold Gravity Settled &lt; 40°C
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D49B28] bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-stone-200">
                    100% Raw
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block">
                  The Story of Honey Begins with Nature
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
                  HONEY WITH NATURE
                </h2>
              </div>

              {/* Concise, impactful story text (Vediko-style minimalism) */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Pure honey should remain just as nature intended: raw, unpasteurised, and chemical-free. Sourced from pristine Australian native eucalyptus and wildflower bushland, our honey is cold-extracted below 40°C to preserve living enzymes, natural bee pollen, and delicate floral aromas.
              </p>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Zero added sugar, zero artificial processing—simply pure, authentic nectar bottled into sustainable glass jars and food-grade commercial supply pails.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-sm font-bold tracking-wide shadow-md transition-all"
                >
                  <span>Explore Our Honey Range</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" />
                </Link>

                <Link
                  to="/wholesale"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#183D32] hover:bg-stone-100 border border-stone-300 text-sm font-bold tracking-wide transition-all shadow-2xs"
                >
                  <span>Wholesale &amp; Bulk Supply</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR HONEY RANGE (Collections) */}
      <section className="py-20 lg:py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-2">
              Pure Natural Harvests
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
              Our Raw Australian Honey Range
            </h2>
            <p className="text-base text-stone-600 mt-3 font-normal">
              Single-origin eucalypts, dark wild forest nectars, and fresh raw cut honeycomb. Hand-poured into glass jars and wholesale food service pails.
            </p>
          </div>

          {/* Desktop Grid: 3 Clean Minimal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HONEY_PRODUCTS.map((honey) => (
              <div
                key={honey.id}
                className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/90 flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-white p-4">
                    <img
                      src={honey.image}
                      alt={honey.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-white/95 text-[#183D32] border border-stone-200 shadow-2xs">
                      {honey.categoryLabel}
                    </span>
                  </div>

                  {/* Clean, Minimal Card Content */}
                  <div className="p-6 pt-4 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] mb-1 group-hover:text-[#D49B28] transition-colors leading-snug">
                      {honey.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#D49B28]">
                      {honey.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 font-medium pt-1">
                      {honey.packSizes.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Clean, Single Prominent Action */}
                <div className="p-6 pt-0 border-t border-stone-200/70 mt-3">
                  <Link
                    to={`/products/${honey.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-sm font-bold tracking-wide transition-all shadow-xs group-hover:bg-[#D49B28] group-hover:text-[#183D32]"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#183D32] text-sm font-bold tracking-wide border border-stone-300 shadow-2xs transition-all"
            >
              <span>View Full Informational Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. "HOW WE WORK" SECTION - ELEGANT STEP JOURNEY (Vediko-Inspired Minimalist Design) */}
      <section className="py-20 lg:py-24 bg-[#F8F5EC] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EADF] text-[#183D32] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D49B28]"></span>
              <span>From Hive To Supply</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
              How We Work
            </h2>
            <p className="text-base text-stone-600 mt-2 font-normal">
              A transparent four-stage journey ensuring raw purity, ethical beekeeping, and dependable supply.
            </p>
          </div>

          {/* 4 Connected Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                icon: Leaf,
                tag: "Native Apiaries",
                title: "Ethical Hive Sourcing",
                desc: "Bees forage freely across protected Australian eucalyptus bushland. Hives are managed ethically with ample reserves left for colony welfare."
              },
              {
                step: "02",
                icon: Droplets,
                tag: "Cold Extraction",
                title: "Gravity Settling < 40°C",
                desc: "Extracted at natural hive temperature without artificial heating or micro-filtration, keeping living enzymes and natural pollen intact."
              },
              {
                step: "03",
                icon: Package,
                tag: "Clean Packaging",
                title: "Hygienic Bottling",
                desc: "Poured into flint glass jars for table enjoyment and tamper-evident food-grade pails & drums for commercial wholesale supply."
              },
              {
                step: "04",
                icon: ShieldCheck,
                tag: "Sydney Dispatch",
                title: "Traceable Delivery",
                desc: "Tested for 100% purity with full Certificate of Analysis (COA) batch documentation and dispatched directly from Sydney, Australia."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-extrabold text-[#D49B28]">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] group-hover:bg-[#183D32] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#D49B28] group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B28] block mb-1">
                      {item.tag}
                    </span>

                    <h3 className="text-xl font-bold text-[#183D32] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple Bottom CTA Banner */}
          <div className="mt-14 text-center">
            <Link
              to="/wholesale"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-sm font-bold tracking-wide shadow-md transition-all"
            >
              <span>Discuss Wholesale &amp; Bulk Supply</span>
              <ArrowRight className="w-4 h-4 text-[#D49B28]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
