const path=require("path");

const Admin=require("../models/admin");

module.exports.index=(req,res,next)=>{
    // console.log(req.session.error);
    res.render(path.join("admin","login"),{pageTitle:"Login",error:req.session.error});
};

module.exports.dashboard=(req,res,next)=>{
    res.render(path.join("admin","dashboard"),{pageTitle:"Dashboard",error:req.session.error});
};


module.exports.auth=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    

    Admin.login(email,password)
    .then(([rows,fieldData])=>{
       
        if(!(typeof rows!=='undefined' && rows.length === 0)){
            
            req.session.ADMIN_LOGIN=true;
            req.session.ADMIN_ID=rows[0]["id"];
            res.redirect("/admin/dashboard");
        }
        else{
            
            req.session.error="Invalid username or password";
            res.redirect("/admin");
        }
    })
    .catch((err) =>{ console.log("My Error: ",err)});
};




