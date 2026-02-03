// features/feed/posts/SuggestedFriends.tsx
import SuggestedFriendCard from "./SuggestedFriendCard";

export default function SuggestedFriends({ post }: any) {
  return (
    <div className="rounded-2xl bg-(--surface-1) p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">People you may know</h3>
        <button className="text-sm text-blue-500 hover:underline">
          Show All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
        {post.suggestions?.map((friend: any) => (
          <SuggestedFriendCard key={friend.id} {...friend} />
        ))}
      </div>
    </div>
  );
}
