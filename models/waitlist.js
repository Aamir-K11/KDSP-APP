const mongoose = require("mongoose");
const {Schema} = mongoose;
const {FamilySchema} = require("../models/family");


const waitListShema = Schema(
{
    Families = {type: [FamilySchema], default: {}}

});



module.exports = 
{
WaitlistSchema : waitListShema,    
WaitlistModel: mongoose.model('Waitlist',waitListSchema)
}