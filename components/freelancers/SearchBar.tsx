import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3">
      {/* Search Input */}
      <div className="relative flex h-14 flex-1 items-center rounded-md border-2 border-border px-4">
        <input
          type="text"
          placeholder="Search for freelancers on Alleana"
          className="w-full bg-transparent text-sm text-(--text-primary) outline-none
          placeholder:text-(--text-primary)/40"
        />

        <Search
          size={18}
          className="absolute right-4 text-(--text-primary)/40"
        />
      </div>

      {/* Filter Button */}
      <button
        type="button"
        className="grid h-12 w-12 place-items-center rounded-md bg-blue-700/70
        text-(--text-primary) transition hover:bg-blue-700"
      >
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
}
