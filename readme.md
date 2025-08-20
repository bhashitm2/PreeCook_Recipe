# 🍳 PreCook Recipe App

![PreCook Recipe App Logo](https://github.com/bhashitm2/PreeCook_Recipe/blob/main/src/Images/Logos/light_logo.svg)

## 📖 Project Description

PreCook is a modern, responsive recipe discovery application that allows users to explore over 1000+ delicious recipes from around the world. Built with React and Firebase, this app provides a seamless cooking experience with user authentication, recipe bookmarking, and an intuitive search interface.

### ✨ Key Features

- 🔍 **Advanced Recipe Search** - Find recipes by ingredients, cuisine, or meal type
- 🔖 **Bookmark System** - Save your favorite recipes with user authentication
- 👤 **User Profiles** - Personalized accounts with Google Sign-In support
- 🌎 **Global Cuisine** - Explore recipes from different cuisines worldwide
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Lazy loading and code splitting for optimal speed
- 🎨 **Modern UI/UX** - Clean, intuitive design with smooth animations
- 🔒 **Secure API Management** - Environment variables for sensitive data

## 🚀 Live Demo

**[Visit PreCook Recipe App](https://precook-recipe-app.web.app/)**

## 🛠️ Tech Stack

### Frontend

- **React.js** - Component-based UI library
- **React Router** - Client-side routing
- **React Context API** - State management
- **CSS Modules** - Scoped styling
- **React Icons** - Icon components
- **React Splide** - Carousel/slider components

### Backend & Services

- **Firebase Authentication** - User authentication system
- **Firebase Firestore** - NoSQL database for user data
- **Firebase Storage** - File storage for user profile images
- **Firebase Hosting** - Static site hosting
- **Spoonacular API** - Recipe data source

### Development Tools

- **Create React App** - Project scaffolding
- **Figma** - UI/UX design
- **Git & GitHub** - Version control
- **Vercel/Netlify** - Deployment platforms
- **Firebase CLI** - Firebase deployment tools

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account
- Spoonacular API key

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/bhashitm2/PreeCook_Recipe.git
   cd PreeCook_Recipe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file and add your API keys:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your actual API keys:

   ```env
   # Spoonacular API - Get from https://spoonacular.com/food-api
   REACT_APP_SPOONACULAR_API=your_spoonacular_api_here

   # Firebase Configuration - Get from Firebase Console
   REACT_APP_FIREBASE_API=your_firebase_api_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

This project supports multiple deployment platforms with secure environment variable management.

### 🔥 Firebase Deployment (Recommended)

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   ```bash
   firebase login
   ```

3. **Initialize Firebase project**

   ```bash
   firebase init hosting
   ```

   - Select your Firebase project
   - Set public directory to `build`
   - Configure as single-page app: Yes

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### ⚡ Vercel Deployment

1. **Connect GitHub repo to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push

### 🌐 Netlify Deployment

1. **Connect GitHub repo to Netlify**
2. **Set build command**: `npm run build`
3. **Set publish directory**: `build`
4. **Add environment variables** in Netlify dashboard

### 🔒 Environment Variables Setup for Deployment

For any deployment platform, add these environment variables:

```env
REACT_APP_SPOONACULAR_API=your_api_key
REACT_APP_FIREBASE_API=your_firebase_api
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **⚠️ Security Note**: API keys are stored as environment variables and never committed to version control.

## 📁 Project Structure

```
precook-recipe-app/
├── public/
│   ├── index.html
│   └── Images/
├── src/
│   ├── components/
│   │   ├── AuthFormModal/      # Authentication modals
│   │   ├── Context/            # React Context providers
│   │   ├── Footer/             # Footer component
│   │   ├── MainHeader/         # Header with navigation
│   │   ├── RecipeCard/         # Recipe display cards
│   │   └── UI/                 # Reusable UI components
│   ├── Pages/
│   │   ├── Home/               # Homepage with featured recipes
│   │   ├── Recipe/             # Individual recipe pages
│   │   ├── UserProfile/        # User profile management
│   │   ├── Welcome/            # Landing page
│   │   └── Others/             # Additional pages
│   ├── Helper/
│   │   ├── config.js           # API configuration
│   │   └── recipe-info.js      # Recipe utilities
│   ├── Images/                 # Static assets
│   ├── App.js                  # Main app component
│   ├── firebase.js             # Firebase configuration
│   └── index.js                # App entry point
├── .env                        # Environment variables (not committed)
├── .env.example               # Environment template
├── firebase.json              # Firebase configuration
└── package.json               # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## ⚠️ Important Notes

### 🔑 API Keys & Security

- **Environment Variables**: All API keys are stored in `.env` file and not committed to GitHub
- **Firebase API Keys**: Safe to expose in frontend apps (secured by Firebase rules)
- **Spoonacular API**: Free tier provides 150 requests/day

### 🚫 Rate Limiting

- **Error Handling**: "Request failed" errors may occur due to API rate limits
- **Spoonacular Limits**: Monitor usage in your Spoonacular dashboard
- **Retry Logic**: App includes automatic retry for failed requests

### 🔐 Firebase Security

- **Authentication**: Google Sign-In configured for deployed domains
- **Firestore Rules**: Database secured with authentication-based rules
- **Storage Rules**: File uploads restricted to authenticated users

### 🌐 CORS & Domain Setup

- **Firebase Configuration**: Add your deployment domain to authorized domains
- **API Restrictions**: Configure Firebase API key restrictions for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bhashit M**

- GitHub: [@bhashitm2](https://github.com/bhashitm2)
- Repository: [PreeCook_Recipe](https://github.com/bhashitm2/PreeCook_Recipe)
- LinkedIn: [Connect with me]([https://linkedin.com/in/bhashit-maheshwari](https://www.linkedin.com/in/bhashit-maheshwari-1b4206254/))

## 🙏 Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for recipe data
- [Firebase](https://firebase.google.com/) for backend services
- [React](https://reactjs.org/) community for excellent documentation
- [Figma](https://figma.com/) for design tools

---

⭐ **Star this repository if you found it helpful!**
