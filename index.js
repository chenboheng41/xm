//引入express模块
const express=require('express');
//引入中间件
const bodyParser=require('body-parser');
// 引入路由器
const productRouter=require('./routes/proguct.js');
const userRouter=require('./routes/user.js');
//创建web服务器
var server=express();
server.listen(5050);
//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public
server.use(express.static('./product'));
//把商品路由器挂载到/product下
// /product/list
server.use('/product',productRouter);
server.use('/user',userRouter);
