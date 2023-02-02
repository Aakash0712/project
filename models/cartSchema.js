const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
    productName:{
        type:String
    },
    companyName:{
        type:String 
        
        
    },
    productDescription:{
        type:String
    }
})

module.exports = mongoose.model('productdata', productSchema);