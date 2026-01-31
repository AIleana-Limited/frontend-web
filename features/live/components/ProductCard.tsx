// features/live/components/ProductCard.tsx
import Image from "next/image";

type Props = {
  title: string;
  price: string;
  image: string;
};

export function ProductCard({ title, price, image }: Props) {
  return (
    <div className="rounded-xl bg-black/40 p-3">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="h-40 w-full rounded-lg object-cover"
      />

      <div className="mt-3 space-y-2">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-sm text-white/70">{price}</p>

        <button className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-sm text-white">
          View Info
        </button>
      </div>
    </div>
  );
}
