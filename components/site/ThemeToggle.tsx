"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
   <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-6 right-6 z-9999
        grid h-12 w-12 place-items-center
        rounded-full
        border border-border
        bg-(--surface)
        text-(--text-primary)
        shadow-lg
        backdrop-blur
        transition
        hover:scale-105 active:scale-95
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
