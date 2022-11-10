// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_i59l-CR0TUONjGkWrrPFo5xh7nFPPIk",
    authDomain: "alex-photographer.firebaseapp.com",
    projectId: "alex-photographer",
    storageBucket: "alex-photographer.appspot.com",
    messagingSenderId: "293485395440",
    appId: "1:293485395440:web:a21f9a7943b79e614bf135",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;