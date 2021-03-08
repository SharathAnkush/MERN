const mongooes = require('mongoose')

const categorySchema = new mongooes.Schema({
    caterogy : {
        type:String,
        trim:true,
        maxlength:32,
        required:true,
        unique:true
    }
},
{timestamps:true}
)

module.exports = mongooes.model("Category",categorySchema)