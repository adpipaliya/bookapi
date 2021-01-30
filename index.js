const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route');

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server Started...!!!")
        })
    }
);