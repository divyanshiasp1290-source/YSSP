import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import WordPressBlockReference from './components/WordPressBlockReference';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Wholesale from './pages/Wholesale';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState('');
  const [enquiryType, setEnquiryType] = useState('Wholesale Enquiry');

  const handleOpenEnquiry = (productOrSubject = '', type = 'Wholesale Enquiry') => {
    setEnquiryProduct(productOrSubject);
    setEnquiryType(type);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#292D28] font-sans antialiased selection:bg-[#D49B28]/25 selection:text-[#183D32]">
        {/* Global Navigation */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Dynamic Page Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products" element={<Products onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products/:id" element={<ProductDetail onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/wholesale" element={<Wholesale onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/quality" element={<Quality onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<Contact onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Wholesale Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
          initialProduct={enquiryProduct}
          defaultType={enquiryType}
        />

        {/* WordPress Kadence / Gutenberg Block Architecture Blueprint */}
        <WordPressBlockReference />
      </div>
    </Router>
  );
}
