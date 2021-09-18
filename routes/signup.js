const express = require("Express");
const {FamilyModel} = require("../models/family");
const {TherapistModel} = require("../models/therapist");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {Schema} = mongoose;



const signupRouter = express.Router();

signupRouter.use(express.json());


signupRouter.post("/family",(req,res)=>{
    FamilyModel.find({email:req.body.email})
                .exec()
                .then(user=>{
                    if(user.length >= 1){
                        return res.status(409).json({
                            error: "Email already exist"
                        })
                     }
                    else
                    {
                        bcrypt.hash(req.body.password,10,(err,hash)=>{
                            if(err)
                            {
                                return res.status(500).json({
                                    error: err
                                });
                            }
                    
                            else{
                                const Family = new FamilyModel({
                                    familyName: req.body.familyName,
                                    email: req.body.email,
                                    password: hash,
                                    therapy: req.body.therapy
                                });
                    
                                Family.save()
                                      .then(value=>{
                                    return res.status(202).json({status: "Success"})
                                    })
                                    .catch(err=>{
                                        return res.status(500).json({error: err})
                                    });
                            }
                        });
                    }
                    
                    }
                )
           
    
});

signupRouter.post("/therapist",(req,res)=>{
    TherapistModel.find({email:req.body.email})
                .exec()
                .then(user=>{
                    if(user.length >= 1){
                        return res.status(409).json({
                            error: "Email already exist"
                        })
                     }
                    else
                    {
                        bcrypt.hash(req.body.password,10,(err,hash)=>{
                            if(err)
                            {
                                return res.status(500).json({
                                    error: err
                                });
                            }
                    
                            else{
                                const Therapist = new TherapistModel({
                                    Name: req.body.Name,
                                    email: req.body.email,
                                    password: hash,
                                });
                    
                                Therapist.save()
                                      .then(value=>{
                                    return res.status(202).json({status: "Success"})
                                    })
                                    .catch(err=>{
                                        return res.status(500).json({error: err})
                                    });
                            }
                        });
                    }
                    
                    }
                )
           
    
});
      



module.exports = signupRouter;