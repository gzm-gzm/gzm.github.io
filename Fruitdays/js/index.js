$(function () {
    app.init();
});
app={
    init:function () {
       /* this.get_hover();//设置鼠标经过的效果
        this.get_click();//设置鼠标经过的效果*/
        this.get_banner();//banner
        this.get_list();//列表
        this.get_top();//返回顶部
    },
  /*  get_hover:function () {//top鼠标经过
        $(".top_right3_wrap").hover(function () {
            $(this).addClass("top_right3_wrap_show");
            $(".top_right3_show").show()
        },function () {
            $(this).removeClass("top_right3_wrap_show")
            $(".top_right3_show").hide()
        });

        $(".top_right4_wrap").hover(function () {//top鼠标经过
            $(".top_right4").addClass("top_right4_show_hide");
            $(".top_right4_show").show()
        },function () {
            $(".top_right4").removeClass("top_right4_show_hide")
            $(".top_right4_show").hide()
        })
    },//设置鼠标经过的效果
    get_click:function () {//鼠标点击的时候

        //导航
        $(".nav>ul>li").click(function () {
            $('.move em').animate({'left': $(this).position().left}, 200)
        })
        //搜索
        $(".input_search input").click(function () {
            $(".input_show").slideDown()
        });
        $(".input_show > ul > li").click(function () {
            $(".input_search input").val($(this).html());
            $(".input_show").hide()
        })
    },//设置鼠标点击的时候的事件(导航和搜索框)*/
    get_banner:function () {
        $.post('json/list.json', function (banner) {

            var arr = [];//申明数组
            obj = banner;//json的对象等于json的值

            arr = obj.banner;

            for (var i = 0; i < arr.length; i++) {
                var obj_banner = arr[i];
                var str = "<li class='carousel-item'><a href='javascript:;'><img src=" + obj_banner.img + "/></a> </li>";
                $(".carousel-inner").append(str);
            }
            //slide
            $("#carousel_1").FtCarousel();
        })
    },//banner
    get_list:function () {
        $.get('json/list.json', function (listdata) {//先获取json的路径,然后在方法里面传值(json头部里面写的是什么 这里面传值就穿什么)
            var arr = [];//先申明一个数组
            obj = listdata;//json的对象等于json的值

            arr = obj.listdata;//获取这个数组的对象
            for (var i = 0; i < arr.length; i++) {
                var obj1 = arr[i];//obj1=arr的索引值
                var str = "<li><a href='javascript:;'><img src=" + obj1.img + "/></a></li>";//li里面创建a标签 并且在a标签里面创建img标签 并且在img标签里面 利用字符串拼接 让img的src等于json相对应的值
                $(".list ul").append(str);//将li添加到ul里面
            }
        })

        $.get('json/list.json', function (list_pro_1) {//先获取json的路径,然后在方法里面传值(json头部里面写的是什么 这里面传值就穿什么)
            var arr = [];//先申明一个数组
            obj = list_pro_1;//json的对象等于json的值
            console.log(obj)//获取到了这个状态码 并且获取到了json的对象
            arr = obj.list_pro_1;//获取这个数组的对象
            for (var i = 0; i < arr.length; i++) {
                var li_pro = arr[i];//obj1=arr的索引值
                var str = "<li><a href='javascript:;'>" +
                    "<div class='img'><img src=" + li_pro.img + ">" +
                    "</div>" +
                    "<div class='title'>" +
                    "<p class='pro_list_title'>" + li_pro.pro_list_title + "</p>" +
                    "</div>" +
                    " <p class='pro_list_title'>" + li_pro.Price + "</p>" +
                    "</li></a>";//li里面创建a标签 并且在a标签里面创建img标签 并且在img标签里面 利用字符串拼接 让img的src等于json相对应的值
                $(".pro_list_1 ul").append(str);//将li添加到ul里面

            }
        })

        $.get('json/list.json', function (list_pro_2) {//先获取json的路径,然后在方法里面传值(json头部里面写的是什么 这里面传值就穿什么)
            var arr = [];//先申明一个数组
            obj = list_pro_2;//json的对象等于json的值
            console.log(obj)//获取到了这个状态码 并且获取到了json的对象
            arr = obj.list_pro_2;//获取这个数组的对象
            for (var i = 0; i < arr.length; i++) {
                var li_pro = arr[i];//obj1=arr的索引值
                var str = "<li><a href='javascript:;'>" +
                    "<div class='img'><img src=" + li_pro.img + ">" +
                    "</div>" +
                    "<div class='title'>" +
                    "<p class='pro_list_title'>" + li_pro.pro_list_title + "</p>" +
                    "</div>" +
                    " <p class='pro_list_title'>" + li_pro.Price + "</p>" +
                    "</li></a>";//li里面创建a标签 并且在a标签里面创建img标签 并且在img标签里面 利用字符串拼接 让img的src等于json相对应的值
                $(".pro_list_2 ul").append(str);//将li添加到ul里面

            }
        })


    },//列表
    get_top:function () {
        $(window).scroll(function () {
            $(".flex>a:nth-child(3)").click(function () {
                $('html ,body').animate({scrollTop: 0}, 0);
                return false;
            })
        })
    }//返回顶部
}

