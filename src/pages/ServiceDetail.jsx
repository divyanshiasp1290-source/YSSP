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
import { validateAbnOrAcn } from '../utils/abnValidation';

export default function ServiceDetail({ onOpenEnquiry }) {
  const { id } = useParams();
  const service = SERVICES_DATA.find((s) => s.id === id);

  // Form state for direct enquiry on the page (in parity with Services.jsx & EnquiryModal.jsx)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    abnAcn: '',
    businessSector: 'Retail Stockist',
    email: '',
    phone: '',
    volumeEstimate: '1 to 2 Pallets (approx. 1–2 Tonnes)',
    orderCadence: 'Monthly / Standing Supply',
    destination: 'Sydney / NSW Metro',
    requestSample: false,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [errorSummary, setErrorSummary] = useState('');
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
    const abnResult = validateAbnOrAcn(formData.abnAcn);
    if (!abnResult.valid) {
      errs.abnAcn = abnResult.error;
    }
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please specify your supply volume or timeline';
    setErrors(errs);
    const count = Object.keys(errs).length;
    setErrorSummary(
      count > 0
        ? `Please correct the ${count} highlighted field${count > 1 ? 's' : ''} below.`
        : ''
    );
    return count === 0;
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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-600 font-medium">
          <Link to="/" className="hover:text-[#183D32] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
          <Link to="/services" className="hover:text-[#183D32] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
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

            <p className="text-base sm:text-lg text-[#E3EADF]/95 font-normal leading-relaxed">
              {service.subtitle}
            </p>
          </div>

          {/* Decorative background overlay */}
          {service.image && (
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:block overflow-hidden" aria-hidden="true">
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          )}
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
              </div>

              {/* Service Overview & What We Offer */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
                  Comprehensive Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-4">
                  What YSSP Offers
                </h2>
                <div className="text-base text-stone-700 leading-relaxed space-y-4 font-normal">
                  {service.fullDescription.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#183D32]">
                  Key Service Highlights
                </h3>
                <div className="space-y-2.5 text-sm text-stone-700 font-normal">
                  {service.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Customers & Business Applications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
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
                    <h3 className="text-sm font-bold text-[#183D32]">{cust.name}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">{cust.desc}</p>
                  </div>
                ))}
              </div>

              {/* Applications List */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#183D32] mb-3">
                  Practical Business Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                  {service.businessApplications.map((app, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E620F] shrink-0"></span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Packaging & Supply Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
                  Packaging Options
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Packaging &amp; Volume Formats
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  Containers use food-grade materials with tamper-evident seals, prepared for commercial freight (specifications subject to company confirmation).
                </p>
              </div>

              <div className="space-y-4">
                {service.packagingOptions.map((opt, oIdx) => (
                  <div key={oIdx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/90 space-y-2">
                    <h3 className="text-base font-bold text-[#183D32] flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-[#8E620F]" aria-hidden="true" />
                      <span>{opt.format}</span>
                    </h3>
                    <p className="text-sm text-stone-700 font-normal">
                      {opt.spec}
                    </p>
                    <div className="text-xs sm:text-sm text-stone-600 pt-1.5 border-t border-stone-200/60 flex items-center gap-1.5">
                      <span className="font-semibold text-[#183D32]">Pallet / Logistics:</span>
                      <span>{opt.palletInfo}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimum Order Callout */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-amber-900 block uppercase tracking-wider mb-0.5">Commercial Minimum Order (Subject to Confirmation):</span>
                  <p className="text-amber-900 leading-relaxed">{service.minimumOrder}</p>
                </div>
              </div>
            </div>

            {/* 4-Step Process Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
                  Onboarding &amp; Fulfillment
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32] mb-2">
                  Service Process &amp; Workflow
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  How we transition from your commercial enquiry to coordinated dispatch.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.serviceProcess.map((proc, pIdx) => (
                  <div key={pIdx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 relative">
                    <span className="font-mono text-2xl font-bold text-[#8E620F]/55 block mb-1">
                      {proc.step}
                    </span>
                    <h3 className="text-sm font-bold text-[#183D32] mb-1">{proc.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">{proc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
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
                      className="rounded-2xl border border-stone-200 bg-[#FAF7F2]"
                    >
                      <button
                        type="button"
                        id={`service-faq-trigger-${fIdx}`}
                        aria-expanded={isOpen}
                        aria-controls={`service-faq-panel-${fIdx}`}
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#183D32] hover:bg-stone-100 rounded-2xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#8E620F] shrink-0" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-600 shrink-0" aria-hidden="true" />
                        )}
                      </button>
                      {isOpen && (
                        <div
                          id={`service-faq-panel-${fIdx}`}
                          role="region"
                          aria-labelledby={`service-faq-trigger-${fIdx}`}
                          className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-light border-t border-stone-200/70 pt-3"
                        >
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
                    <span className="w-2 h-2 rounded-full bg-[#8E620F]"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8E620F]">
                      Direct Trade Desk
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#183D32]">
                    Enquire About This Service
                  </h2>
                  <p className="text-xs text-stone-600 mt-1 font-light">
                    Prepare your business details, optional ABN/ACN, and supply requirements for <strong className="text-[#183D32]">{service.title}</strong> below.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="inline-block px-3 py-1 bg-[#183D32] text-[#D49B28] text-xs font-mono font-bold rounded-full">
                        Local Reference: {submissionRef}
                      </span>
                      <h3 className="text-xl font-bold text-[#183D32]">
                        Enquiry Summary Recorded Locally
                      </h3>
                      <p className="text-xs text-stone-700 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong> ({formData.businessSector}). Your summary for <strong>{service.title}</strong> ({formData.volumeEstimate}, {formData.orderCadence}) has been recorded in your browser and has not been transmitted to a server yet.
                        {formData.requestSample ? ' Sample evaluation & Batch COA request noted.' : ''}
                      </p>
                      <p className="text-[11px] text-stone-600 max-w-sm mx-auto">
                        Email{' '}
                        <a href={`mailto:${BRAND_INFO.emails.wholesale}?subject=${encodeURIComponent(`${service.title} ${submissionRef}`)}`} className="font-bold text-[#183D32] underline focus-visible:outline-2 focus-visible:outline-[#183D32]">
                          {BRAND_INFO.emails.wholesale}
                        </a>{' '}
                        directly to submit this request.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setErrorSummary('');
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-xs font-bold uppercase tracking-wider cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                      >
                        Prepare Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div aria-live="polite" className="sr-only">
                      {errorSummary}
                    </div>
                    {errorSummary && (
                      <div role="alert" className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorSummary}</span>
                      </div>
                    )}
                    <div>
                      <label htmlFor="sd-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="sd-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rachel Sterling"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'sd-fullName-err' : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                          errors.fullName ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="sd-fullName-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="sd-companyName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Company / Trading Name
                      </label>
                      <input
                        id="sd-companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sydney Artisan Bakery Pty Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sd-abnAcn" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          ABN / ACN <span className="text-stone-600 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="sd-abnAcn"
                          type="text"
                          value={formData.abnAcn}
                          onChange={(e) => setFormData({ ...formData, abnAcn: e.target.value })}
                          placeholder="e.g. 51 824 753 556"
                          aria-invalid={Boolean(errors.abnAcn)}
                          aria-describedby={errors.abnAcn ? 'sd-abnAcn-err' : undefined}
                          className={`w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                            errors.abnAcn ? 'border-red-500' : 'border-stone-300'
                          }`}
                        />
                        {errors.abnAcn && (
                          <p id="sd-abnAcn-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.abnAcn}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="sd-businessSector" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Business Sector / Type
                        </label>
                        <select
                          id="sd-businessSector"
                          value={formData.businessSector}
                          onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs font-medium focus-visible:outline-2 focus-visible:outline-[#183D32]"
                        >
                          <option value="Retail Stockist">Retail Stockist</option>
                          <option value="Hospitality / Bakery">Hospitality / Bakery</option>
                          <option value="Food Manufacturer">Food Manufacturer</option>
                          <option value="Distributor / Exporter">Distributor / Exporter</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sd-email" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Business Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="sd-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@co.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'sd-email-err' : undefined}
                          className={`w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                            errors.email ? 'border-red-500' : 'border-stone-300'
                          }`}
                        />
                        {errors.email && (
                          <p id="sd-email-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="sd-phone" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="sd-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+61 400 000 000"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'sd-phone-err' : undefined}
                          className={`w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                            errors.phone ? 'border-red-500' : 'border-stone-300'
                          }`}
                        />
                        {errors.phone && (
                          <p id="sd-phone-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sd-volumeEstimate" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Estimated Volume
                        </label>
                        <select
                          id="sd-volumeEstimate"
                          value={formData.volumeEstimate}
                          onChange={(e) => setFormData({ ...formData, volumeEstimate: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs font-medium focus-visible:outline-2 focus-visible:outline-[#183D32]"
                        >
                          <option value="Trial Order (< 1 Pallet)">Trial Order (&lt; 1 Pallet)</option>
                          <option value="1 to 2 Pallets (approx. 1–2 Tonnes)">1 to 2 Pallets (approx. 1–2 Tonnes)</option>
                          <option value="3 to 5 Pallets (approx. 3–5 Tonnes)">3 to 5 Pallets (approx. 3–5 Tonnes)</option>
                          <option value="Full 20ft Container (FCL / 20 Tonnes)">Full 20ft Container (FCL / 20 Tonnes)</option>
                          <option value="Recurring Standing Supply">Recurring Standing Supply</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="sd-orderCadence" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                          Order Cadence
                        </label>
                        <select
                          id="sd-orderCadence"
                          value={formData.orderCadence}
                          onChange={(e) => setFormData({ ...formData, orderCadence: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs font-medium focus-visible:outline-2 focus-visible:outline-[#183D32]"
                        >
                          <option value="One-Off / Trial Order">One-Off / Trial Order</option>
                          <option value="Monthly / Standing Supply">Monthly / Standing Supply</option>
                          <option value="Quarterly Contract Reserve">Quarterly Contract Reserve</option>
                          <option value="Export Shipment Schedule">Export Shipment Schedule</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sd-destination" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Delivery Location
                      </label>
                      <input
                        id="sd-destination"
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Sydney, Melbourne, Export"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32]"
                      />
                    </div>

                    <div>
                      <label htmlFor="sd-message" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                        Requirements &amp; Timeline <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="sd-message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your desired container sizes, floral varietal, or delivery dates..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'sd-message-err' : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                          errors.message ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {errors.message && (
                        <p id="sd-message-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer select-none bg-[#FAF7F2] px-3.5 py-2.5 rounded-xl border border-stone-200">
                      <input
                        type="checkbox"
                        checked={formData.requestSample}
                        onChange={(e) => setFormData({ ...formData, requestSample: e.target.checked })}
                        className="w-4 h-4 accent-[#183D32] rounded cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                      />
                      <span>
                        <strong>Request Sample Evaluation</strong> &amp; Batch COA before ordering
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#102B23] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit {service.title} Request</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Sydney Trade Desk Info Box */}
              <div className="bg-[#183D32] text-white rounded-3xl p-6 sm:p-7 border border-[#225344] space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#102B23] border border-[#D49B28]/40 flex items-center justify-center text-[#D49B28]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Commercial Trade Support</h3>
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
                Explore More
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
                Other Commercial Services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#183D32] hover:text-[#8E620F] flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]"
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E620F] bg-white px-2.5 py-0.5 rounded-full border border-stone-200">
                      {rel.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#183D32]">
                      {getServiceIcon(rel.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#183D32] group-hover:text-[#1F4C3F] transition-colors mb-1.5">
                    {rel.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {rel.shortOverview}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
                  <Link
                    to={`/services/${rel.id}`}
                    className="text-xs font-bold text-[#183D32] hover:text-[#8E620F] flex items-center gap-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(rel.title, 'Service Enquiry')}
                    className="text-[11px] font-bold text-[#8E620F] hover:text-[#183D32] flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#183D32]"
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
