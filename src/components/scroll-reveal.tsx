'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const animatedSections = Array.from(document.querySelectorAll<HTMLElement>('.viewport-animation'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.classList.add('reveal-enabled');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      animatedSections.forEach((item) => item.classList.add('is-in-view'));
      return () => root.classList.remove('reveal-enabled');
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }, { rootMargin: '140px 0px', threshold: 0 });

    revealItems.forEach((item) => revealObserver.observe(item));
    animatedSections.forEach((item) => animationObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      animationObserver.disconnect();
      root.classList.remove('reveal-enabled');
    };
  }, []);

  return null;
}
