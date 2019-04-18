    $(".button_login").click(function(){
    var $uname=$(" input[ name='uname'] ").val();
    var $upwd=$(" input[ name='upwd' ] ").val();
    console.log($uname+":"+$upwd )
    // 验证输入内容是否符合规范
      var reg=/^[a-z0-9]{3,15}$/i;
            if(!reg.test($uname)){
                $(".alert").show().first().html(`<i class="alert-img jingshitu"></i>用户名格式不正确,请重新输入`);
                return;
            }  
            if(!reg.test($upwd)){
                $(".alert").show().first().html(`<i class="alert-img jingshitu"></i>密码格式不正确,请重新输入`);
                return;
            }  
    // 获取input的值 
   
//ajax 登录
     $.ajax({//把$uname $upwd发送回去进行验证
        url:"http://localhost:3000/user/login?uname="+$uname+"&upwd="+$upwd,
        data:{id:"id"},
        type:"get",
        dataType:"json" 
    })
        .then(function(result){
        console.log(result)
        // 如果返回值是1就登陆成功
        if(result.code==1){
            alert("登陆成功")
            //window.history.go(-1);
        }else{//否则登录失败
            $(".alert").show().first().html(`<i class="alert-img jingshitu"></i>账户与密码不匹配,请重新输入`);
        }
    })
});
// 注册
$("#login-reg").hide();
$(".enroll").click(function(){
    if($("#login-reg").is(":hidden")){
        $("#login-reg").show()
        $("#header>p>a").html("登录")
    }else{
        $("#login-reg").hide();
        $("#header>p>a").html("立即注册")
    }
})