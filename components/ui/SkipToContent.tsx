"use client";

import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-4 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      Skip to main content
    </a>
  );
}