// Author: Akash Gupta - B00912118 - ak459448@dal.ca

const express = require('express')
const routes= require('./Routers/Routers')
const cors = require('cors');
const {mongoose} = require('./db')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',routes)


app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`)
})