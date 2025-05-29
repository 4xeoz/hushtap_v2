import React from 'react'
import Image from 'next/image'

const section_1 = () => {
  return (
   <>
   {/* Main Content */}
   <div className="min-h-screen container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10 min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12">
            <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
              The hardware <br className="hidden lg:block" />
              that helps you <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-gray-200">
                disconnect.
              </span>
            </h1>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end h-full ">
            <div className="relative  w-full h-full flex items-center justify-center rounded-lg shadow-lg ">
              <Image
                src="/iPhone.png"
                alt="Phone Mockup"
                layout='responsive'
                width={400}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default section_1