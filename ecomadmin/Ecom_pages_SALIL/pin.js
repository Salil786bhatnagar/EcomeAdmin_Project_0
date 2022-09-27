var express = require('express');
var router = express.Router();
var pool=require('./pool')
var multer=require('./multer')

/* GET home page. */

router.post('/addnewpin',function(req, res, next) {
  if(!localStorage.getItem('token')){
    return res.status(200).json('Session has Expired Please Login Again')
  }
    console.log(req.body)
    pool.query("insert into pin(pinno,place,city,status) values(?,?,?,?)",
    [req.body.pinno,req.body.place,req.body.city,req.body.status],function(err,result){
        if(err){
             console.log(err)
          return  res.status(500).json({RESULT:false})
        }
        else{
          //console.log(result)
        return  res.status(200).json({RESULT:true})
  
        }
    })
  });

  router.get('/displayall',function(req,res,next){

    pool.query("select * from pin",function(err,result){
      if(err){
        return  res.status(500).json([])
      }
      else{
        return  res.status(200).json(result)
      }
    })
  
  })

  router.post('/deleteRecord',function(req,res,next){
    if(!localStorage.getItem('token')){
      return res.status(200).json('Session has Expired Please Login Again')
    }
    pool.query("delete from pin where pinid=?",[req.body.pinid],function(err,result){
      if(err){
        return  res.status(500).json([])
      }
      else{
        return  res.status(200).json(result)
      }
    })
  
  })
  
  router.post('/updateRecord',function(req, res, next) {
    if(!localStorage.getItem('token')){
      return res.status(200).json('Session has Expired Please Login Again')
    }
    console.log(req.body)
    pool.query("update pin set pinno=?,place=?,city=?,status=? where pinid=?",
    [req.body.pinno,req.body.place,req.body.city,req.body.status,req.body.pinid],function(err,result){
        if(err){
             console.log(err)
          return  res.status(500).json({RESULT:false})
        }
        else{
          console.log(result)
        return  res.status(200).json({RESULT:true})
  
        }
    })
  });

 
module.exports = router;
