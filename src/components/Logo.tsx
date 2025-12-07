import React from 'react';

interface LogoProps {
  className?: string; // Allows you to pass 'w-10 h-10' or 'w-20 h-20'
  showText?: boolean; // Toggle the text on/off
  lightMode?: boolean; // Optional: if you ever put it on a dark background
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  showText = true,
  lightMode = false
}) => {
  return (
    <div className={`flex items-center gap-2 group select-none ${className}`}>
      {/* Icon Wrapper */}
      <div className="relative aspect-square h-full flex-shrink-0">
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        >
           {/* Left: Raw Inputs (Blue/Purple) */}
          <rect x="4" y="14" width="20" height="16" rx="2" transform="rotate(-15 4 14)" className="fill-blue-900" />
          <rect x="7" y="17" width="14" height="10" transform="rotate(-15 7 17)" className="fill-blue-500" />
          <path d="M6 36C6 33.7909 7.79086 32 10 32C10.66 32 11.27 32.16 11.8 32.45C12.45 30.45 14.33 29 16.5 29C19.5376 29 22 31.4624 22 34.5C22 34.7 21.98 34.89 21.95 35.08C23.67 35.6 25 37.1 25 39C25 41.2091 23.2091 43 21 43H10C7.79086 43 6 41.2091 6 39V36Z" className="fill-purple-700" />
          <path d="M13 34L17 38M17 34L13 38" stroke="white" strokeWidth="2" strokeLinecap="round" />

          {/* Center: Transition (Magenta Arrow) */}
          <path d="M28 32C28 32 32 26 38 26C42 26 44 28 44 28" className="stroke-fuchsia-600" strokeWidth="4" strokeLinecap="round" />
          <path d="M44 28L40 25M44 28L40 31" className="stroke-fuchsia-600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

          {/* Right: Reel Output (Orange) */}
          <rect x="42" y="10" width="18" height="32" rx="4" className="fill-orange-500" />
          <rect x="44" y="12" width="14" height="28" rx="2" className="fill-orange-50" />
          <path d="M48 22L54 26L48 30V22Z" className="fill-rose-500" />
          <rect x="46" y="34" width="2" height="4" rx="1" className="fill-orange-500" />
          <rect x="49" y="32" width="2" height="6" rx="1" className="fill-orange-500" />
          <rect x="52" y="34" width="2" height="4" rx="1" className="fill-orange-500" />
        </svg>
      </div>

      {/* Wordmark (Optional) */}
      {showText && (
        <div className="flex flex-col leading-none justify-center h-full">
          <span className={`font-bold tracking-tight ${lightMode ? 'text-white' : 'text-blue-900'}`} style={{ fontSize: '1.2em' }}>
            RawTo<span className="text-orange-600">Reels</span>
          </span>
        </div>
      )}
    </div>
  );
};