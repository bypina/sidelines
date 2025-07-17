 # ⚽ Sidelines

**Sidelines** is an iOS-first AI-powered sports commentary app that brings live games to life with intelligent play-by-play narration. Built with React Native (Expo) and Firebase, Sidelines lets users input match events and generate real-time, high-energy commentary in a variety of voices.

---

## 🎯 Features

- 🏟️ **Match Setup**
  - Add team names, player numbers, and jersey colors
- 🎙️ **AI Commentary**
  - Generate exciting commentary using OpenAI GPT-4
  - Select from multiple voices (British, US, Spanish, etc.)
- 🔊 **Voice Playback**
  - Play, save, and share commentary audio
  - Powered by ElevenLabs or Google Cloud Text-to-Speech
- 📲 **iOS-First Experience**
  - Smooth UI with Expo and Firebase backend

---

## 🧱 Tech Stack

- **Frontend:** Expo (React Native)
- **Backend:** Firebase (Auth, Firestore, Storage, Functions)
- **AI:** OpenAI GPT-4 / GPT-4o (for text & vision)
- **TTS:** Google Cloud Text-to-Speech or ElevenLabs
- **Audio:** `expo-av`

---

## 🚀 Future Plans

- 🎥 Video or image input with AI auto-commentary (via GPT-4o Vision)
- 🧑‍🤝‍🧑 Livestream mode with friends joining your game feed
- 💬 Real-time voice chat for live fan commentary
- 🏀 Expansion beyond soccer to other sports

---

## 📦 Setup

```bash
git clone https://github.com/yourusername/sidelines.git
cd sidelines
npm install
npx expo start
