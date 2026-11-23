import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, ShieldCheck, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/honeyData';

export default function About({ onOpenEnquiry }) {
  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER WITH VIBRANT BACKGROUND IMAGE (Light Shadow for Maximum Image Clarity) */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-about-valley.jpg"
            alt="Australian native apiary and lush valley"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay so the natural landscape is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
            <span>Australian Apiculture Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            About Our Apiaries
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Honouring pure Australian forest terroir through ethical beekeeping, cold extraction below 40°C, and complete glass jar transparency.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & PHILOSOPHY */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block">
              Our Journey
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32] tracking-tight leading-tight">
              Pure Honey, The Way Nature Intended.
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
              Australia is home to untouched native eucalyptus reserves, unpolluted coastal plains, and ancient wildflower bushland. Our bees forage freely across these protected ecosystems, gathering nectar from seasonal blossoms.
            </p>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              We believe honey should never be subjected to intense industrial heating, micro-filtration, or synthetic blending. By keeping our extraction temperatures below 40°C, we protect the delicate natural floral aroma, living enzymes, and native pollen grains in every jar.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-sm font-semibold text-[#183D32]">
              <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D49B28] shrink-0" />
                <span>100% Australian Harvest</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#D49B28] shrink-0" />
                <span>Cold Strained &amp; Raw</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="/images/sourcing-apiary.jpg"
                alt="Australian native forest apiary"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE VALUES */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-2">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32] tracking-tight">
              Our Four Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "100% Raw Purity",
                desc: "Never heated above natural hive temperature, preserving all active enzymes, flavonoids, and living nutrients."
              },
              {
                num: "02",
                title: "Bee Colony Welfare",
                desc: "Hives are managed ethically. Natural honey reserves and comb stores are always left behind for queen and colony health."
              },
              {
                num: "03",
                title: "Direct Traceability",
                desc: "Every batch traces directly back to regional Australian apiaries, seasonal floral sources, and verified beekeepers."
              },
              {
                num: "04",
                title: "Glass & Eco Packaging",
                desc: "Bottled in reusable flint glass jars and certified food-grade pails to ensure zero chemical or microplastic leaching."
              }
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="text-2xl font-bold text-[#D49B28] mb-3">
                  {val.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] mb-3 group-hover:text-[#D49B28] transition-colors">
                  {val.title}
                </h3>
                <p className="text-base text-stone-700 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-[#183D32] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-bold">
            Experience Pure Australian Raw Honey
          </h3>
          <p className="text-xs sm:text-sm text-[#E3EADF]/85 font-light">
            Browse our single-origin eucalyptus and wildflower harvest collection.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#183D32] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore Honey Range</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
