import React, { useState, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

/**
 * InshortsVerticalDeck
 * An Inshorts-inspired vertical swipe card experience designed specifically for mobile screens.
 * Allows users to swipe UP for next card and DOWN for previous card with smooth transitions,
 * progress bar, accessible next/prev controls, and touch release so standard scrolling is never trapped.
 */
export default function InshortsVerticalDeck({
  cards = [],
  sectionTitle = "How We Work",
  renderCard,
  onCardChange
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const containerRef = useRef(null);

  const totalCards = cards.length;

  const goToNext = useCallback(() => {
    if (currentIndex < totalCards - 1 && !isAnimating) {
      setIsAnimating(true);
      setSlideDirection('next');
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (onCardChange) onCardChange(next);
        return next;
      });
      setTimeout(() => setIsAnimating(false), 380);
    }
  }, [currentIndex, totalCards, isAnimating, onCardChange]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setSlideDirection('prev');
      setCurrentIndex((prev) => {
        const next = prev - 1;
        if (onCardChange) onCardChange(next);
        return next;
      });
      setTimeout(() => setIsAnimating(false), 380);
    }
  }, [currentIndex, isAnimating, onCardChange]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaY = touchStartY.current - touchEndY.current;
    const threshold = 45; // Minimum drag distance to register a card swipe

    if (deltaY > threshold) {
      // Swiped UP -> Go to Next card
      if (currentIndex < totalCards - 1) {
        goToNext();
      }
    } else if (deltaY < -threshold) {
      // Swiped DOWN -> Go to Prev card
      if (currentIndex > 0) {
        goToPrev();
      }
    }
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goToPrev();
    }
  };

  const currentCard = cards[currentIndex];
  const progressPercent = ((currentIndex + 1) / totalCards) * 100;

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full focus:outline-none focus:ring-1 focus:ring-[#C99A35] rounded-3xl"
      aria-roledescription="swipeable carousel"
      aria-label={`${sectionTitle} Inshorts-inspired vertical cards`}
    >
      {/* Deck Header & Navigation Bar */}
      <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-[#C99A35]/20">
        <div className="flex items-center gap-2">
          <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#C99A35] text-[#102B23] rounded-full">
            Inshorts Experience
          </span>
          <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
            Card {currentIndex + 1} of {totalCards}
          </span>
        </div>

        {/* Accessible Next/Prev arrow buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`p-1.5 rounded-full border transition-all ${
              currentIndex === 0
                ? 'opacity-30 border-stone-300 text-stone-400 cursor-not-allowed'
                : 'border-[#183D32] bg-[#183D32] text-white hover:bg-[#C99A35] hover:text-[#102B23] cursor-pointer'
            }`}
            aria-label="Previous card (Swipe Down)"
            title="Previous card"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === totalCards - 1}
            className={`p-1.5 rounded-full border transition-all ${
              currentIndex === totalCards - 1
                ? 'opacity-30 border-stone-300 text-stone-400 cursor-not-allowed'
                : 'border-[#183D32] bg-[#183D32] text-white hover:bg-[#C99A35] hover:text-[#102B23] cursor-pointer'
            }`}
            aria-label="Next card (Swipe Up)"
            title="Next card"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-stone-200/80 rounded-full h-1 mb-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#183D32] via-[#C99A35] to-[#DDB04E] h-1 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Vertical Swipe Card Area */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden min-h-[460px] sm:min-h-[500px] rounded-2xl shadow-xl transition-all"
        style={{ touchAction: 'pan-y' }}
      >
        {/* Animated Active Card */}
        <div
          key={currentIndex}
          className={`w-full h-full ${
            slideDirection === 'next' ? 'animate-inshorts-up' : 'animate-inshorts-down'
          }`}
        >
          {renderCard ? (
            renderCard(currentCard, currentIndex, totalCards)
          ) : (
            <DefaultInshortsCard card={currentCard} index={currentIndex} total={totalCards} />
          )}
        </div>
      </div>

      {/* Bottom Inshorts-style Swipe Prompt */}
      <div className="mt-3 flex items-center justify-between text-xs px-2 text-stone-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C99A35] animate-ping"></span>
          <span className="text-[11px] font-medium">
            {currentIndex < totalCards - 1
              ? "Swipe UP for next card"
              : "Completed all stages • Swipe DOWN to review"}
          </span>
        </div>

        {/* Card Dots Indicator */}
        <div className="flex items-center gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSlideDirection(i > currentIndex ? 'next' : 'prev');
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? 'w-6 bg-[#C99A35]'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Jump to card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DefaultInshortsCard({ card, index, total }) {
  return (
    <div className="bg-[#183D32] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full min-h-[460px] border border-[#295F50] relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-3 top-2 text-8xl font-black text-white/5 pointer-events-none select-none">
        {card.number || `0${index + 1}`}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C99A35] text-[#102B23]">
            {card.step || `Stage ${index + 1}`}
          </span>
          <span className="text-xs font-mono text-[#E3EADF]/60">
            {index + 1} / {total}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
          {card.title || card.heading}
        </h3>

        {card.subtitle && (
          <p className="text-sm font-medium text-[#C99A35] mb-4">
            {card.subtitle}
          </p>
        )}

        <p className="text-sm sm:text-base text-[#E3EADF]/90 leading-relaxed">
          {card.description || card.body}
        </p>

        {card.deliverables && (
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C99A35]">
              Key Outputs &amp; Assurance:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#E3EADF]/85">
              {card.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99A35] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-[#295F50] flex items-center justify-between text-xs text-[#C99A35]">
        <span className="font-semibold tracking-wide uppercase">YSSP Standard Protocol</span>
        <span>Swipe Up ↑</span>
      </div>
    </div>
  );
}
