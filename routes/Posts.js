const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('../config/multer');
const cloudinary = require('cloudinary');
require("../config/cloudinary");
//models
const Post = require('../models/PostImg')
const BLOG = require('../models/Blogs')
const Account = require('../models/UserAccount')

const router =  express.Router()


router.get('/post',passport.authenticate('jwt',{session:false}),async (req, res) => {
    Post.find({User:req.user.id})
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

router.get('/blog',passport.authenticate('jwt',{session:false}),(req,res) => {
    BLOG.findOne({User:req.user.id})
     .then(blogs => {
         if(blogs.length == []) {
             res.status(404).json({msg:'no artciles'})
         }else {
             res.status(200).json(blogs)
         }
     })
})

router.post('/post',passport.authenticate('jwt',{session:false}),multer.single('post'),async (req,res) => {
    Account.findOne({user:req.user.id})
     .then( async account => {
        if(!account) {
            res.status(404).json({msg:'please create account'})
        }else {
            let result = await cloudinary.v2.uploader.upload(req.file.path)
         const newpost = new Post({
             User:req.user.id,
             name:req.body.name,
             avatar:req.body.avatar,
             post:result.secure_url,
             caption:req.body.caption,
             tags:req.body.tags
         })
         newpost.save()
          .then(newpost => {
              res.json(newpost)
          }).catch(err => {
              console.log(err)
              res.status(400).json({msg:'something went wrong'})
          })
        }
     })
})

router.post('/blog',passport.authenticate('jwt',{session:false}),multer.single('Coverimage'),async (req,res) => {
    Account.findOne({user:req.user.id})
     .then(async account => {
        if(!account) {
            res.status(404).json({msg:'please create a account'})
        }else {
            let errors = []
            if(!req.body.Title) {
                errors.push({error:'please enter a title'})
            }
            if(!req.body.SubTitle){
                errors.push({errors:'please enter a subtitle'})
            }
            if(!req.body.Content) {
                errors.push({errors:'please enter content for blog'})
            } 
            if(errors.length > 0) {
                res.status(400).json(errors)
            }else {
                let result = await cloudinary.v2.uploader.upload(req.file.path)
                const newBlog = BLOG({
                    User:req.user.id,
                    name:req.body.name,
                    avatar:req.body.avatar,
                    Coverimage:result.secure_url,
                    Title:req.body.Title,
                    SubTitle:req.body.SubTitle,
                    Content:req.body.Content,        
                })
                newBlog.save()
                 .then(newblog => {
                     res.status(200).json(newblog)
                 }).catch(err => {
                     console.log(err)
                     res.status(404).json({error:'soomething went wrong'})
                 })
            }
        } 
     }) 
})
router.get('/newsfeed/posts',passport.authenticate('jwt',{session:false}),async(req,res) => {
    Account.findOne({user:req.user.id})
     .then(account => {
        let results 
        const {Subscribing} = account
         const postsPromises = Subscribing.map(user => Post.find({User:user.user}))
         Promise.all(postsPromises)
          .then((...data) => {
              if(!data) {
                res.json({msg:'no posts from your subscriber'})
              }else {
                res.json(data)
              }
          })
     }).catch(err => console.log(err))
})

router.get('/newsfeed/blogs',passport.authenticate('jwt',{session:false}),async(req,res) => {
    Account.findOne({user:req.user.id})
     .then(account => {
        let results 
        const {Subscribing} = account
         const blogsPromises = Subscribing.map(user => BLOG.find({User:user.user}))
         Promise.all(blogsPromises)
          .then((...data) => {
              res.json(data)
          })
     }).catch(err => console.log(err))
})



router.post(
    "/likes/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Account.findOne({ user: req.user.id })
        .then(() => {
          Post.findById(req.params.id)
            .then(post => {
              // Check for post owner
              if (
                post.likes.filter(like => like.user.toString() === req.user.id)
                  .length > 0
              ) {
                return res
                  .status(400)
                  .json({ alreadyLiked: "You have already liked" });
              }
              post.likes.unshift({ user: req.user.id });
  
              post.save().then(post => {
                res.status(200).json({ post });
              });
            })
            .catch(err =>
              res.status(404).json({ postnotfound: "No post found" })
            );
        })
        .catch(err => console.log(err));
    }
  );
  
  router.post(
    "/unlike/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Account.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            if (
              post.likes.filter(like => like.user.toString() === req.user.id)
                .length === 0
            ) {
              return res
                .status(400)
                .json({ notliked: "You have not yet liked this post" });
            }
  
            // Get remove index
            const removeIndex = post.likes
              .map(item => item.user.toString())
              .indexOf(req.user.id);
  
            // Splice out of array
            post.likes.splice(removeIndex, 1);
  
            // Save
            post.save().then(post => res.json(post));
          })
          .catch(err => res.status(404).json({ postnotfound: "No post found" }));
      });
    }
  );
  
  router.post(
    "/comment/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Post.findById(req.params.id)
        .then(post => {
          const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
          };
  
          // Add to comments array
          post.comments.unshift(newComment);
  
          // Save
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    }
  );
  
  // @route   DELETE api/posts/comment/:id/:comment_id
  // @desc    Remove comment from post
  // @access  Private
  router.delete(
    "/comment/:id/:comment_id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Post.findById(req.params.id)
        .then(post => {
          // Check to see if comment exists
          if (
            post.comments.filter(
              comment => comment._id.toString() === req.params.comment_id
            ).length === 0
          ) {
            return res
              .status(404)
              .json({ commentnotexists: "Comment does not exist" });
          }
  
          // Get remove index
          const removeIndex = post.comments
            .map(item => item._id.toString())
            .indexOf(req.params.comment_id);
  
          // Splice comment out of array
          post.comments.splice(removeIndex, 1);
  
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    }
  );



module.exports = router