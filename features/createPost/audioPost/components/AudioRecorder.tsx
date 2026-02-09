import {  I3Square } from "iconsax-react";
import { Mic, Square } from "lucide-react";

export default function AudioRecorder({
  recording,
  onStart,
  onStop,
}: {
  recording: boolean;
  onStart: () => void;
  onStop: () => void;
}) {
  return (
    <button
      type="button"
      onClick={recording ? onStop : onStart}
      className="flex py-4 w-full items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10"
    >
      {recording ? (
        <>
          <Square size={22} className="text-red-500 bg-red-500 rounded-sm" />
          <span>Stop recording</span>
        </>
      ) : (
        <div className="inline-flex gap-2 flex-col items-center">

          <Mic size={22} className="text-white bg-blue-500 p-2 h-10 w-10 rounded-full" />
          <span>Click here to start recording</span>
        </div>
      )}
    </button>
  );
}
