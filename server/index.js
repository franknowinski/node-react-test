import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

const facebookAuth = require('./routes/facebookAuth');

// app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Answer API requests.
app.get('/api/v1/home', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from server"}');
});

app.use('/api/v1/facebookAuth', facebookAuth);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
