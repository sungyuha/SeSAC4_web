const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");
const userRouter = express.Router();

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

router.get("/a", function(req,res){
    res.send("Index");
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
})

