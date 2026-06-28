# VitaCare

A complete wellness application built with React, TypeScript, Vite, Tailwind CSS, Express, and Framer Motion.

## Features
- Responsive landing experience with animated hero and section cards
- Article library with detail pages
- Disease library with prevention and dietary guidance
- Nutrition and fitness content sections
- Interactive BMI calculator
- Search experience across major content areas
- Sign-in and account creation flow
- Admin dashboard for content management
- Express API with health and content endpoints

## Run locally
1. npm install
2. npm run dev
3. Open http://localhost:5173/

## Deploy to Vercel
1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build Command: npm run build
   - Output Directory: dist
4. Add this environment variable if you want the frontend to call a backend later:
   - VITE_API_URL=https://your-api-domain.com/api
5. Vercel will use the included vercel.json for SPA routing.