const express = require('express');
const morgan = require('morgan');
const cors  = require('cors');
const { patient } = require('./api');


const PORT = 5002
const app = express();
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors());

patient(app);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})