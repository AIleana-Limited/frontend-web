// components/LiveChat.tsx
import { LiveComment } from "../types";

export default function LiveChat({
  comments,
}: {
  comments: LiveComment[];
}) {
  return (
    <div className="absolute bottom-24 left-4 z-20 w-64 space-y-2">
      {comments.slice(-6).map((c) => (
        <div key={c.id} className="flex items-start gap-2">
          <img
            src={c.user.avatar}
            className="h-7 w-7 rounded-full"
            alt={c.user.name}
          />
          <div className="rounded-xl bg-black/70 px-3 py-2 text-xs text-white">
            <strong>{c.user.name}</strong>
            <div>{c.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
