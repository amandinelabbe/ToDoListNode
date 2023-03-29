const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const auth = require('./app');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

app.use(express.json());

const serviceAccount = require('lien de la fire base à placer ici');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function getCities(db) {
  const citiesCol = collection(db, 'employes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const docRef = db.collection("employes").doc(id)

  app.post('/api/posts/set', async (req, res) => {

    res.send(`${req.body.text} , ${req.body.id}`);
    
    const docRef = db.collection('employes').doc(req.body.id);
  
    
    });