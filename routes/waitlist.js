const express  = require("express");
const {FamilyModel} = require("../models/family");
const {WaitlistModel} = require("../models/waitlist");

const waitlistRoute = express.Router();

waitlistRoute.use(express.json());


waitlistRoute.get("/",(req,res)=>{
        FamilyModel.find({state:"Approved"})
                   .then(value=>{
                        value.forEach(element => {
                            Waitlist = new WaitlistModel({
                                family: element
                            });
    
                            Waitlist.save().then(subvalue=>{return res.status(202).json({status: "Waitlist Updated"})})
                                            .catch(err => {return res.status(500).json({error: err})});
                        });
                       
                   })
                   .catch(err=>{return res.status(500).json({error: err})});
});


module.exports = waitlistRoute;