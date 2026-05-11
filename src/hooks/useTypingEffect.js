import { useState, useEffect } from 'react';

/**
 * Simple typing + deleting animation for hero subtitle lines.
 */
export function useTypingEffect(phrases, typingSpeed = 55, deletingSpeed = 35, pauseMs = 2000) {
  const [display, setDisplay] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[phraseIndex] ?? '';
    let timeout;

    if (!isDeleting && display === full) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && display === '') {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), deletingSpeed);
    } else {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}
