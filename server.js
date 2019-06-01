const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()
const mongoOp = require("./models/login")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get('/', (req,res)=>{
    res.json({
        "error": false,
        "message": "Hello World" 
    })
})

//Get Data
router.route("/users").get((req,res)=>{
    var response = {};
    mongoOp.find({}, (err,data)=>{
        if(err){
            response = {"error" : true, "message" : "Error Fetching Data"};
        }
        else{
            response = {"error" : false, "message" : data};
        }
        res.json(response)
    })
    
})

//Post Data
router.route("/users").post((req,res)=>{
    var db = new mongoOp;
    var response = {};
    db.userEmail = req.body.email;
    db.userPassword = require('crypto').createHash('sha1').update(req.body.password).digest("base64");

    db.save((err)=>{
        if(err){
            response = {"error" : true, "message" : "Error Fetching Data"};
        }
        else{
            response = {"error" : false, "message" : "Data added"};
        }
        res.json(response)
    })
})


app.use('/', router)

app.listen(3000);
console.log("Listengin to PORT 3000");
