import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY87vLSlN3pOG5B4o9Fgm5GmONZwhMHaw",
  authDomain: "breezeai.firebaseapp.com",
  projectId: "breezeai",
  storageBucket: "breezeai.appspot.com",
  messagingSenderId: "92502494222",
  appId: "1:92502494222:web:213d0ad0e33fb143a5c05f",
  measurementId: "G-FYY0Y5ZHM9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
