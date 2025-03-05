const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('WORKING PIPELINE ON MARCH 2025'));
app.listen(3000, () => console.log('Server running on port 3000'));
