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

- **Frontend:** Expo (React Native) ~53.0.15
- **Backend:** Firebase (Auth, Firestore, Storage, Functions)
- **AI:** OpenAI GPT-4 / GPT-4o (for text & vision)
- **TTS:** Google Cloud Text-to-Speech or ElevenLabs
- **Audio:** `expo-av`

---

## 📦 Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or physical device

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/sidelines.git
cd sidelines
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your API keys:
- Firebase configuration
- OpenAI API key
- Google Cloud or ElevenLabs API keys

4. **Start the development server**
```bash
npx expo start
```

5. **Run on device**
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app for physical device

---

## 📁 Project Structure

```
sidelines/
├── app/                    # App routes (Expo Router)
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.js       # Home screen
│   │   ├── matches.js     # Matches history
│   │   └── profile.js     # User profile
│   ├── match/[id].js      # Live match screen
│   ├── setup.js           # Match setup
│   └── _layout.js         # Root layout
├── assets/                # Static assets
│   ├── fonts/            # Custom fonts
│   └── images/           # Images and icons
├── components/           # Reusable components
│   └── Button.js         # Custom button component
├── services/             # API services
│   ├── firebase.js       # Firebase configuration
│   ├── openai.js         # OpenAI integration
│   └── tts.js            # Text-to-speech service
├── utils/                # Utility functions
│   └── constants.js      # App constants
├── .env.example          # Environment variables template
├── app.json             # Expo configuration
├── babel.config.js      # Babel configuration
├── metro.config.js      # Metro bundler config
└── package.json         # Dependencies
```

---

## 🚀 Getting Started

1. **Create a new match**: Tap "New Match" on home screen
2. **Set up teams**: Enter home and away team names
3. **Start commentary**: Add match events and get AI-generated commentary
4. **Listen**: Play generated audio commentary
5. **Save & share**: Export commentary for sharing

---

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication, Firestore, and Storage
3. Add your config to `.env`

### OpenAI Setup
1. Get API key from OpenAI
2. Add to `.env` file

### Text-to-Speech Setup
Choose one:
- **Google Cloud TTS**: Get API key and add to `.env`
- **ElevenLabs**: Get API key and add to `.env`

---

## 🚀 Future Plans

- 🎥 Video or image input with AI auto-commentary (via GPT-4o Vision)
- 🧑‍🤝‍🧑 Livestream mode with friends joining your game feed
- 💬 Real-time voice chat for live fan commentary
- 🏀 Expansion beyond soccer to other sports

---

## 📱 Screenshots

_Screenshots coming soon..._

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.
