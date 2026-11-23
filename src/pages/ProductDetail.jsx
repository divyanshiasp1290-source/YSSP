import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Droplets,
  Package,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { HONEY_PRODUCTS } from '../data/honeyData';

export default function ProductDetail({ onOpenEnquiry }) {
  const { id } = useParams();
  const product = HONEY_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const [selectedSize, setSelectedSize] = useState(product.packSizes[0]);

  // Other products for quick browsing
  const relatedProducts = HONEY_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] text-[#292D28] min-h-screen py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-[#183D32] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/products" className="hover:text-[#183D32] transition-colors">Our Honey</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#183D32] font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Product Image & Badges */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-stone-200/70 aspect-square max-h-[520px] mx-auto shadow-inner group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Natural Badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-bold text-[#183D32] border border-stone-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D49B28]"></span>
                  <span>100% Raw &amp; Unheated</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#183D32]/90 backdrop-blur-xs text-white p-3.5 rounded-xl text-xs flex items-center justify-between">
                  <div>
                    <span className="text-[#D49B28] font-bold block text-[10px] uppercase tracking-wider">
                      Harvest Origin
                    </span>
                    <span className="text-stone-200 font-medium">
                      {product.origin}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#D49B28] bg-[#102B23] px-2.5 py-1 rounded">
                    {product.color}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Enquiry Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E3EADF] text-[#183D32] mb-2.5">
                  {product.categoryLabel}
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold text-[#183D32] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#D49B28] mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Short Natural Description */}
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Available Sizes / Formats */}
              <div className="space-y-2 pt-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#183D32]">
                  Available Sizes &amp; Supply Packaging:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#183D32] text-white shadow-sm ring-2 ring-[#183D32]'
                          : 'bg-[#FAF7F2] text-stone-700 hover:bg-stone-200/80 border border-stone-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Simple Natural Highlights */}
              <div className="bg-[#FAF7F2] p-4.5 rounded-2xl border border-stone-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#183D32] block mb-0.5">
                  Purity &amp; Quality Standards:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D49B28] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasting Profile */}
              {product.tastingNotes && (
                <div className="text-xs sm:text-sm text-stone-600 bg-white p-3.5 rounded-xl border border-stone-200 space-y-1">
                  <div>
                    <strong className="text-[#183D32]">Aroma:</strong> {product.tastingNotes.aroma}
                  </div>
                  <div>
                    <strong className="text-[#183D32]">Taste:</strong> {product.tastingNotes.taste}
                  </div>
                  <div>
                    <strong className="text-[#183D32]">Texture:</strong> {product.tastingNotes.finish}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${product.name} (${selectedSize})`)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#183D32] hover:bg-[#225344] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire About This Honey</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B28]" />
                </button>

                <Link
                  to="/products"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold border border-stone-300 transition-all text-center"
                >
                  ← Back to All Honey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Other Varieties (Simple 3 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D49B28] block mb-1">
              Natural Selection
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
              Explore Other Raw Varieties
            </h3>
          </div>
          <Link
            to="/products"
            className="text-xs font-bold text-[#183D32] hover:text-[#D49B28] transition-colors hidden sm:inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-stone-200 flex flex-col justify-between p-5 group"
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#183D32] text-[#D49B28]">
                    {rel.categoryLabel}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#183D32] mb-1">
                  {rel.name}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                  {rel.flavor}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/products/${rel.id}`}
                  className="text-xs font-bold text-[#183D32] hover:text-[#D49B28] transition-colors"
                >
                  View Details →
                </Link>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(rel.name)}
                  className="px-3 py-1.5 rounded-full bg-[#FAF7F2] text-xs font-semibold text-[#183D32] hover:bg-[#183D32] hover:text-white transition-all"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
