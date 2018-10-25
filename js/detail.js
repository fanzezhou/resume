$(function(){
    //background-image: url("../img/detail/car-red-body.jpg")
    $(".sg>ul").on("mouseenter","li",function(){
        var $img=$(this).html();
        var $url=$(this).children().attr("src")
        //img/detail/car-red-turn.jpg
        $("#mgimg").html($img)
        $(".lg").css("background-image",`url('${$url}')`)
        $(this).css({"border-color":"#6babe3","border-width":"2px"})
    })
    $(".sg>ul").on("mouseleave","li",function(){
        $(this).css({"border-color":"rgb(30,30,30)","border-width":"1px"})
    })
    $("#smask")
    .hover(function(){
        $("#mask").css("display","block")
        $(".lg").css("display","block")
    },function(){
        $("#mask").css("display","none")
        $(".lg").css("display","none")
    })
    .mousemove(function(e){
        var left=e.offsetX-75;
        var top=e.offsetY-75;
        if(left<0) left=0;
        else if(left>393.75) left=393.75;
        if(top<0) top=0;
        else if(top>154) top=154;
        $("#mask").css({left,top})
        $(".lg").css("background-position",`-${2*left}px -${2*top}px`)
    })
    $(".instro>ul>li>span").hover(function(){
        $(this).css("color","rgb(250,190,0)")
    },function(){
        $(this).css("color","rgb(255,255,255)")
    })

    var i=0;
    var urlsearch=`url("./img/detail/360/`;
    $(".hei").click(function(){
    	urlsearch=`url("./img/detail/black/`;

    })
    $(".bai").click(function(){
    	urlsearch=`url("./img/detail/white/`;

    })
    $(".yin").click(function(){
    	urlsearch=`url("./img/detail/sliver/`;

    })
    $(".hong").click(function(){
    	urlsearch=`url("./img/detail/red/`;

    })
    function timer(){
        i++;
        if(i<37){
            $("#car360").css("background",`${urlsearch+i}.png")`)
        }else{
            i=0;
        }
    }
    timer();

    $("#car360").hover(function(){
       a=setInterval(timer,150);
       timer()
    },function(){
        clearInterval(a)
    })
    var A=parseInt($(".lunbo1>img").attr("src").split("/")[3]);
    console.log(i);
    //lunbo1
    $(".p1>.lunbo>.lunbo1>.left").click(function(e){
        e.preventDefault();
        if(A>1){
                A--;
            }else if(A=1){
                A=6;
            }
            $(".p1>.lunbo>.lunbo1>img").attr("src",`./img/waiguan/${A}.jpg`);
            $(`.p1>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin");
            $(`.p1>.lunbo>.lunbo1>.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active")
        
    })
    $(".p1>.lunbo>.lunbo1>.right").click(function(e){
        e.preventDefault();
        if(A<=5){
            A++;
        }else if(A=6){
            A=1;
        }
            $(".p1>.lunbo>.lunbo1>img").attr("src",`./img/waiguan/${A}.jpg`);
            $(`.p1>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin")
            $(`.p1>.lunbo>.lunbo1>.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active")
        
    })
    //luno2
    $(".p2>.lunbo>.lunbo1>.left").click(function(e){
        e.preventDefault();
        if(A>1){
                A--;
            }else if(A=1){
                A=5;
            }
            $(".p2>.lunbo>.lunbo1>img").attr("src",`./img/detail/p2/${A}.jpg`);
            $(`.p2>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin");
            $(`.p2>.lunbo>.lunbo1》.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active")
        
    })
    $(".p2>.lunbo>.lunbo1>.right").click(function(e){
        e.preventDefault();
        if(A<=4){
            A++;
        }else if(A=5){
            A=1;
        }
            $(".p2>.lunbo>.lunbo1>img").attr("src",`./img/detail/p2/${A}.jpg`);
            $(`.p2>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin")
            $(`.p2>.lunbo>.lunbo1>.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active") 
    })
    //lunbo3
    $(".p3>.lunbo>.lunbo1>.left").click(function(e){
        e.preventDefault();
        if(A>1){
                A--;
            }else if(A=1){
                A=6;
            }
            $(".p3>.lunbo>.lunbo1>img").attr("src",`./img/detail/p3/${A}.jpg`);
            $(`.p3>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin");
            $(`.p3>.lunbo>.lunbo1>.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active")
        
    })
    $(".p3>.lunbo>.lunbo1>.right").click(function(e){
        e.preventDefault();
        if(A<=5){
            A++;
        }else if(A=6){
            A=1;
        }
            $(".p3>.lunbo>.lunbo1>img").attr("src",`./img/detail/p3/${A}.jpg`);
            $(`.p3>.lunbo>.lunbodetail>div:nth-child(${A})`).addClass("showin").siblings().removeClass("showin")
            $(`.p3>.lunbo>.lunbo1>.lunbo_footer>ul>li:nth-child(${A})`).addClass("active").siblings().removeClass("active")     
    })
    function getTop(){
        var T=$(window).scrollTop();
        if(T>500){
            $(".hiden").removeClass("hiden")
        }else{
            $(".fixeall>ul>li:last-child").addClass("hiden")
        }
        setTimeout(getTop)
    }
    getTop()

    $(".fixeall>ul>li:nth-child(2)>span").hover(function(){
        $(".fixeall>ul>li:nth-child(2)>img").css("display","block")
    },function(){
        $(".fixeall>ul>li:nth-child(2)>img").css("display","none")
    })
    $(".fixeall>ul>li:first-child>span").hover(function(){
        $(".fixeall>ul>li:first-child>div").css("display","block")
    },function(){
        $(".fixeall>ul>li:first-child>div").css("display","none")
    })
})