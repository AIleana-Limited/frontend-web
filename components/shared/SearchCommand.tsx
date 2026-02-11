"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const suggestions = [
  "Live shopping",
  "Nike sneakers",
  "Freelancer designer",
  "Audio posts",
  "Sell on live",
];

export default function SearchCommand() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative ml-auto w-64">
      {/* INPUT */}
      <div className="flex h-15 lg:ml-10 lg:w-150 w-full items-center gap-2 rounded-lg 
      border border-border bg-background/80 px-4 shadow-inner shadow-black/20">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          placeholder="Search on Alleana"
          className="w-full bg-transparent text-sm text-(--text-primary)/80 
          placeholder:text-(--text-primary)/40 outline-none"
        />

         <div className="ml-auto flex items-center justify-center">
              <Search className="h-4 w-4 text-(--text-primary)/60" />
            </div>
      </div>

      {/* SUGGESTIONS */}
      {open && query && (
        <div className="absolute z-50 mt-2 left-10 w-120 rounded-xl border border-white/10 bg-(--surface-1)">
          {filtered.length ? (
            filtered.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setQuery(item);
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-white/5"
              >
                {item}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-(--text-primary)/50">
              No results
            </p>
          )}
        </div>
      )}
    </div>
  );
}
