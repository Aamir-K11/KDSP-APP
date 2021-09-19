const mongoose = require("mongoose");
const {Schema} = mongoose;

const familySchema = Schema(
{
    _id : Schema.Types.ObjectId,
    familyName : {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required:true},
    age: {type: Number, required: true, min: 6.5},
    state:
    {
        type: String,
        enum: ['Initialized','Approved','Waiting','Enrolled'],
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