'use strict';
const express = require('express');
const app = express();

app.use('/health', (req, res) => {
    res.status(200).send('ok');
});

app.listen(80, () => console.log('app listening on port 80'));

module.exports = app;