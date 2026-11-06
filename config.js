import firebase from 'firebase';

const firebaseConfig = {
  // SALIN SEMUA KUNCI DARI FIREBASE (LANGKAH 2) KE SINI
  apiKey: "PAKAI PUNYA KAMU",
  authDomain: "PAKAI PUNYA KAMU",
  projectId: "PAKAI PUNYA KAMU",
  storageBucket: "PAKAI PUNYA KAMU",
  messagingSenderId: "PAKAI PUNYA KAMU",
  appId: "PAKAI PUNYA KAMU"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };