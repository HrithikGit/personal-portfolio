'use client';

import { useEffect, useState } from 'react';

const sectionIds = [
  'hero',
  'about',
  'principles',
  'skills',
  'experience',
  'projects',
  'education',
  'awards',
  'contact',
];

const animationSrc: Record<string, string> = {
  hero: '/lottie/ai-robot.json',
  about: '/lottie/study-abroad.json',
  principles: '/lottie/study-abroad.json',
  skills: '/lottie/man-working.json',
  experience: '/lottie/man-working.json',
  projects: '/lottie/man-working.json',
  education: '/lottie/study-abroad.json',
  awards: '/lottie/man-working.json',
  contact: '/lottie/man-robot.json',
};

const messages: Record<string, string> = {
  hero: 'Beware — Hrithik ships fast, scales hard, and makes systems behave.',
  about: 'I build fast, scalable systems without trading reliability.',
  principles: 'How I show up: ownership, teamwork, customer obsession.',
  skills: 'Toolbox: backend scale + AI‑powered workflows.',
  experience: 'Shipping impact at scale, with measurable wins.',
  projects: 'Ideas turned into production‑grade systems.',
  education: 'Strong CS foundation, always learning.',
  awards: 'Recognition for impact and problem‑solving.',
  contact: 'Let’s build something bold together.',
};

export default function SectionCompanion() {
  const [positionY, setPositionY] = useState(160);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      const target = window.scrollY + window.innerHeight * 0.3;
      let closestId = 'hero';
      let closestDist = Number.POSITIVE_INFINITY;
      let closestRect: DOMRect | null = null;

      sectionIds.forEach((id) => {
        const anchor = document.querySelector(`[data-companion-anchor="${id}"]`) as HTMLElement | null;
        if (!anchor) {
          return;
        }
        const rect = anchor.getBoundingClientRect();
        const absoluteY = rect.top + window.scrollY + rect.height / 2;
        const dist = Math.abs(target - absoluteY);
        if (dist < closestDist) {
          closestDist = dist;
          closestId = id;
          closestRect = rect;
        }
      });

      setActiveId(closestId);
      if (closestRect) {
        const rawY = closestRect.top + closestRect.height / 2;
        const minY = 120;
        const maxY = window.innerHeight - 220;
        setPositionY(Math.min(Math.max(rawY, minY), maxY));
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-[10%] top-0 z-40 hidden md:block">
      <div
        className="transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(0, ${Math.max(positionY - 80, 120)}px, 0)` }}
      >
        <div className="companion-lottie">
          <lottie-player
            src={animationSrc[activeId] ?? '/lottie/man-working.json'}
            background="transparent"
            speed="1"
            style={{ width: '190px', height: '190px' }}
            loop
            autoplay
          />
          <div className="companion-bubble">{messages[activeId] ?? messages.hero}</div>
        </div>
      </div>
    </div>
  );
}
