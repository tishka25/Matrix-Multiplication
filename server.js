var express = require('express');
const gauss = require("gaussian-elimination");

var count = 0;

var app = express();


app.listen(5050, function (data) {
    console.log("Listening...");
});




var logger = function (req, res, next) {
    count++;
    // console.log('LOGGED ' + parseInt(count/5));
    next()
}

app.get("/gauss/:array" , (req , res) =>{
    
    var arr = JSON.parse(req.params.array);
    var data = [];
    while(arr.length) data.push(arr.splice(0,4));
    console.log(data);
    var g= gauss(data);
    console.log(g);
    res.send(g);

});

app.use("/ti6kata" , logger);

//Host the frontend
app.use("/ti6kata" ,express.static("./"));

app.get("/getUserCount" , function(req , res){
    var obj = {
        count: parseInt(count/4) 
    }
    res.send(obj);
});
