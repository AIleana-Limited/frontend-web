"use client";

import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import PostComposer from "./PostComposer";
import AudienceSelector from "./AudienceSelector";
import clsx from "clsx";

type View = "post" | "audience";

export default function NewPostDialog() {
  const [view, setView] = useState<View>("post");
  const [audience, setAudience] = useState("Friends");

  return (
    <DialogContent className="w-full max-w-lg bg-[#1b1b1b] text-white">
      <DialogHeader>
        <DialogTitle>
          {view === "post" ? "New Post" : "Audience"}
        </DialogTitle>
      </DialogHeader>

      {/* Sliding container */}
      <div className="relative h-105 overflow-hidden">
        {/* Post composer */}
        <div
          className={clsx(
            "absolute inset-0 transition-transform duration-300",
            view === "post" ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <PostComposer
            audience={audience}
            onAudienceClick={() => setView("audience")}
          />
        </div>

        {/* Audience selector */}
        <div
          className={clsx(
            "absolute inset-0 transition-transform duration-300",
            view === "audience" ? "translate-x-0" : "translate-x-full"
          )}
        >
          <AudienceSelector
            value={audience}
            onBack={() => setView("post")}
            onSelect={(value) => {
              setAudience(value);
              setView("post");
            }}
          />
        </div>
      </div>
    </DialogContent>
  );
}
