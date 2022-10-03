const path=require("path");

module.exports.index=(req,res,next)=>{
    
    res.render(path.join("admin","category"),{pageTitle:"Category",error:req.session.error});
};

module.exports.manage_category=(req,res,next)=>{
    
    res.render(path.join("admin","manage_category"),{pageTitle:"Category",error:req.session.error});
};