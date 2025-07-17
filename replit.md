# Voice Recording and Transcription Service

## Overview

This is a full-stack web application that provides AI-powered voice recording and real-time transcription services. The app is built as a Progressive Web App (PWA) with Korean language support, featuring audio recording, automatic transcription using AssemblyAI, speaker identification, and smart summarization capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **File Handling**: Multer for multipart form uploads
- **API Integration**: AssemblyAI for speech-to-text transcription

## Key Components

### Database Schema
The application uses a simple but effective schema with two main tables:
- **users**: Basic user management with username/password
- **recordings**: Comprehensive recording metadata including transcription, summaries, speaker data, and processing status

### Audio Recording System
- Browser-based audio recording using MediaRecorder API
- Support for pause/resume functionality
- Background recording capabilities with wake lock
- Automatic file format handling (WAV output)

### Transcription Pipeline
- File upload to server using multipart form data
- Integration with AssemblyAI for high-quality transcription
- Speaker diarization (identification of different speakers)
- Automatic summarization and keyword extraction
- Real-time status polling for processing updates

### UI/UX Features
- Mobile-first responsive design
- PWA capabilities with offline support
- Korean language interface
- Real-time processing feedback with animated progress indicators
- Comprehensive recording management interface

## Data Flow

1. **Recording Phase**: User selects recording type (lecture/meeting) → browser captures audio → local storage of audio data
2. **Upload Phase**: Audio blob + metadata sent to server → file saved to uploads directory
3. **Processing Phase**: Server sends audio to AssemblyAI → polls for completion → stores results in database
4. **Display Phase**: Client polls server for updates → displays transcription, speakers, and summary

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@anthropic-ai/sdk**: AI integration capabilities
- **@tanstack/react-query**: Server state management
- **multer**: File upload handling

### UI Dependencies
- **@radix-ui/***: Comprehensive UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

The application is configured for multiple deployment scenarios:

### Development
- Vite dev server with HMR (Hot Module Replacement)
- Express server with middleware mode
- Environment variables for database connection

### Production
- Static file serving from Express
- Optimized Vite build output
- Database migrations via Drizzle Kit
- Environment-based configuration

### Database Management
- Schema definitions in shared directory for type safety
- Migration system using Drizzle Kit
- Connection pooling for production scalability

The architecture prioritizes developer experience with TypeScript throughout, real-time updates, and a smooth user experience for voice recording workflows.