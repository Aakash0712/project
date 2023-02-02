const express = require('express');
const mongoose = require('mongoose');  //this is mongo db pakage name mongoos inastall
const bodyParser = require('body-parser');
const Router = require('./Router/homeRouter')


const port = 8080;

const app = express();
    mongoose.set('strictQuery', false);//idk what is thi expolor

    mongoose.connect("mongodb://127.0.0.1:27017/StyleEye", {useNewUrlParser:true}, (error) =>{
        if(error){
            console.log(error.name);
        }
        else{
            console.log("connected")
        }
    });
    
    app.set("view engine", "ejs");
    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({  extended: false}));
    app.use(bodyParser.json());

    app.use("/", Router)
   
app.listen(port);