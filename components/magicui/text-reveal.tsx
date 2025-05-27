"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";
// Commented out unused variable to resolve ESLint issue
// import { b } from "motion/react-client";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string | ReactNode;
  
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, ...props }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string" && typeof children !== "object") {
    throw new Error("TextReveal: children must be a string or ReactNode");
  }

  const words = typeof children === "string" ? children.split(" ") : [];

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)} {...props}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {typeof children === "string" ? (
          <span
            ref={targetRef}
            className={
              "  flex flex-wrap justify-center p-5 text-4xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-4xl lg:p-10 lg:text-5xl xl:text-6xl "
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]} index={i}>
                  {word}
                </Word>
              );
            })}
          </span>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  index: number;
}

const Word: FC<WordProps> = ({ children, progress, range, className, index }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const dynamicClassName =
    (index >= 1 && index <= 2
      ? "bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-gray-200"
      : "bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-white") ;

  return (
    <span className={cn("xl:lg-3 relative mx-1 lg:mx-1.5 my-2", className)}>
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn("text-white", dynamicClassName)}
      >
        {children}
      </motion.span>
    </span>
  );
};
