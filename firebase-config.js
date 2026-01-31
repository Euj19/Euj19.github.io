// Firebase Configuration
// Real credentials for eujin-blog-2026 project

const firebaseConfig = {
  apiKey: "AIzaSyDuF2g-S5WaaKvFIk1BEjvzzht8tgJF8As",
  authDomain: "eujin-blog-2026.firebaseapp.com",
  projectId: "eujin-blog-2026",
  storageBucket: "eujin-blog-2026.firebasestorage.app",
  messagingSenderId: "758537324697",
  appId: "1:758537324697:web:70cf8ae1ebbac35c9f1008"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Posts collection reference
const postsCollection = db.collection('posts');
