'use client'

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Search, Bell, ShoppingCart } from "lucide-react";




const Header = () => {
      const pathname = usePathname();
  return (
      <header className="h-25 lg:flex hidden justify-between items-center px-8">
          {/* Left: Search */}
        <div className="flex items-center gap-4">

          {/* Search input */}
          <div className="flex h-15 lg:ml-10 lg:w-150 w-full items-center gap-2 rounded-lg border border-border bg-background/80 px-4 shadow-inner shadow-black/20">
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
        
        {/* Right: icons */}
        <div className="flex items-center gap-8">
             <button className="grid h-10 w-10 place-items-center rounded-full  transition bg-background text-(--text-primary) p-1">
            <ShoppingCart  className="h-5 w-5" />
          </button>
          
          <button className="grid h-10 w-10 place-items-center rounded-full bg-background text-(--text-primary) p-1">
            <Bell className="h-5 w-5" />
          </button>
        </div>
        </header>
  )
}

export default Header
