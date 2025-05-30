"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const section_1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4,
      },
    },
  }

  const gradientTextVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      backgroundPosition: "200% center",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      backgroundPosition: "0% center",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        backgroundPosition: {
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  }

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen container mx-auto px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mt-10 min-h-[calc(100vh-120px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12 ml-20">
            <motion.h1 className="text-5xl lg:text-7xl xl:text-8xl  font-bold text-nowrap" variants={textVariants}>
              The hardware
            </motion.h1>
            <motion.h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-nowrap" variants={textVariants}>
              that helps you
            </motion.h1>
            <motion.h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight" variants={gradientTextVariants}>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-gray-200 bg-[length:200%_100%]">
                disconnect.
              </span>
            </motion.h1>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div className="flex justify-center items-center w-full h-full" variants={imageVariants}>
            <div className="relative w-full  h-full">
              <Image
                src="/iPhone.png"
                alt="Descriptive alt text"
                width={700}
                height={1100}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default section_1
