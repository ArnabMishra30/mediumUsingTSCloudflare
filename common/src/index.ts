import { z } from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8),
});

//blog types....................................
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

//update blog input
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

//type inference in zod(needed in frontend)
export type SignupInput = z.infer<typeof signupInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type SigninInput = z.infer<typeof signinInput>;
