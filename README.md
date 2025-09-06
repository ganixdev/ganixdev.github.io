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

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages with GitHub Actions

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

### GitHub Pages Setup

This project is pre-configured for GitHub Pages deployment with GitHub Actions:

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository (e.g., `linksan-landing`)
   - Make sure it's public for GitHub Pages

2. **Update Repository Name** (if different from `linksan-landing`):
   - Edit `next.config.ts` and replace `linksan-landing` with your repository name
   - Update the `basePath` and `assetPrefix` values

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Simple GitHub Pages Deployment (No Actions)

For a cost-effective deployment without GitHub Actions:

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder

4. **Access Your Site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**Note**: You'll need to run `npm run deploy` manually after each update, or set up a simple script to automate it.

## Contributing

This is the landing page for LinkSan. For the main app development, see the [LinkSan iOS repository](https://github.com/ganixdev/linksan-ios).

## License

© 2025 LinkSan. All rights reserved.
