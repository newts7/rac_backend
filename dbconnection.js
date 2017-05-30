var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'Hello123!',
database:'demo',

});
module.exports=connection;
