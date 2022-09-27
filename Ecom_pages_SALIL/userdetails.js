var express = require('express');
var router = express.Router();
var pool = require('./pool')


/* GET home page. */
router.post('/addnewrecord',function(req, res, next) {
  console.log(req.body)
  pool.query("insert into userdetails (mobileno,firstname,lastname,emailaddress,password,city,state,country,zipcode,address1,address2)values(?,?,?,?,?,?,?,?,?,?,?)",
  [req.body.mobileno,req.body.firstname,req.body.lastname,req.body.emailaddress,req.body.password,req.body.city,req.body.state,req.body.country,req.body.zipcode,
    req.body.address1,req.body.address2],function(error,result){
   
    if(error)
    {   console.log(error)
        return res.status(500).json({'RESULT':false}) }
    else
    { return res.status(200).json({'RESULT':true}) }
})
    
});
    

module.exports = router;


