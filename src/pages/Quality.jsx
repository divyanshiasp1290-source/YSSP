import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Droplets,
  ShieldCheck,
  Leaf,
  Compass,
  ArrowRight,
  Package,
  Heart
} from 'lucide-react';
import { RAW_VS_COMMERCIAL_COMPARISON } from '../data/honeyData';

export default function Quality({ onOpenEnquiry }) {
  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER WITH VIBRANT BACKGROUND IMAGE (Light Shadow for Maximum Image Clarity) */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nature-section-bg.jpg"
            alt="Pristine native Australian forest reserve"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay so the pristine native forest is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
            <span>Ethical Apiculture &amp; Purity</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Quality &amp; Sourcing
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Pure, unpasteurised honey harvested ethically from untouched Australian eucalyptus forests and wildflower meadows.
          </p>
        </div>
      </section>

      {/* 2. THE THREE PILLARS OF OUR HONEY (Clean & Simple) */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-6">
                <Leaf className="w-7 h-7 text-[#D49B28]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-3">
                1. Pristine Native Flora
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                Our bee sanctuaries are located deep in remote Australian eucalyptus reserves, far away from synthetic agricultural chemicals and city pollution.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              • Single-origin forest nectar
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-6">
                <Droplets className="w-7 h-7 text-[#D49B28]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-3">
                2. Cold Gravity Settled
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                Extracted under 40°C (matching natural hive warmth). Never heated, never ultra-filtered. Living invertase enzymes and native bee pollen remain intact.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              • Raw &amp; unpasteurised integrity
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-6">
                <ShieldCheck className="w-7 h-7 text-[#D49B28]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-3">
                3. Zero Added Syrups
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                Guaranteed 100% authentic honey. Free from corn syrup, rice syrup, invert sugar, or artificial flavorings. Tested for purity and natural Brix density.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              • Verified authentic floral honey
            </div>
          </div>
        </div>
      </section>

      {/* 3. APIARY SANCTUARY SHOWCASE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
          <img
            src="/images/sourcing-apiary.jpg"
            alt="Australian native forest apiary with colorful wooden bee boxes in a sunlit meadow"
            className="w-full h-[360px] sm:h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#183D32]/90 via-[#183D32]/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-xl text-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28]">
                Ethical Australian Bee Sanctuaries
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Caring for the Bees That Care for Nature.
              </h3>
              <p className="text-xs sm:text-sm text-[#E3EADF]/90 leading-relaxed font-light">
                We practice sustainable seasonal hive migration, respecting natural brood cycles and always leaving ample natural honey stores for colony wintering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RAW HONEY VS COMMERCIAL HONEY (Simple, Clear Comparison Table) */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-2">
            The Difference You Can Taste
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32]">
            Raw Forest Honey vs. Commercial Supermarket Honey
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
          <div className="grid grid-cols-12 bg-[#183D32] text-white p-4 sm:p-5 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3">Feature</div>
            <div className="col-span-4 sm:col-span-5 text-[#D49B28]">Our Raw Forest Honey</div>
            <div className="col-span-4 sm:col-span-4 text-stone-300">Commercial Processed Honey</div>
          </div>

          <div className="divide-y divide-stone-100 text-sm sm:text-base text-stone-700">
            {RAW_VS_COMMERCIAL_COMPARISON.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FAF7F2] transition-colors">
                <div className="col-span-4 sm:col-span-3 font-semibold text-[#183D32]">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-5 font-medium text-emerald-800 flex items-start gap-2 pr-2">
                  <CheckCircle className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                  <span>{row.raw}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-stone-500 font-light">
                  {row.commercial}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-16 bg-[#183D32] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-bold">
            Taste the Pure Forest Difference
          </h3>
          <p className="text-sm sm:text-base text-[#E3EADF]/90 font-light">
            Ready to explore our single-origin eucalyptus and wild forest honey varieties?
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/products"
              className="px-8 py-3.5 rounded-full bg-[#D49B28] text-[#183D32] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#E5A83B] transition-all"
            >
              Explore Honey Range
            </Link>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Quality Page CTA')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold tracking-wide border border-white/20 transition-all cursor-pointer"
            >
              Wholesale Enquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
