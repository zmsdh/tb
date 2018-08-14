//菜单栏下拉
$(function(){
    $(".in").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    })
})
//产品内容显示
$(function(){
    var lis=$(".banner-l li")
    var con=$(".banner-c li")
    lis.hover(function(){
        var num=$(this).index();
        con.eq(num).show();
    },function(){
        con.hide();
    })
})
//轮播图
var a=0;
$(function(){
    $(".pic-b li").hover(function(){
        a=$(this).index();
        $(".banner .pic ").animate({marginLeft: -705*a});
    })
})
//轮播图右边按钮
$(function(){
    $(".pic-r").click(function(){
        a++;
        a=a%5;
        $(".banner .pic ").animate({marginLeft: -705*a});
    })
})
//轮播图左边按钮
$(function(){
    $(".pic-l").click(function(){
        a--;
        a=(a+5)%5;
        $(".banner .pic ").animate({marginLeft: -705*a});
    })
})
$(function(){
    $(".notice-t li").hover(function(){
        $(this).addClass("nn").siblings().removeClass("nn");
        var nl=$(this).index();
        $(".notice-c ul").eq(nl).show().siblings().hide();
    })
})
//猜你喜欢部分
$(function(){
    $(".like-b li").hover(function(){
        $(this).addClass("bdr");
        $(this).find(".same").show();
    },function(){
        $(this).removeClass("bdr");
        $(".same").hide();
    })
})

