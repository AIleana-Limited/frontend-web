"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Avatar, Ronaldo, Shoes } from "@/app/assest/images";

const stories = [
  { id: 1, name: "Create Your Story", image: Avatar },
  { id: 2, name: "Rohit Sharma", image: Ronaldo },
  { id: 3, name: "Rohit Sharma", image: Shoes },
  { id: 4, name: "Rohit Sharma", image: Ronaldo },
  { id: 5, name: "Rohit Sharma", image: Avatar },
];

export default function StoriesEmbla() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section>
      <h3 className="mb-3 text-xl font-semibold text-white/90">Stories</h3>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {stories.map((story) => (
            <div key={story.id} className="shrink-0">
              <article className="relative h-80 w-50 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src={story.image.src}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white">
                  {story.name}
                </div>
                <div className="absolute h-15 w-15  left-2 top-2 rounded-full border-2 border-gray-600">
                    <Image src={story.image.src} className="object-cover rounded-full " fill alt="Profile pic"/>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
