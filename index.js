const express = require('express');
const app = express();
const port = 3500;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
  // res.sendFile(path.resolve('pages/data.html'));
});
app.get('/data', (req, res) => {
  // res.sendFile(path.resolve('pages/index.html'));
  res.sendFile(path.resolve('pages/data.html'));
});

app.get('/app', (req, res) => {
  // res.sendFile(path.resolve('pages/index.html'));
  res.sendFile(path.resolve('pages/app.jsx'));
  res.send('tatatatat')
  console.log(req)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
