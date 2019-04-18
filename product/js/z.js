//jquery ajax
(function(){
    // 发送ajax请求
    $.ajax({
        url:"http://localhost:3000/product",
        type:"get",
        dataType:"json" 
    })
    .then(function(result){
        console.log(result);
        // 首页 团购内容
        var html="";
        for(var i=0;i<6;i++){
            var p=result[i]
            html+=`<li class="item">
        <div class="tuan_neirong_1">
            <a href="spxq.html?nid=${+p.zid}">
                <img src="${p.img}" alt=""/>
            </a>
            <a href="">${p.zname}</a>
            <!--鼠标悬浮遮罩层-->
            <div class="tuan_neirong_1_zhe">
                <p>电商参考价:&yen;1399.00</p>
                <p>
                    <a href="">测评</a>
                       <span>|</span>
                    <a href="">视频</a>
                        <span>|</span>
                    <a href="">点评</a>
                </p>
            </div>
        </div>
        <div class="tuan_neirong_1_bottom">
             <p>&yen;${p.price}</p>
            <span>剩余时间:0天23时52分15秒</span>
        </div>
        </li>`}
        // 将内容放到#tuan_neirong下边的ul中
        $(".tuan_neirong>ul:first-child").html(html)
        // 到店团 
        var html="";
        for(var i=6;i<9;i++){
            var p=result[i];
            html+=`<li>
            <!--图片-->
            <div class="tuan_daodian_img">
                <a href="">
                    <img src="${p.img}" alt=""/>
                </a>
            </div>
            <!--内容-->
            <div class="tuan_daodian_right">
                <a href="">${p.zname}</a>
                <p>&yen;--</p>
                <p class="tuan_daodian_right_bg">线下连锁保障</p>
                <span>到店团</span>
            </div>
            </li>`
        }
        $(".tuan_daodian>ul:first-child").html(html)
        //同城购
        var html="";
        for(var i=9;i<12;i++){
            var p=result[i];
            html+=`<div>
                <a href="">
                    <img src="${p.img}" alt=""/>
                </a>
            </div>
            `
        }
        $(".tongcheng_one_one").html(html)
        var html="";
        for(var i=12;i<17;i++){
            var p=result[i];
            html+=`<li>
            <div class="tongcheng_two-img">
                <img src="${p.img}" alt=""/>
            </div>
            <div  class="tongcheng_two-bottom">
                <a href="spxq.html?nid=1">
                    ${p.zname}
                </a>
                <p class="two-bottom_jieshao">4G+64G内存 正品行货 全...</p>
                <p class="two-bottom_jiage">&yen;${p.price}</p>
                <span>电商参考价:&yen;1019.00</span>
                <p class="two-bottom_a" >
                    <a href="">商品评价</a>
                    <a href="">商品视频</a>
                    <a href="">网页点评</a>
                </p>
            </div>
        </li>`
        }
        $(".tongcheng_two>ul:first-child").html(html)
        var html="";
        for(var i=17;i<20;i++){
            var p=result[i];
            html+=`<div>
                <a href="">
                    <img src="${p.img}" alt=""/>
                </a>
            </div>
            `
        }
        $(".tongcheng_one_two").html(html)
        var html="";
        for(var i=20;i<25;i++){
            var p=result[i];
            html+=`<li>
            <div class="tongcheng_two-img">
                <img src="${p.img}" alt=""/>
            </div>
            <div  class="tongcheng_two-bottom">
                <a href="">
                    ${p.zname}
                </a>
                <p class="two-bottom_jieshao">4G+64G内存 正品行货 全...</p>
                <p class="two-bottom_jiage">&yen;${p.price}</p>
                <span>电商参考价:&yen;1019.00</span>
                <p class="two-bottom_a" >
                    <a href="">商品评价</a>
                    <a href="">商品视频</a>
                    <a href="">网页点评</a>
                </p>
            </div>
        </li>`
        }
        $(".tongcheng_two_two>ul:first-child").html(html)
    });    
})()


//特效部分
// 右边选项卡 登录  购物车 历史记录
// 点击显示登录窗口事件
$("#login-box").hide();
$(".label-reg").click(function(e){
    e.stopPropagation();
    $log=$("#login-box");
    if($log.is(":hidden")){//如果是隐藏的
        $log.fadeIn(600);     
        $("body").css({opacity:0.5});
    }else{//否则
        $log.fadeOut(600);
        $("body").css({opacity:""});
    }
})
// 点击任意地点登录框隐藏
$(window).click(function(){
    $log.fadeOut(600);
    $("body").css({opacity:""});
})
// 登录框取消冒泡事件
$("#login-box").click(function(e){
    e.stopPropagation();
})
$("#login-box>div:first-child>p:first-child>a").click(function(){
    $log.fadeOut(600);
    $("body").css({opacity:""});
})
// 鼠标滑动效果
// 鼠标滚动在页面顶部显示搜索框
var $fixed=$("#main").offset().top;//$fixed等于$("#main")的高
$(window).scroll(function(){
    if($(this).scrollTop()>$fixed){
        $("#fixed-nav").show()
    }else{
        $("#fixed-nav").hide()    }
})

// 选项卡特效点击切换
//  电子竞技
document.getElementById("diazi-bottom-lunbo1").style.zIndex=9;
var tags=document.querySelectorAll("[data-tonggle=tag]");
var n=10;
for(var tag of tags){
tag.onclick = function () {
        var tag = this;
        var id = tag.getAttribute("data-target");
        var content = document.getElementById(id);
        content.style.zIndex = n;
        n++;
    }
}
// 选项卡特效  
//家电精选
//把第一页放在zuishagmian
document.getElementById("caidian").style.zIndex=9;
//查找触发事件元素
var daohang=document.querySelectorAll("[data-dianji=li]");
//绑定监听事件处理函数
var n=10;
for(var daoh of daohang){
    daoh.onclick=function(){
        var daoh=this;
        var id=daoh.getAttribute("data-jiadian");
        var con = document.getElementById(id);
        con.style.zIndex=n;
        n++;
    }
}
$(".tuan").on("click",".tuan_neirong_1",function(){

    $(this).$("eq(3)").show();
    console.log( $(this).eq(3))
})