import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "ISI_DENGAN_API_KEY_PROYEK_ANDA",
  authDomain: "ISI_DENGAN_AUTH_DOMAIN_PROYEK_ANDA",
  projectId: "ISI_DENGAN_PROJECT_ID_PROYEK_ANDA",
  storageBucket: "ISI_DENGAN_STORAGE_BUCKET_PROYEK_ANDA",
  messagingSenderId: "ISI_DENGAN_MESSAGING_SENDER_ID_PROYEK_ANDA",
  appId: "ISI_DENGAN_APP_ID_PROYEK_ANDA"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
