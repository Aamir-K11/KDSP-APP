const mongoose = require("mongoose");
const {Schema} = mongoose;


const therapistSchema = Schema(
{
    Name : {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required:true},

});



module.exports = {
    TherapistSchema: therapistSchema,
    TherapistModel : mongoose.model('Therapists',therapistSchema)
}