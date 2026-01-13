"use client";

import Link from "next/link";
import { ChevronDown, Cog, Globe } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

type NavItem =
  | { label: string; href: string; type?: "link" }
  | {
      label: string;
      type: "dropdown";
      items: { label: string; href: string; icon?: React.ReactNode }[];
    };

const navItems: NavItem[] = [
  { label: "Home", href: "/", type: "link" },
  {
    label: "Product",
    type: "dropdown",
    items: [
      { label: "Platform", href: "/product/platform", icon: <Globe className="w-4 h-4 text-black"/> },
      { label: "Technology", href: "/product/technology", icon: <Cog className="w-4 h-4 text-black" />  },
    ],
  },
  { label: "AIVA", href: "/aiva", type: "link" },
  { label: "Solutions", href: "/solutions", type: "link" },
  { label: "Creators & Freelancers", href: "/creators", type: "link" },
  { label: "Company", href: "/company", type: "link" },
  { label: "Resources", href: "/resources", type: "link" },
];


const navLink =
  "text-base font-medium leading-[24px] text-(--text-primary) hover:text-slate-900 transition";

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="w-full">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4">
  
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold tracking-wide">
            AILEANA
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="outline-none">
                      <span className={`${navLink} inline-flex items-center gap-1`}>
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="start"
                      className="w-50 rounded-xl py-4 px-2"
                    >
                      {item.items.map((sub) => (
                        <DropdownMenuItem key={sub.href} asChild>
                          <Link
                            href={sub.href}
                            className="flex items-center gap-2 rounded-lg px-2 py-2"
                          >
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-sm">
                              {sub.icon}
                            </span>
                            {sub.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navLink} ${
                    pathname === item.href
                      ? "text-(--text-primary) relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:bg-blue-700"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
 <button       className="rounded-full bg-primary px-6 py-3 text-sm
  font-medium text-white hover:bg-primary/90 transition">  
        <Link
          href="/get-started"
    
        >
               
          Get Started
        </Link>
          </button>
      </div>
    </header>
  );
}
