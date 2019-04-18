//把html头部放入z-index
$(function(){
// js开始
    $("#header").load("Z_header.html");
    var $ul=$("#cimmdity>div:first>div>ul")
    $ul.css({width:70*6})
    var $mImg=$(`[data-md=zhongtu]`)
    .attr({src:"image/spxq/ChMkJlomRmaIEqK8AAE3DuDVvdAAAi2MwKUocMAATcm595(1).jpg"})
    // 详情页内容
    //获得从首页传来的商品id
    //http://.../product_details.html?lid=5
    //|              location              |
    //                               |search|
    //                                   |
    //                              [?lid, 5 ]
    //                                [0] [1]
    if(location.search!==""){
         var lid=location.search.split("=")[1];
        $.ajax({
            url:"http://127.0.0.1:3000/product/details",
            type:"get",
             data:{lid},
            dataType:"json",
            success:function(result){
                console.log(result);
                // 商品详情
                var html="";
                for(var resul of result){
                 html+=` 
                <div>
                    <h3>${resul.title}</h3>
                    <span>${resul.subtitle}</span>
                    <div>
                        <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格:<s>&yen;4999.99</s></p>
                        <p>惊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爆:<span>&yen;${resul.price}.00</span></p>
                    </div>
                    <div>
                        <dl>
                            <dt>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送:</dt>
                            <dd> 
                                <select name="" id="">
                                    <option value="">河南</option>
                                    <option value="">上海</option>
                                    <option value="">北京</option>
                                    <option value="">广州</option>
                                    <option value="">深圳</option>
                                </select>
                                <b>快递包邮!</b> 
                            </dd>
                        </dl>
                        <dl class="banben" >
                            <dt>版&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本:</dt>
                            <dd> 
                                <span>${resul.memory}</span>
                                <span>6G</span> 
                                <span>8G</span> 
                            </dd>
                        </dl>
                        <dl class="banben">
                            <dt>商品颜色:</dt>
                            <dd> 
                                <span>${resul.colour}</span>
                                <span>摩卡金</span> 
                                <span>樱粉红</span> 
                            </dd>
                        </dl>
                        <dl class="banben">
                            <dt>内存容量:</dt>
                            <dd> 
                                <span>${resul.disk}</span>
                                <span>128G</span> 
                            </dd>
                        </dl>
                        <dl>
                            <dt>套&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装:</dt>
                            <dd> 
                                <span class="biaopei-xianshi">官方标配</span>
                                <div>
                                    <span>手机X1、快速指南X1、华为SuperCharge 充电器X1、三包凭证X1、Type-C 数字耳机X1、Type-C 数据线X1、取卡针X1、TPU保护壳X1、USB</span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>购买数量:</dt>
                            <div> 
                            <a href="javascript:;" class="shuliang-jian">－</a>
                            <span>0</span>
                            <a href="javascript:;" class="shuliang-jia">＋</a>
                            </div>   
                        </dl>
                        <div style="clear: both;"></div>
                        <div>
                            <a href="javascript:;">立即购买</a>
                            <a href="javascript:;" class="addcart">加入购物车</a>
                        </div>
                    </div>
                </div>`;

            }
                $(".commdity-details").html(html)
                // 点击加入购物车
                $(".addcart").click(function(){
                    for(var add of result){
                        console.log(add)
                        //获取产品的参数
                        var pid=add.lid;
                        var pname=add.title;
                        var price=add.price;
                        var img=add.md; 
                        console.log(pid,pname,price,img)
                        // 发送ajax请求 发送产品数据
                        $.ajax({
                            url:"http://127.0.0.1:3000/user/addcart",
                            type:"get",
                            data:{pid,pname,price,img},
                            dataType:"json",
                            success:function(result){
                                if(result.code==1){
                                
                                }
                            }
                        })//?pid="+pid+"&pname="+pname+"&price="+price+"&img="+img;
                       

                    }
                })

                //点击切换边框样式
                $(".banben>dd>span:first-child").addClass("dianji-biankuang");
                $(".banben>dd").on("click","span",function(){
                $(this).addClass("dianji-biankuang").siblings().removeClass("dianji-biankuang")
                })//点击切换边框样式结束

                // 商品标配
                $(".biaopei-xianshi").next().hide();
                $(".biaopei-xianshi").click(function(){
                    var div=$(this).next();
                    if(div.is(":visible")){
                        div.hide();   
                    }else{
                        div.show();
                    } 
                }) // 商品标配结束

                //点击商品变化 数量加减
                $(".shuliang-jian").click(function(){
                    var i=$(this).next().html().slice(0,2);
                    console.log(i);
                    i--;
                    if(i<0){
                        i=0
                    }
                    $(this).next().html(`${i}`)
                   
                })
                $(".shuliang-jia").click(function(){
                    var i=$(".shuliang-jian").next().html().slice(0,2);
                    console.log(i);
                    i++;
                    $(".shuliang-jian").next().html(`${i}`)
                })

                // 商品图片
                var html="";
                for(var p of result){
                    html+=`
                    <div class="md-img">
                        <img data-md="zhongtu" src="image/spxq/${p.md}" alt="">
                    </div>
                    <div class="ul-img">
                        <ul>
                            <li><img src="image/spxq/${p.sm}" data-md="${p.md}" data-lg="${p.lg}" alt=""></li>
                            <li><img src="image/spxq/ChMkJ1omRwuIFB7yAAFiAt9fLX4AAi2NAMIZbIAAWIa908.jpg" alt=""></li>
                            <li><img src="image/spxq/ChMkJ1pEwJ-IHPJzAAD5pXWfqOwAAjlAAF9fiIAAPm9016.jpg" alt=""></li>
                            <li><img src="image/spxq/ChMkJlomRmuIdTVnAAFa8ZXTNYkAAi2MwLe5BEAAVsJ064.jpg" alt=""></li>
                            <li><img src="image/spxq/ChMkJlpEwJWIPr3eAAB54GlfPtUAAjlAADrmvEAAHn4532.jpg" alt=""></li>
                            <li><img src="image/spxq/ChMkJlpEwJWIPr3eAAB54GlfPtUAAjlAADrmvEAAHn4532.jpg" alt=""></li>
                        </ul>
                    </div>
                    <div class="mag" style="background-image:url(image/spxq/${p.lg});">
                    </div>
                    <div class="md-waiceng" style="width: 400px; height: 400px; position: absolute;top:0;left:0;z-index:100" >
                    </div>
                    <p>
                        <a href="javascript:;">关注商品</a> 
                        <a href="javascript:;">分享</a>
                    </p>
                    <!-- 中图遮罩层 -->
                    <div class="md-zhezhao" style="width:100px;height:100px;border:1px solid #000;position: absolute;top:0; left:0;">
                    </div>
                    <div>
                        <p>*请勿私下交易,以免财务两空!</p>
                    </div>`
                    
                }
                    $(".img_comdity").html(html)
                 // 放大镜效果
                // 小图的ul
                // 中图
                var $md=$(".md-img>img");
                // 大图
                var $lg=$(".mag");
                $(".ul-img ul").on("mouseenter","li>img",function(){
                    var $img=$(this);//拿到当前img
                    $img.parent().addClass("border")
                    // 获取当前的scr
                    var src=$img.attr("src");
                    // 把scr放入中图中
                    $md.attr("src",src);
                    //修改大图背景
                    var backgroundImage=`url(${src})`
                    $lg.css({backgroundImage})
                })
                // 鼠标移出去除边框
                $(".ul-img ul").on("mouseout","li>img",function(){
                    var $img=$(this);//拿到当前img
                    $img.parent().removeClass("border")
                })
                // 获取遮罩层
                var $zz=$(".md-zhezhao");
                //获取外层
                var $wc=$(".md-waiceng");
                // 鼠标移入显示遮罩层和大图
                $wc.mousemove(function(){
                    //console.log(111)
                    $zz.show();
                    $(".mag").show();
                });
                 //鼠标移出隐藏遮罩层和大图
                $wc.mouseout(function(){
                    //console.log(111)
                    $zz.hide();
                    $(".mag").hide();
                });
                // 遮罩层$zz跟着鼠标移动 并同步移动大图背景
                var max=300;
                $wc.mousemove(function(e){
                    var left=e.offsetX-50;//左边位置等于大div-遮罩层的一般
                    var top=e.offsetY-50;
                    var top=e.offsetY-88;
                    if(left<0) left=0
                    else if(left>max) left=max
                    if(top<0) top=0
                    else if(top>max) top=max;
                      // 遮罩层他用了绝对定位所以直接把left和top的值传过去就可以定位
                    $zz.css({left,top});
                    var backgroundPosition=`${-16/7*left}px ${-16/7*top}px`
                    $(".mag").css({backgroundPosition})
                    
                })
            }
        
        
        
        })
    }
    
    //  推荐滚动条
   function roll(){
        $(".recommend-img>ul").css({width:"1600px"});
         $(".recommend-img>ul").animate({marginLeft:"-400px"},4000,'linear',function(){
              $(".recommend-img>ul li").first().appendTo($(".recommend-img>ul "));
             $(".recommend-img>ul").css("marginLeft","0px")
            });
    }
    setInterval(roll,1000);
    //详情选项框 右侧
    $("#sct1").css({zIndex:9});
    var data=document.querySelectorAll("[data-select='1']"); 
    var n=10;
        for(var tag of data){
        tag.onclick = function () {
                var tag = this;
                var id = tag.getAttribute("data-link");
                var content = document.getElementById(id);
                content.style.zIndex = n;
                n++;
                }
            }
            $(".datails-opt>ul li").click(function(){
                 if(!$(this).hasClass("tab")){
                    //this.removeClass("tab")
                    $(this).addClass("tab")
                    $(this).siblings().removeClass("tab")
                }
            })
    // 详情框 左侧
    $("#details>.details-left>ul>li").click(function(){
        var $this=$(this).index();
       // console.log($this)
        $(".nth-box>ul").eq($this).show().siblings().hide();
           $(this).addClass("tab").siblings().removeClass("tab")
    })

// js结束
}) 
