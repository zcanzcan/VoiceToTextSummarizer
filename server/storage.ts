import { users, recordings, type User, type InsertUser, type Recording, type InsertRecording, type UpdateRecording } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createRecording(recording: InsertRecording): Promise<Recording>;
  getRecording(id: number): Promise<Recording | undefined>;
  updateRecording(id: number, updates: UpdateRecording): Promise<Recording | undefined>;
  deleteRecording(id: number): Promise<boolean>;
  getAllRecordings(): Promise<Recording[]>;
  getRecentRecordings(limit?: number): Promise<Recording[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createRecording(insertRecording: InsertRecording): Promise<Recording> {
    const [recording] = await db
      .insert(recordings)
      .values(insertRecording)
      .returning();
    return recording;
  }

  async getRecording(id: number): Promise<Recording | undefined> {
    const [recording] = await db.select().from(recordings).where(eq(recordings.id, id));
    return recording || undefined;
  }

  async updateRecording(id: number, updates: UpdateRecording): Promise<Recording | undefined> {
    const [recording] = await db
      .update(recordings)
      .set(updates)
      .where(eq(recordings.id, id))
      .returning();
    return recording || undefined;
  }

  async getAllRecordings(): Promise<Recording[]> {
    return await db.select().from(recordings).orderBy(desc(recordings.createdAt));
  }

  async deleteRecording(id: number): Promise<boolean> {
    const result = await db.delete(recordings).where(eq(recordings.id, id));
    return (result.rowCount || 0) > 0;
  }

  async getRecentRecordings(limit = 10): Promise<Recording[]> {
    return await db.select().from(recordings).orderBy(desc(recordings.createdAt)).limit(limit);
  }
}

export const storage = new DatabaseStorage();
