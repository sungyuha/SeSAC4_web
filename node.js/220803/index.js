const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");

app.set("viewe engine", "ejs");
app.use( express.static( "uploads" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require("./routes"); // router는 경로를 나눈다
app.use("/", router);
// const router = require("./routes");
// app.use("/app", router);

app.listen(port, ()=> {
    console.log("Server Port : ", port);
})