import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon-only';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Anthuvann Infra & Construction Emblem"
    >
      <defs>
        {/* Gradients for tree leaves and trunk */}
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="treeTrunkGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="60%" stopColor="#14532d" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        {/* Gradients for right architectural leg */}
        <linearGradient id="archRightLeg" x1="50%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14532d" />
          <stop offset="50%" stopColor="#0d3b1f" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
        {/* Gradient for golden foundation swoosh */}
        <linearGradient id="goldSwooshGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="40%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        {/* Skyscraper gradient */}
        <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Group scaled for 200x200 canvas */}
      <g filter="url(#subtleGlow)">
        {/* Central Skyscraper Silhouette (Behind foundation arch) */}
        <g id="skyscrapers">
          {/* Building 1 (leftmost, lowest) */}
          <path d="M78 128 L84 125 V145 H78 Z" fill="url(#buildingGrad)" />
          {/* Building 2 (mid-left) */}
          <path d="M86 112 L94 108 V145 H86 Z" fill="url(#buildingGrad)" />
          {/* Building 3 (tallest central tower) */}
          <path d="M96 92 L106 88 V145 H96 Z" fill="url(#buildingGrad)" />
          {/* Building 4 (right mid) */}
          <path d="M108 106 L116 102 V145 H108 Z" fill="url(#buildingGrad)" />
          {/* Building 5 (rightmost) */}
          <path d="M118 122 L124 119 V145 H118 Z" fill="url(#buildingGrad)" />
        </g>

        {/* Right Architectural Sloped Leg of "A" */}
        <path
          d="M106 32 L158 152 H124 L102 78 L88 108 L104 32 Z"
          fill="url(#archRightLeg)"
        />
        {/* Subtle geometric inner facet */}
        <path
          d="M106 32 L102 78 L124 152 H158 Z"
          fill="#064e3b"
          opacity="0.9"
        />

        {/* Left Tree Trunk forming left leg of "A" */}
        <path
          d="M48 152 C58 142 66 128 72 108 C78 90 82 72 84 56 C83 62 80 72 74 88 C68 106 58 132 48 152 Z"
          fill="url(#treeTrunkGrad)"
        />
        {/* Tree Upper Crown Trunk & Branches */}
        <path
          d="M84 56 C86 48 94 36 106 32 C96 44 88 64 82 86 C80 68 82 58 84 56 Z"
          fill="#15803d"
        />

        {/* Tree Leaves Cluster (Left & Top of the "A") */}
        {/* Leaf 1 (Top crown) */}
        <path
          d="M86 42 C84 28 92 20 96 18 C98 26 94 36 86 42 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 2 (Upper left angled) */}
        <path
          d="M74 38 C64 30 68 20 74 18 C78 26 78 34 74 38 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 3 (Mid-high left) */}
        <path
          d="M64 54 C50 48 52 38 58 36 C64 42 66 50 64 54 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 4 (Upper mid inner) */}
        <path
          d="M82 52 C74 44 80 34 86 32 C88 40 86 48 82 52 Z"
          fill="#4ade80"
        />
        {/* Leaf 5 (Mid outer left) */}
        <path
          d="M56 74 C42 70 42 60 48 56 C54 62 58 70 56 74 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 6 (Mid-low inner branch leaf) */}
        <path
          d="M68 76 C58 68 64 60 70 58 C72 66 72 72 68 76 Z"
          fill="#22c55e"
        />
        {/* Leaf 7 (Lower left accent) */}
        <path
          d="M52 96 C40 94 40 84 46 80 C52 86 54 92 52 96 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 8 (Inner accent) */}
        <path
          d="M64 96 C56 90 60 82 66 80 C68 86 68 92 64 96 Z"
          fill="#16a34a"
        />

        {/* Golden Foundation Curved Bridge / Road Swoosh */}
        <path
          d="M58 152 C76 130 114 116 164 136 C138 124 94 126 68 144 L58 152 Z"
          fill="url(#goldSwooshGrad)"
        />
        <path
          d="M68 144 C94 126 138 124 164 136 C144 128 108 128 78 144 Z"
          fill="#fef08a"
          opacity="0.7"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'compact',
  theme = 'dark',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';

  const emblemSizes = {
    sm: 36,
    md: 46,
    lg: 64,
    xl: 96
  };

  const currentSize = emblemSizes[size];

  if (variant === 'icon-only') {
    return <LogoEmblem size={currentSize} className={className} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoEmblem size={currentSize} className="mb-2" />

        {/* Wordmark: ANTHUVANN with leaf in the first 'A' */}
        <div className="flex items-center tracking-tight font-extrabold text-2xl sm:text-3xl font-sans">
          {/* First A with leaf */}
          <span className="relative inline-block text-emerald-800 dark:text-emerald-400">
            A
            <svg
              className="absolute top-[48%] left-[28%] w-3 h-3 text-emerald-500 fill-current -rotate-45"
              viewBox="0 0 24 24"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
            </svg>
          </span>
          <span className={isDark ? 'text-white' : 'text-stone-900'}>
            NTHUVANN
          </span>
        </div>

        {/* Sub-Brand: INFRA & CONSTRUCTION */}
        <div
          className={`text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase mt-1 ${
            isDark ? 'text-stone-300' : 'text-stone-700'
          }`}
        >
          INFRA &amp; CONSTRUCTION
        </div>

        {/* Golden Tagline Lockup: — BUILDING A GREENER TOMORROW — */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs mt-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-amber-500">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="whitespace-nowrap">BUILDING A GREENER TOMORROW</span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
      </div>
    );
  }

  // Default: Compact horizontal lockup for Top Nav Header
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <LogoEmblem size={currentSize} />
      <div className="flex flex-col">
        {/* Brand Name */}
        <div className="flex items-center tracking-tight font-extrabold text-lg sm:text-xl leading-none">
          {/* First A with leaf icon */}
          <span className="relative inline-block text-emerald-600 dark:text-emerald-400">
            A
            <svg
              className="absolute top-[48%] left-[25%] w-2.5 h-2.5 text-emerald-500 fill-current -rotate-45"
              viewBox="0 0 24 24"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
            </svg>
          </span>
          <span className={isDark ? 'text-white' : 'text-stone-900'}>
            NTHUVANN
          </span>
        </div>

        {/* Subtitle */}
        <span
          className={`text-[9.5px] uppercase font-bold tracking-[0.16em] mt-1 ${
            isDark ? 'text-stone-300' : 'text-stone-700'
          }`}
        >
          INFRA &amp; CONSTRUCTION
        </span>

        {/* Tagline */}
        <div className="flex items-center gap-1.5 mt-0.5 text-[8.5px] uppercase tracking-wider text-amber-500 font-semibold">
          <span className="w-3 h-[1px] bg-amber-500/80" />
          <span className="text-amber-500 whitespace-nowrap">Building A Greener Tomorrow</span>
          <span className="w-3 h-[1px] bg-amber-500/80" />
        </div>
      </div>
    </div>
  );
};
