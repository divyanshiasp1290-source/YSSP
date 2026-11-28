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
  AlertCircle,
  Building2,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  SERVICES_DATA,
  COMMERCIAL_CAPABILITIES,
  PACKAGING_MATRIX
} from '../data/servicesData';
import { BRAND_INFO, FAQS_SIMPLE } from '../data/honeyData';
import { validateAbnOrAcn } from '../utils/abnValidation';

export default function Services() {
  const navigate = useNavigate();

  // Consolidated direct wholesale & trade enquiry / account application form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    abnAcn: '',
    businessSector: 'Retail Stockist',
    email: '',
    phone: '',
    honeyVariety: 'Raw Wild Forest Honey',
    packagingFormat: 'Food Service Pails',
    estimatedQuantity: '1 to 2 Pallets (~1–2T)',
    orderCadence: 'Monthly / Standing Supply',
    destination: 'Sydney / NSW Metro',
    requestSample: false,
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [errorSummary, setErrorSummary] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');
  const [openTradeFaq, setOpenTradeFaq] = useState(0);

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
    if (!formData.message.trim()) errs.message = 'Please provide details on your supply requirements';
    setFormErrors(errs);
    const count = Object.keys(errs).length;
    setErrorSummary(
      count > 0
        ? `Please correct the ${count} highlighted field${count > 1 ? 's' : ''} in the commercial enquiry form.`
        : ''
    );
    return count === 0;
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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md text-[#FAF7F2] border border-white/30 text-xs font-semibold uppercase tracking-wider shadow-sm">
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
                  {idx === 1 && <Droplets className="w-5 h-5 text-[#8E620F]" />}
                  {idx === 2 && <FileCheck2 className="w-5 h-5 text-[#183D32]" />}
                  {idx === 3 && <Boxes className="w-5 h-5 text-[#8E620F]" />}
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-[#183D32] leading-snug">{cap.title}</h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-normal leading-relaxed hidden sm:block">
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
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
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

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#183D32] shadow-sm backdrop-blur-xs">
                        {service.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#183D32]/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#183D32] tracking-tight group-hover:text-[#8E620F] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#8E620F]">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed font-normal line-clamp-3">
                      {service.shortOverview}
                    </p>
                  </div>
                </div>

                {/* Single Clear Action */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  <Link
                    to={`/services/${service.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-3 px-4 rounded-xl bg-[#183D32] hover:bg-[#225344] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 text-center shadow-xs group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Solutions Callout Strip (Private Label & Custom Solutions) */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D49B28]/40 flex items-center justify-center text-[#8E620F] shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#183D32]">
                Looking for Private Label Packing or Tailored Floral Profiles?
              </h3>
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
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
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
                          <span className="ml-1.5 text-xs font-bold uppercase tracking-wider bg-[#183D32] text-[#D49B28] px-2.5 py-0.5 rounded-full">
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
            <p className="text-xs text-stone-600 font-light max-w-2xl mx-auto">
              * Full pallet configurations (64 pails / ~896kg), export container strapping (64–72 steel drums or 14–16 IBCs), and custom combination pallets are coordinated from Sydney (lead times subject to company confirmation).
            </p>
          </div>

          {/* 4B. COMPACT EXPORT TERMS SUMMARY (Derived strictly from servicesData.js honey-export) */}
          {(() => {
            const exportService = SERVICES_DATA.find((s) => s.id === 'honey-export');
            if (!exportService) return null;
            return (
              <div className="mt-12 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/80 pb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#183D32] flex items-center justify-center text-[#D49B28] shrink-0">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block">
                        International Trade Summary
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#183D32]">
                        Export Terms &amp; Container Consignment Overview
                      </h3>
                    </div>
                  </div>
                  <Link
                    to="/services/honey-export"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                  >
                    <span>Full Export Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D49B28]" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
                  <div className="bg-white rounded-2xl p-5 border border-stone-200/80 space-y-1.5">
                    <h4 className="font-bold text-[#183D32] text-sm">Incoterms (Case-by-Case)</h4>
                    <p className="font-light leading-relaxed">
                      Export consignments predominantly trade under <strong>FOB (Port Botany, Sydney)</strong>, <strong>FOB Sydney</strong>, <strong>CFR</strong>, or <strong>CIF</strong> terms depending on buyer freight-forwarding arrangements. Specific Incoterms are confirmed per shipment and are not implied for every consignment.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-stone-200/80 space-y-1.5">
                    <h4 className="font-bold text-[#183D32] text-sm">Container Loads &amp; Dispatch</h4>
                    <p className="font-light leading-relaxed">
                      Dispatched via <strong>Port Botany, Sydney</strong>: 20ft FCL loads (~19.2–22.4 MT net in 300kg steel drums or 1,400kg IBC totes, or 10–12 retail pallets). LCL palletised air freight is noted for sample verification and urgent consignments (subject to confirmation).
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-stone-200/80 space-y-1.5">
                    <h4 className="font-bold text-[#183D32] text-sm">Export Documentation</h4>
                    <p className="font-light leading-relaxed">
                      Documentation coordinated per consignment includes Certificate of Analysis (COA), Certificate of Origin (FTA declarations where applicable), Phytosanitary certificates, and Bills of Lading (subject to destination approvals).
                    </p>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-stone-600 font-light">
                  Note: Specific export freight rates, vessel transit timelines, destination customs requirements, and Australian state-by-state domestic biosecurity rules are not published and await company confirmation per quote.
                </p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 5. HOW WE PARTNER WITH COMMERCIAL CLIENTS (4-Step Process) */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
            Operational Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D32] tracking-tight">
            How We Partner With Commercial Clients
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-light">
            Our structured commercial onboarding supports specification alignment, batch documentation, and logistics coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: '01',
              title: 'Requirement & Spec Alignment',
              desc: 'We assess your required volume, preferred floral varietal (Wild Forest or Eucalyptus), container format, and delivery timeline.'
            },
            {
              step: '02',
              title: 'Batch COA & Sample Coordination',
              desc: 'We coordinate available batch COA specifications and evaluation bench samples upon request (subject to company confirmation).'
            },
            {
              step: '03',
              title: 'Clean Batch Packing & Labeling',
              desc: 'Cold gravity settling below 40°C, tamper-evident sealing, lot coding, and reinforced pallet strapping.'
            },
            {
              step: '04',
              title: 'Sydney Dispatch Coordination',
              desc: 'Coordinated from Sydney with shipping paperwork and carrier tracking (freight timelines confirmed per order).'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-[#8E620F]/55 block mb-3">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-[#183D32] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-[#8E620F] uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-[#8E620F]" />
                <span>Standard Stage</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONSOLIDATED WHOLESALE ACCOUNT APPLICATION & B2B TRADE ENQUIRY FORM */}
      <section id="enquiry-form" className="py-20 lg:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
              Wholesale Account &amp; Direct Trade Enquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#183D32]">
              Apply for a Wholesale Account or Request Bulk Pricing
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
              Prepare your business details, optional ABN/ACN, and supply requirements below for our Sydney trade desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Sidebar: Trade Desk Snapshot & Quote Readiness */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-stone-200/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#183D32] flex items-center justify-center text-[#D49B28] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E620F] block">
                      Supplier Snapshot
                    </span>
                    <h3 className="text-lg font-bold text-[#183D32]">
                      Sydney Commercial Trade Desk
                    </h3>
                  </div>
                </div>

                <div className="divide-y divide-stone-200/80 text-xs space-y-0">
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Target Sectors</span>
                    <span className="font-semibold text-[#183D32] text-right">Retail, Cafés, Bakeries &amp; Export</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Dispatch Hub</span>
                    <span className="font-semibold text-[#183D32] text-right">Sydney, NSW, Australia</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Core Formats</span>
                    <span className="font-semibold text-[#183D32] text-right">225g Jars – 1,400kg IBC</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Evaluation Samples</span>
                    <span className="font-semibold text-[#183D32] text-right">Available on Request</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Documentation</span>
                    <span className="font-semibold text-[#183D32] text-right">COA, Origin &amp; Phyto (Per Order)</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-2">
                    <span className="text-stone-600">Enquiry Handling</span>
                    <span className="font-semibold text-[#183D32] text-right">Subject to Confirmation</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-stone-200/90 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183D32]">
                  <Clock className="w-4 h-4 text-[#8E620F]" aria-hidden="true" />
                  <span>Tips for a Faster Quote</span>
                </div>
                <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                    <span>Include your ABN/ACN and business type for wholesale tier assessment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                    <span>Specify honey varietal, container size (cartons, pails, drums, or IBC), and delivery suburb or export port.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8E620F] shrink-0 mt-1" aria-hidden="true" />
                    <span>Tick &ldquo;Request Sample Evaluation&rdquo; if you need bench-test honey and a batch COA before ordering.</span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Right Main Column: Wholesale Application & Enquiry Form */}
            <div className="lg:col-span-8 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-1 bg-[#183D32] text-[#D49B28] text-xs font-mono font-bold rounded-full">
                      Local Reference: {submissionRef}
                    </span>
                    <h3 className="text-2xl font-bold text-[#183D32]">
                      Commercial Enquiry Summary Recorded Locally
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                      Thank you, <strong className="text-[#183D32]">{formData.fullName}</strong> ({formData.businessSector}). Your summary for <strong>{formData.honeyVariety}</strong> in <strong>{formData.packagingFormat}</strong> ({formData.estimatedQuantity}, {formData.orderCadence}) has been recorded in your browser.
                      {formData.requestSample ? ' Sample evaluation & Batch COA request noted.' : ''}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-stone-200 text-xs text-stone-700 max-w-md mx-auto text-left space-y-1">
                    <p><strong>Not Yet Transmitted:</strong> Automated backend/email delivery is not connected on this preview site.</p>
                    <p>
                      To send this request directly, please email{' '}
                      <a href={`mailto:${BRAND_INFO.emails.wholesale}?subject=${encodeURIComponent(`Commercial Enquiry ${submissionRef}`)}`} className="font-bold text-[#183D32] underline">
                        {BRAND_INFO.emails.wholesale}
                      </a>{' '}
                      with reference <strong>{submissionRef}</strong>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#183D32] text-white hover:bg-[#225344] text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Prepare Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                  <div aria-live="polite" className="sr-only">
                    {errorSummary}
                  </div>
                  {errorSummary && (
                    <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorSummary}</span>
                    </div>
                  )}
                  {/* Active Selected Specification Banner */}
                  {(() => {
                    const activeMatrixSpec = PACKAGING_MATRIX.find(
                      (m) => m.format === formData.packagingFormat
                    );
                    return (
                      <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#D49B28]/50 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#183D32] flex items-center justify-center text-[#D49B28] shrink-0 mt-0.5 shadow-xs">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-[#183D32] uppercase tracking-wider text-[11px]">
                                Active Configuration:
                              </span>
                              <span className="font-bold bg-[#D49B28]/25 text-[#183D32] px-2.5 py-0.5 rounded-full text-xs">
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
                        <span className="text-[11px] font-medium text-stone-600 bg-[#FAF7F2] border border-stone-200 px-2.5 py-1 rounded-lg shrink-0">
                          Customizable below
                        </span>
                      </div>
                    );
                  })()}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="srv-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="srv-fullName"
                        type="text"
                        required
                        aria-invalid={Boolean(formErrors.fullName)}
                        aria-describedby={formErrors.fullName ? 'srv-fullName-err' : undefined}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Liam Turner"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 ${
                          formErrors.fullName ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p id="srv-fullName-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="srv-companyName" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Company / Trading Name
                      </label>
                      <input
                        id="srv-companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sydney Artisan Bakery Pty Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800"
                      />
                    </div>
                  </div>

                  {/* Australian B2B Qualification Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="srv-abnAcn" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        ABN / ACN <span className="text-stone-600 font-normal">(For Trade Accounts)</span>
                      </label>
                      <input
                        id="srv-abnAcn"
                        type="text"
                        aria-invalid={Boolean(formErrors.abnAcn)}
                        aria-describedby={formErrors.abnAcn ? 'srv-abnAcn-err' : undefined}
                        value={formData.abnAcn}
                        onChange={(e) => setFormData({ ...formData, abnAcn: e.target.value })}
                        placeholder="e.g. 51 824 753 556"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 ${
                          formErrors.abnAcn ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.abnAcn && (
                        <p id="srv-abnAcn-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.abnAcn}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="srv-businessSector" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Business Sector / Type
                      </label>
                      <select
                        id="srv-businessSector"
                        value={formData.businessSector}
                        onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800"
                      >
                        <option value="Retail Stockist">Retail Stockist</option>
                        <option value="Hospitality / Bakery">Hospitality / Bakery</option>
                        <option value="Food Manufacturer">Food Manufacturer</option>
                        <option value="Distributor / Exporter">Distributor / Exporter</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="srv-email" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Business Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="srv-email"
                        type="email"
                        required
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? 'srv-email-err' : undefined}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. procurement@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 ${
                          formErrors.email ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p id="srv-email-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="srv-phone" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="srv-phone"
                        type="tel"
                        required
                        aria-invalid={Boolean(formErrors.phone)}
                        aria-describedby={formErrors.phone ? 'srv-phone-err' : undefined}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +61 400 123 456"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 ${
                          formErrors.phone ? 'border-red-500' : 'border-stone-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p id="srv-phone-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="srv-honeyVariety" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Honey Variety
                      </label>
                      <select
                        id="srv-honeyVariety"
                        value={formData.honeyVariety}
                        onChange={(e) => setFormData({ ...formData, honeyVariety: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800"
                      >
                        <option value="Raw Wild Forest Honey">Raw Wild Forest Honey</option>
                        <option value="Pure Raw Eucalyptus Honey">Pure Eucalyptus Honey</option>
                        <option value="Raw Wildflower Blossom Honey">Wildflower Blossom Honey</option>
                        <option value="100% Raw Cut Honeycomb">Raw Cut Honeycomb</option>
                        <option value="Commercial Bush Blend">Commercial Bush Blend</option>
                        <option value="Custom Floral / Multi-Varietal Blend">Custom Floral / Multi-Varietal</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="srv-packagingFormat" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Preferred Format
                      </label>
                      <select
                        id="srv-packagingFormat"
                        value={formData.packagingFormat}
                        onChange={(e) => setFormData({ ...formData, packagingFormat: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 font-medium"
                      >
                        <option value="Retail Glass Jars">Retail Glass Jars (225g–1kg)</option>
                        <option value="Food Service Pails">Food Service Pails (14kg / 28kg)</option>
                        <option value="Industrial Export Drums">Export Drums (300kg Steel)</option>
                        <option value="Intermediate Bulk Totes (IBC)">IBC Totes (1,400kg)</option>
                        <option value="Custom Packaging / Combination Pallet">Custom / Mixed Pallet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="srv-estimatedQuantity" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Estimated Volume
                      </label>
                      <select
                        id="srv-estimatedQuantity"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800"
                      >
                        <option value="Sample Pack Evaluation">Sample Pack Evaluation</option>
                        <option value="Master Cartons (6 to 24 units)">Master Cartons (6–24 units)</option>
                        <option value="1 to 2 Pallets (~1–2T)">1 to 2 Pallets (~1–2T)</option>
                        <option value="3 to 5 Pallets (~3–5T)">3 to 5 Pallets (~3–5T)</option>
                        <option value="20ft Full Container Load">20ft Full Container Load</option>
                        <option value="Custom / Scheduled Volume">Custom / Scheduled</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="srv-orderCadence" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5">
                        Order Cadence
                      </label>
                      <select
                        id="srv-orderCadence"
                        value={formData.orderCadence}
                        onChange={(e) => setFormData({ ...formData, orderCadence: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-stone-300 text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800"
                      >
                        <option value="One-Off / Trial Order">One-Off / Trial Order</option>
                        <option value="Monthly / Standing Supply">Monthly / Standing Supply</option>
                        <option value="Quarterly Contract Reserve">Quarterly Contract Reserve</option>
                        <option value="Export Shipment Schedule">Export Shipment Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="srv-message" className="block text-xs font-bold uppercase tracking-wider text-[#183D32] mb-1.5 flex items-center justify-between">
                      <span>Supply Details &amp; Destination City / Port <span className="text-red-600">*</span></span>
                      <span className="text-xs text-stone-600 font-normal">Editable text</span>
                    </label>
                    <textarea
                      id="srv-message"
                      rows={4}
                      required
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'srv-message-err' : undefined}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify delivery location, required lead time, or custom packaging notes..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus-visible:outline-2 focus-visible:outline-[#183D32] text-stone-800 ${
                        formErrors.message ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.message && (
                      <p id="srv-message-err" role="alert" className="text-[11px] text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  <label className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer select-none bg-white px-4 py-3 rounded-xl border border-stone-200">
                    <input
                      type="checkbox"
                      checked={formData.requestSample}
                      onChange={(e) => setFormData({ ...formData, requestSample: e.target.checked })}
                      className="w-4 h-4 accent-[#183D32] rounded cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                    />
                    <span>
                      <strong>Request Sample Pack &amp; Batch COA</strong> for product evaluation before bulk ordering
                    </span>
                  </label>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-600">
                      * Captures local enquiry summary for {BRAND_INFO.emails.wholesale}.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                    >
                      <span>Submit Commercial Enquiry</span>
                      <Send className="w-3.5 h-3.5 text-[#D49B28]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6B. WHOLESALE & TRADE ORDERING FAQ ACCORDION (The Grocer Pattern) */}
      <section className="py-16 lg:py-20 bg-[#FAF7F2] border-t border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E620F] block mb-1">
              Trade Ordering Guide
            </span>
            <h2 className="text-3xl font-bold text-[#183D32]">
              Wholesale &amp; Trade Ordering FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How do Australian businesses apply for a YSSP Wholesale Account?',
                a: 'Complete the wholesale account form above with your business trading name, optional ABN/ACN, business sector, and expected format. Our Sydney trade desk reviews your enquiry details and follows up with wholesale specifications and trade terms (response timelines subject to company confirmation).'
              },
              {
                q: 'Can we request sample jars or bulk evaluation samples with a COA?',
                a: 'Commercial bakeries, food manufacturers, and specialty retail stockists can request bench evaluation samples alongside available batch COA specifications upon request (subject to company confirmation).'
              },
              {
                q: 'What are the minimum order quantities for retail cartons vs. bulk formats?',
                a: 'Retail flint glass jars start from master cartons of 6 to 24 units (mixed-varietal pallets available). Food-service pails (14kg/28kg) and 300kg lined steel drums are supplied by the pallet, while 1,400kg IBC totes can be ordered per unit.'
              },
              {
                q: 'Do you support standing contracts and international export documentation?',
                a: 'Scheduled harvest reservations and 20ft FCL export consignments—with Certificate of Origin, COA, and Phytosanitary documentation—can be coordinated with our trade desk (subject to shipment and regulatory confirmation).'
              },
              ...FAQS_SIMPLE.slice(1, 2)
            ].map((faq, idx) => {
              const isOpen = openTradeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200/80 shadow-2xs"
                >
                  <button
                    type="button"
                    id={`services-faq-trigger-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`services-faq-panel-${idx}`}
                    onClick={() => setOpenTradeFaq(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#183D32]">{faq.q}</span>
                    <span className="p-1 rounded-full bg-[#FAF7F2] text-stone-600 shrink-0" aria-hidden="true">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`services-faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`services-faq-trigger-${idx}`}
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
