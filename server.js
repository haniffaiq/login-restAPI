const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get('/', (req,res)=>{
    res.json({
        "error": false,
        "message": "Hello World" 
    })
})

//Get Data
/*
router.route("/users").get((req,res)=>{
    var response = {};

})*/


app.use('/', router)

app.listen(3000);
console.log("Listengin to PORT 3000");
