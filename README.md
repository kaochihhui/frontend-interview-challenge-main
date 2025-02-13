# Vue 3 Ticket Management System

A modern ticket management application built with Vue 3, TypeScript, and Vite. This application provides a complete solution for managing ticket sales with features like VIP tickets, inventory tracking, and shopping cart functionality.

## 🚀 Features

### Core Features
- ✨ Create and manage tickets with detailed information
- 🌟 VIP ticket support with distinct styling
- 🔄 Smart sorting: VIP tickets first, then by newest
- 🛒 Shopping cart with real-time inventory sync
- 📱 Fully responsive design
- 💾 Persistent storage using localStorage

### Technical Features
- ⚡ Built with Vue 3 + TypeScript + Vite
- 🎯 State management using Pinia
- 🔄 Vue Router for navigation
- 🎨 Styled with Tailwind CSS
- ✅ Form validation and error handling
- 🧪 Unit tests using Vitest

## 🛠️ Technology Stack

- **Frontend Framework**: Vue 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Vue Test Utils
- **Icons**: Heroicons
- **Storage**: Pinia Persisted State

## 📋 Prerequisites

- Node.js (version 22)
- npm

## ⚠️ Known Issues

- **Development Mode Styling**: Due to a [known issue with Tailwind CSS v4](https://github.com/tailwindlabs/tailwindcss/discussions/16399), styles might not be applied correctly on first load in development mode. This issue does not affect production builds.

## 🚥 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/kaochihhui/frontend-interview-challenge-main.git
cd frontend-interview-challenge-main
```

2. Install dependencies:
```bash
npm install
```

3. For the best experience, use the production build:
```bash
npm run build
npm run preview
```

Alternatively, you can use development mode (note: initial styles might not load correctly):
```bash
npm run dev
```

4. Run tests:
```bash
npm test
```

## 📱 Pages

### Home Page (/)
- Display all available tickets
- Smart sorting system:
  - VIP tickets displayed first
  - Within each category (VIP/Regular), sorted by newest first
- VIP tickets highlighted with amber styling
- Real-time inventory tracking
- Add to cart functionality

### Admin Page (/admin)
- Create new tickets with validation
- Manage existing tickets
- Display all available tickets with the same sorting system
- Delete tickets with confirmation
- Set VIP status and inventory

### Cart Page (/cart)
- View cart items
- See total price
- Remove items with confirmation
- Real-time sync with inventory

