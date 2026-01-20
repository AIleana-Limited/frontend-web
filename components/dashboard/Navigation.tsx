"use client";

import {
    Home,
    CircleUser,
  Store,
  Wallet,
  MessageCircle,
  Megaphone,
  Bolt

} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/* -------------------- NAVIGATION DATA -------------------- */
const mainLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Circle", href: "/circle", icon: Megaphone },
  { name: "Chat", href: "/chat", icon: MessageCircle },
  { name: "Shop", href: "/shop", icon: Store },
  { name: "Wallet", href: "/wallet", icon: Wallet },
];

const appLinks = [
  { name: "Profile", href: "/profile", icon: CircleUser  },
  { name: "Settings", href: "/settings", icon: Bolt },
];

/* -------------------- NAV SECTION COMPONENT -------------------- */
function NavSection({
  links,
  pathname,
}: {
  links: { name: string; href: string; icon: any }[];
  pathname: string;
}) {
  return (
    <div className="hidden md:block">

      <nav className="flex flex-col gap-4">
        {links.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                "flex h-10 items-center gap-3 pl-3 text-[16px] transition-colors rounded-md",
                "text-(--text-secondary) hover:bg-primary hover:text-white",
                {
                  "text-white bg-primary font-medium":
                    isActive,
                }
              )}
            >
              <Icon className="w-6" />
              <p className="hidden md:block font-medium">{name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

/* -------------------- MAIN NAVIGATION COMPONENT -------------------- */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-8 p-4">
      <NavSection links={mainLinks} pathname={pathname} />
      <hr className="w-full h-0.2 bg-gray-900 mb-4"/>
      <NavSection  links={appLinks} pathname={pathname} />
    </section>
  );
}
