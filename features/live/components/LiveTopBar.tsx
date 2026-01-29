// components/LiveTopBar.tsx
import { ArrowLeft, ShoppingBag, Mic, UsersRound, Handbag } from "lucide-react";
import Image from "next/image";

type Props = {
  host: {
    name: string;
    avatar: string;
    badge?: string;
  };
  stats: {
    tradbits: number;
    credits: number;
    likes: number;
    shares: number;
    viewers: number;
  };
};

export default function LiveTopBar({ host, stats }: Props) {
  return (
    <div>
    <div className="absolute left-4 right-4 top-4 z-30 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center ">

        <div className="flex items-center gap-8 px-3 border-4 w-full border-white/20 h-15 rounded-full bg-black/70 px-3 py-2 text-xs text-white">
          <img
            src={host.avatar}
            className="h-10 w-10 rounded-full"
            alt={host.name}
          />
            <div className="flex gap-6 place-content-center">
          <Stat label="Tradbits" icon ="/icons/tradebits.png" value={stats.tradbits} />
        <Stat label="Credix" icon ="/icons/credix.png"  value={stats.credits} />
          <Stat label="Likes" icon ="/icons/likes.png"  value={stats.likes} />
          <Stat label="Shared" icon ="/icons/share.png"  value={stats.shares} />
            </div>
        </div>

    
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end justify-center gap-3">
        <button className="rounded-full bg-blue-600 p-3 text-white">
          <Mic size={20} />
        </button>
      </div>
    </div>
          <div className=" absolute right-4 top-25 rounded-full bg-black/90 px-4 py-2 text-base text-white gap-2 inline-flex place-content-center">
          <UsersRound className="w-5 h-5" /> {stats.viewers /1000}k watching
        </div>    
          <div className=" absolute left-4 top-25 rounded-full bg-[#0E225D] px-4 py-2 text-base text-white gap-2 inline-flex place-content-center">
          <Handbag className="w-5 h-5" /> View Products
        </div>    
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: number; icon : string }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      {label}
      <span className="flex gap-1 items-center">
        <Image src={icon} alt="label" width={18} height={18}/>
      <strong>{value / 1000}k</strong>
      </span>
    </div>
  );
}
