const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

// const { futimesSync } = require("fs");
const upload = multer({
    // dest: "uploads/" // 파일을 올리겠다, 파일 경로를 정해줌
    storage: multer.diskStorage({
        destination(req, file, done){
            console.log("destination : ", req.body );
            done( null, 'uploads/');
        },
        filename( req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext );
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});
app.get("/", function(req, res){
    res.render("index2");
});
app.get("/upload", function(req, res){
    res.render("upload");
});
app.post("/upload", upload.single('userfile'), function(req,res){
    res.render("upload-page", {filename: req.file.filename});
    console.log(req.body);
    console.log(req.file);
});

app.listen(port, ()=> {
    console.log("Server Port : ", port);
})