import React from "react";
import { FloatingDock } from "../components/floatingDock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FileUser, PanelsTopLeft } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Experience",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },

    {
      title: "Terminal",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Projects",
      icon: (
        <PanelsTopLeft className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "My Agency",
      icon: (
        <img
          src="/assets/T.png"
          width={30}
          height={30}
          className="rounded-md"
          alt="Tailoredtech"
        />
      ),
      href: "https://tailoredtech.tech/",
    },
    // {
    //   title: "CV",
    //   icon: (
    //     <FileUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.linkedin.com/in/abdelrahman-gasser-74571127b/",
    // },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/abdelrahman-gasser-74571127b/",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/abdelrahmangasser555",
    },
  ];
  return (
    <>
      {/* Desktop Floating Dock */}
      <div
        className="hidden md:block w-fit h-fit p-20 fixed -bottom-30 hover:bottom-1 transition-all duration-300 left-1/2 transform -translate-x-1/2"
        style={{
          zIndex: 1000,
        }}
      >
        <FloatingDock
          mobileClassName="hidden"
          items={links}
          desktopClassName="mx-auto h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 flex dark:bg-neutral-900"
        />
      </div>

      {/* Mobile Floating Dock */}
      <div
        className="block md:hidden fixed bottom-4 left-4 "
        style={{
          zIndex: 1000,
        }}
      >
        <FloatingDock
          mobileClassName="relative block"
          items={links}
          desktopClassName="hidden"
        />
      </div>
    </>
  );
}
