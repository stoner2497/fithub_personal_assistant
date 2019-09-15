const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('../config/multer');
const cloudinary = require('cloudinary');

//models
const Post = require('../models/PostImg')
const BLOG = require('../models/Blogs')


const router =  express.Router()


router.get('/posts',passport.authenticate('jwt',{session:false}),async (req, res) => {
    console.log(`starting request on id:${req.user.id}`)
    Post.find({id:req.user.id})
     .then(posts => {
         if(req.timedout){
             if(err) {

                 console.log('something went wrong ')
             }
             res.end()
         }
         else {
            if(!posts) {
                res.status(404).json({msg:'No posts'})
            }
         }
         
     }).catch(err => {
         res.status(400).json({msg:'something went wrong'},err)
     })
})


module.exports = router