import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * HorizontalSwipeCarousel
 * Mobile-optimised horizontal swipe carousel with peek of the next card,
 * smooth snap alignment, drag/swipe gestures, and accessible navigation arrows.
 */
export default function HorizontalSwipeCarousel({
  items = [],
  renderItem,
  cardWidthClass = "w-[85vw] sm:w-[360px] md:w-[380px]",
  title,
  subtitle
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active item index
    const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 300;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, items.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [items.length]);

  const scrollByDirection = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 320;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 320;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      {/* Top Controls if title/subtitle provided */}
      {(title || subtitle) && (
        <div className="flex items-end justify-between mb-6 px-1">
          <div>
            {subtitle && (
              <p className="text-xs font-bold uppercase tracking-widest text-[#C99A35] mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-bold text-[#183D32]">
                {title}
              </h3>
            )}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByDirection('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-[#183D32] bg-[#183D32] text-white hover:bg-[#C99A35] hover:text-[#102B23] shadow-xs'
                  : 'border-stone-300 text-stone-300 opacity-40 cursor-not-allowed'
              }`}
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByDirection('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-[#183D32] bg-[#183D32] text-white hover:bg-[#C99A35] hover:text-[#102B23] shadow-xs'
                  : 'border-stone-300 text-stone-300 opacity-40 cursor-not-allowed'
              }`}
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Swipeable Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-1 focus:outline-none"
        style={{ WebkitOverflowScrolling: 'touch' }}
        tabIndex={0}
        aria-label="Swipeable items carousel"
      >
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className={`shrink-0 snap-start transition-transform ${cardWidthClass}`}
          >
            {renderItem ? renderItem(item, idx) : null}
          </div>
        ))}
      </div>

      {/* Bottom Pagination Dots & Swipe Tip */}
      <div className="flex items-center justify-between px-2 pt-1 text-xs text-stone-500">
        <span className="text-[11px] sm:hidden text-stone-600 font-medium">
          ← Swipe horizontally to explore →
        </span>

        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === activeIndex
                  ? 'w-6 bg-[#C99A35]'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Scroll to item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
