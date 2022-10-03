const db=require("../util/database");

module.exports=class Admin{

    constructor(){

    }

    static login(email,password)
    {
        return db.execute("select * from admins where email=? and password=?",[email,password]);
    }

}