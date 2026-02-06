"use client";

import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  images: File[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onRemove: (index: number) => void;
};

export default function ProductImageGallery({
  images,
  activeIndex,
  onSelect,
  onRemove,
}: Props) {
  if (!images.length) return null;

  const activeImage = URL.createObjectURL(images[activeIndex]);

  return (
    <div className="space-y-3">
      {/* MAIN IMAGE */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl">
        <Image
          src={activeImage}
          alt="Product preview"
          fill
          className="object-cover"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((file, index) => {
          const src = URL.createObjectURL(file);

          return (
            <div
              key={index}
              className={`relative h-16 w-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border
                ${
                  activeIndex === index
                    ? "border-blue-500"
                    : "border-white/20"
                }`}
              onClick={() => onSelect(index)}
            >
              <Image
                src={src}
                alt="Thumbnail"
                fill
                className="object-cover"
              />

              {/* REMOVE */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(index);
                }}
                className="absolute right-1 top-1 rounded-full bg-black/60 p-1"
              >
                <X size={12} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
