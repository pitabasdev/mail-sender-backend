const express = require("express");
const app = express();
const cors=require('cors')
const Router=require('./Router/router')
require('dotenv').config();

app.use(express.json());
app.use(cors())
app.use(Router)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})