const express = require('express');
const cors = require('cors');
const app = express();
const firebase = require('firebase');

app.use(cors());

// Initialisation de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvk3G0tkG-hjt1JmDEaO6hao_GgIHYiG0",
    authDomain: "react-jdr-774ae.firebaseapp.com",
    databaseURL: "https://react-jdr-774ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-jdr-774ae",
    storageBucket: "react-jdr-774ae.appspot.com",
    messagingSenderId: "1055577460321",
    appId: "1:1055577460321:web:1c918f5eeab61d20c16420"
};

firebase.initializeApp(firebaseConfig);

// Définition des points d'API
app.get('/api/personnages', (req, res) => {
    const db = firebase.firestore();
    const charactersRef = db.collection('characters');
    charactersRef.get()
      .then(snapshot => {
        const characters = [];
        snapshot.forEach(doc => {
            characters.push(doc.data());
        });
        res.json(characters);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
      });
});

// Lancement du serveur HTTP
app.listen(3001, () => console.log('Server listening on port 3001!'));