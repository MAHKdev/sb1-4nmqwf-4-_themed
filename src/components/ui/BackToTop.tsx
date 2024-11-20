"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from 'lucide-react';


export default function BackToTopWithDaisyProgress() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setVisible(scrollTop > 300); // Show button after scrolling 300px
      setProgress(scrollProgress); // Update the progress
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-1 right-1 md:bottom-4 md:right-4 transition-opacity ${visible ? "opacity-100" : "opacity-0"
        }`}
      onClick={scrollToTop}
    >
      <div className="radial-progress text-primary bg-accent" style={{ "--value": progress, "--size": "3rem","--thickness": "8px" } as React.CSSProperties}>
      <ChevronUp />
        {/* Button to scroll to top 
        <button
          className="btn btn-secondary btn-circle rounded-full"
        >
          ↑
        </button>
        */}
      </div>
    </div>
  );
}
