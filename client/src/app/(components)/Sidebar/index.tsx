"use client";
import { usePathname } from "next/navigation";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }

  const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
  }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive =
      pathname === href || (pathname === "/" && href === "/dashboard");
  };
  return (
    <div>
      {/* Top Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">EDSTOCK</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">Sidebarlink</div>

      {/* FOOTER */}
      <div className={` mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2025 Edstock</p>
      </div>
    </div>
  );
};

export default Sidebar;
