import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyCUqVpPQVJipZuGT6B7qoCzG47ma2jsicc",
  authDomain: "rnfirebase-ad61a.firebaseapp.com",
  databaseURL: "https://rnfirebase-ad61a.firebaseio.com",
  projectId: "rnfirebase-ad61a",
  storageBucket: "rnfirebase-ad61a.appspot.com",
  messagingSenderId: "432472697656"
};
let app = Firebase.initializeApp(config);
export const db = app.database();