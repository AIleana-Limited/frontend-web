import Image from "next/image";

export default function SuggestedFriendCard({
  name,
  avatar,
  mutuals,
}: {
  name: string;
  avatar: string;
  mutuals?: number;
}) {
  return (
    <div className="w-60 shrink-0 rounded-xl bg-(--surface-1) p-3">
      <div className="relative h-60 w-full overflow-hidden rounded-lg">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-2 text-sm font-medium">{name}</p>

      {mutuals !== undefined && (
        <p className="text-xs text-white/50">
          {mutuals} mutual friends
        </p>
      )}

      <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium">
        Add Friend
      </button>
    </div>
  );
}
