import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz2bJeDpqZVjN4PQwv3BDERJ3D5Eufe6w",
    authDomain: "sacade-9bf38.firebaseapp.com",
    projectId: "sacade-9bf38",
    storageBucket: "sacade-9bf38.appspot.com",
    messagingSenderId: "128605133448",
    appId: "1:128605133448:web:32307143de3330bcd45d3d",
    measurementId: "G-M0D6MVLSS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);


export { db, auth, analytics }