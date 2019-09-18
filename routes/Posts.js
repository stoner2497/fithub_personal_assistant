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
    Post.find({id:req.user.id})
     .then(posts => {
       if (posts.length == []) {
           res.json({msg:'no Posts'})
       }else {
           res.json(posts)
       }
         
     }).catch(err => {
         res.status(400).json({msg:'something went wrong'},err)
     })
})


module.exports = router