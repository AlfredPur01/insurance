import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactSubmissions = sqliteTable("contact_submissions", {
  id: int("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone"),
  industry: text("industry"),
  service: text("service"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const industryEnquiries = sqliteTable("industry_enquiries", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  industry: text("industry").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
