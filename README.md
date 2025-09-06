# LinkSan Landing Page

A modern, responsive landing page for LinkSan - a privacy-focused URL sanitizer app available for iOS and Android.

## About LinkSan

LinkSan removes tracking parameters from URLs and shortens YouTube links to protect your privacy. The app features seamless share sheet integration and is designed for both iOS and Android platforms.

## Features

- **Remove Trackers**: Automatically removes UTM parameters and other tracking codes
- **YouTube URL Shortening**: Converts long YouTube URLs to clean youtu.be links
- **Share Sheet Integration**: Seamlessly sanitize links from any app
- **Cross-Platform**: Available for both iOS and Android devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for GitHub Pages or Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the landing page

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    └── (future components)
```

## Deployment

This project is optimized for deployment on:
- GitHub Pages
- Vercel
- Netlify

## Contributing

This is the landing page for LinkSan. For the main app development, see the [LinkSan iOS repository](https://github.com/ganixdev/linksan-ios).

## License

© 2025 LinkSan. All rights reserved.
