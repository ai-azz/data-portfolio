import React, { useState, useEffect } from "react";
import { Database } from "lucide-react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "SELECT * FROM portfolio WHERE user = 'Aini'";
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    let index = 0;
    
    // typing animation
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      // update loading percentage
      if (index < fullText.length) {
        setLoadingPercent(Math.min(100, Math.floor((index / fullText.length) * 100)));
      }

      if (index > fullText.length) {
        clearInterval(typingInterval);
        setLoadingPercent(100);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 50); // typing speed

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center transition-opacity duration-1000">
      
      {/* DB icon */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Database size={48} className="text-blue-900 relative z-10 animate-bounce-slow" />
      </div>

      {/* SQL typing text */}
      <div className="mb-8 font-mono text-lg md:text-2xl font-bold text-blue-950 tracking-tight">
        <span className="text-blue-600 mr-2">&gt;</span>
        {text}
        <span className="animate-blink text-amber-500 font-extrabold">_</span>
      </div>

      {/* load bar container */}
      <div className="w-[240px] md:w-[300px] h-1 bg-slate-200 rounded-full relative overflow-hidden">
        {/* progress bar blue */}
        <div 
          className="h-full bg-blue-900 transition-all duration-100 ease-out rounded-full relative"
          style={{ width: `${loadingPercent}%` }}
        >
          {/* shine effect on bar */}
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transform skew-x-12 translate-x-full animate-shimmer"></div>
        </div>
      </div>

      {/* status text small */}
      <div className="mt-3 font-mono text-xs text-slate-500">
        {loadingPercent < 100 ? "Fetching Data..." : "Data Loaded Successfully"}
      </div>
    </div>
  );
};