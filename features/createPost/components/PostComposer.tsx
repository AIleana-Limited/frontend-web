"use client";

import Image from "next/image";
import PostEmojiPicker from "./PostEmojiPicker";
import WriteWithAIVA from "./WriteWithAIVA";
import PostMediaOptions from "./PostMediaOption";

export default function PostComposer({
  audience,
  onAudienceClick,
}: {
  audience: string;
  onAudienceClick: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      {/* User */}
      <div className="flex items-center gap-3">
        <Image
          src="/demo/creator-3.jpg"
          alt="User"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium">Sarah Jeje</p>
          <button
            onClick={onAudienceClick}
            className="mt-1 rounded-md bg-black/40 px-2 py-1 text-xs text-white/80"
          >
            {audience}
          </button>
        </div>
      </div>

    <div className=" relative border border-gray-700 flex-1 mt-4 rounded-3xl">
      {/* Textarea */}
      <textarea
        placeholder="What's on your mind today?"
        className="resize-none w-full  h-[80%] bg-transparent hide-scrollbar p-4 text-sm 
        outline-none placeholder:text-white/40 "
      />

         <div>
         {/* Emoji */}
        <div className="absolute bottom-3 left-3">
          <PostEmojiPicker />
        </div>

        {/* AIVA */}
        <div className="absolute bottom-3 right-3">
          <WriteWithAIVA/>
        </div>    
        </div>     
    </div>
    <div className="mt-4">
    <PostMediaOptions />
    </div>

      {/* Post button */}
      <div className="mt-4 flex justify-end">
        <button className="rounded-xl bg-blue-600 px-6 py-2 text-sm">
          Post
        </button>
      </div>
    </div>
  );
}
