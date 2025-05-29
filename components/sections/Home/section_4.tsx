import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Section_4 = () => {
  return (
    <div className="min-h-screen container mx-auto px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content area */}
        <div className="relative">
          {/* Top section with heading and phone */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16 lg:mb-32">
            {/* Left side - Heading */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col gap-9 p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-loose">
                Track your
            </h1>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-loose">
                blocked
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-loose">
                Time with our
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-loose">
                chart Data.
            </h1>

            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <div className=" min-h-1/2 h-full w-full relative">
                <Image
                  src="/Group 1597880428.png"
                  alt="Descriptive alt text"
                  
                  width={400}
                  height={300}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-0"
                />
              </div>
            </div>
          </div>

          {/* Bottom card - overlapped by phone */}
          <div className="relative lg:mt-40">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-600/40 mt-8 md:mt-12 lg:mt-16 shadow-xl">              {/* Progress bar section */}
              <div className="mb-12 lg:mb-16 w-1/2">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl md:text-3xl font-bold">25 hr</span>
                  <span className="text-2xl md:text-3xl font-bold">100 hr</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-4 md:h-6">
                  <div
                    className="bg-blue-500 h-4 md:h-6 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              {/* Call to action text */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Join our 100 hr distraction free goal to get a
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  verified focused badge.
                  <CheckCircle className="inline-block ml-4 w-8 h-8 md:w-12 md:h-12 text-blue-500" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
