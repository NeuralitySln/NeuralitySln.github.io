'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DarkModeAwareLogo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const checkDarkMode = () => {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <Link href="/">
      <Image
        src={isDark ? "/assets/logo/neurality-logo-dark.png" : "/assets/logo/neurality-logo.png"}
        alt="Neurality Solutions"
        width={320}
        height={80}
        className="h-20 w-auto cursor-pointer hover:opacity-90 transition-opacity"
        priority
      />
    </Link>
  );
}