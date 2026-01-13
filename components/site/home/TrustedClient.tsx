import Image from "next/image";
import Link from "next/link";
import { BgTrustedClient, Avatar } from "@/app/assest/images";
import { ClientMarquee } from "./ClientsMarquee";

const avatars = [
  { src: Avatar, alt: "Avatar 1" },
  { src:Avatar , alt: "Avatar 2" },
  { src:Avatar , alt: "Avatar 3" },
];


export default function TrustedClient() {
  return (
    <section className="mt-15 px-4 pb-14 md:pb-16 lg:pb-22 xl:pb-45">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#111418] px-6 pb-10 pt-14 text-center md:px-10 lg:pt-22">
        {/* SVG Background */}
        <Image
          src={BgTrustedClient.src}
          alt=""
          fill
          priority
          className="pointer-events-none select-none object-cover opacity-100"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Avatars */}
          <div className="flex items-center justify-center">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <div
                  key={a.alt}
                  className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/15"
                >
                  <Image src={a.src} alt={a.alt} fill className="object-cover" />
                </div>
              ))}

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-200/90 text-[12px] font-medium text-black ring-2 ring-white/15">
                99+
              </div>
            </div>
          </div>

          {/* Trust text */}
          <p className="mt-4 text-[14px] font-medium text-white/90">
            Trusted by 20k+
          </p>
          <p className="mt-1 text-[12px] text-white/45">
            Potential users across the globe
          </p>

          {/* Quote */}
          <blockquote className="mx-auto mt-8 max-w-215 px-2 text-2xl lg:text-5xl font-normal leading-snug text-white md:text-[26px] lg:text-[34px] lg:leading-tight">
            “Since we started building Alleana, forward-thinking teams and
            creators have already joined the waitlist to be part of what’s
            coming.”
          </blockquote>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex h-11 border-[#A0A0A0] border-2 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white transition hover:opacity-90"
            >
              Join the winners
            </Link>
          </div>

          {/* Logos */}
          <div className=" mt-10 border-t border-white/10 pt-8">
          <ClientMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
