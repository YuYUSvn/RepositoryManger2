var api="http://localhost:8080/";
//下次再发ajax请求把token带到后台
var token = $.cookie('TOKEN');
//如果访问登陆页面这外的页面并且还没有登陆成功之后写入cookie的token就转到登陆页面
if(token==undefined&window.location!='http://127.0.0.1:63342/uerp-web/login.html'){
    window.top.location='/uerp-web/login.html';
}


//设置全局ajax前置拦截
$.ajaxSetup( {
    headers: {
        'TOKEN': token   //每次ajax请求时把token带过去
    }
});

//如果访问登陆页面这外的页面并且还没有登陆成功之后写入cookie的token就转到登陆页面
if(token==undefined){
    if(window.location!='http://127.0.0.1:63342/uerp-web/login.html'){
        window.top.location='/uerp-web/login.html';
    }
}else{
    if(window.location!='http://127.0.0.1:63342/uerp-web/login.html'){
        $.ajax({
            url:api+"login/checkLogin",
            async:true,
            type:'post',
            dataType:'json',
            success:function(res){
                if(res.code==-1){
                    window.top.location='/uerp-web/login.html';
                }
            },
            error:function(res){
                window.top.location='/uerp-web/login.html';
            }
        });
    }
}
