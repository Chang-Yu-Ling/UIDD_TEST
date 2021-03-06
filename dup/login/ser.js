#!/usr/bin/env node
//====== initial ===================================================================================================
const express = require('express')     // include `express`

const app = express()          // create an express, aka web server, instance

const port = 9955

//====== url ====================================================================================================
app.listen(port, () => {               // start the server
  console.log(`listening on port: ${port}`)
})

//====== 相對url =================================================================================================
app.use(express.static(`${__dirname}/dist`))     // handle other urls

//======== 記數 ==================================================================================================
let nRequests = 0                           // handle `/step4` url

app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

//======== form回傳 ==================================================================================================
app.get('/step5', (req, res) => {          //`[host]:[port]/step5?fname=[fname]&lname=[lname]`
  
//var fn=req.query.fname;
//var ln=req.query.lname;
//.toLowerCase();
//parseInt(str);parseFloat(str);
//obj.ToString();

var fn=parseInt(req.query.fname);
var ln=parseInt(req.query.lname);
//var sn=parseInt(req.query.sname);

var mut=fn*ln;
//var sub=sum-sn;

/*var in_res;
var fs=require('fs');
    var file="./card_data_new.json";
    fs.readFile(file, function (err, data) {
        if (err) throw err;
 
        var obj =JSON.parse(data.toString());      //讀入 json 轉為 parse
        var jsonLength=Object.keys(obj).length     //求 obj length
console.log(jsonLength);
//console.log(Object.keys(obj));
var in_rate=obj[Object.keys(obj)[1]]['v_in'];
console.log(in_rate);

in_res=parseFloat(in_rate.substr(0,in_rate.length-1));
console.log(in_res);

res.send(`<h1>answer = ${in_res*fn}</h1>`)

})*/

res.send(`<h1>answer = ${mut}</h1>`)
})

//======= 針對同樣網址回傳不同結果 ======================================================================================================
const bodyParser = require('body-parser')            // include `body-parser`

app.use(bodyParser.urlencoded({ extended: false }))   // setup `body-parser`

app.use(bodyParser.json())

app.post('/step7', (req, res) => {            // `app.post()` 而非 `app.get()`==>針對同樣網址回傳不同結果

  // `bady-parser` stores parsed data in `req.body`
  res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
})