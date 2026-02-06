"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productPostSchema, ProductPostForm } from "../schema/productPostSchema";
import { Image as ImageIcon, ShoppingBag } from "lucide-react";
import { useState } from "react";
import ProductImageGallery from "./ProductImageGallery";

export default function ProductPostDialog() {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm<ProductPostForm>({
    resolver: zodResolver(productPostSchema),
    defaultValues: { images: [] },
    mode: "onChange",
  });

  const images = watch("images");

  const onSubmit = (data: ProductPostForm) => {
    console.log("PRODUCT POST PAYLOAD:", {
      type: "product",
      ...data,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
         <button
        className="flex items-center justify-center gap-2 rounded-full border border-white/10
        bg-black/40 px-4 py-3 text-sm text-white hover:bg-white/5"
      >
        <ShoppingBag size={16} className="text-yellow-400" />
        Product
      </button>
      </DialogTrigger>

      <DialogContent className="
    max-w-xl
  h-[90vh]
  flex
  flex-col
  overflow-hidden
  rounded-2xl
  bg-(--surface-1)
  p-0
  text-white">
        <DialogHeader className=" p-6 shadow-lg text-(--text-primary)/70">
          <DialogTitle>Product Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto hide-scrollbar">
          <div className="space-y-5 px-6 py-5 text-(--text-primary)/70">
             {/* TITLE */}
             <label htmlFor="product_title" className="text-sm font-medium">Product Name and Title</label>
            <input
            id="product_title"
              {...register("title")}
              placeholder="Product Name or Title"
              className="w-full p-2 rounded-md mt-2 border border-border placeholder:text-sm"
            />

             {/* Product Url */}
             <label htmlFor="product_url" className="text-sm font-medium">Product URL (Optional)</label>
            <input
            id="product_url"
              {...register("url")}
              placeholder="Enter Product URL"
              className="w-full p-2 rounded-md mt-2 border border-border placeholder:text-sm"
            />

            {/* DESCRIPTION */}
            <label htmlFor="product_description" className="text-sm font-medium">Description</label>
            <textarea
            id="product_description"
              {...register("description")}
              placeholder="Enter Product description" 
              rows={4}
              className="w-full border border-border mt-2 hide-scrollbar rounded-md p-2  placeholder:text-sm"
            />

            {/* GALLERY PREVIEW */}
            <ProductImageGallery
              images={images}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
              onRemove={(index) => {
                const updated = images.filter((_, i) => i !== index);
                setValue("images", updated);
                setActiveIndex(0);
              }}
            />

            {/* IMAGE UPLOAD */}
            <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed 
            border-white/20 bg-black/30 text-sm text-white/60 hover:bg-black">
              <ImageIcon size={20} className="mb-2" />
              Click to upload images
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setValue("images", [...images, ...files]);
                }}
              />
            </label>

            {errors.images && (
              <p className="text-xs text-red-400">{errors.images.message}</p>
            )}


            {/* Product Price */}
             <label htmlFor="product_price" className="text-sm font-medium">Product Price</label>
            <input
            id="product_price"
              {...register("price")}
              placeholder="Enter Product Price"
              className="w-full p-2 rounded-md mt-2 border border-border  placeholder:text-sm"
            />
          </div>

          {/* FOOTER */}
          <div className="flex gap-4 px-6 py-4">
            <button
              type="button"
              className="flex-1 rounded-sm border border-white/20 py-3 text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!isValid}
              className="flex-1 rounded-sm bg-blue-600 py-3 text-sm disabled:opacity-50"
            >
              Post
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}