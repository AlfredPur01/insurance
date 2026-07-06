import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "@/db";
import { industryEnquiries } from "@/db/schema";

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  industry: z.string().min(1),
  message: z.string().min(1, "Message is required"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const submitEnquiryForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    await db.insert(industryEnquiries).values({
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      industry: data.industry,
      message: data.message,
    });
    return { ok: true };
  });
