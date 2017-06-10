var db=require('../dbconnection');

var User={

getAllUsers:function(callback){

return db.query("Select * from user",callback);

},
getUserById:function(id,callback){

    return db.query("select * from user where Id=?",[id],callback);
},
addUser:function(User,callback){
return db.query("Insert into user (Name,college,profilepic) values(?,?,?)",[User.Name,User.college,User.profilepic],callback);
},

ratingUpdate:function (id,rating,callback) {
    return db.query("UPDATE user SET rating=? WHERE id=?",[rating,id],callback);
},

getleaders:function (callback) {

  return db.query("",callback);
}

};
module.exports=User;
