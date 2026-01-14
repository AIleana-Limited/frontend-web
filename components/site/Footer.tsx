"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Documentation", href: "/docs" },
      { label: "Tutorial", href: "/tutorials" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal Policies",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "Affiliate Policy", href: "/affiliate" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: <Linkedin className="h-4 w-4" /> },
  { label: "Facebook", href: "#", icon: <Facebook className="h-4 w-4" /> },
  { label: "Twitter", href: "#", icon: <Twitter className="h-4 w-4" /> },
  { label: "Instagram", href: "#", icon: <Instagram className="h-4 w-4" /> },
];

export default function Footer() {
  return (
    <footer className="w-full mt-40 border-t border-white/10 bg-linear-to-b from-[#050A12] via-[#050A12] to-black">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-18 md:grid-cols-2 lg:grid-cols-4">
          {/* Left */}
          <div className="space-y-10">
            <div className="space-y">
              <h2 className="text-2xl font-semibold tracking-wide text-white">
                AILEANA
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Where Social Interaction Becomes Income
              </p>
            </div>
        <button  className="inline-flex items-center justify-center 
        rounded-full bg-primary px-6 py-3 text-sm font-medium border-[#A0A0A0] border-2 text-white transition hover:bg-primary/90">
            <Link
              href="/get-early-access"
              >
              Get Early Access
            </Link>
                </button>
          </div>


          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-wide text-white/40">
                {col.title}
              </p>

              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-14 flex flex-col items-start justify-end gap-20 border-t border-white/10 pt-8 md:flex-row md:items-center">
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {s.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/40 md:text-sm">
            Copyright © Aileana Where Social Interaction Becomes Income
          </p>
        </div>
      </div>
    </footer>
  );
}
