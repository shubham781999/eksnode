const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('WORKING PIPELINEON DATE 5 MARCH 2025'));
app.listen(3000, () => console.log('Server running on port 3000'));
