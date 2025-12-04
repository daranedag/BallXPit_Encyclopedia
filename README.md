# Ball x Pit Encyclopedia

A comprehensive web encyclopedia for the Ball x Pit game, featuring all items, balls, and enemies with their descriptions, evolutions, and fusion combinations.

## 🎮 About

This is a fan-made educational project created to document and showcase all the content from Ball x Pit. All images and descriptions are property of their respective owners and are used for educational purposes only.

## 🚀 Features

- **Items Encyclopedia**: Browse all items with evolution information
- **Balls Encyclopedia**: Discover all balls, their evolutions, and fusion combinations
- **Enemies Encyclopedia**: Learn about all enemies in the game
- **Search & Filter**: Easily find any item, ball, or enemy
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **API Client**: Axios
- **Styling**: CSS Modules
- **Deployment**: Netlify
- **Backend**: External API hosted on Render
- **Database**: Supabase

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/daranedag/BallXPit_Encyclopedia.git
cd BallXPit_Encyclopedia
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your backend API URL:
```env
VITE_API_BASE_URL=https://your-backend.onrender.com/api
VITE_API_TIMEOUT=10000
```

5. Run the development server:
```bash
npm run dev
```

## 🏗️ Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
BallXPit_Encyclopedia/
├── public/
│   └── assets/
│       └── images/          # Game images
├── src/
│   ├── api/                 # API client and endpoints
│   ├── components/          # React components
│   │   ├── common/          # Reusable components
│   │   ├── items/           # Item-specific components
│   │   ├── balls/           # Ball-specific components
│   │   └── enemies/         # Enemy-specific components
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── .env                     # Environment variables (not committed)
├── .env.example             # Environment variables template
├── netlify.toml             # Netlify configuration
└── package.json             # Dependencies and scripts
```

## 🌐 Deployment

This project is configured for automatic deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set the build command: `npm run build`
3. Set the publish directory: `dist`
4. Add environment variables in Netlify dashboard:
   - `VITE_API_BASE_URL`
   - `VITE_API_TIMEOUT`

## 🔌 API Integration

The frontend connects to a separate backend API for data. Expected API endpoints:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get specific item
- `GET /api/items/:id/evolution` - Get item evolution
- `GET /api/balls` - Get all balls
- `GET /api/balls/:id` - Get specific ball
- `GET /api/balls/:id/evolution` - Get ball evolution
- `GET /api/balls/:id/fusions` - Get ball fusions
- `GET /api/enemies` - Get all enemies
- `GET /api/enemies/:id` - Get specific enemy

## 📄 License

This is a fan-made project for educational purposes only. All game content, images, and descriptions are property of their respective owners. Not for commercial use.

## 👥 Contributing

This is a personal fan project. If you'd like to contribute or report issues, please open an issue or pull request.

## 🙏 Acknowledgments

- Ball x Pit game developers for the amazing game
- All game assets and descriptions are property of the original creators
