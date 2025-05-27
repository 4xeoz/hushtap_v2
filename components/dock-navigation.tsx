"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  const pathname = usePathname();
  const isPrivacyPolicy = pathname === "/privacy-policy";

  return (
    <div className={`flex items-center justify-center relative `}>
        <div className="border-solid h-16 max-w-lg w-full bg-white/10 backdrop-blur-md rounded-full border-2 border-gray-600 flex items-center justify-between px-10">
            <div>
                <span className={`text-lg font-bold ${isPrivacyPolicy ? "text-black" : "text-white"}`}>Hushtap</span>
            </div>
            <div>
               <Link href="/privacy-policy" className={`${isPrivacyPolicy ? "text-blue-500" : "text-white"}`}>Privacy Policy</Link>
            </div>

        </div>
        
    </div>
  );
}

export function DockNavigation() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50">
      <DockDemo />
    </div>
  );
}
