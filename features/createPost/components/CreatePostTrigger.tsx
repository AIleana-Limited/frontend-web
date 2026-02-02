"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NewPostDialog from "./NewPostDialog";
import Image from "next/image";

export default function CreatePostTrigger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <div className="flex items-center gap-3">
            <Image
              src="/demo/creator-3.jpg"
              alt="User"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-sm text-white/60">
              What’s on your mind today?
            </span>
          </div>
        </div>
      </DialogTrigger>

      <NewPostDialog />
    </Dialog>
  );
}
