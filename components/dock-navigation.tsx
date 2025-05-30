"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
  FileTextIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { RiDiscordFill } from "react-icons/ri";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/privacy-policy", icon: FileTextIcon, label: "privacy policy" },
  ],
  contact: {
    social: {
      Discord: {
        name: "Discord",
        url: "https://discord.gg/pdxtmvBp",
        icon: RiDiscordFill,
      },
      X: {
        name: "X",
        url: "https://x.com/ImbramWojd99349",
        icon: TwitterIcon,
      },
    },
  },
};

export function DockDemo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle" className="bg-black/50 border border-white/50 ">
          <DockIcon>
            <div className="flex h-full w-full relative ">
            <Image
              src="/Logo_white.png"
              alt="Descriptive alt text"
              fill
              className="object-contain"
            />
            </div>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-black/20"
                    )}
                  >
                    <item.icon className="size-4" color="white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-black/20"
                    )}
                  >
                    <social.icon className="size-4" color="white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
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
