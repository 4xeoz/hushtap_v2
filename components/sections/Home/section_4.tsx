import React from 'react';
import Image from 'next/image';

const Section_4 = () => {
  return (
    <div className="min-h-screen container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
        <div className="space-y-8 lg:pr-12">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Innovation meets <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              simplicity.
            </span>
          </h2>
        </div>
        <div className="flex justify-center lg:justify-end h-full">
          <div className="relative w-full h-full flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/window.svg"
              alt="Window Mockup"
              layout="responsive"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;