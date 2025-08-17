'use client';

import { useEffect, useState } from 'react';

interface TypedTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypedText({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '' 
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeInIdx, setFadeInIdx] = useState(-1); // for fade-in effect

  useEffect(() => {
    const currentText = texts[textIndex];
    let interval = isDeleting ? deleteSpeed : speed;
    // Add slight randomization for more natural typing
    interval += Math.floor(Math.random() * 40);

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          setFadeInIdx(displayText.length); // trigger fade-in for new char
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  // Reset fade-in index after animation
  useEffect(() => {
    if (fadeInIdx !== -1) {
      const fadeTimer = setTimeout(() => setFadeInIdx(-1), 180);
      return () => clearTimeout(fadeTimer);
    }
  }, [fadeInIdx]);

  return (
    <span className={`${className} inline-block align-middle relative`} style={{ whiteSpace: 'pre' }}>
      {displayText.split('').map((char, idx) => (
        <span
          key={idx}
          className={
            fadeInIdx === idx
              ? 'inline-block transition-opacity duration-200 opacity-0 animate-fade-in'
              : 'inline-block transition-opacity duration-200 opacity-100'
          }
          style={{ transition: 'opacity 0.18s' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {/* Blinking, tall, thin accent cursor */}
      <span
        className="inline-block align-middle ml-1"
        aria-hidden="true"
        style={{
          height: '1.1em',
          width: '2px',
          background: 'var(--accent, #00E0FF)',
          borderRadius: '1px',
          marginLeft: '0.1em',
          verticalAlign: 'middle',
          animation: 'typed-cursor-blink 1s steps(1) infinite',
          display: 'inline-block',
        }}
      />
      <style jsx>{`
        @keyframes typed-cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.2; }
        }
        .animate-fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </span>
  );
}
