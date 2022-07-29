const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const upload = multer({
    // dest: "uploads/" // 파일을 올리겠다, 파일 경로를 정해줌
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename( req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + ext );
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});


app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );
app.use( '/aa', express.static( 'uploads' ));

app.get("/", function(req, res){
    res.render("index2");
});
app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.render("upload-page", res.file);
});

app.listen(port, ()=> {
    console.log("Server Port : ", port);
})