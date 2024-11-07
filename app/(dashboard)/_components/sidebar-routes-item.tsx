"use client";

import { cn } from "@/lib/utils";
import { Icon, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarRouteItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarRouteItem = ({
  icon: Icon,
  label,
  href,
}: SidebarRouteItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // style the active link
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-neutral-500 text-sm font-[500] pl-6 transition-all hover:text-neutral-600 hover:bg-neutral-300/20",
        isActive &&
          "text-emerald-700 bg-emerald-200/20 hover:bg-emerald-700/20 hover:text-emerald-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          className={cn("text-neutral-500", isActive && "text-emerald-700")}
          size={22}
        />
        {label}
      </div>
      {/* highlighter color */}
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-emerald-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarRouteItem;
