import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Send,
  ChevronDown,
  ChevronUp,
  Droplets,
  Compass,
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO, FAQS_SIMPLE } from '../data/honeyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [errorSummary, setErrorSummary] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your enquiry';
    }
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
      const id = `YSSP-CT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(id);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER WITH VIBRANT BACKGROUND IMAGE (Light Shadow for Maximum Image Clarity) */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-stone-200/40">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-contact-bg.jpg"
            alt="Australian nature landscape and honey headquarters"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay so the Australian landscape is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span>Sydney Commercial Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Contact Our Team
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Have questions about our single-origin harvests, wholesale pails, or sample requests? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
                Sydney Office
              </span>
              <h2 className="text-3xl font-bold text-[#183D32]">
                Get in Touch
              </h2>
              <p className="text-sm text-stone-600 mt-2 font-light">
                We supply retailers, commercial kitchens, bakeries, and export partners worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#8E620F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#183D32]">Office Location</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {BRAND_INFO.legalName}<br />
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#8E620F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#183D32]">Direct Email</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    All Enquiries &amp; Wholesale:{' '}
                    <a href={`mailto:${BRAND_INFO.emails.wholesale}`} className="text-[#183D32] font-semibold hover:text-[#8E620F] focus-visible:outline-2 focus-visible:outline-[#183D32]">
                      {BRAND_INFO.emails.wholesale}
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#8E620F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-[#183D32]">Phone &amp; Hours</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Tel: <strong className="text-[#183D32]">{BRAND_INFO.phones.primary}</strong><br />
                    {BRAND_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#183D32] text-white border border-[#225344] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B28] block">
                  Wholesale, Cafés &amp; Bulk Supply
                </span>
                <p className="text-xs text-[#E3EADF]/90 font-light leading-relaxed">
                  Submitting an ABN/ACN trade application or requesting bulk pallet, pail, or export container pricing?
                </p>
                <Link
                  to="/services#enquiry-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D49B28] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28] rounded"
                >
                  <span>Go to Wholesale &amp; Bulk Quote Form</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-[#183D32] mb-1">
                Send a Message
              </h2>
              <p className="text-xs text-stone-600 mb-6">
                Prepare your enquiry details below.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#183D32]">
                    Enquiry Summary Recorded, {formData.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                    Local Reference: <strong className="text-[#183D32]">#{ticketId}</strong>. This form currently records your summary locally in the browser and has not been emailed to a server yet.
                  </p>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    To reach our team directly, please email{' '}
                    <a href={`mailto:${BRAND_INFO.emails.wholesale}?subject=${encodeURIComponent(`Contact Enquiry #${ticketId}`)}`} className="font-bold text-[#183D32] underline focus-visible:outline-2 focus-visible:outline-[#183D32]">
                      {BRAND_INFO.emails.wholesale}
                    </a>.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorSummary('');
                      }}
                      className="px-6 py-2 rounded-full bg-[#183D32] text-white text-xs font-bold uppercase tracking-wider cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                    >
                      Prepare Another Message
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ct-fullName"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'ct-fullName-err' : undefined}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                          errors.fullName ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="ct-fullName-err" role="alert" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ct-companyName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Company Name <span className="text-stone-600 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="ct-companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sydney Providores Pty Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-email" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ct-email"
                        type="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'ct-email-err' : undefined}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                          errors.email ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {errors.email && (
                        <p id="ct-email-err" role="alert" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ct-phone" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ct-phone"
                        type="tel"
                        required
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'ct-phone-err' : undefined}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +61 412 345 678"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                          errors.phone ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {errors.phone && (
                        <p id="ct-phone-err" role="alert" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-enquiryType" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="ct-enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                      <option value="Bulk Honey Enquiry">Bulk Honey Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ct-message" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="ct-message"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'ct-message-err' : undefined}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share your enquiry or sample requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm sm:text-base focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                        errors.message ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.message && (
                      <p id="ct-message-err" role="alert" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 text-[#D49B28]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2B. BRAND ASSURANCE STRIP (The Gourmet Jar Inspired) */}
        <div className="mt-14 pt-12 border-t border-stone-200/80">
          <h2 className="sr-only">YSSP Trade and Honey Assurances</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#8E620F]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#183D32]">100% Australian Harvest</h3>
                <p className="text-sm text-stone-600 mt-0.5 font-normal">Single-origin native flora, never blended with imported honey.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5 text-[#8E620F]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#183D32]">Raw &amp; Zero Added Syrups</h3>
                <p className="text-sm text-stone-600 mt-0.5 font-normal">Cold-settled below 40°C with no artificial sugars or pasteurisation.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-2xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#8E620F]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#183D32]">Direct Sydney Trade Desk</h3>
                <p className="text-sm text-stone-600 mt-0.5 font-normal">Dedicated Sydney trade contact channels for wholesale, bulk, and export enquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIMPLE FAQ SECTION */}
      <section className="py-16 bg-white border-t border-stone-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
              Need to Know
            </span>
            <h2 className="text-3xl font-bold text-[#183D32]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_SIMPLE.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] rounded-2xl border border-stone-200/80 overflow-hidden"
                >
                  <button
                    type="button"
                    id={`contact-faq-trigger-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`contact-faq-panel-${idx}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D49B28]"
                  >
                    <span className="text-base font-bold text-[#183D32]">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-white text-stone-600 shrink-0" aria-hidden="true">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`contact-faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`contact-faq-trigger-${idx}`}
                      className="px-5 pb-4 pt-2 text-sm text-stone-700 leading-relaxed font-normal border-t border-stone-200/60"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
