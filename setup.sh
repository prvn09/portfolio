#!/bin/bash

echo "🚀 Praveen's Portfolio - Quick Start"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js $(node -v) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✓ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🔧 Next steps:"
echo ""
echo "1. Local Development:"
echo "   npm run dev"
echo "   Visit http://localhost:3000"
echo ""
echo "2. Before Deployment:"
echo "   - Update email address in page.tsx (line 529)"
echo "   - Update LinkedIn URL (line 532)"
echo "   - Update GitHub URL (line 535)"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Push to GitHub"
echo "   - Go to vercel.com and connect your repo"
echo "   - One click deploy!"
echo ""
echo "📚 Full setup guide: cat SETUP_GUIDE.md"
echo ""
