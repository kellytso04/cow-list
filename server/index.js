const express = require('express');
const path = require('path');
const axios = require('axios');
const { db } = require('../database/index.js');

const PORT = 3000;
const app = express();

// Middleware:
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Sends GET req to the database to retrieve all cows
app.get('/api/cows', (req, res) => {
  let queryString = 'SELECT * FROM cows';

  db.query(queryString, (err, cows) => {
    if (err) {
      console.error('server | get cows failed')
    } else {
      res.status(200).send(cows);
    }
  })
});

// Sends POST req to the database to create a new cow,
// then retrieve the updated cows list
app.post('/api/cows', (req, res) => {
  let queryString = 'INSERT INTO cows (name, description) VALUES (?, ?)';
  let queryArgs = [ req.body.name, req.body.description ];

  db.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error('server | add new cow failed');
    } else {
      queryString = 'SELECT * FROM cows';

      db.query(queryString, (err, cows) => {
        if (err) {
          console.error('server | refresh cows failed');
        } else {
          res.status(200).send(cows);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}! 🐠`);
});
