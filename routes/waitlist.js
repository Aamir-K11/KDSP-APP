const express  = require("express");
const {FamilyModel} = require("../models/family");
const {WaitlistModel} = require("../models/waitlist");

const waitlistRoute = express.Router();

waitlistRoute.use(express.json());


waitlistRoute.get("/",(req,res)=>{
        FamilyModel.find({state:"Approved"})
                   .then(value=>{
                            WaitlistModel.create(value).then(result => {
                                return res.status(202).json({status: "Success"})})
                                                       .catch(err=>{return res.status(500).json({status: err})});
                        }).catch(err=>{return res.status(500).json({error: err})});;
                       
                   });
                  



module.exports = waitlistRoute; 