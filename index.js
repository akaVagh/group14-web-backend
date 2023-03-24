const express = require('express')
const routes= require('./Routers/JobApplicationFormRouter')
const {mongoose} = require('./db')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',routes)

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`)
})