import { useState } from "react";
import PostActions from "../PostActions";
import { PostHeader } from "../PostHeader";
import PostComments from "../comments/PostComments";

export default function TextPost({ post }: any) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="rounded-2xl bg-(--surface-1) p-4">
        <div className="mb-4">
        <PostHeader {...post} />
        </div>

      <p className="text-sm">{post.content}</p>

<PostActions
  stats={post.stats}
  onComment={() => setShowComments((v) => !v)}
/>

{showComments && (
  <>
    <PostComments comments={post.comments} />
    {/* <CommentInput /> */}
  </>
)}

    </div>
  );
}
