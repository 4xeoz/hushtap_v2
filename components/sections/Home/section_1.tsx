import React from 'react'
import Image from 'next/image'

const section_1 = () => {
  return (
   <>
   {/* Main Content */}
   <div className="min-h-screen container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              The hardware <br className="hidden lg:block" />
              that helps you <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                disconnect.
              </span>
            </h1>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end h-full">
            <div className="relative  w-full h-full flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/iPhone.png"
                alt="Phone Mockup"
                layout="responsive" // Makes the image responsive
                width={400} // Aspect ratio width
                height={800} // Aspect ratio height
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default section_1