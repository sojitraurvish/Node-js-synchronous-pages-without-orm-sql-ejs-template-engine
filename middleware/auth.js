module.exports.admin_auth=(req,res,next)=>{
    if(req.session.ADMIN_LOGIN)
    {
        next();
    }
    else
    {
        req.session.error="Access Denied";
        res.status(403).redirect("/admin");
    }
};