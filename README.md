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

- Node.js (version 16 or higher)
- npm

## 🚥 Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-interview-challenge-main
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
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

## 🧪 Testing

The project includes comprehensive unit tests for:
- Store functionality
- Component rendering
- User interactions
- Form validation

Run tests with:
```bash
npm test                 # Run tests in watch mode
npm run test:coverage    # Generate coverage report
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License.
