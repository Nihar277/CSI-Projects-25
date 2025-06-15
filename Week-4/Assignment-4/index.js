const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.get('/portfolio', (req, res) => {
    res.send('Welcome to my Portfolio!');
})

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
