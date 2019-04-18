const express=require("express");
//创建空的路由对象
const router=express.Router();
// 引入连接池模块
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
// 引入express-session模块
const session=require("express-session");
router.use(session({
    // 配置模块
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60
    }
}))
// 添加路由
//用户登录
router.get("/login",(req,res)=>{
   // 2.获取参数uname upwd
   var u=req.query.uname;
   var p=req.query.upwd;
   //检查
   // 3.创建sql
   var sql="SELECT id,uname,upwd FROM z_login WHERE uname=? AND upwd=md5(?)";
   // 4.执行sql
   pool.query(sql,[u,p],(err,result)=>{
       if(err) throw err
   // 5.获取数据库返回结果
   if(result.length==0){
       res.send({code:-1,msg:"用户名或密码错误"})
   }else{
    //    保存id到uid
        var uid=result[0].id;
        req.session.uid=uid;
        console.log(uid)
        res.send({code:1,msg:"登录成功"})
   }
   // 6.返回客户数据
   });
});
// 购物车 
router.get("/shopCart",(req,res)=>{
    //参数uid是用户登录成功保存下来的
    //服务器的session对象
    if(!req.session.uid){
         res.send({code:-1,data:[],msg:"请登录"})
         return;
     }
    var uid=1;//req.session.uid;
    console.log(uid);
    var sql="select id,pid,price,uid,pname,img,count from z_cart where uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err ;
        res.send({code:1,data:result})
    })
})//购物车结束

// 添加购物车开始
router.get("/addcart",(req,res)=>{
    // 获取参数 
    var uid=1;//req.session.uid
    var pid=req.query.pid;
    var pname=req.query.pname;
    var price=req.query.price;
    var img=req.query.img;
    // 查询购物车是否有这些参数
    console.log(uid);
    var sql="select id from z_cart where uid=? AND pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result==0){
            // 如果没有就添加商品
            var sql=`insert into z_cart values(null,${uid},${pid},'${price}','${pname}',1,'${img}')`
            console.log(uid)
        }else{
            //否则就给数量count 加一
            var sql=`update z_cart set count=count+1 where uid=${uid} AND pid=${pid}`
        }
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send({code:1,msg:"添加成功"})
        });
    });
});//添加购物车结束

// 购物车商品删除
router.get("/delet",(req,res)=>{
    var id=req.query.id;
    id=parseInt(id);
    var sql="delete from z_cart where id=?"
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        // 判断sql语句印象的行数
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"})
        }else{
            res.send({code:-1,msg:"删除失败"}) 
        }
    }) 
})
module.exports=router;