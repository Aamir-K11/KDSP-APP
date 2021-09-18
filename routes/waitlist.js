const express  = require("express");
const {FamilyModel} = require("../models/family");

const waitlistRoute = express.Router();

waitlistRoute.use(express.json());


waitlistRoute.get("/",(req,res)=>{
        FamilyModel.find({state:"Approved"})
                   .then(value=>{return res.status(202).json({waitlist: value})})
                   .catch(err=>{return res.status(500).json({error: err})});
});


module.exports = waitlistRoute;