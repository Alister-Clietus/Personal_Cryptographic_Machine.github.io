const ChannelModel = require("../models/channel");

const getHome = (req, res) => {
    res.sendFile(__dirname + "/website/home.html");
};
const getAbout = (req, res) => {
    res.sendFile(__dirname + "/website/about.html");
};
const getlogin = (req, res) => {
    res.sendFile(__dirname + "/website/login.html");
};
const getsignup = (req, res) => {
    res.sendFile(__dirname + "/website/signup.html");
};
const getmsg = (req, res) => {
    res.send("Welcome to the messanger")
};
var getinsert = (req, res, next) => {
    var channelModel = new ChannelModel()
    channelModel.name = "Gokul K"
    channelModel.type =  "gokulleos@gmail.com"
    channelModel.save((err,data) =>{ 
    if(err){
        console.error(err)
    }else{
        res.status(200).send({"msg":"Inserted to DB"})
    }
})

}
module.exports = {getHome,getAbout,getlogin,getsignup,getmsg,getinsert};