"use client";

import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Heart,
} from "lucide-react";

type Props = {
  stats: {
    likes: number;
    comments: number;
    shares: number;
    tradebits : number;
    credix : number;
  };
  state?: {
    liked?: boolean;
  };
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
};

export default function PostActions({
  stats,
  state,
  onLike,
  onComment,
  onShare,
}: Props) {
  return (
    <div className="mt-3 text-sm text-(--text-primary)/70">
      {/* COUNTS */}
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center gap-1 ">
            <Heart className="w-5 h-5 text-red-600" fill="red" />
          <span>{format(stats.likes)}</span>
          </span>
          <span className="flex items-center gap-1 justify-center ">
            <img src="/icons/tradebits.png"
             alt="Tradebits"
             className="h-5 w-5" />

                <span>{format(stats.likes)}</span>
          </span>
          <span className="flex items-center gap-1 justify-center">
             <img src="/icons/credix.png"
             alt="Credix"
             className="h-5 w-5" />
          <span>{format(stats.likes)}</span>
          </span>
        </div>

        <div className="flex gap-4">
          <span>{stats.comments} comments</span>
          <span>{stats.shares} shares</span>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-4 h-px bg-white/10" />

      {/* ACTION BUTTONS */}
      <div className="flex justify-between items-center">
      <div className="flex justify-around "> 
        <Action
          icon={Heart}
          label="Like"
          active={state?.liked}
          onClick={onLike}
        />
        <Action
          icon={MessageCircle}
          label="Comment"
          onClick={onComment}
        />
        <Action
          icon={Share2}
          label="Share"
          onClick={onShare}
        />
      </div>
      <div className="flex justify-end items-center gap-2">
          <button>
          <img src="/icons/tradebits.png"
             alt="Tradebits"
             className="h-6 w-6" />
         </button>
         <button>
          <img src="/icons/credix.png"
             alt="Credix"
             className="h-6 w-6" />
         </button>
        <p className="font-medium">Gifts</p>
        </div>            
      </div>
    </div>
  );
}

/* -------------------- ACTION BUTTON -------------------- */
function Action({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex mt-2 items-center gap-2 rounded-md px-3 py-2 transition
        ${
          active
            ? "text-blue-500"
            : "text-(--text-primary)/70 hover:bg-white/5"
        }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

/* -------------------- HELPERS -------------------- */
function format(num: number) {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}
