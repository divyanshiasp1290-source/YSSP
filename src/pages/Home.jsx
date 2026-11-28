import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Droplets,
  Package,
  Leaf,
  Clock,
  UtensilsCrossed
} from 'lucide-react';
import {
  HONEY_PRODUCTS,
  HONEY_RECIPES
} from '../data/honeyData';

export default function Home({ onOpenEnquiry }) {
  return (
    <div className="bg-[#FAF7F2] text-[#292D28] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F2E7] via-[#FAF7F2] to-[#FAF7F2] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-none">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E3EADF] text-[#183D32] text-xs sm:text-sm font-semibold tracking-wide">
                <span>100% Pure Australian Raw Honey</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#183D32] tracking-tight leading-[1.12]">
                Pure Australian Honey. <br />
                <span className="text-[#8E620F]">
                  Raw, Unheated &amp; Untouched.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Cold-extracted under 40°C directly from pristine native eucalyptus forests and coastal wildflower sanctuaries across Australia. Never heated, never blended with syrups—living enzymes, natural pollen, and delicate floral aromas intact in every jar and wholesale pail.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-sm sm:text-base font-bold tracking-wide shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <span>Explore Our Honey Range</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Wholesale CTA')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#183D32] hover:bg-stone-100 border border-stone-300 text-sm sm:text-base font-bold tracking-wide shadow-2xs transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
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

            {/* Right Column: Honey Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-[#F4EEDF]">
                <img
                  src="/images/honey-hero-drip.jpg"
                  alt="Golden raw Australian honey dripping from wooden dipper into glass jar"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover"
                />

                <div className="bg-[#183D32] text-white px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[#D49B28] text-xs font-semibold uppercase tracking-wider block">
                      Native Provenance
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      Australian Eucalyptus &amp; Wildflower Sanctuaries
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#D49B28] bg-[#0D221C] px-3 py-1 rounded-md shrink-0">
                    100% Pure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "HONEY WITH NATURE" - STORY SECTION */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src="/images/product-wild-forest.jpg"
                  alt="Pure Raw Forest Honey Jar in natural setting"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block">
                  The Story of Honey Begins with Nature
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
                  HONEY WITH NATURE
                </h2>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Pure honey should remain just as nature intended: raw, unpasteurised, and unblended. Sourced from Australian native eucalyptus and wildflower bushland, our honey is cold-extracted below 40°C to preserve natural pollen, enzymes, and delicate floral aromas.
              </p>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Zero added sugar, zero artificial processing—simply pure, authentic nectar bottled into sustainable glass jars and food-grade commercial supply pails.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-sm font-bold tracking-wide shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <span>Explore Our Honey Range</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" aria-hidden="true" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#183D32] hover:bg-stone-100 border border-stone-300 text-sm font-bold tracking-wide transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  <span>Services &amp; Bulk Supply</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR HONEY RANGE */}
      <section className="py-16 lg:py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block mb-2">
              Pure Natural Harvests
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
              Our Raw Australian Honey Range
            </h2>
            <p className="text-base text-stone-600 mt-3 font-normal">
              Single-origin eucalypts, dark wild forest nectars, and fresh raw cut honeycomb. Hand-poured into glass jars and wholesale food service pails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HONEY_PRODUCTS.map((honey) => (
              <div
                key={honey.id}
                className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 border border-stone-200/90 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-white p-4">
                    <img
                      src={honey.image}
                      alt={honey.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-6 left-6 px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-[#183D32] border border-stone-200 shadow-2xs">
                      {honey.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 pt-4 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] mb-1 group-hover:text-[#8E620F] transition-colors leading-snug">
                      {honey.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#8E620F]">
                      {honey.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 font-medium pt-1">
                      {honey.packSizes.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-200/70 mt-3">
                  <Link
                    to={`/products/${honey.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-sm font-bold tracking-wide transition-all shadow-xs group-hover:bg-[#D49B28] group-hover:text-[#183D32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#183D32] text-sm font-bold tracking-wide border border-stone-300 shadow-2xs transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
            >
              <span>View Full Informational Catalogue</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. "HOW WE WORK" SECTION */}
      <section className="py-16 lg:py-24 bg-[#F8F5EC] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E3EADF] text-[#183D32] text-xs font-bold uppercase tracking-wider mb-3">
              From Hive To Supply
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
              How We Work
            </h2>
            <p className="text-base text-stone-600 mt-2 font-normal">
              A transparent four-stage journey ensuring raw purity, ethical beekeeping, and dependable supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                icon: Leaf,
                tag: 'Native Apiaries',
                title: 'Ethical Hive Sourcing',
                desc: 'Bees forage freely across protected Australian eucalyptus bushland. Hives are managed ethically with ample reserves left for colony welfare.'
              },
              {
                step: '02',
                icon: Droplets,
                tag: 'Cold Extraction',
                title: 'Gravity Settling < 40°C',
                desc: 'Extracted at natural hive temperature without artificial heating or micro-filtration, keeping living enzymes and natural pollen intact.'
              },
              {
                step: '03',
                icon: Package,
                tag: 'Clean Packaging',
                title: 'Hygienic Bottling',
                desc: 'Poured into flint glass jars for table enjoyment and tamper-evident food-grade pails & drums for commercial wholesale supply.'
              },
              {
                step: '04',
                icon: ShieldCheck,
                tag: 'Sydney Dispatch',
                title: 'Traceable Delivery',
                desc: 'Prepared with Certificate of Analysis (COA) batch documentation available on request and dispatched from Sydney, Australia.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-extrabold text-[#8E620F]">
                        {item.step}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32]">
                        <Icon className="w-5 h-5 text-[#8E620F]" aria-hidden="true" />
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#8E620F] block mb-1">
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

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-sm font-bold tracking-wide shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
            >
              <span>Explore Commercial Services &amp; Bulk Supply</span>
              <ArrowRight className="w-4 h-4 text-[#D49B28]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WAYS TO ENJOY RAW AUSTRALIAN HONEY */}
      <section className="py-16 lg:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block mb-2">
                Culinary &amp; Daily Rituals
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D32] tracking-tight">
                Honey Recipes &amp; Pairings
              </h2>
              <p className="text-base text-stone-600 mt-2 font-normal">
                Unheated single-origin honey retains delicate floral esters ideal for warm morning rituals, artisan cheeses, and culinary creations.
              </p>
            </div>
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#183D32] hover:text-[#8E620F] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
            >
              <span>Read Purity &amp; Handling Guide</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HONEY_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xs flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-[#183D32] border border-stone-200 shadow-2xs">
                      {recipe.tag}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-600 font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#8E620F]" aria-hidden="true" />
                        {recipe.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-[#8E620F]" aria-hidden="true" />
                        {recipe.serves}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#183D32] leading-snug">
                      {recipe.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {recipe.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AUSTRALIAN PROVENANCE & WHOLESALE TRADE CALLOUT */}
      <section className="py-16 lg:py-20 bg-[#183D32] text-white border-t border-[#225344]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D49B28]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Wholesale, Bulk Supply &amp; Batch Verification</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Supplying Retailers, Bakeries &amp; Export Partners Across Australia
              </h2>
              <p className="text-sm sm:text-base text-[#E3EADF]/95 font-normal max-w-2xl leading-relaxed">
                From master cartons of flint glass jars to 14kg/28kg food-service pails, 300kg lined export drums, and 1,400kg IBC totes—commercial consignments are prepared from Sydney with Batch Certificate of Analysis (COA) documentation available on request (subject to company confirmation) and aligned with FSANZ Standard 2.8.2 pure honey guidelines.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#102B23] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Wholesale &amp; Bulk Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/quality"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#102B23] hover:bg-[#1F4C3F] text-white border border-[#295F50] text-xs sm:text-sm font-bold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28]"
              >
                <span>View Quality &amp; Lab Testing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
