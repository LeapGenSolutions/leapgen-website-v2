# LeapGen.AI - Original Next.js Website

This is the clean, original Next.js source code for the LeapGen.AI website that was working properly.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual values.

3. **Run development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   # or
   pnpm build
   pnpm start
   ```

## Features

- Complete LeapGen.AI website with all pages
- Working contact forms with webhook integration
- ROI calculators for SurroundAI and DataCoffee
- Customer success stories and case studies
- Professional dashboard visualizations
- Mobile responsive design
- Enterprise-grade appearance

## Structure

- `/app` - Next.js 13+ app directory with all pages
- `/components` - Reusable React components
- `/public` - Static assets (images, icons, etc.)
- `/lib` - Utility functions and configurations
- `/hooks` - Custom React hooks
- `/prisma` - Database schema (if applicable)

## Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- Azure Static Web Apps
- Any Node.js hosting provider

## Notes

- This is the original working version before any React conversion attempts
- All functionality is intact and tested
- No React conversion artifacts included
- Clean, production-ready codebase

