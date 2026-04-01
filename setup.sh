#!/bin/bash

echo "🏥 E-MyR Setup Script"
echo "===================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Ready to go! Run one of these commands:"
    echo ""
    echo "   npm run dev      - Start development server"
    echo "   npm run build    - Build for production"
    echo "   npm run preview  - Preview production build"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
