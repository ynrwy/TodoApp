import firebase from 'firebase';

const firebaseConfig = {
  // SALIN SEMUA KUNCI DARI FIREBASE (LANGKAH 2) KE SINI
  apiKey: "AIzaSyCQPcsj-4Y8XPMmEqhLB-BHAvXrQQCahGI",
  authDomain: "todosapp-42f3f.firebaseapp.com",
  projectId: "todosapp-42f3f",
  storageBucket: "todosapp-42f3f.firebasestorage.app",
  messagingSenderId: "884776873926",
  appId: "1:884776873926:web:1328e9d274a4f285dd0cc7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };