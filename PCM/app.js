const express = require('express');
const app = express();
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const http = require('http');
var assert = require('assert');
var router = express.Router();
const channelModel = require("./models/channel")
/////////////////////////////////////////////////////////
const postRoutes = require('./routes/post')
//////////////////////////////////////////////////////////
dotenv.config();
app.use(morgan("dev"));
//////////////////////////////////////////////////////////
app.get("/", postRoutes.getHome);
app.get("/about", postRoutes.getAbout);
app.get("/login", postRoutes.getlogin);
app.get("/signup", postRoutes.getsignup);
app.get("/msg", postRoutes.getmsg);
app.get("/get-data", postRoutes.getHome);
app.post('/insert',postRoutes.getinsert);
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true}
    )
.then(() => console.log('DB_Connected'));

mongoose.connection.on("error", err => {
    console.log('DB Connection error: ${err.message}');
});
///////////////////////////////////////////////////////
const port = process.env.port || 8081;
app.listen(port,() => {
    console.log('listesing to port: ${port}');
});
////////////////////////////////////////////////////////////