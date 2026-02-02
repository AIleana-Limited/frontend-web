"use client";

import { Globe, Users, Lock, ArrowLeft, Search } from "lucide-react";
import { useMemo, useState } from "react";
import clsx from "clsx";

/* -------------------- DEMO FRIENDS -------------------- */
const demoFriends = Array.from({ length: 20 }).map((_, i) => ({
  id: `friend-${i + 1}`,
  name: `Friend ${i + 1}`,
}));

const options = [
  {
    key: "Public",
    label: "Public",
    desc: "For everyone on Alleana — and outside it too",
    icon: Globe,
  },
  {
    key: "Friends",
    label: "Friends",
    desc: "The friends you connect with on Alleana",
    icon: Users,
  },
  {
    key: "Friends except",
    label: "Friends except",
    desc: "Choose friends who won’t see this",
    icon: Users,
  },
  {
    key: "Only me",
    label: "Only me",
    desc: "Only me",
    icon: Lock,
  },
];

export default function AudienceSelector({
  value,
  onSelect,
  onBack,
}: {
  value: string;
  onSelect: (v: string) => void;
  onBack: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const [excluded, setExcluded] = useState<string[]>([]);

  const filteredFriends = useMemo(() => {
    return demoFriends.filter((f) =>
      f.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="flex h-full flex-col">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-sm text-white/70"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="space-y-3">
        {options.map(({ key, label, desc, icon: Icon }) => {
          const isFriendsExcept = label === "Friends except";
          const isActive = value === label;

          return (
            <div key={key} className="rounded-xl border border-white/5">
              <button
                onClick={() => {
                  if (isFriendsExcept) {
                    setExpanded(true);
                    onSelect(label);
                  } else {
                    onSelect(label);
                    setExpanded(false);
                  }
                }}
                className="flex w-full items-center justify-between rounded-xl p-3 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <div className="text-left">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-white/50">{desc}</p>
                  </div>
                </div>

                <div
                  className={clsx(
                    "h-4 w-4 rounded-full border",
                    isActive
                      ? "border-blue-500 bg-blue-500"
                      : "border-white/30"
                  )}
                />
              </button>

              {/* FRIENDS EXCEPT DROPDOWN */}
              {isFriendsExcept && expanded && (
                <div className="border-t border-white/10 p-3">
                  {/* Search */}
                  <div className="mb-3 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2">
                    <Search size={14} className="text-white/50" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search friends"
                      className="flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
                    />
                  </div>

                  {/* Friends list */}
                  <div className="max-h-40 space-y-2 overflow-y-auto pr-1 hide-scrollbar">
                    {filteredFriends.map((friend) => {
                      const checked = excluded.includes(friend.id);

                      return (
                        <button
                          key={friend.id}
                          onClick={() =>
                            setExcluded((prev) =>
                              checked
                                ? prev.filter((id) => id !== friend.id)
                                : [...prev, friend.id]
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg px-2 py-1 hover:bg-white/5"
                        >
                          <span className="text-sm">{friend.name}</span>
                          <div
                            className={clsx(
                              "h-4 w-4 rounded border",
                              checked
                                ? "border-blue-500 bg-blue-500"
                                : "border-white/30"
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Done */}
      <button
        onClick={onBack}
        className="mt-auto rounded-xl bg-blue-600 py-2 text-sm"
      >
        Done
      </button>
    </div>
  );
}
