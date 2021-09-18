const express = require("Express");
const {FamilyModel} = require("../models/family");

const representativeRoute = express.Router();

representativeRoute.get("/:id",(req,res)=>{
   
    FamilyModel.findByIdAndUpdate( req.params.id,{state:"Approved"})
                .then(value => {return res.status(202).json(value)})
                .catch(err => {return res.status(500).json({error: err})});
});


module.exports = representativeRoute;


