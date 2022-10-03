const express=require("express");
const bodyParser=require("body-parser");
const session=require("express-session");

const path=require("path");

const rootDir=require("./util/path");
const admin=require("./routes/admin");
const db=require("./util/database");

const app=express();

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(rootDir,"public")));
// app.use("/css",express.static(path.join(rootDir,"public"))); to serve particular request 

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({secret:"my secret",resave:false,saveUninitialized:false}));

app.use("/admin",admin.routes); 

app.get("/",(req,res,next)=>{
    res.status(404).render("404");
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT,HOST,()=>{
    console.log("Server is created at port 3000...");
});


// db.execute("select * from admins")
// .then((result)=>{
//     console.log(result[0],result[1]);
// })
// .catch((err)=>{});