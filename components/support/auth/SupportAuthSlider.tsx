"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Slide = {
  image: string;
  brand: string;
  tagline: string;
};

const slides: Slide[] = [
      {
    image: "/auth/support-1.webp",
    brand: "Alleana",
    tagline: "Build faster. Work smarter.",
  },
  {
    image: "/auth/support-2.jpg",
    brand: "Alleana",
    tagline: "Something has to be here",
  },
  {
    image: "/auth/support-1.webp",
    brand: "Alleana",
    tagline: "The future of real estate",
  },
];

export default function SupportAuthSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.goTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-full w-full overflow-hidden rounded-2xl">
      {/* Embla viewport */}
      <div ref={emblaRef} className="h-full w-full">
        {/* Embla container */}
        <div className="flex h-full">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className="relative min-w-0 flex-[0_0_100%] h-full"
            >
              {/* Background image */}
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />

              {/* Dark overlay (nice readable text) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-black/10" />

              {/* Bottom left text */}
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-semibold text-white tracking-tight">
                  {s.brand}
                </h2>
                <p className="mt-2 text-sm text-white/80">{s.tagline}</p>

                {/* Dots */}
                <div className="mt-5 flex items-center gap-2">
                  {slides.map((_, dotIndex) => {
                    const active = dotIndex === selectedIndex;

                    return (
                      <button
                        key={dotIndex}
                        onClick={() => scrollTo(dotIndex)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          active ? "w-6 bg-blue-500" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
