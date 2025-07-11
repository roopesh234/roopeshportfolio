# Portfolio Website Application

## Overview

This is a modern, full-stack portfolio website built with React on the frontend and Express.js on the backend. The application serves as a professional showcase with a contact form functionality, featuring a clean design system powered by shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and animations
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **Validation**: Zod for runtime type validation
- **Session Management**: Express sessions with PostgreSQL storage

### Design System
- **Component Library**: Custom implementation using shadcn/ui
- **Theme System**: CSS variables with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Consistent typography scale
- **Color Palette**: Professional blue-based color scheme

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with smooth scrolling and mobile menu
2. **Hero Section**: Animated hero with typing effects and call-to-action buttons
3. **Portfolio Gallery**: Filterable project showcase with category tabs
4. **Contact Form**: Validated contact form with real-time feedback
5. **Theme Provider**: Context-based theme switching between light/dark modes
6. **Animated Elements**: Counter animations, skill bars, and entrance animations

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Error Handling**: Centralized error handling middleware
4. **Request Logging**: Custom middleware for API request logging

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (name, email, subject, message, timestamp)

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation occurs client-side using Zod schema
3. Valid data is sent to `/api/contact` endpoint
4. Backend validates data again using shared schema
5. Message is stored in database
6. Success/error response sent back to client
7. Toast notification shown to user

### Theme Management
1. Theme preference stored in localStorage
2. Theme context provides current theme state
3. CSS classes applied to document root
4. Components respond to theme changes automatically

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS, class-variance-authority
- **Validation**: Zod
- **HTTP Client**: Native fetch with TanStack Query

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session Management**: connect-pg-simple
- **Validation**: Zod, drizzle-zod
- **Utilities**: date-fns

### Development Tools
- **Build Tools**: Vite, esbuild
- **Type Checking**: TypeScript
- **Code Quality**: ESLint configuration through shadcn/ui
- **Development**: tsx for running TypeScript files

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server
- **Production**: Serves static files from Express with built React app
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Requirements
- Node.js environment for Express server
- PostgreSQL database (Neon Database recommended)
- Static file serving capability
- Environment variables support

### Scripts
- `dev`: Runs development server with hot reloading
- `build`: Creates production build of both frontend and backend
- `start`: Runs production server
- `db:push`: Applies database schema changes
- `check`: TypeScript type checking

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting provider with PostgreSQL support.