// Password validation length (greater than and equal to 6)
const REACT_APP_MIN_PASSWORD_LENGTH = "6";

// Spoonacular api key - loaded from environment variables
const REACT_APP_API_KEY = process.env.REACT_APP_SPOONACULAR_API;

// Firebase api key - loaded from environment variables
const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API;

export {
  REACT_APP_API_KEY,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_MIN_PASSWORD_LENGTH,
};
