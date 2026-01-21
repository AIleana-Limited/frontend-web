import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/app/assest/images";

const activities = [
  {
    id: 1,
    name: "Hola Spine",
    action: "invited you to a circle",
    time: "2 min ago",
    avatar: Avatar,
  },
  {
    id: 2,
    name: "Eva Solain",
    action: "Sent you to a chat",
    time: "2 min ago",
    avatar: Avatar,
  },
  {
    id: 3,
    name: "Hola Spine",
    action: "invited you to a circle",
    time: "2 min ago",
    avatar: Avatar,
  },
  {
    id: 4,
    name: "Hola Spine",
    action: "invited you to a circle",
    time: "2 min ago",
    avatar: Avatar,
  },
];

export default function RecentActivities() {
  return (
    <section className="w-full max-w-130 rounded-[28px] bg-white/5 p-6 shadow-md dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-(--text-primary)/70">
          Recent Activities
        </h3>

        <Link
          href="#"
          className="text-sm font-medium text-blue-500 hover:text-blue-400"
        >
          See all
        </Link>
      </div>

      {/* List */}
      <div className="mt-5">
        {activities.map((item, idx) => (
          <div key={item.id}>
            <div className="flex items-center gap-4 py-5">
              {/* Avatar */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-base leading-tight text-(--text-primary)/90">
                  <span className="font-semibold text-(--text-primary)">{item.name}</span>{" "}
                  <span className="text-(--text-primary)/60">{item.action}</span>
                </p>

                <p className="mt-1 text-[14px] text-(--text-primary)/30">{item.time}</p>
              </div>
            </div>

            {/* Divider */}
            {idx !== activities.length - 1 && (
              <div className="h-px w-full bg-background/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
