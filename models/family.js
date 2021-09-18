const mongoose = require("mongoose");
const {Schema} = mongoose;

const familySchema = Schema(
{
    familyName : {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required:true},
    state:
    {
        type: String,
        enum: ['Initialized','Approved','Waiting'],
        default: 'Initialized'
    },
    therapy : {
        type: String,
        enum: ['OT','ST','PT'],
        required: true
    }
});



module.exports = 
{
    FamilySchema: familySchema,
    FamilyModel: mongoose.model('Family',familySchema)
}    