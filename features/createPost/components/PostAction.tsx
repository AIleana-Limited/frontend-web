'use client'
import {
  Tv,
  Image as ImageIcon,
  Video,
  AudioLines,
} from "lucide-react";
import ProductPostDialog from "../productPost/components/ProductPostDialog";
import AudioPostDialog from "../audioPost/components/AudioPostDialog";

export default function PostActions() {
  return (
    <div
      className="
        grid grid-cols-5 gap-4
        max-lg:grid-cols-3
        max-md:grid-cols-2
        px-4
      "
    >
      {/* Live */}
      <button
        onClick={() => console.log("Live")}
        className="flex items-center justify-center gap-2 rounded-full border border-white/10
        bg-black/40 px-4 py-3 text-sm text-white hover:bg-white/5"
      >
        <Tv size={16} className="text-red-500" />
        Live
      </button>

      {/* Photo */}
      <button
        onClick={() => console.log("Photo")}
        className="flex items-center justify-center gap-2 rounded-full border border-white/10
        bg-black/40 px-4 py-3 text-sm text-white hover:bg-white/5"
      >
        <ImageIcon size={16} className="text-emerald-500" />
        Photo
      </button>

      {/* Video */}
      <button
        onClick={() => console.log("Video")}
        className="flex items-center justify-center gap-2 rounded-full border border-white/10
        bg-black/40 px-4 py-3 text-sm text-white hover:bg-white/5"
      >
        <Video size={16} className="text-rose-400" />
        Video
      </button>

      {/* Product */}
     <ProductPostDialog />

      {/* Audio */}
        <AudioPostDialog />
    </div>
  );
}
