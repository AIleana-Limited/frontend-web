'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Search, Bell, User2, Bolt, BookOpen, MessageCircle, Users, Play} from "lucide-react";


const links = [
  { name: "Feeds", href: "/", icon: BookOpen },
  { name: "Chat", href: "/chat", icon: MessageCircle },
  { name: "Users", href: "/users", icon: Users },
  { name: "Video", href: "/video", icon: Play },
];


const Header = () => {
      const pathname = usePathname();
  return (
      <header className="h-18 lg:flex hidden justify-between items-center px-8">
          {/* Left: Search */}
        <div className="flex items-center gap-4">
          {/* Logo placeholder */}
          <div className="h-10 w-10 inline-flex justify-center items-center rounded-xl border border-gray-300/50 bg-background/20">
          <Bolt />
          </div>

          {/* Search input */}
          <div className="flex h-12 w-[320px] items-center gap-2 rounded-xl border border-border bg-background/80 px-4 shadow-inner shadow-black/20">
             <input
    type="text"
    placeholder="Search on Alleana"
    className="w-full bg-transparent text-sm text-(--text-primary)/80 placeholder:text-(--text-primary)/40 outline-none"
  />

            <div className="ml-auto flex items-center justify-center">
              <Search className="h-4 w-4 text-(--text-primary)/60" />
            </div>
          </div>
        </div>

        {/* Navigation */}
         <div className=" hidden lg:flex  w-120 items-center justify-between ">
        {links.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                "relative flex h-full items-center justify-center transition-colors",
                isActive ? "gap-2 text-blue-500" : "text-white/60 hover:text-white"
              )}
            >
              <Icon className="h-6 w-6" />

              {/* show label ONLY for active */}
              {isActive && <span className="text-base font-bold">{name}</span>}

              {/* underline */}
              {isActive && (
                <span className="absolute top-8 left-1/2 h-0.75 w-25 -translate-x-1/2 rounded-full bg-blue-500" />
              )}
            </Link>
          );
        })}
      </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full text-(--text-primary)/70 transition hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full text-(--text-primary)/70 transition hover:bg-white/10 hover:text-white">
            <User2 className="h-5 w-5" />
          </button>
        </div>
        </header>
  )
}

export default Header
