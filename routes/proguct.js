const express=require("express");
const router=express.Router();
const pool=require("../pool");
//引入cors模块
const cors=require("cors");
 //配置允许访问列表
 router.use(cors({
  origin:{
    "Access-Control-Allow-Origin":"*"
  },
  credentials:true
}))
//http://localhost:3000/index
// 商品主页
 router.get("/",(req,res)=>{
   var sql="select * from z_home_page";
   pool.query(sql,[],(err,result)=>{
     if(err) console.log(err);
      res.send(result); 
  })
})
// 商品详情页
router.get("/details",(req,res)=>{
  var lid=req.query.lid;
  var spl="select * from z_details where lid=?"
  pool.query(spl,[lid],(err,result)=>{
    if(err) throw err
    res.send(result);
  })
})
 module.exports=router;