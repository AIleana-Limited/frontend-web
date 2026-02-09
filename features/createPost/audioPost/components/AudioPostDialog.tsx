"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { audioPostSchema, AudioPostFormValues } from "../schema/audioPostSchema";
import { useAudioRecorder } from "../hooks/useAudioRecorder";
import AudioRecorder from "./AudioRecorder";
import { AudioLines } from "lucide-react";
import PostEmojiPicker from "../../components/PostEmojiPicker";
import WriteWithAIVA from "../../components/WriteWithAIVA";

export default function AudioPostDialog() {
  const recorder = useAudioRecorder();

  const form = useForm<AudioPostFormValues>({
    resolver: zodResolver(audioPostSchema),
    defaultValues: {
      audience: "friends",
      caption: "",
    },
  });

  function onSubmit(values: AudioPostFormValues) {
    console.log("AUDIO POST PAYLOAD", {
      ...values,
      audioBlob: values.audioBlob,
    });
  }

  return (
        <Dialog>
          <DialogTrigger asChild>
             <button
        onClick={() => console.log("Audio")}
        className="flex items-center justify-center gap-2 rounded-full border border-white/10
        bg-black/40 px-4 py-3 text-sm text-white hover:bg-white/5"
      >
        <AudioLines size={16} className="text-blue-400" />
        Audio
      </button>
          </DialogTrigger>
    <DialogContent className="max-w-xl flex flex-col overflow-hidden rounded-2xl bg-(--surface-1) p-0 text-white">

      {/* HEADER */}
      <DialogHeader className="border-b border-white/10 px-6 py-4">
        <DialogTitle>Audio Post</DialogTitle>
      </DialogHeader>

      {/* FORM */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col"
      >
        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 hide-scrollbar">

          {/* USER + AUDIENCE (reuse later) */}
          <div className="flex items-center gap-3">
            <img
              src="/avatars/user1.png"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">Sarah Jeje</p>
              <button
                type="button"
                className="text-xs text-white/60"
              >
                Friends ▾
              </button>
            </div>
          </div>

          {/* AUDIO RECORDER */}
          <AudioRecorder
            recording={recorder.recording}
            onStart={recorder.start}
            onStop={() => {
              recorder.stop();
              if (recorder.audioBlob) {
                form.setValue("audioBlob", recorder.audioBlob);
              }
            }}
          />

          {/* AUDIO PREVIEW */}
          {recorder.audioBlob && (
            <audio
              controls
              src={URL.createObjectURL(recorder.audioBlob)}
              className="w-full"
            />
          )}

          {/* CAPTION */}
            <div className=" relative border border-gray-700 flex-1 mt-4 rounded-3xl">
              {/* Textarea */}
              <textarea
                placeholder="What's on your mind today?"
                className="resize-none w-full  min-h-40 bg-transparent hide-scrollbar p-4 text-sm 
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


          {/* ACTION SHORTCUTS */}
          <div className="grid grid-cols-3 gap-3">
            <button type="button" className="rounded-xl border border-white/10 py-3 text-sm">
              Gallery
            </button>
            <button type="button" className="rounded-xl border border-white/10 py-3 text-sm">
              Location
            </button>
            <button type="button" className="rounded-xl border border-white/10 py-3 text-sm">
              Tag People
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex gap-4 shadow-md  px-6 py-4">
          <button
            type="button"
            className="flex-1 rounded-xl border border-white/20 py-3 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!recorder.audioBlob}
            className="flex-1 rounded-xl bg-blue-600 py-3 text-sm disabled:opacity-40"
          >
            Post
          </button>
        </div>
      </form>
    </DialogContent>
     </Dialog>
  );
}
