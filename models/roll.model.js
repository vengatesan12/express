const mongoose= require('mongoose');

let rollSchema = mongoose.Schema({
    rollCode:{
        type : String,
        required : true,
        maxlength: 20
    },
    rollName:{
        type : String,
        required :true
    }
    
  
});

let rollDetails = mongoose.model("rollData",rollSchema);
module.exports = rollDetails