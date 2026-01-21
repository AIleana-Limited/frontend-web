import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/app/assest/images";

const yourCircles = [
  { id: 1, name: "ICC Officials", username: "@icc_officials", avatar: Avatar, badge: 4 },
  { id: 2, name: "ICC Officials", username: "@icc_officials", avatar: Avatar, badge: 4 },
  { id: 3, name: "ICC Officials", username: "@icc_officials", avatar: Avatar, badge: 4 },
];

const exploreCircles = [
  { id: 4, name: "ICC Officials", username: "@icc_officials", avatar: Avatar, badge: 4 },
  { id: 5, name: "ICC Officials", username: "@icc_officials", avatar: Avatar, badge: 4 },
];

function CircleRow({
  name,
  username,
  avatar,
  badge,
}: {
  name: string;
  username: string;
  avatar: any;
  badge?: number;
}) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-left transition hover:bg-white/5">
      {/* Avatar + badge */}
      <div className="relative">
        <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>

        {typeof badge === "number" && (
          <span className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white ring-2 ring-black/70">
            {badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <p className="text-sm font-semibold text-(--text-primary)/90">{name}</p>
        <p className="mt-1 text-xs text-(--text-primary)/40">{username}</p>
      </div>
    </button>
  );
}

export default function CirclesCard() {
  return (
    <section className="w-full max-w-130 rounded-[28px] bg-white/5 p-6 shadow-2xl dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-xl">
      {/* Your Circle header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-(--text-primary)/60">
          Your Circle
        </h3>

        <Link
          href="#"
          className="text-sm font-medium text-blue-500 hover:text-blue-400"
        >
          Create New Circle
        </Link>
      </div>

      {/* Your circles */}
      <div className="mt-4 flex flex-col gap-2">
        {yourCircles.map((circle) => (
          <CircleRow
            key={circle.id}
            name={circle.name}
            username={circle.username}
            avatar={circle.avatar}
            badge={circle.badge}
          />
        ))}
      </div>

      {/* Explore Circles header */}
      <div className="mt-6 flex items-center justify-between">
        <h3 className="text-sm font-medium text-(--text-primary)/60">
          Explore Circles
        </h3>

        <Link
          href="#"
          className="text-sm font-medium text-blue-500 hover:text-blue-400"
        >
          See all
        </Link>
      </div>

      {/* Explore circles */}
      <div className="mt-4 flex flex-col gap-2">
        {exploreCircles.map((circle) => (
          <CircleRow
            key={circle.id}
            name={circle.name}
            username={circle.username}
            avatar={circle.avatar}
            badge={circle.badge}
          />
        ))}
      </div>
    </section>
  );
}
