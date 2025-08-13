# Celestial Games Store

A modern web application for browsing and purchasing games with a unique Venom-themed interface.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shawnstanleygit/CODSOFT.git
cd CODSOFT
```

2. Install Dependencies:
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install
```

### Development

To run the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`

### Building for Production

To create a production build:
```bash
npm run build
```

## 📁 Project Structure

```
CODSOFT/
├── client/               # Frontend React application
│   ├── src/             # Source code
│   │   ├── components/  # React components
│   │   ├── styles/      # CSS styles
│   │   └── pages/       # Page components
│   └── public/          # Static files
└── requirements/        # Dependencies and requirements
    ├── package.json     # npm package dependencies
    └── package-lock.json # Locked versions of dependencies
```

## 🔄 Clean Installation

If you want to start with a clean installation:

1. Delete the `node_modules` folder if it exists:
```bash
# Windows
rmdir /s /q node_modules

# Unix/Mac
rm -rf node_modules
```

2. Clear npm cache (optional but recommended):
```bash
npm cache clean --force
```

3. Install dependencies:
```bash
npm install
```

## 🎨 Theme Features

The application includes a custom Venom-themed UI with:
- Organic, gooey card effects
- Symbiote-like animations
- Dynamic hover states
- Pulsing accents
- Liquid-like borders

## 📦 Dependencies

Key dependencies are stored in `requirements/package.json`. Main packages include:
- React
- React Router
- Other necessary packages for the application

To update dependencies:
1. Check for updates: `npm outdated`
2. Update packages: `npm update`
3. Install specific version: `npm install package@version`

## 🚀 Deployment

To deploy to GitHub Pages:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add homepage field to package.json
3. Add deploy scripts
4. Run: `npm run deploy`

## 🔧 Troubleshooting

If you encounter any issues:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

3. Check for conflicting dependencies:
```bash
npm ls
```
