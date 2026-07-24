# Greeting Frontend

A simple Next.js frontend app that fetches a greeting message from a backend REST API.

## Features

- Fetches data from the backend using the built-in fetch API
- Shows a loading state while the request is in progress
- Displays friendly error messages when the request fails
- Uses the Next.js App Router and functional React components

## Setup

1. Install dependencies:
   npm install

2. Create a local environment file:
   copy .env.local.example .env.local

3. Update the backend URL if needed in .env.local:
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

## Run the app

npm run dev

Open http://localhost:3000 in your browser.

## Project structure

- src/app - App Router pages and global styles
- src/components - Reusable UI components
- src/services - API service layer

## Notes

The app expects the backend API to be available at:
http://localhost:5000/api/greeting