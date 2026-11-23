import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Mail, Send, AlertCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/honeyData';

export default function EnquiryModal({ isOpen, onClose, initialProduct = '', defaultType = 'Wholesale Enquiry' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: defaultType,
    productInterest: initialProduct,
    volumeEstimate: '1 to 2 Pallets (approx. 1–2 Tonnes)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  if (!isOpen) return null;

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
      errs.message = 'Please provide brief details of your enquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const ref = `YSSP-AU-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(ref);
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      enquiryType: defaultType,
      productInterest: initialProduct,
      volumeEstimate: '1 to 2 Pallets (approx. 1–2 Tonnes)',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={resetForm}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-[#F8F5EC] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-[#C99A35]/30">
          {/* Header */}
          <div className="bg-[#183D32] px-6 py-5 text-white flex items-center justify-between border-b border-[#295F50]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C99A35]"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C99A35]">
                  B2B Commercial Enquiry
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Australian Honey Wholesale Supply
              </h3>
            </div>
            <button
              onClick={resetForm}
              className="p-1.5 rounded-lg text-[#E3EADF] hover:bg-[#295F50] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[#183D32]/10 text-[#183D32] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#183D32]/5">
                  <CheckCircle className="w-10 h-10 text-[#183D32]" />
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-[#183D32] text-[#C99A35] text-xs font-mono font-bold rounded-full">
                    Reference: {referenceNumber}
                  </span>
                  <h4 className="text-2xl font-bold text-[#183D32]">
                    Enquiry Logged Successfully
                  </h4>
                  <p className="text-sm text-stone-700 max-w-md mx-auto">
                    Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong>. Your wholesale enquiry regarding <strong className="text-[#183D32]">{formData.productInterest || formData.enquiryType}</strong> has been logged in our demo prototype system.
                  </p>
                </div>

                <div className="bg-[#E3EADF] p-4 rounded-xl text-xs text-stone-700 text-left space-y-1.5 max-w-md mx-auto border border-[#B7C7AE]">
                  <p><strong>Next Steps in Live Implementation:</strong></p>
                  <p>• Assigned to Sydney Wholesale Account Executive.</p>
                  <p>• Technical Certificate of Analysis (COA) &amp; Pfund specs attached.</p>
                  <p>• Direct contact made via <strong>{formData.email}</strong> within 1 business day.</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#295F50] text-sm font-semibold transition-all cursor-pointer"
                  >
                    Done &amp; Return to Website
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-stone-600 mb-2">
                  Please complete the form below to receive official product specifications, NATA lab Certificates of Analysis (COA), or to discuss bulk container shipments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Henderson"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35] ${
                        errors.fullName ? 'border-red-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Company Name <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Australasia Foods Pty Ltd"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. procurement@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35] ${
                        errors.email ? 'border-red-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +61 400 123 456"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35] ${
                        errors.phone ? 'border-red-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Enquiry Type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                      <option value="Bulk Honey Enquiry">Bulk Honey Enquiry</option>
                      <option value="Private Label Enquiry">Private Label Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Volume Estimate */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.volumeEstimate}
                      onChange={(e) => setFormData({ ...formData, volumeEstimate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35]"
                    >
                      <option value="Sample Request">Sample Request for Evaluation</option>
                      <option value="1 Pallet (14kg/28kg Pails, ~900kg)">1 Pallet (Pails, ~900kg)</option>
                      <option value="1 Pallet (300kg Drums, 1.2T)">1 Pallet (300kg Drums, 1.2T)</option>
                      <option value="1 to 3 IBC Totes (1.4T - 4.2T)">1 to 3 IBC Totes (1.4T - 4.2T)</option>
                      <option value="20ft Full Container Load (FCL, ~20T)">20ft FCL Container (~20T)</option>
                      <option value="Retail Pack Private Label">Retail Pack / Private Label Jars</option>
                      <option value="Unsure / Need Consultation">Unsure / Need Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Specific Product Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Product / Variety of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    placeholder="e.g. Active Australian Manuka MGO 514+, Yellow Box, or Food Service Pails"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Enquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify target application, destination port/city, required certifications or timeline..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#C99A35] ${
                      errors.message ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-[#183D32]" />
                    <span>Commercial confidentiality guaranteed.</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#183D32] text-white hover:bg-[#295F50] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Submit Wholesale Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#C99A35]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
