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
//return db.query("insert into User(Id,Title,Status) values(?,?,?)",[User1.Id,User1.Title,User1.Status],callback);
}
};
module.exports=User;
