var db=require('../dbconnection');

var User={

getAllUsers:function(callback){

return db.query("Select * from user",callback);

},
getUserById:function(id,callback){

    return db.query("select * from user where Id=?",[id],callback);
},
addUser:function(User,callback){
   console.log("inside service");
   console.log(User.Id);
return db.query("Insert into user values(?,?,?)",[User.Id,User.Title,User.Status],callback);
//return db.query("insert into User(Id,Title,Status) values(?,?,?)",[User1.Id,User1.Title,User1.Status],callback);
},
deleteUser:function(id,callback){
    return db.query("delete from user where Id=?",[id],callback);
},
updateUser:function(id,User,callback){
    return  db.query("update user set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from User where Id in (?)",[delarr],callback);
}
};
module.exports=User;
