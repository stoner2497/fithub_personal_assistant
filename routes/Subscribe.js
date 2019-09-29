const express = require('express');
const passport = require('passport')
const router = express.Router()

//model
const Account = require('../models/UserAccount')
const Subscribe = require('../models/Subscribe');
router.post('/subscribe/:id',passport.authenticate('jwt',{session:false}),async(req,res) => {
    Account.findOne({user:req.user.id})
     .then(account => {
        //  console.log(account)
        if (
            account.Subscribing.filter(subscribe => subscribe.user.toString() === req.params.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyLiked: "You have already liked" });
          }
          account.Subscribing.unshift({ user: req.params.id });
          account.save().then(account => {
            Account.findOne({user:req.params.id})
             .then(account2 => {
                if (
                    account2.Subscribed.filter(subscribe => subscribe.user.toString() === req.params.id)
                      .length > 0
                  ) {
                    return res
                      .status(400)
                      .json({ alreadyLiked: "You have already liked" });
                  }
                  account2.Subscribed.unshift({ user: req.user.id });
                  account2.save().then(account2 => {
                      res.json({account:account,account2:account2})
                  }).catch(err => console.log(err))
             }).catch(err => {
                 console.log(err)
             })
          }).catch(err => console.log(err))
     }).catch(err => {
         console.log(err)
     })
})



router.post('/unsubscribe/:id',passport.authenticate('jwt',{session:false}),async(req,res) => {
    Account.findOne({user:req.user.id})
     .then(account => {
         
        if (
            account.Subscribing.filter(subscribe => subscribe.user.toString() === req.params.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyLiked: "You have already liked" });
          }
          account.Subscribing.unshift({ user: req.params.id });
          account.save().then(account => {
            Account.findOne({user:req.params.id})
             .then(account2 => {
                if (
                    account2.Subscribed.filter(subscribe => subscribe.user.toString() === req.params.id)
                      .length > 0
                  ) {
                    return res
                      .status(400)
                      .json({ alreadyLiked: "You have already liked" });
                  }
                  account2.Subscribed.unshift({ user: req.user.id });
                  account2.save().then(account2 => {
                      res.json({account:account,account2:account2})
                  }).catch(err => console.log(err))
             }).catch(err => {
                 console.log(err)
             })
          }).catch(err => console.log(err))
     }).catch(err => {
         console.log(err)
     })
})
module.exports = router