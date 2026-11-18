import React, { useState, useEffect } from 'react';

const WORDS = [
  {
    text: 'Total Control.',
    type: 'control',
    className: 'hero-serif-tokens'
  },
  {
    text: 'Zero Egress.',
    type: 'egress',
    className: 'hero-serif-money'
  },
  {
    text: 'Air-Gapped.',
    type: 'airgap',
    className: 'hero-serif-tokens'
  }
];

export default function HeroTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % WORDS.length;
      setOutgoingIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setOutgoingIndex(null);
      }, 750);

      return () => clearTimeout(timer);
    }, 3200);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const activeWord = WORDS[currentIndex];
  const outgoingWord = outgoingIndex !== null ? WORDS[outgoingIndex] : null;

  return (
    <div className="hero-giant-headline">
      <div className="hero-headline-row">
        <span className="hero-word-save">Any Model.</span>
        <span className="hero-word-flip-slot">
          {outgoingWord && isTransitioning && (
            <span className={`hero-word-layer outgoing-layer ${outgoingWord.className} word-slide-out`}>
              {outgoingWord.text}
            </span>
          )}
          <span className={`hero-word-layer active-layer ${activeWord.className} ${isTransitioning ? 'word-slide-in' : 'word-settled'}`}>
            {activeWord.text}
          </span>
        </span>
      </div>
    </div>
  );
}
