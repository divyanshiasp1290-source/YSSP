import React from 'react';
import {
  CheckCircle,
  Droplets,
  ShieldCheck,
  Leaf,
  Compass,
  FileCheck2,
  FlaskConical,
  ClipboardCheck
} from 'lucide-react';
import { RAW_VS_COMMERCIAL_COMPARISON } from '../data/honeyData';

export default function Quality({ onOpenEnquiry }) {
  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nature-section-bg.jpg"
            alt="Pristine native Australian forest reserve"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-semibold uppercase tracking-wider shadow-sm">
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
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-5">
                <Leaf className="w-6 h-6 text-[#8E620F]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#183D32] mb-3">
                1. Pristine Native Flora
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                Our beekeeping partners harvest in remote Australian eucalyptus reserves, away from urban industrial corridors.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              Single-origin forest nectar
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-5">
                <Droplets className="w-6 h-6 text-[#8E620F]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#183D32] mb-3">
                2. Cold Gravity Settled
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                Extracted under 40°C (matching natural hive warmth). Never flash-heated, never ultra-filtered—keeping natural pollen and enzyme character intact.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              Raw &amp; unpasteurised integrity
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/30 flex items-center justify-center text-[#183D32] mb-5">
                <ShieldCheck className="w-6 h-6 text-[#8E620F]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#183D32] mb-3">
                3. Zero Added Syrups
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-normal">
                Pure floral honey prepared without corn syrup, rice syrup, invert sugar, or artificial flavourings. Batch analytical documentation is available on request, subject to company confirmation.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-stone-100 text-sm font-semibold text-[#183D32]">
              Pure floral nectar, unblended
            </div>
          </div>
        </div>
      </section>

      {/* 3. BATCH TESTING, TRACEABILITY & COMPLIANCE FRAMEWORK */}
      <section className="py-16 lg:py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-2">
                Verification &amp; Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32]">
                Batch Testing, Traceability &amp; Food Safety Standards
              </h2>
              <p className="text-base text-stone-600 mt-2 font-normal">
                Stated handling parameters, food-standard alignment, and consignment documentation available upon request for commercial buyers (subject to company confirmation).
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenEnquiry &&
                onOpenEnquiry('Batch Certificate of Analysis (COA) & Spec Pack', 'Wholesale Enquiry')
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
            >
              <FileCheck2 className="w-4 h-4 text-[#D49B28]" aria-hidden="true" />
              <span>Request Batch COA &amp; Specs</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-stone-200/90 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#D49B28]/40 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-[#183D32]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#183D32]">
                Batch Analytical COA
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Commercial consignments can be paired with Batch COA parameters upon request (subject to company confirmation):
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Target Brix &amp; moisture specifications (per batch COA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>HMF &amp; Diastase enzyme profile (where tested per batch)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>C3 / C4 sugar-purity screening (upon COA request)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-stone-200/90 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#D49B28]/40 flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-[#183D32]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#183D32]">
                FSANZ &amp; Hygienic Packing
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Handled under clean Australian packing practices from apiary extraction to Sydney dispatch:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Prepared in alignment with FSANZ Standard 2.8.2 guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Flint glass jars &amp; virgin food-grade PP pails</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Tamper-evident seals on retail and bulk formats</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-stone-200/90 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#D49B28]/40 flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#183D32]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#183D32]">
                Provenance &amp; Export Documentation
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Documentation coordinated for domestic stockists, commercial plants, and international importers:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Regional Eastern Australian floral lot coding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Domestic biosecurity freight guidance (subject to state rules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                  <span>Certificate of Origin &amp; Phytosanitary docs (subject to confirmation)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4-Stage Quality Assurance & Batch Traceability Pipeline */}
          <div className="mt-10 pt-10 border-t border-stone-200/80">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block">
                Hive-to-Dispatch Controls
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#183D32]">
                Four-Stage Quality Assurance &amp; Traceability Stages
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  stage: '01',
                  title: 'Apiary Lot Coding',
                  desc: 'Harvest origin, floral varietal, and regional apiary lot recorded at extraction.'
                },
                {
                  stage: '02',
                  title: 'Cold Settling (<40°C)',
                  desc: 'Gravity-settled below hive warmth to preserve natural pollen and enzyme character.'
                },
                {
                  stage: '03',
                  title: 'Batch COA Preparation',
                  desc: 'Analytical COA parameters prepared upon buyer request (subject to company confirmation).'
                },
                {
                  stage: '04',
                  title: 'Tamper-Evident Dispatch',
                  desc: 'Sealed in flint glass or food-grade pails/drums with export documentation coordinated per order.'
                }
              ].map((step) => (
                <div
                  key={step.stage}
                  className="bg-[#FAF7F2] rounded-2xl p-5 border border-stone-200/80 space-y-1.5"
                >
                  <span className="text-xs font-mono font-bold text-[#8E620F]">STAGE {step.stage}</span>
                  <h4 className="text-base font-bold text-[#183D32]">{step.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concise Verification & Certification Clarification */}
          <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-stone-200/90 space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D32]">
                Documented Processes &amp; Traceability
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Regional floral lot coding (Eastern Australia, Riverina Basin, Coastal NSW), cold settling below 40°C, and recyclable glass or food-grade bulk packaging are documented in our catalogue specifications. IoT hive telemetry is not claimed.
              </p>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#D49B28]/40 space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D32]">
                Certification &amp; Lab Evidence Status
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Third-party B-QUAL Australia Certified Member status, HACCP certificates, Organic accreditations, and formal FSANZ audit PDFs are <strong>not claimed</strong> without company evidence. Individual batch COAs and export permits are supplied on confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RAW HONEY VS COMMERCIAL HONEY */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-2">
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
                  <CheckCircle className="w-5 h-5 text-[#8E620F] shrink-0 mt-0.5" />
                  <span>{row.raw}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-stone-600 font-normal">
                  {row.commercial}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
