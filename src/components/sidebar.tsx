"use client";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-button";

function Sidebar() {
  const pathname = usePathname();
  const navData = [
    {
      title: "Home",
      icon: Home,
      href: "/home",
    },
    {
      title: "Word List",
      icon: Package,
      href: "/wordlist",
    },
    {
      title: "Users",
      icon: Users,
      href: "/users",
    },
    
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start gap-y-6 py-4 px-2 text-sm font-medium lg:px-4">
            {navData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 py-2 rounded-lg px-3  transition-all ${pathname === item.href ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"}`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
            <ModeToggle className={`px-3`} />
          </nav>
        </div>
        <div className="mt-auto p-4">Card was here</div>
      </div>
    </div>
  );
}

export default Sidebar;
