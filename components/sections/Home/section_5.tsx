import React from 'react';
import Image from 'next/image';
import { FooterSection } from "@/components/sections/Home/FooterSection";


const Section_5 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image src="/background_section5.png" alt="Background" fill className="object-cover" priority />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-blue-400/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Image
                src="/Logo_black.png"
                alt="Descriptive alt text"
                width={70}
                height={70}
                className="object-contain"
              />

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black ">
                HushQR
              </h2>
            </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-16 md:mb-20 font-bold">
          Start your distraction
          <br />
          free journey for less.
        </h1>

        {/* Launch Date */}
        <div className="text-black text-lg md:text-xl font-medium">
          <div className="relative">
            Launches June 2025
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-black" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Section_5;