// components/LiveActions.tsx
import { Heart, Share2, Gift } from "lucide-react";

export default function LiveActions() {
  return (
    <div className="absolute bottom-28 right-4 z-20 flex flex-col items-center gap-4">
      <Action icon={<Gift size={20} />} />
      <Action icon={<Heart size={20} />} />
      <Action icon={<Share2 size={20} />} />
    </div>
  );
}

function Action({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white">
      {icon}
    </button>
  );
}
