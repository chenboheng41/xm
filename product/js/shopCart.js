$(function(){
    //请求购物车数据开始
    var uid=location.search.split("=")[1];
    $.ajax({
        url:"http://127.0.0.1:3000/user/shopCart",
        type:"get",
        data:{uid},
        dataType:"json",
        success:function(result){
            var result=result.data;
            console.log(result)
            var html=""
           for(var res of result){
            html+=`  
            <div class="shop-list">
            <div class="list-input">
                <input type="checkbox">
            </div>
            <div class="shop-list2">
                <div class="list-img">
                    <img src="image/spxq/m1.png" alt="">
                </div>
                <div class="list-name">
                    <a href="javascript:;">
                       ${res.pname}</a>
                </div >
                <div class="list-price">&yen;${res.price}</div>
                <div class="list-count">
                    <a href="javascript:;" class="btn-jian">－</a>
                    <input type="text" value="${res.count}">
                    <a href="javascript:;" class="btn-jia">＋</a>
                </div>
                <div class="list-sum" >&yen;${res.count*res.price} </div>
                <div class="list-shanchu">
                    <a href="javascript:;" class="del">删除</a>
                </div>
            </div>
            </div>`;
            }//循环结束
        
           $(".list").html(html)
            for(var p of result){
                //点击删除购物车开始
                var id=p.id 
                $(".del").click(function(){
                    $(this).remove();
                    console.log($(this))
                    $.ajax({
                    url:"http://127.0.0.1:3000/user/delet",
                    type:"get",
                    data:{id},
                    dataType:"json",
                    success:function(result){
                        if(result.code==1){
                            alert("删除成功")
                            //window.location.reload()
                        }else{
                            alert("删除失败")
                        }
                        }
                    })
                }) //删除购物车结束
            }
           //按钮点击事件  数量加 减
            $(".btn-jia").click(function(){
                var val=$(this).prev().val();
                val++;
                $(this).prev().val(val)
            })
            $(".btn-jian").click(function(){
                var val=$(this).next().val();
                val--;
                console.log(111)
                if(val<1){
                    val=1;
                }
                $(this).next().val(val)  
            })    
        }  
    })//请求购物车数据结束
})