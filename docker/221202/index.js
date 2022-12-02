const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HI');
});

app.listen(8000, () => {
    console.log("Server is open, port : 8000");
});