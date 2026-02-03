// features/feed/components/comments/PostComments.tsx   
import { Comment } from "@/features/feed/types";
import { ThumbsUp } from "lucide-react";

export default function PostComments({
  comments = [],
}: {
  comments?: Comment[];
}) {
  return (
    <div className="mt-3 space-y-4">
      {comments.map((c) => (
        <div key={c.id} className="flex gap-3">
          <img
            src={c.user.avatar}
            alt={c.user.name}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div className="flex-1">
            <div className="rounded-2xl bg-white/5 px-3 py-2">
              <p className="text-sm font-medium">{c.user.name}</p>
              <p className="text-sm text-white/80">{c.message}</p>
            </div>

            <div className="mt-1 flex items-center gap-4 text-xs text-white/50">
              <span>{c.time}</span>
              <button>Like</button>
              <button>Reply</button>

              {c.likes > 0 && (
                <span className="flex items-center gap-1">
                  <ThumbsUp size={12} />
                  {c.likes}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
