const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const auth = require('./test');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
 });

app.use(express.json());

app.post('/login', (req, res) => {
    const data = req.body;
    const jwtKey = process.env.JWT_KEY || 'secret';
    const token = jwt.sign({email: "user.email", id: "user.id"}, jwtKey, {expiresIn:'1h'});
    res.send(token);
  });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
