"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical scroll position
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-2 bg-base-200">
    <div
      className="bg-primary transition-all duration-200 ease-in-out rounded-full"
      style={{
        height: `${progress}%`,
      }}
    />
  </div>  );
}
