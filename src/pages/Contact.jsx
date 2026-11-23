import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { BRAND_INFO, FAQS_SIMPLE } from '../data/honeyData';

export default function Contact({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
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
    return Object.keys(errs).length === 0;
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
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
                <MapPin className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#183D32]">Office Location</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {BRAND_INFO.legalName}<br />
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#183D32]">Direct Email</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Wholesale: <a href={`mailto:${BRAND_INFO.emails.wholesale}`} className="text-[#183D32] font-semibold hover:text-[#D49B28]">{BRAND_INFO.emails.wholesale}</a><br />
                    General: <a href={`mailto:${BRAND_INFO.emails.general}`} className="text-[#183D32] font-semibold hover:text-[#D49B28]">{BRAND_INFO.emails.general}</a>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#D49B28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#183D32]">Phone &amp; Hours</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Tel: <strong className="text-[#183D32]">{BRAND_INFO.phones.primary}</strong><br />
                    {BRAND_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm">
              <h3 className="text-2xl font-bold text-[#183D32] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fill in the details below and we will get back to you shortly.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#183D32]">
                    Thank You, {formData.fullName}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 max-w-sm mx-auto">
                    Your message has been received (Ticket #{ticketId}). We will reply to <strong>{formData.email}</strong> within 1 business day.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-full bg-[#183D32] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Company Name <span className="text-stone-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Organic Foods Co"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
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
                        placeholder="e.g. +61 412 345 678"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Enquiry Type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                      <option value="Bulk Honey Enquiry">Bulk Honey Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share your enquiry or sample requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28]"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
      </section>

      {/* 3. SIMPLE FAQ SECTION */}
      <section className="py-16 bg-white border-t border-stone-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
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
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#183D32]">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-white text-stone-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-200/60">
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
