import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const recordings = pgTable("recordings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'lecture' or 'meeting'
  duration: integer("duration").notNull(), // in seconds
  transcription: text("transcription"),
  summary: text("summary"),
  speakers: text("speakers"), // JSON array of speaker data
  speakerSummary: text("speaker_summary"), // JSON object with summary per speaker
  speakerNames: text("speaker_names"), // JSON object with custom speaker names
  filePath: text("file_path"),
  assemblyaiId: text("assemblyai_id"),
  status: text("status").notNull().default("processing"), // 'processing', 'completed', 'failed'
  isSaved: boolean("is_saved").default(false), // 사용자가 저장 버튼을 눌렀는지
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRecordingSchema = createInsertSchema(recordings).omit({
  id: true,
  createdAt: true,
});

export const updateRecordingSchema = createInsertSchema(recordings).partial().omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Recording = typeof recordings.$inferSelect;
export type InsertRecording = z.infer<typeof insertRecordingSchema>;
export type UpdateRecording = z.infer<typeof updateRecordingSchema>;
