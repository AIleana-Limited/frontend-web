import { z } from "zod";

export const audioPostSchema = z.object({
  audience: z.enum(["public", "friends", "private"]),
  caption: z.string().max(1000).optional(),
  audioBlob: z.instanceof(Blob, {
    message: "Audio recording is required",
  }),
});

export type AudioPostFormValues = z.infer<typeof audioPostSchema>;
