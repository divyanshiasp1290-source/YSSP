import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle, ShieldCheck, Send, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/honeyData';
import { validateAbnOrAcn } from '../utils/abnValidation';

export default function EnquiryModal({ isOpen, onClose, initialProduct = '', defaultType = 'Wholesale Enquiry' }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);
  const firstInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    abnAcn: '',
    businessSector: 'Retail Stockist',
    email: '',
    phone: '',
    enquiryType: defaultType,
    productInterest: initialProduct,
    volumeEstimate: '1 to 2 Pallets (approx. 1–2 Tonnes)',
    orderCadence: 'Monthly / Standing Supply',
    requestSample: false,
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        productInterest: initialProduct || prev.productInterest,
        enquiryType: defaultType || prev.enquiryType
      }));
    }
  }, [isOpen, initialProduct, defaultType]);

  const [errors, setErrors] = useState({});
  const [errorSummary, setErrorSummary] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setErrorSummary('');
    setFormData({
      fullName: '',
      companyName: '',
      abnAcn: '',
      businessSector: 'Retail Stockist',
      email: '',
      phone: '',
      enquiryType: defaultType,
      productInterest: initialProduct,
      volumeEstimate: '1 to 2 Pallets (approx. 1–2 Tonnes)',
      orderCadence: 'Monthly / Standing Supply',
      requestSample: false,
      message: ''
    });
    setErrors({});
    onClose();
  }, [defaultType, initialProduct, onClose]);

  useEffect(() => {
    if (!isOpen) {
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
      return;
    }

    previousFocusRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      } else {
        modalRef.current?.focus();
      }
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        resetForm();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    const abnResult = validateAbnOrAcn(formData.abnAcn);
    if (!abnResult.valid) {
      errs.abnAcn = abnResult.error;
    }
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
    const errorCount = Object.keys(errs).length;
    setErrorSummary(
      errorCount > 0
        ? `Please correct the ${errorCount} highlighted field${errorCount > 1 ? 's' : ''} below before continuing.`
        : ''
    );
    return errorCount === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const ref = `YSSP-AU-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(ref);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Dimmed backdrop preventing background interaction */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
        onClick={resetForm}
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#F8F5EC] text-left shadow-2xl border border-[#C99A35]/30 focus-visible:outline-2 focus-visible:outline-[#D49B28]"
      >
        {/* Header (always visible) */}
        <div className="shrink-0 bg-[#183D32] px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b border-[#295F50]">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#C99A35]"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C99A35]">
                B2B Commercial Enquiry
              </span>
            </div>
            <h2 id="enquiry-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Australian Honey Wholesale Supply
            </h2>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="p-2 rounded-lg text-[#E3EADF] hover:bg-[#295F50] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D49B28]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-[#183D32]/10 text-[#183D32] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#183D32]/5">
                <CheckCircle className="w-8 h-8 text-[#183D32]" />
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-[#183D32] text-[#C99A35] text-xs font-mono font-bold rounded-full">
                  Local Reference: {referenceNumber}
                </span>
                <h3 className="text-2xl font-bold text-[#183D32]">
                  Enquiry Summary Recorded Locally
                </h3>
                <p className="text-sm text-stone-700 max-w-md mx-auto">
                  Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong> ({formData.businessSector}). Your enquiry summary for <strong className="text-[#183D32]">{formData.productInterest || formData.enquiryType}</strong> ({formData.orderCadence}) has been recorded in your browser.
                </p>
              </div>

              <div className="bg-[#E3EADF] p-4 rounded-xl text-xs text-stone-700 text-left space-y-1.5 max-w-md mx-auto border border-[#B7C7AE]">
                <p><strong>Submission Notice (Not Yet Transmitted):</strong></p>
                <p>• Automated email/CRM delivery is not connected on this site yet, so this form has not been transmitted to our server.</p>
                {formData.requestSample && <p>• Sample evaluation &amp; Batch COA request noted in summary.</p>}
                <p>
                  • To send your enquiry immediately, please email{' '}
                  <a href={`mailto:${BRAND_INFO.emails.wholesale}?subject=${encodeURIComponent(`Wholesale Enquiry ${referenceNumber}`)}`} className="font-bold text-[#183D32] underline focus-visible:outline-2 focus-visible:outline-[#183D32]">
                    {BRAND_INFO.emails.wholesale}
                  </a>{' '}
                  quoting reference <strong>{referenceNumber}</strong>.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#295F50] text-sm font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                >
                  Done &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form id="enquiry-modal-form" onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <p className="text-xs text-stone-600">
                Complete the form below to request product specifications, Batch COA availability, or bulk container pricing.
              </p>

              <div aria-live="polite" className="sr-only">
                {errorSummary}
              </div>

              {errorSummary && (
                <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorSummary}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div>
                  <label htmlFor="em-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="em-fullName"
                    ref={firstInputRef}
                    type="text"
                    required
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'em-fullName-err' : undefined}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Henderson"
                    className={`w-full px-3.5 py-2 rounded-lg bg-white border text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                      errors.fullName ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="em-fullName-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="em-companyName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Company Name <span className="text-stone-600 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="em-companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Australasia Foods Pty Ltd"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* ABN / ACN */}
                <div>
                  <label htmlFor="em-abnAcn" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    ABN / ACN <span className="text-stone-600 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="em-abnAcn"
                    type="text"
                    aria-invalid={Boolean(errors.abnAcn)}
                    aria-describedby={errors.abnAcn ? 'em-abnAcn-err' : undefined}
                    value={formData.abnAcn}
                    onChange={(e) => {
                      const nextAbn = e.target.value;
                      setFormData({ ...formData, abnAcn: nextAbn });
                      if (errors.abnAcn) {
                        const res = validateAbnOrAcn(nextAbn);
                        setErrors((prev) => ({
                          ...prev,
                          abnAcn: res.valid ? undefined : res.error
                        }));
                      }
                    }}
                    placeholder="e.g. 51 824 753 556"
                    className={`w-full px-3.5 py-2 rounded-lg bg-white border text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                      errors.abnAcn ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.abnAcn && (
                    <p id="em-abnAcn-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.abnAcn}
                    </p>
                  )}
                </div>

                {/* Business Sector */}
                <div>
                  <label htmlFor="em-businessSector" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Business Sector / Type
                  </label>
                  <select
                    id="em-businessSector"
                    value={formData.businessSector}
                    onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  >
                    <option value="Retail Stockist">Retail Stockist</option>
                    <option value="Hospitality / Bakery">Hospitality / Bakery</option>
                    <option value="Food Manufacturer">Food Manufacturer</option>
                    <option value="Distributor / Exporter">Distributor / Exporter</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Email */}
                <div>
                  <label htmlFor="em-email" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Business Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="em-email"
                    type="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'em-email-err' : undefined}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. procurement@company.com"
                    className={`w-full px-3.5 py-2 rounded-lg bg-white border text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                      errors.email ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.email && (
                    <p id="em-email-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="em-phone" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="em-phone"
                    type="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'em-phone-err' : undefined}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +61 400 123 456"
                    className={`w-full px-3.5 py-2 rounded-lg bg-white border text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                      errors.phone ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && (
                    <p id="em-phone-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Enquiry Type */}
                <div>
                  <label htmlFor="em-enquiryType" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Enquiry Type
                  </label>
                  <select
                    id="em-enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                    <option value="Bulk Honey Enquiry">Bulk Honey Supply</option>
                    <option value="Private Label Enquiry">Private Label &amp; Contract Packing</option>
                    <option value="Service Enquiry">Commercial Service Enquiry</option>
                    <option value="Honey Export">Honey Export</option>
                    <option value="Custom Supply">Custom Honey Supply Solution</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Volume Estimate */}
                <div>
                  <label htmlFor="em-volumeEstimate" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Estimated Volume
                  </label>
                  <select
                    id="em-volumeEstimate"
                    value={formData.volumeEstimate}
                    onChange={(e) => setFormData({ ...formData, volumeEstimate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Product Interest */}
                <div>
                  <label htmlFor="em-productInterest" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Product / Variety of Interest
                  </label>
                  <input
                    id="em-productInterest"
                    type="text"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    placeholder="e.g. Raw Wild Forest Honey or 14kg Pails"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  />
                </div>

                {/* Order Cadence */}
                <div>
                  <label htmlFor="em-orderCadence" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                    Order Cadence
                  </label>
                  <select
                    id="em-orderCadence"
                    value={formData.orderCadence}
                    onChange={(e) => setFormData({ ...formData, orderCadence: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32]"
                  >
                    <option value="One-Off / Trial Order">One-Off / Trial Order</option>
                    <option value="Monthly / Standing Supply">Monthly / Standing Supply</option>
                    <option value="Quarterly Contract Reserve">Quarterly Contract Reserve</option>
                    <option value="Export Shipment Schedule">Export Shipment Schedule</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="em-message" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1">
                  Enquiry Details <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="em-message"
                  rows={2}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'em-message-err' : undefined}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify target application, destination port/city, or timeline..."
                  className={`w-full px-3.5 py-2 rounded-lg bg-white border text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-[#183D32] ${
                    errors.message ? 'border-red-500' : 'border-stone-300'
                  }`}
                />
                {errors.message && (
                  <p id="em-message-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.requestSample}
                  onChange={(e) => setFormData({ ...formData, requestSample: e.target.checked })}
                  className="w-4 h-4 accent-[#183D32] rounded cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                />
                <span>Request Sample Evaluation &amp; Batch COA</span>
              </label>
            </form>
          )}
        </div>

        {/* Pinned Footer Submit Area (always visible when form active) */}
        {!isSubmitted && (
          <div className="shrink-0 px-5 sm:px-6 py-3.5 bg-[#F8F5EC] border-t border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <ShieldCheck className="w-4 h-4 text-[#183D32] shrink-0" />
              <span>Handled with commercial discretion.</span>
            </div>
            <button
              type="submit"
              form="enquiry-modal-form"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#295F50] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
            >
              <span>Submit Wholesale Enquiry</span>
              <Send className="w-3.5 h-3.5 text-[#C99A35]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
