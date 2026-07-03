import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";

const contactSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  industry: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    await db.insert(contactSubmissions).values({
      fullName: data.fullName,
      company: data.company ?? null,
      email: data.email,
      phone: data.phone ?? null,
      industry: data.industry ?? null,
      service: data.service ?? null,
      message: data.message ?? null,
    });
    return { ok: true };
  });
