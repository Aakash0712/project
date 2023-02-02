const express = require('express');
const Router = express.Router()
const productSchema = require("../models/cartSchema")

Router.get("/", (request, respons)=>{  
    respons.render("index");
});
Router.get("/Cart",(request, respons)=>{
    respons.render("Cart")
})
Router.get("/addproduct",(request, respons)=>{
    respons.render("addproduct")
})
try{
Router.get("/admin",(require, respons)=>{
    respons.render("admin");
})
console.log("done")

}catch(error){
    console.log(error.name)
}
Router.get("/login",(require, respons)=>{
    respons.render("login");
})
Router.get("/registration",(require, respons)=>{
    respons.render("registration");
})
Router.get("/seller",(require, respons)=>{
    respons.render("seller");
})
Router.post("/api/addProduct",async(request, respons)=>{
       
        const productData = new productSchema(request.body) 
    
        productData.save(error=>{
            if(error){
                console.log(error.name);
            }else{
                console.log("donek")
            }
        })
    
})
Router.get("/viewproduct", (request, respons)=>{
    respons.render("viewproduct")
    productSchema.find((error, document)=>{
        if(!error){
            respons.render("viewproduct",{
                data: document
            }
            )
        }else{
            console.log("lolo" + error)
        }
    })
})


module.exports = Router;