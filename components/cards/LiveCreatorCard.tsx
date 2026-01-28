import { BadgeCheck, Tv } from "lucide-react";

type Props = {
  image: string;
  name: string;
  category: string;
  watching?: string;
  live?: boolean;
};

export default function LiveCreatorCard({
  image,
  name,
  category,
  watching,
  live,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/40">
      <img
        src={image}
        alt={name}
        className="h-82 w-full object-cover transition group-hover:scale-105"
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {watching && (
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
          👥 {watching} watching
        </div>
      )}

      {live && (
        <span className="absolute z-999 inline-flex gap-2 items-center left-2 bottom-15 rounded-xl bg-[#C41B1B] px-3 py-2 text-xs font-medium text-white">
          <Tv size={18}/> Watch Live
        </span>
      )}

      {/* content */}
      <div className="absolute bottom-0 w-full bg-black/20 px-4 py-2">
        <div className="flex items-center gap-1 text-sm font-semibold text-white">
          {name}
          <BadgeCheck size={14} className="text-blue-500" />
        </div>
        <p className="text-xs text-white/70">{category}</p>
      </div>
    </div>
  );
}
