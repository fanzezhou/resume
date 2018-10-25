$(function(){
    $("#s2").mouseenter(function(){
        $(this).children().css("display","block")
    })
    $("#s2").mouseleave(function(){
        $(this).children().css("display","none")
    })
    $(".login1").on("click","div",function(e){
        $(this).css({"background":"#fff","color":"black"}).siblings().css({"background":"rgb(243,244,246)","color":"gray"});

    })
    $("input").on("focus",function(){
        $(this).css("outline-color","rgb(250,190,0)")
        
    })
    $("#in1>input").val("请输入手机号/证件号")
    $("#in2>input").val("请输入密码")
    $("#d1").click(function(){
        $("#in1>input").val("请输入手机号/证件号")
        $("#in2>input").val("请输入密码")
        .css("width","273")
        .next().children().first().css("display","none")
        $("#dd2").css("display","none").html(`60秒后可重复`);
        $("#in2>span:first-child").removeClass("icon-youjianxinjian").addClass("icon-mima2")
        clearInterval(a)
    })
    $("#d2").click(function(){
        $("#in1>input").val("请输入注册手机号")
        $("#in2>input").val("请输入动态验证码")
        .css("width","153")
        .next().children().first().css("display","block")
        $("#in2>span:first-child").removeClass("icon-mima2").addClass("icon-youjianxinjian")
    })
    $("#dd1").click(function(){
        
        $("#dd2").css("display","block");
        $("#dd1").css("display","none")
        var $num=parseInt($("#dd2").html())
        function timer(){
            $num=$num-1;
            console.log($num)
            if($num>0){
                $("#dd2").html(`${$num}秒后可重复`)
            }else{
                clearInterval(a)
                $("#dd2").css("display","none").html(`60秒后可重复`);
                $("#dd1").css("display","block");
                   
            }
        }
       a=setInterval(timer,100)
    })


})