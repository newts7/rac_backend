var express = require('express');
var router = express.Router();
var User=require('../models/users');

router.get('/',function(req,res,next) {
    User.getAllUsers(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
});

router.get('/:id',function(req,res,next) {

    if (req.params.id) {

        User.getUserById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});



router.post('/',function(req,res,next){
User.addUser(req.body,function (err,rows) {
   if(err)
   {
       res.json(err);
   }
   else
   {
       res.json(rows);
   }
});

});

router.get('/:userId/:rating',function (req,res,next) {

    var userId=req.params.userId;
    var rating=req.params.rating;
    console.log(userId);
    console.log(rating);
    User.ratingUpdate(userId,rating,function (err,rows) {
       if(err)
       {
        res.json(err);
       }
       else
       {
           res.json(rows);
       }
    });
});


module.exports=router;
