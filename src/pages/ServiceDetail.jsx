import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  Boxes,
  Truck,
  Globe2,
  PackageCheck,
  UtensilsCrossed,
  SlidersHorizontal,
  AlertCircle,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { BRAND_INFO } from '../data/honeyData';

export default function ServiceDetail({ onOpenEnquiry }) {
  const { id } = useParams();
  const service = SERVICES_DATA.find((s) => s.id === id);

  // Form state for direct enquiry on the page
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    volumeEstimate: 'Pallet Consignment (approx. 1 Tonne)',
    destination: 'Sydney / NSW Metro',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please specify your supply volume or timeline';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const ref = `YSSP-SRV-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(ref);
      setIsSubmitted(true);
    }
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShieldCheck className="w-5 h-5 text-[#D49B28]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#D49B28]" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-[#D49B28]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-[#D49B28]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#D49B28]" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-5 h-5 text-[#D49B28]" />;
      default:
        return <Boxes className="w-5 h-5 text-[#D49B28]" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen py-8 sm:py-12">
      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <Link to="/" className="hover:text-[#183D32] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/services" className="hover:text-[#183D32] transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#183D32] font-semibold">{service.title}</span>
        </nav>
      </div>

      {/* 2. HERO HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-[#183D32] text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-lg border border-[#225344]">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#102B23] text-[#D49B28] border border-[#D49B28]/30">
                {service.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-stone-200">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#E3EADF]/90 font-light leading-relaxed">
              {service.subtitle}
            </p>

            {/* Quick Specs Chips */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#102B23]/70 p-3 rounded-xl border border-[#295F50]">
                <span className="text-[10px] text-[#D49B28] uppercase font-bold tracking-wider block">Harvest Origin</span>
                <span className="font-semibold text-white">Eastern Australia</span>
              </div>
              <div className="bg-[#102B23]/70 p-3 rounded-xl border border-[#295F50]">
                <span className="text-[10px] text-[#D49B28] uppercase font-bold tracking-wider block">Extraction Temp</span>
                <span className="font-semibold text-white">&lt; 40°C Cold Settled</span>
              </div>
              <div className="bg-[#102B23]/70 p-3 rounded-xl border border-[#295F50]">
                <span className="text-[10px] text-[#D49B28] uppercase font-bold tracking-wider block">Purity Standard</span>
                <span className="font-semibold text-white">Zero C3/C4 Adulteration</span>
              </div>
              <div className="bg-[#102B23]/70 p-3 rounded-xl border border-[#295F50]">
                <span className="text-[10px] text-[#D49B28] uppercase font-bold tracking-wider block">Dispatch Hub</span>
                <span className="font-semibold text-white">Sydney, NSW, Australia</span>
              </div>
            </div>
          </div>

          {/* Decorative background overlay */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:block overflow-hidden">
            <img
              src={service.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT & STICKY ENQUIRY SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: DETAILED SPECIFICATIONS (7 COLS) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Visual Feature Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-stone-100 border border-stone-200/60 shadow-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#183D32]/90 backdrop-blur-xs text-white p-3 rounded-xl text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D49B28]" />
                    <span className="font-medium text-stone-200">100% Pure Australian Floral Nectar</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D49B28] uppercase tracking-wider bg-[#102B23] px-2 py-0.5 rounded">
                    Batch Verified
                  </span>
                </div>
              </div>

              {/* Service Overview & What We Offer */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                  Comprehensive Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-4">
                  What YSSP Offers
                </h2>
                <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-4 font-light">
                  {service.fullDescription.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#183D32]">
                  Verified Service Guarantees
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  {service.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Customers & Business Applications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                  Market Fit
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Suitable Customers &amp; Applications
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  Configured specifically to support the following business types and commercial use cases:
                </p>
              </div>

              {/* Customers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.targetCustomers.map((cust, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 space-y-1">
                    <h4 className="text-sm font-bold text-[#183D32]">{cust.name}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">{cust.desc}</p>
                  </div>
                ))}
              </div>

              {/* Applications List */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#183D32] mb-3">
                  Practical Business Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                  {service.businessApplications.map((app, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D49B28] shrink-0"></span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Packaging & Supply Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                  Packaging Options
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Verified Packaging &amp; Volume Formats
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  All containers are food-grade certified, tamper-evident, and prepared for heavy-duty freight.
                </p>
              </div>

              <div className="space-y-4">
                {service.packagingOptions.map((opt, oIdx) => (
                  <div key={oIdx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#183D32] flex items-center gap-2">
                        <Boxes className="w-4 h-4 text-[#D49B28]" />
                        <span>{opt.format}</span>
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-[#183D32] bg-white px-2.5 py-0.5 rounded border border-stone-200">
                        Format #{oIdx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-stone-700 font-medium">
                      {opt.spec}
                    </p>
                    <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/60 flex items-center gap-1.5">
                      <span className="font-bold text-[#183D32]">Pallet / Logistics:</span>
                      <span>{opt.palletInfo}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimum Order Callout */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-amber-900 block uppercase tracking-wider mb-0.5">Commercial Minimum Order:</span>
                  <p className="text-amber-800 leading-relaxed">{service.minimumOrder}</p>
                </div>
              </div>
            </div>

            {/* 4-Step Process Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                  Onboarding &amp; Fulfillment
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Service Process &amp; Workflow
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  How we transition from your commercial enquiry to direct dock delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.serviceProcess.map((proc, pIdx) => (
                  <div key={pIdx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 relative">
                    <span className="font-mono text-2xl font-bold text-[#D49B28]/40 block mb-1">
                      {proc.step}
                    </span>
                    <h4 className="text-sm font-bold text-[#183D32] mb-1">{proc.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">{proc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                  B2B Knowledge Base
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-stone-200 overflow-hidden bg-[#FAF7F2]"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#183D32] hover:bg-stone-100 transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#D49B28] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-light border-t border-stone-200/70 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY ENQUIRY CARD (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              
              {/* Direct Enquiry Form Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D49B28]"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D49B28]">
                      Direct Trade Desk
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#183D32]">
                    Enquire About This Service
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 font-light">
                    Submit your supply requirements for <strong className="text-[#183D32]">{service.title}</strong>. Our Sydney commercial desk will respond within 1 business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <span className="inline-block px-3 py-1 bg-[#183D32] text-[#D49B28] text-xs font-mono font-bold rounded-full">
                        Reference: {submissionRef}
                      </span>
                      <h4 className="text-xl font-bold text-[#183D32]">
                        Commercial Enquiry Received
                      </h4>
                      <p className="text-xs text-stone-700 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong>. We have logged your request for <strong>{service.title}</strong> at <strong>{formData.volumeEstimate}</strong>.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rachel Sterling"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sydney Artisan Bakery"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@co.com"
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+61 400 000 000"
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Estimated Volume
                        </label>
                        <select
                          value={formData.volumeEstimate}
                          onChange={(e) => setFormData({ ...formData, volumeEstimate: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                        >
                          <option>Trial Order (&lt; 1 Pallet)</option>
                          <option>1 to 2 Pallets (approx. 1–2 Tonnes)</option>
                          <option>3 to 5 Pallets (approx. 3–5 Tonnes)</option>
                          <option>Full 20ft Container (FCL / 20 Tonnes)</option>
                          <option>Recurring Standing Supply</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Delivery Location
                        </label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Sydney, Melbourne, Export"
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Requirements &amp; Timeline <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your desired container sizes, floral varietal, or delivery dates..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#102B23] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit {service.title} Request</span>
                    </button>
                  </form>
                )}

                {/* Secondary Option: Open Full Modal */}
                <div className="pt-4 mt-4 border-t border-stone-100 text-center">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(service.title, 'Service Enquiry')}
                    className="text-xs text-[#183D32] hover:text-[#D49B28] font-bold flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
                  >
                    <span>Prefer the Quick Enquiry Popup?</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D49B28]" />
                  </button>
                </div>
              </div>

              {/* Direct Sydney Trade Desk Info Box */}
              <div className="bg-[#183D32] text-white rounded-3xl p-6 sm:p-7 border border-[#225344] space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#102B23] border border-[#D49B28]/40 flex items-center justify-center text-[#D49B28]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Commercial Trade Support</h4>
                    <p className="text-[11px] text-[#D49B28]">Sydney Head Office</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#E3EADF]/85 border-t border-[#295F50] pt-4 font-light">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D49B28] shrink-0" />
                    <span>{BRAND_INFO.phones.primary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D49B28] shrink-0" />
                    <a href={`mailto:${BRAND_INFO.emails.wholesale}`} className="hover:text-[#D49B28] transition-colors">
                      {BRAND_INFO.emails.wholesale}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D49B28] shrink-0" />
                    <span>{BRAND_INFO.hours}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D49B28] shrink-0 mt-0.5" />
                    <span>{BRAND_INFO.address}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4. EXPLORE OTHER SERVICES CAROUSEL / GRID */}
      <section className="mt-20 py-16 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
                Explore More
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
                Other Commercial Services
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#183D32] hover:text-[#D49B28] flex items-center gap-1.5 transition-colors"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#FAF7F2] rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B28] bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                      {rel.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#183D32]">
                      {getServiceIcon(rel.icon)}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-[#183D32] group-hover:text-[#1F4C3F] transition-colors mb-1.5">
                    {rel.title}
                  </h4>

                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {rel.shortOverview}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
                  <Link
                    to={`/services/${rel.id}`}
                    className="text-xs font-bold text-[#183D32] hover:text-[#D49B28] flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(rel.title, 'Service Enquiry')}
                    className="text-[11px] font-bold text-[#D49B28] hover:text-[#183D32] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
