const mongoose= require('mongoose');

let moduleSchema = mongoose.Schema({
    moduleCode:{
        type : String,
        required : true,
        maxlength: 20
    },
    moduleName:{
        type : String,
        required :true
    }
    
  
});

let moduleDetails = mongoose.model("ModuleData",moduleSchema);
module.exports = moduleDetails