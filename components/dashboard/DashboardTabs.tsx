"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Users, PlayCircle } from "lucide-react";

const tabs = [
  { label: "Feeds", href: "/", icon: BookOpen },
  { label: "Jobs", href: "/jobs", icon: Briefcase },
  { label: "Creator's hub", href: "/creators-hub", icon: Users },
  { label: "Videos", href: "/videos", icon: PlayCircle },
];

export default function DashboardTabs() {
  const pathname = usePathname();

  return (
    <div className="rounded-2xl py-4 border bg-(--surface-1) border-white/10 p-2 shadow-sm backdrop-blur">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition
              ${
                active
                  ? "text-blue-500"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition ${
                  active ? "text-blue-500" : "text-white/30"
                }`}
              />
              <span>{tab.label}</span>

              {/* ✅ Active underline */}
              {active && (
                <span className="absolute -bottom-4 left-0 right-4 h-[2px] rounded-full bg-blue-500" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
