"use client";

import {
  Image as ImageIcon,
  Video,
  MapPin,
  UserPlus,
  Music,
} from "lucide-react";

export default function PostMediaOptions() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <MediaItem
        icon={<ImageIcon className="text-emerald-500" size={18} />}
        label="Gallery"
        onClick={() => console.log("Gallery")}
      />
      <MediaItem
        icon={<Video className="text-rose-400" size={18} />}
        label="Video"
        onClick={() => console.log("Video")}
      />
      <MediaItem
        icon={<MapPin className="text-blue-400" size={18} />}
        label="Location"
        onClick={() => console.log("Location")}
      />
      <MediaItem
        icon={<UserPlus className="text-purple-400" size={18} />}
        label="Tag People"
        onClick={() => console.log("Tag People")}
      />
      <MediaItem
        icon={<Music className="text-yellow-400" size={18} />}
        label="Music"
        onClick={() => console.log("Music")}
      />
    </div>
  );
}

function MediaItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center justify-center gap-2
        rounded-xl border border-white/10
        bg-black/30 w-full py-4
        text-xs text-white/70
        hover:bg-white/5 transition
      "
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
