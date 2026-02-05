import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-50"></div>

      {/* Top-right corner decoration */}
      <div className="absolute top-0 right-0 w-64 h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/10">
          <rect x="100" y="0" width="100" height="2" fill="currentColor" />
          <rect x="198" y="0" width="2" height="100" fill="currentColor" />
          <rect x="140" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="180" cy="80" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom-left corner decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/10">
          <rect x="0" y="198" width="100" height="2" fill="currentColor" />
          <rect x="0" y="100" width="2" height="100" fill="currentColor" />
          <rect x="20" y="140" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="120" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Center-right decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-64">
        <svg viewBox="0 0 100 200" className="w-full h-full text-primary/5">
          <line x1="80" y1="0" x2="80" y2="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="50" r="4" fill="currentColor" />
          <circle cx="80" cy="100" r="6" fill="currentColor" />
          <circle cx="80" cy="150" r="4" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default GeometricBackground;
