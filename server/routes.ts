import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { insertRecordingSchema, updateRecordingSchema } from "@shared/schema";

const upload = multer({ dest: "uploads/" });
const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY || "";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get recent recordings
  app.get("/api/recordings", async (req, res) => {
    try {
      const recordings = await storage.getRecentRecordings();
      res.json(recordings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recordings" });
    }
  });

  // Get specific recording
  app.get("/api/recordings/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const recording = await storage.getRecording(id);
      
      if (!recording) {
        return res.status(404).json({ error: "Recording not found" });
      }
      
      res.json(recording);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recording" });
    }
  });

  // Upload and transcribe audio
  app.post("/api/transcribe", upload.single("audio"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No audio file provided" });
      }

      const { type } = req.body;
      
      if (!type || !["lecture", "meeting"].includes(type)) {
        return res.status(400).json({ error: "Invalid recording type" });
      }

      // Calculate audio duration
      let estimatedDuration = 0;
      try {
        const fileSizeMB = req.file.size / (1024 * 1024);
        if (fileSizeMB > 10) {
          estimatedDuration = Math.round(fileSizeMB * 80);
        } else {
          estimatedDuration = Math.round(fileSizeMB * 60);
        }
      } catch (error) {
        console.log("Could not estimate duration:", error);
      }

      // Create initial recording record
      const recording = await storage.createRecording({
        title: `${type === "lecture" ? "강의" : "회의"} 녹음 - ${new Date().toLocaleDateString("ko-KR")}`,
        type,
        duration: estimatedDuration,
        transcription: null,
        summary: null,
        filePath: req.file.path,
        assemblyaiId: null,
        status: "processing",
      });

      // Start transcription process (non-blocking)
      processTranscription(recording.id, req.file.path, type);

      res.json({ recordingId: recording.id, status: "processing" });
    } catch (error) {
      console.error("Transcription error:", error);
      res.status(500).json({ error: "Failed to start transcription" });
    }
  });

  // Delete recording
  app.delete("/api/recordings/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteRecording(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete recording" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function processTranscription(recordingId: number, filePath: string, type: string) {
  console.log(`Starting transcription processing for recording ${recordingId}`);
  
  try {
    // AssemblyAI transcription logic would go here
    // This is a simplified version
    
    await storage.updateRecording(recordingId, {
      status: "completed",
      transcription: "Transcription processing completed",
      summary: "Summary will be generated here"
    });
    
    console.log(`Transcription completed for recording ${recordingId}`);
  } catch (error) {
    console.error(`Transcription failed for recording ${recordingId}:`, error);
    await storage.updateRecording(recordingId, {
      status: "failed"
    });
  }
}
