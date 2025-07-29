#!/bin/bash

# Development script to start all applications
echo "🚀 Starting Micro Frontend Development Environment..."

# Function to check if pnpm is installed
check_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        echo "❌ pnpm is not installed"
        echo "   Please install pnpm: npm install -g pnpm"
        exit 1
    else
        echo "✅ pnpm is available ($(pnpm --version))"
    fi
}

# Check if pnpm is installed
echo "🔍 Checking prerequisites..."
check_pnpm

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Build UI Kit first (required for other apps)
echo "🏗️ Building UI Kit..."
pnpm --filter ui-kit build

echo "🚀 Starting applications in development mode..."

# Start applications in parallel
pnpm run dev

echo ""
echo "🌐 Access the applications at:"
echo "   - 🏠 Shell (Main App): http://localhost:3000"
echo "   - 🔢 Counter App: http://localhost:3001"
echo "   - ✅ Todos App: http://localhost:3002"
echo ""
echo "💡 Use Ctrl+C to stop all applications"
