const mongoose = require("mongoose");
const {Schema} = mongoose;
const {FamilySchema} = require("../models/family");


const waitListSchema = Schema(
{
    family : FamilySchema,
    remarks : {type: String, default : ""},
    dateofentry: {type: Date, default: Date.now()}

});



module.exports = 
{
WaitlistSchema : waitListSchema,    
WaitlistModel: mongoose.model('Waitlist',waitListSchema)
}