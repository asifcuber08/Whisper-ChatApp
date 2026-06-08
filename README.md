# 💬 Whisper - Cross-Platform Real-Time Chat Application

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-blue?style=flat-square&logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-SDK_54-black?style=flat-square&logo=expo" alt="Expo" />
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-black?style=flat-square&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-green?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.IO-white?style=flat-square&logo=socketdotio" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk" alt="Clerk" />
  <img src="https://img.shields.io/badge/Sentry-EA2845?style=flat-square&logo=sentry" alt="Sentry" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-black?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
</div>

## 📋 Overview

💬 Whisper is a modern cross-platform real-time messaging platform that allows users to communicate seamlessly across mobile and web applications.

Built with React Native, Expo, React, Express, MongoDB, Clerk Authentication, and Socket.IO, Whisper provides a unified chat experience where users can switch between devices while keeping conversations, messages, and account data fully synchronized.

Whether you're chatting from your phone or browser, everything stays connected in real time.

---

## 🚀 Key Features

### 💬 Real-Time Messaging

* ⚡ Instant message delivery using Socket.IO
* 📨 One-to-one conversations
* 🔄 Cross-platform synchronization
* 📚 Persistent message history
* 📱 Continue chats between mobile and web
* 🚀 Fast and responsive messaging experience

### 🟢 Presence & Activity

* 🟢 Real-time online/offline status
* ⌨️ Live typing indicators
* 🔄 Instant user activity updates
* 📡 Socket-based event synchronization

### 🔐 Authentication & Security

* 🔑 Clerk Authentication
* 🌐 Google Sign-In
* 🍎 Apple Sign-In
* 🛡 Secure JWT Authentication
* 👤 Unified user profiles

### 📱 Mobile Application

* ⚛️ React Native
* 🚀 Expo
* 🧭 Expo Router
* 🎨 NativeWind
* ✨ Reanimated Animations
* 🌫 Glassmorphism UI Effects
* 📷 Expo Image
* 🌈 Linear Gradients

### 🌐 Web Application

* ⚛️ React 19
* ⚡ Vite
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔄 TanStack Query
* 📡 Axios
* 📱 Responsive Design

### 🛠 Backend Features

* 🚀 Express.js API
* 📘 TypeScript
* 🍃 MongoDB Atlas
* 🗄 Mongoose
* 🔐 Clerk Middleware
* 🔌 Socket.IO Server
* 📡 REST API Architecture

### 📊 Monitoring & Reliability

* 📈 Sentry Monitoring
* 🛡 Error Tracking
* 🐞 Crash Reporting
* 🔍 Production Diagnostics

---

## 🛠 Tech Stack

### Mobile App

* ⚛️ React Native
* 🚀 Expo
* 🧭 Expo Router
* 🎨 NativeWind
* ✨ React Native Reanimated
* 🌫 Expo Blur
* 🌈 Expo Linear Gradient
* 🔐 Clerk Expo

### Web App

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔄 TanStack Query
* 📡 Axios
* 🔐 Clerk React

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 📘 TypeScript
* 🍃 MongoDB Atlas
* 🗄 Mongoose
* 🔐 Clerk Express
* 🔌 Socket.IO

### DevOps & Services

* 🐳 Docker
* ☁️ MongoDB Atlas
* 🔐 Clerk
* 📊 Sentry
* 🚀 Sevalla
* 🐙 GitHub

---

## 🎯 How It Works

### 📱 Mobile User

1. 🔐 Sign in with Google or Apple
2. 💬 Start a conversation
3. 📨 Send messages instantly
4. 🟢 See online users
5. ⌨️ View typing indicators
6. 🔄 Messages sync across devices

### 🌐 Web User

1. 🔐 Sign in using the same account
2. 💬 Access existing conversations
3. 📨 Continue chatting from browser
4. 🟢 Track user presence
5. ⌨️ Receive typing updates
6. 🔄 Stay synchronized with mobile app

### 🔗 Shared Ecosystem

✅ Same Account

✅ Same Conversations

✅ Same Messages

✅ Same User Profile

✅ Same Experience Everywhere

---

## 📁 Project Structure

```bash
whisper/
│
├── mobile/                 # React Native + Expo App
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   ├── assets/
│   └── .env.local
│
├── web/                    # React + Vite Application
│   ├── src/
│   │     ├── components/
│   │     ├── hooks/
│   │     ├── lib/
│   │     └── pages/
│   └── .en
│   
├── backend/                # Express + TypeScript API
│   ├── src/
│   │     ├── config/
│   │     ├── controllers/
│   │     ├── middleware/
│   │     ├── models/
│   │     ├── routes/
│   │     ├── scripts/
│   │     └── utils/
│   └── .en       
│
└── .dockerignore
└── Dockerfile
└── README.md
```

---

## ⚙️ Environment Variables

 **Create .env file in mobile, web and backend folder and paste it there**

### 📱 Mobile

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
SENTRY_AUTH_TOKEN=
```

### 🌐 Web

```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_URL= #your deployed app url
```

### 🛠 Backend

```env
MONGODB_URI=
PORT=3000
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
FRONTEND_URL=http://localhost:5173

# in deployement time use your deployed web url
FRONTEND_URL=
```

#### Sign up and get all the Environment Variables from [Mongodb Atlas](https://www.mongodb.com), [Sentry](https://sentry.io), [Clerk](https://clerk.com), [Expo Clerk](https://clerk.com/docs/expo/getting-started/quickstart) and [Vite Clerk](https://clerk.com/docs/react/getting-started/quickstart)

---

## 🚀 Quick Start

### 📥 Clone Repository

```bash
git clone https://github.com/asifcuber08/Whisper-ChatApp.git

cd Whisper-ChatApp
```


### 🛠 Backend

```bash
cd backend

bun install

bun run dev
```

### 📱 Mobile

```bash
cd mobile

bun install

bunx expo start
```

### Run on your preferred platform

   ```bash
   # Install the Expo go app from Play store and App store
   # Connect the laptop and phone in same wifi

   # iOS
   # Scan the QR code or paste the url from terminal

   # Android
   # Scan the QR code or paste the url from terminal

   # For Show your project someone Else who is not there Run
   bunx expo start --tunnel

   # Share the link and tell to paste the link in Expo go app and anyone can access this App
   ```

### 🌐 Web

```bash
cd web

bun install

bun run dev
```

---


## 🌟 Highlights

* 💬 Real-Time Messaging
* 🔌 Socket.IO Integration
* 🟢 Online Presence System
* ⌨️ Typing Indicators
* 📱 React Native Mobile App
* 🌐 React Web Application
* 🔐 Clerk Authentication
* ☁️ MongoDB Atlas
* 📊 Sentry Monitoring
* ⚡ Modern UI & UX
* 🚀 Production Ready Architecture

---

## 📥 Contributing

Pull requests are welcome!

If you find a bug or want to add a feature, feel free to open an issue.

---

## 👤 Author

Made with ❤️ by [Asif Shamim](https://github.com/asifcuber08)
