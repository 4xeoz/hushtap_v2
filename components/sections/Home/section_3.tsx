import React from "react";
import Image from "next/image";

const Section_3 = () => {
  return (
    <div className="max-h-screen container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center h-[90vh] max-h-[1200px] bg-gradient-to-br from-white to-gray-300 rounded-3xl py-12 px-28 overflow-hidden">
        <div className=" h-full w-full flex flex-col items-center justify-center  ">
          <div className=" min-h-1/2 h-full w-full relative">
            <Image
              src="/iphone_6.png"
              alt="Descriptive alt text"
              width={400}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-2/3"
            />
          </div>
          <div className=" h-full w-full flex justify-center flex-col gap-10 ">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 ">
              brings your
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 ">
              digital world
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 ">
              to a halt.
            </h2>

          </div>
        </div>
        <div className=" h-full w-full flex flex-col items-center justify-center">
          <div className=" h-full w-full flex items-center justify-center flex-col gap-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 text-nowrap">
              Our NFC Powered
            </h2>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-600 mb-4">
              Hush
            </h2>
          </div>
          <div className="h-full w-full relative">
            <Image
              src="/hushtap_mock.png"
              alt="Descriptive alt text"
              layout="responsive"
              width={400}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
