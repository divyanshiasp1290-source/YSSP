import React, { useState } from 'react';
import {
  Package,
  Truck,
  ShieldCheck,
  CheckCircle,
  FileText,
  Boxes,
  ArrowRight,
  Send,
  AlertCircle
} from 'lucide-react';

export default function Wholesale({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    packagingFormat: '14kg / 28kg Food Service Pails',
    estimatedQuantity: '1 to 2 Pallets',
    honeyVariety: 'Raw Wild Forest Honey',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please provide details on your supply requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const ref = `YSSP-B2B-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(ref);
      setIsSubmitted(true);
    }
  };

  const wholesaleFormats = [
    {
      title: "Food Service Pails",
      subtitle: "14kg & 28kg Buckets",
      desc: "Food-grade virgin polypropylene pails with tamper-evident tear seals and metal handles. Ideal for commercial bakeries, catering, and restaurants.",
      specs: ["14kg Net (~10 Litres)", "28kg Net (~20 Litres)", "Tamper-evident tear strip lid", "Full pallet: 64 pails (~896kg)"],
      icon: "Package"
    },
    {
      title: "Industrial Export Drums",
      subtitle: "300kg Steel Drums",
      desc: "Heavy-gauge steel drums with food-grade epoxy lining. Hermetically sealed for sea-freight containerised export.",
      specs: ["300kg Net Honey (~210 Litres)", "Food-grade hygienic barrier", "4 drums per standard pallet", "64 to 72 drums per 20ft FCL"],
      icon: "Truck"
    },
    {
      title: "Intermediate Bulk Totes (IBC)",
      subtitle: "1,400kg / 1,000L Containers",
      desc: "Galvanised steel cage with bottom discharge valve for automated factory pumping and large-scale bottling lines.",
      specs: ["1,400kg Net (~1,000 Litres)", "4-way forklift & pallet jack access", "Integrated butterfly discharge valve", "14 to 16 units per 20ft FCL"],
      icon: "Boxes"
    },
    {
      title: "Retail Jars & Private Label",
      subtitle: "250g, 500g, 1kg Jars",
      desc: "Clean glass jars with custom tamper-evident labeling for specialty grocers, supermarkets, and corporate gifting.",
      specs: ["250g, 500g, 1kg Glass Jars", "Tamper-evident heat seals", "Private label custom packaging", "Cartons of 6, 12, or 24 units"],
      icon: "ShieldCheck"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER WITH VIBRANT BACKGROUND IMAGE (Light Shadow for Maximum Image Clarity) */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sourcing-apiary.jpg"
            alt="Australian commercial apiaries and native forest"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay so the apiary hives and bushland are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
            <span>Commercial B2B Supply</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Wholesale &amp; Bulk Supply
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Supplying pure Australian honey to commercial bakeries, food manufacturers, and export distributors from pallet quantities to full container loads.
          </p>
        </div>
      </section>

      {/* 2. PACKAGING FORMATS (Clean, Light Cards) */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
            Standard Packaging
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32]">
            Commercial Supply Formats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wholesaleFormats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D49B28] bg-[#FAF7F2] px-3 py-1 rounded-full">
                  {item.subtitle}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32] mt-3 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="space-y-2 border-t border-stone-100 pt-3 text-sm text-stone-700">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#D49B28] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-100">
                <a
                  href="#wholesale-form"
                  onClick={() => setFormData(prev => ({ ...prev, packagingFormat: item.title }))}
                  className="w-full py-3 rounded-full bg-[#FAF7F2] hover:bg-[#183D32] text-[#183D32] hover:text-white text-sm font-bold tracking-wide transition-all text-center block cursor-pointer"
                >
                  Select Format
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EMBEDDED WHOLESALE ENQUIRY FORM */}
      <section id="wholesale-form" className="py-20 lg:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
              Direct Enquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32]">
              Request Wholesale Pricing &amp; Specs
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
              Submit your required volume and delivery location. Our Sydney trade team will reply within 1 business day.
            </p>
          </div>

          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 bg-[#183D32] text-[#D49B28] text-xs font-mono font-bold rounded-full">
                    Reference: {submissionRef}
                  </span>
                  <h3 className="text-2xl font-bold text-[#183D32]">
                    Wholesale Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                    Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong>. We have logged your enquiry for <strong>{formData.honeyVariety}</strong> in <strong>{formData.packagingFormat}</strong>.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Liam Turner"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Sydney Artisan Bakery"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. procurement@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +61 400 123 456"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Honey Variety
                    </label>
                    <select
                      value={formData.honeyVariety}
                      onChange={(e) => setFormData({ ...formData, honeyVariety: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    >
                      <option value="Raw Wild Forest Honey">Raw Wild Forest Honey</option>
                      <option value="Pure Raw Eucalyptus Honey">Pure Eucalyptus Honey</option>
                      <option value="Raw Wildflower Blossom Honey">Wildflower Blossom Honey</option>
                      <option value="100% Raw Cut Honeycomb">Raw Cut Honeycomb</option>
                      <option value="Commercial Bush Blend">Commercial Bush Blend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Preferred Format
                    </label>
                    <select
                      value={formData.packagingFormat}
                      onChange={(e) => setFormData({ ...formData, packagingFormat: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    >
                      <option value="14kg / 28kg Food Service Pails">14kg / 28kg Pails</option>
                      <option value="300kg Lined Export Drums">300kg Steel Drums</option>
                      <option value="1,400kg / 1,000L IBC Totes">1,400kg IBC Totes</option>
                      <option value="Retail Glass Jars (Private Label)">Retail Glass Jars</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    >
                      <option value="Sample Pack Evaluation">Sample Pack Evaluation</option>
                      <option value="1 to 2 Pallets (~1–2 Tonnes)">1 to 2 Pallets (~1–2T)</option>
                      <option value="3 to 5 Pallets (~3–5 Tonnes)">3 to 5 Pallets (~3–5T)</option>
                      <option value="20ft Full Container Load">20ft Container Load</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                    Supply Details &amp; Destination City <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, destination, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-500">
                    * Prototype demo submission with frontend validation.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Wholesale Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#D49B28]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
