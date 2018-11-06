/**
 * Created by dell on 2018/11/3.
 */


$(function(){
    var pageindex = 0;
    var onScroll = true;
    var len  = $(".window .page").length;
    function getsize(){//动态获取函数
        var h = $(window).height();
        var w = $(document).outerWidth();
        $('.page').css({
            height:h,
            width:"100%"
        });
        $('.pagelist').css({
            height:h*$('.page').length,
            width:"100%"
        });
        $(".window").css(
            {
                height:h,
                width:"100%"
            }
        );
        $(".come-in").css(
            {
                height:h,
                width:"100%"
            }
        );
        $('.content-list').css(
            {
                height:h,
                width:w*$('.content-list .content').length
            });
        $('.content-list>.content').css({
            height:h,
            width:w
        })

    }
    getsize();//获取高度
//进入动画
    $(".come-in-logo").delay(2000).animate({
        top:0
    },1000);
    $(".come-in-tit").delay(2000).fadeIn(2000,function(){
        $(this).animate({
            top:0,
            opacity:1
        },1000)
    });
    $(".come-in-text").delay(4000).fadeIn(2000,function(){
        $(this).animate({
            top:0,
            opacity:1
        },1000)
    });
    $(".come-in").delay(6000).slideUp(2000,function(){
        onScroll = false
    });
    $(window).on("resize",function(){
        getsize()
    });
    //全屏滚动
    function addEvent(ele, type, listener) {
    if (ele.addEventListener) {
        ele.addEventListener(type, listener);
    } else {
        ele.attachEvent("on" + type, listener);
    }
}


    //滑动到指定页数
    function toPage() {
        onScroll = true;//节流阀为false可以滚动
        var h = $(window).height();
        var now = -pageindex * h;

        if(pageindex==0){
            $(".nav .point").removeClass("current").css({display:"none"}).eq(pageindex).css({
                left:"50%",
                top:45,
                display:"block"
            });
        }else {
            $(".nav .point").removeClass("current").css({display:"none"}).eq(pageindex-1).css({
                left:"50%",
                top:45,
                display:"block"
            })
        }

        $(".pagelist").animate({
            top: now
        }, 1000, function () {
            onScroll = false;//动画结束后改变状态可以活动
        });
    }
    //上下滑动
        var pagedown = function() {

            if (pageindex== len - 1){
                return;
            }
            pageindex++;
            toPage(pageindex);
        };
        var pageup = function() {
            if (pageindex == 0) {
                return;
            }
            pageindex--;
            toPage(pageindex);
        };
        function mouseWheel(ev) {
            getsize();//动态获取宽高
            var oEvent = window.event || ev;
            if(onScroll)return;
            if (oEvent.detail) {
                if (oEvent.detail > 0) {

                    pagedown()
                } else {
                    pageup()
                }
            } else if (oEvent.wheelDelta) {
                if (oEvent.wheelDelta > 0) {
                    pageup();
                } else {
                    pagedown()
                }
            }
        }
    addEvent(window,"mousewheel",mouseWheel)
    //点击ban上的next下一页
    $(".banner .next").click(function(){
        pagedown()
    });
    //hover时点点飞出来有点bug点击nav时去往固定的那一页
    $(".nav li").click(function(){
        console.log($(this).index());
        if($(this).index()==4||$(this).index()==5){
            pageindex = 4;//这里这个判断布局不一样会有所不同我这里的意思是点击返回首页和客服时到最后一页
        }else {
            pageindex = $(this).index()+1;
        }
        toPage()
    }).hover(function(){//hover上去点点飞出来 嘻嘻
        $(".nav .point").eq($(this).index()).css({
            display:"block"
        }).animate({
            left:"50%",
            top:45
        },500)
    },function(){
        $(".nav .point").eq($(this).index()).css({
            display:"none",
            top:0,
            left:0
        })
    });
    //闪烁效果
    var startimer = null;
    clearTimeout(startimer);
    startimer = setInterval(function(){
        $(".worth .outimg").fadeIn(1000,function(){
            $(this).fadeOut(1000);
        })
    },2000);


});
//第二屏左右滑动
$(function(){
    var page = 0;
    var len = $(".content-list .content").length;
    var w = $(window).width();
    function movepage(){
        var now  = -w*page;
        $(".content-list").animate({
            left: now
        }, 1000);
    }
    function nextpage(){
        if(page==len-1)return;
        page++;
        movepage(page)
    }
    function prevpage(){
        if(page==0)return;
        page--;
        movepage(page)
    }

    $('.summary .next').click(function(){
        nextpage()

    });
    $('.summary .prev').click(function(){
        prevpage()

    })
});
//第四屏左右选项卡
$(function(){
    //蓝色的线飞出来
$(".profuct .left-btn").click(function(){
    $(".profuct .right-btn .line").animate({
        left:-78
    },1000)
    $(".profuct .left-btn .line").animate({
        left:0
    })
    $(" .text-list").animate({
        left:0
    },1000)
})
    $(".profuct .right-btn").click(function(){
        $(".profuct .right-btn .line").animate({
            left:0
        },1000)
        $(".profuct .left-btn .line").animate({
            left:78
        })
        $(".profuct .text-list").animate({
            "left":-900
        },1000)
    })
});


