import { z } from "zod";

export const productPostSchema = z.object({
  title: z.string().min(2).max(100),

  url: z.string().optional().or(z.literal("")),

  description: z.string().min(10).max(2000),

  price: z.string().optional().or(z.literal("")),

  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(6, "Maximum of 6 images allowed"),
});

export type ProductPostForm = z.infer<typeof productPostSchema>;
