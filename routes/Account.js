const express =  require('express')
const mongoose =  require('mongoose');
const passport = require('passport')
const cloudinary = require('cloudinary')
const Account = require('../models/UserAccount');
const multer = require('../config/multer')
require("../config/cloudinary");
const router = express.Router() 


router.get('/userAccount',passport.authenticate('jwt',{session:false}),async (req,res) => {
    Account.findOne({user:req.user.id})
        .then(account => {
            if(!account) {
                return res.json('no user account CreateOne')
            }else {
                return res.json(account)
            }
        }).catch(err => console.log(err))
})

router.post('/useraccount',passport.authenticate('jwt',{session:false}),multer.single('avatar'),(req,res) => {
    console.log(req.file)
    Account.findOne({user:req.user.id})
        .then( async account => {
            if(account) {
                return res.json('account has been registerd')
            }
            let result = await cloudinary.v2.uploader.upload(req.file.path)
            const newAccount = new Account({
                user:req.user.id,
                userName:req.body.userName,
                email:req.body.email,
                title:req.body.title,
                avatar:result.secure_url,
                bio:req.body.bio,
            })
            newAccount.save()
                .then(newAccount => {
                    res.json(newAccount)
                })
                .catch(err => {
                    res.status(404).json(err)
                })
            
        }).catch(err => {
            res.json(err)
        })
})

router.get('/useraccount/all',passport.authenticate('jwt',{session:false}),(req,res) => {
    Account.find({})
        .then(accounts => {
           let account =  accounts.filter(account => {
                account._id !== req.user.id
            })
            if(account.length <= 0) {
                res.json({msg:'No Fitters yet'})
            }else {
                res.json(account)
            }
        })
})

router.get('/useraccount/:id',passport.authenticate("jwt",{session:false}),(req,res) => {
    Account.findById({_id:req.params.id})
        .then(account => {
            if(!account) {
                res.json({msg:'account dosent exist'})
            }else {
                res.json(account)
            }
        })
})

router.put('/useraccount',passport.authenticate('jwt',{session:false}),multer.single('avatar'),(req,res)  => {
    console.log(req.file)
    Account.findOneAndUpdate({user:req.user.id},
     {  
         $set:{
            userName: req.body.userName,
            avatar:req.file.path,
            bio: req.body.bio,
            email: req.body.email,
            user: req.user.id
        }
     }).then(account => {
         res.json({msg:'successfully update your account'})
     }).catch(err => console.log(err))
})




module.exports = router