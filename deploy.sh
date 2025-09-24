#!/bin/bash

# Adswadi Website Deployment Script
echo "🚀 Starting Adswadi Website Deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Adswadi website with database"
else
    echo "📝 Committing latest changes..."
    git add .
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No Git remote found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/adswadi-website.git"
    echo "   Then run this script again."
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

# Build the project
echo "🔨 Building project..."
npm run build

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "🎉 Your Adswadi website is now live!"
echo "📝 Don't forget to:"
echo "   1. Set up your database (Vercel Postgres, PlanetScale, etc.)"
echo "   2. Add environment variables in Vercel dashboard"
echo "   3. Run database migration in production"
echo ""
echo "🔗 Useful commands:"
echo "   vercel env pull .env.local  # Pull environment variables"
echo "   vercel logs                 # View deployment logs"
echo "   npm run db:stats           # Check database status"
