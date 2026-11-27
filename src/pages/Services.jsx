import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Truck,
  Globe2,
  PackageCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Droplets,
  Boxes,
  FileCheck2,
  Layers,
  Send,
  AlertCircle
} from 'lucide-react';
import {
  SERVICES_DATA,
  COMMERCIAL_CAPABILITIES,
  PACKAGING_MATRIX
} from '../data/servicesData';
import { BRAND_INFO } from '../data/honeyData';

export default function Services({ onOpenEnquiry }) {
  const navigate = useNavigate();

  // Consolidated direct wholesale & trade enquiry form state (preserved from Wholesale.jsx)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    honeyVariety: 'Raw Wild Forest Honey',
    packagingFormat: 'Food Service Pails',
    estimatedQuantity: '1 to 2 Pallets (~1–2T)',
    destination: 'Sydney / NSW Metro',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  // Primary 3 core services: Wholesale, Bulk Supply, and Export
  const primaryServices = SERVICES_DATA.filter((s) =>
    ['wholesale-honey-supply', 'bulk-honey-supply', 'honey-export'].includes(s.id)
  );

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#D49B28]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#D49B28]" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-[#D49B28]" />;
      default:
        return <Layers className="w-5 h-5 text-[#D49B28]" />;
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please provide details on your supply requirements';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const ref = `YSSP-B2B-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(ref);
      setIsSubmitted(true);
    }
  };

  const handleSelectFormatFromMatrix = (rowOrFormat) => {
    const row =
      typeof rowOrFormat === 'object' && rowOrFormat !== null
        ? rowOrFormat
        : PACKAGING_MATRIX.find((m) => m.format === rowOrFormat) || { format: rowOrFormat };

    let defaultQty = '1 to 2 Pallets (~1–2T)';
    if (row.format === 'Retail Glass Jars') {
      defaultQty = 'Master Cartons (6 to 24 units)';
    } else if (row.format === 'Intermediate Bulk Totes (IBC)') {
      defaultQty = '1 to 2 Pallets (~1–2T)';
    }

    const formatSizes = row.sizes ? ` (${row.sizes})` : '';
    const packagingType = row.packagingType ? ` [Packaging: ${row.packagingType}]` : '';
    const minOrderText = row.minOrder ? ` [Standard Min Order: ${row.minOrder}]` : '';

    setFormData((prev) => ({
      ...prev,
      packagingFormat: row.format,
      estimatedQuantity: defaultQty,
      message: `Enquiring for ${row.format}${formatSizes}.${packagingType}${minOrderText}.\nDelivery destination city & required lead time: `
    }));

    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen">
      {/* 1. HERO BANNER (Unified Wholesale & Commercial B2B Services) */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-stone-200/50">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sourcing-apiary.jpg"
            alt="Australian commercial apiaries and native eucalyptus forest"
            className="w-full h-full object-cover brightness-105 contrast-[1.02]"
          />
          {/* Soft, light overlay preserving image visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/45"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D49B28] animate-pulse"></span>
            <span>Commercial B2B &amp; Wholesale Supply</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Wholesale, Bulk Supply &amp; Export Services
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Supplying 100% pure, unpasteurised Australian raw honey to specialty grocers, commercial food manufacturers, culinary kitchens, and international export distributors from pallet quantities to full container loads.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services-cards"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#102B23] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
            >
              <span>Request Wholesale Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITY STRIP */}
      <section className="bg-white border-b border-stone-200/80 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center shrink-0">
                  {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#183D32]" />}
                  {idx === 1 && <Droplets className="w-5 h-5 text-[#D49B28]" />}
                  {idx === 2 && <FileCheck2 className="w-5 h-5 text-[#183D32]" />}
                  {idx === 3 && <Boxes className="w-5 h-5 text-[#D49B28]" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#183D32] leading-snug">{cap.title}</h4>
                  <p className="text-xs text-stone-600 mt-0.5 font-light leading-relaxed hidden sm:block">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN SERVICES CARDS (Wholesale, Bulk Supply, Export) */}
      <section id="services-cards" className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
            Commercial Divisions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32] tracking-tight">
            Our Primary Honey Services
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
            Click any service card below to open its complete technical specifications, packaging options, and commercial application details.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryServices.map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-2xl hover:border-[#D49B28]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Category & Icon */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#183D32] shadow-sm backdrop-blur-xs">
                        {service.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#183D32]/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <span className="text-[11px] font-mono font-bold text-[#D49B28] bg-black/60 px-2.5 py-0.5 rounded backdrop-blur-xs">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] tracking-tight group-hover:text-[#D49B28] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D49B28] mt-1 mb-2.5">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-4 line-clamp-3">
                      {service.shortOverview}
                    </p>

                    {/* Compact Highlight Chips (Replacing bulky lists) */}
                    <div className="pt-2 pb-1 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {service.id === 'wholesale-honey-supply' && (
                        <>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            250g–1kg Jars &amp; Comb
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            Master Cartons
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            Retail Stockists
                          </span>
                        </>
                      )}
                      {service.id === 'bulk-honey-supply' && (
                        <>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            14kg &amp; 28kg Pails
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            300kg Drums
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            1,400kg IBC Totes
                          </span>
                        </>
                      )}
                      {service.id === 'honey-export' && (
                        <>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            20ft Container FCL
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            Export COA &amp; Phyto
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[11px] bg-[#FAF7F2] text-[#183D32] border border-stone-200/80 font-medium">
                            Sydney Port
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-2 space-y-2">
                  {/* Primary: Learn More (Navigates to dedicated detail page) */}
                  <Link
                    to={`/services/${service.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-3 px-4 rounded-xl bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 text-center shadow-xs group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenEnquiry) onOpenEnquiry(service.title, 'Service Enquiry');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-stone-200 text-[#183D32] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-stone-200/80"
                  >
                    <span>Enquire About This Service</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D49B28]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Solutions Callout Strip (Private Label & Custom Solutions) */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#D49B28] shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#183D32]">
                Looking for Private Label Packing or Tailored Floral Profiles?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light mt-0.5">
                We provide custom contract bottling and batch reservation programs for supermarket private brands and craft beverage producers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/services/private-label-contract-packing"
              className="flex-1 md:flex-none px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#183D32] text-[#183D32] hover:text-[#D49B28] text-xs font-bold uppercase tracking-wider transition-all text-center border border-stone-200"
            >
              Private Label
            </Link>
            <Link
              to="/services/custom-honey-supply-solutions"
              className="flex-1 md:flex-none px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#183D32] text-[#183D32] hover:text-[#D49B28] text-xs font-bold uppercase tracking-wider transition-all text-center border border-stone-200"
            >
              Custom Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PACKAGING & SUPPLY MATRIX */}
      <section className="py-16 lg:py-20 bg-white border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
              Supply Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32] tracking-tight">
              Packaging &amp; Supply Matrix
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
              Clear specifications across all standard container sizes, construction materials, target business sectors, and minimum order requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-stone-200/90 shadow-sm bg-[#FAF7F2]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#183D32] text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">Packaging Format</th>
                  <th className="py-4 px-6">Volume / Sizes</th>
                  <th className="py-4 px-6">Packaging Construction</th>
                  <th className="py-4 px-6">Target Commercial Sector</th>
                  <th className="py-4 px-6">Standard Minimum Order</th>
                  <th className="py-4 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm text-stone-700 font-light">
                {PACKAGING_MATRIX.map((row, rIdx) => {
                  const isSelected = formData.packagingFormat === row.format;
                  return (
                    <tr
                      key={rIdx}
                      className={`transition-colors ${
                        isSelected
                          ? 'bg-[#D49B28]/15 ring-1 ring-inset ring-[#D49B28]/40 font-medium'
                          : 'hover:bg-white/80'
                      }`}
                    >
                      <td className="py-5 px-6 font-bold text-[#183D32] whitespace-nowrap flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full transition-transform ${
                            isSelected ? 'bg-[#183D32] scale-125' : 'bg-[#D49B28]'
                          }`}
                        ></span>
                        <span>{row.format}</span>
                        {isSelected && (
                          <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider bg-[#183D32] text-[#D49B28] px-2 py-0.5 rounded-full">
                            In Form
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-6 font-medium text-stone-800">{row.sizes}</td>
                      <td className="py-5 px-6">{row.packagingType}</td>
                      <td className="py-5 px-6 text-stone-600">{row.typicalBuyer}</td>
                      <td className="py-5 px-6 font-semibold text-[#183D32]">{row.minOrder}</td>
                      <td className="py-5 px-6 text-center whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleSelectFormatFromMatrix(row)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs ${
                            isSelected
                              ? 'bg-[#D49B28] text-[#102B23] ring-1 ring-[#B88219]'
                              : 'bg-[#183D32] hover:bg-[#D49B28] text-white hover:text-[#102B23]'
                          }`}
                        >
                          {isSelected ? 'Selected ✓' : 'Select Format'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-stone-500 font-light max-w-2xl mx-auto">
              * Full pallet configurations (64 pails / ~896kg), export container strapping (64–72 steel drums or 14–16 IBCs), and custom combination pallets are coordinated directly from our Sydney logistics hub.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW WE PARTNER WITH COMMERCIAL CLIENTS (4-Step Process) */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
            Operational Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32] tracking-tight">
            How We Partner With Commercial Clients
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
            Our structured commercial onboarding ensures complete quality transparency, batch traceability, and dependable logistics from initial inquiry to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: '01',
              title: 'Requirement & Spec Alignment',
              desc: 'We assess your required volume, preferred floral varietal (Wild Forest or Eucalyptus), container format, and technical delivery timeline.'
            },
            {
              step: '02',
              title: 'Laboratory COA & Samples',
              desc: 'We supply testing certificates detailing Brix, moisture percentage, and purity standards alongside evaluation bench samples.'
            },
            {
              step: '03',
              title: 'Clean Batch Packing & Labeling',
              desc: 'Cold gravity settling below 40°C, tamper-evident sealing, lot coding, and reinforced pallet strapping.'
            },
            {
              step: '04',
              title: 'Traceable Sydney Dispatch',
              desc: 'Dispatched from our Sydney hub with complete bills of lading, biosecurity documents, and carrier tracking.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-[#D49B28]/35 block mb-3">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-[#183D32] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-[#D49B28] uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-[#D49B28]" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONSOLIDATED DIRECT WHOLESALE & TRADE ENQUIRY FORM */}
      <section id="enquiry-form" className="py-20 lg:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
              Direct Enquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32]">
              Request Wholesale &amp; Bulk Pricing
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
              Submit your required volume and delivery location. Our Sydney trade desk will reply within 1 business day.
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
                    Commercial Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                    Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong>. We have logged your enquiry for <strong>{formData.honeyVariety}</strong> in <strong>{formData.packagingFormat}</strong> ({formData.estimatedQuantity}).
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Active Selected Specification Banner (Directly populated from table, fully editable below) */}
                {(() => {
                  const activeMatrixSpec = PACKAGING_MATRIX.find(
                    (m) => m.format === formData.packagingFormat
                  );
                  return (
                    <div className="p-4 sm:p-4.5 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/50 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#183D32] flex items-center justify-center text-[#D49B28] shrink-0 mt-0.5 shadow-xs">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-[#183D32] uppercase tracking-wider text-[11px]">
                              Active Configuration:
                            </span>
                            <span className="font-bold text-[#183D32] bg-[#D49B28]/25 text-[#183D32] px-2.5 py-0.5 rounded-full text-xs">
                              {formData.packagingFormat}
                            </span>
                          </div>
                          <p className="text-stone-600 font-light mt-1 text-[11px] sm:text-xs">
                            {activeMatrixSpec
                              ? `${activeMatrixSpec.sizes} • ${activeMatrixSpec.packagingType} • Standard Min: ${activeMatrixSpec.minOrder}`
                              : 'Custom specification format selected.'}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-stone-500 bg-white border border-stone-200 px-2.5 py-1 rounded-lg shrink-0">
                        Fully customizable below ✏️
                      </span>
                    </div>
                  );
                })()}

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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +61 400 123 456"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5 flex items-center justify-between">
                      <span>Honey Variety</span>
                      <span className="text-[10px] text-stone-500 font-normal">Editable</span>
                    </label>
                    <select
                      value={formData.honeyVariety}
                      onChange={(e) => setFormData({ ...formData, honeyVariety: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                    >
                      <option value="Raw Wild Forest Honey">Raw Wild Forest Honey</option>
                      <option value="Pure Raw Eucalyptus Honey">Pure Eucalyptus Honey</option>
                      <option value="Raw Wildflower Blossom Honey">Wildflower Blossom Honey</option>
                      <option value="100% Raw Cut Honeycomb">Raw Cut Honeycomb</option>
                      <option value="Commercial Bush Blend">Commercial Bush Blend</option>
                      <option value="Custom Floral / Multi-Varietal Blend">Custom Floral / Multi-Varietal Blend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5 flex items-center justify-between">
                      <span>Preferred Format</span>
                      <span className="text-[10px] text-stone-500 font-normal">Editable</span>
                    </label>
                    <select
                      value={formData.packagingFormat}
                      onChange={(e) => setFormData({ ...formData, packagingFormat: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800 font-medium"
                    >
                      <option value="Retail Glass Jars">Retail Glass Jars (250g, 500g, 1kg &amp; 225g)</option>
                      <option value="Food Service Pails">Food Service Pails (14kg &amp; 28kg Pails)</option>
                      <option value="Industrial Export Drums">Industrial Export Drums (300kg Steel Drums)</option>
                      <option value="Intermediate Bulk Totes (IBC)">Intermediate Bulk Totes (1,400kg IBC)</option>
                      <option value="Custom Packaging / Combination Pallet">Custom Packaging / Combination Pallet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5 flex items-center justify-between">
                      <span>Estimated Volume</span>
                      <span className="text-[10px] text-stone-500 font-normal">Editable</span>
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                    >
                      <option value="Sample Pack Evaluation">Sample Pack Evaluation</option>
                      <option value="Master Cartons (6 to 24 units)">Master Cartons (6 to 24 units)</option>
                      <option value="1 to 2 Pallets (~1–2T)">1 to 2 Pallets (~1–2T)</option>
                      <option value="3 to 5 Pallets (~3–5T)">3 to 5 Pallets (~3–5T)</option>
                      <option value="20ft Full Container Load">20ft Full Container Load (FCL)</option>
                      <option value="Custom / Scheduled Volume">Custom / Scheduled Volume</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5 flex items-center justify-between">
                    <span>Supply Details &amp; Destination City <span className="text-red-500">*</span></span>
                    <span className="text-[10px] text-stone-500 font-normal">Editable text</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify delivery location, required lead time, or custom packaging notes..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B28] text-stone-800"
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.message}
                    </p>
                  )}
                  <p className="text-[11px] text-stone-500 mt-1 font-light">
                    Tip: Pre-filled with specifications from the matrix above. You can customize or add delivery city anytime.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-500">
                    * Directly received by Sydney Wholesale &amp; Commercial Accounts.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Commercial Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#D49B28]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION & DIRECT CONTACT */}
      <section className="bg-[#183D32] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#102B23] text-[#D49B28] border border-[#D49B28]/30">
            Sydney Commercial Trade Desk
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Discuss Your Honey Supply Requirements?
          </h2>

          <p className="text-sm sm:text-base text-[#E3EADF]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Contact our trade specialists today for batch specifications, laboratory testing certificates, palletization schedules, and wholesale pricing.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('General B2B Services', 'Service Enquiry')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D49B28] hover:bg-[#E5A83B] text-[#102B23] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Quick Enquiry Popup</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#102B23] hover:bg-[#122E25] text-white border border-[#295F50] text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 text-center"
            >
              <span>Contact Headquarters</span>
            </Link>
          </div>

          <div className="pt-4 text-xs text-[#E3EADF]/65 space-y-1">
            <p>Direct Email: {BRAND_INFO.emails.wholesale} | Primary Phone: {BRAND_INFO.phones.primary}</p>
            <p>{BRAND_INFO.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
