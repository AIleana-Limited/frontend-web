// features/live/components/LiveProductsSheet.tsx
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { demoProducts } from "../data/demoProducts";
import { ProductCard } from "./ProductCard";
import { Handbag } from "lucide-react";
import Link from "next/link";

export function LiveProductsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
         <button className=" absolute left-4 top-25 rounded-full bg-[#0E225D] px-4 py-2 text-base text-white gap-2 inline-flex place-content-center">
          <Handbag className="w-5 h-5" /> View Products 
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-105 max-w-full
          border-l border-white/10
          bg-background p-6
        "
      >
        <SheetHeader>
          <SheetTitle className="text-(--text-primary) inline-flex justify-between items-center">
            Products
            <Link href="#" className="text-primary text-sm font-medium">See all</Link>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4 overflow-y-auto pr-2 hide-scrollbar">
          {demoProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
