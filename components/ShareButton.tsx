"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <div className="relative group/share">
      <button 
        onClick={handleShare}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl border border-[#e5e7eb] text-[#374151] hover:bg-white hover:text-accent hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
        aria-label="Share Project"
      >
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        )}
      </button>
      
      {/* Tooltip */}
      <div className={`absolute top-full right-0 mt-2 rounded bg-text-primary px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-bg-primary transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 group-hover/share:opacity-100 group-hover/share:translate-y-0'}`}>
        {copied ? 'Link Copied!' : 'Copy Link'}
      </div>
    </div>
  );
}
