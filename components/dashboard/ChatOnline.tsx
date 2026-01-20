import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/app/assest/images";

const chats = [
  { id: 1, name: "Anne Couture", avatar: Avatar, online: true },
  { id: 2, name: "Miriam Soleil", avatar: Avatar, online: true },
  { id: 3, name: "Marie Laval", avatar: Avatar, online: true },
  { id: 4, name: "Mark Morain", avatar: Avatar, online: true },
];

export default function ChatOnline() {
  return (
    <section className="w-full max-w-130 rounded-[28px] bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-(--text-primary)/70">
          Chat (online)
        </h3>

        <Link
          href="#"
          className="text-sm font-medium text-blue-500 hover:text-blue-400"
        >
          See all
        </Link>
      </div>

      {/* List */}
      <div className="mt-5 flex flex-col gap-4">
        {chats.map((chat) => (
          <button
            key={chat.id}
            className="flex items-center gap-4 rounded-2xl bg-white/5 px-4 py-3 text-left ring-1 ring-white/10 transition hover:bg-white/10"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Online dot */}
              {chat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-black/70" />
              )}
            </div>

            {/* Name */}
            <p className="text-sm font-medium text-(--text-primary)/90">
              {chat.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
