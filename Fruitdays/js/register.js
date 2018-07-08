// 面向对象的写法
$(function () {
    register.init();
});

var user_Boolean = false;//用户名
var password_Boolean = false;//密码
var varconfirm_Boolean = false;//确认密码
var emaile_Boolean = false;//邮箱
var Mobile_Boolean = false;//手机

register = {
    init: function () {
        this.reg_user();//用户名
        this.reg_password();//密码
        this.reg_confirm();//确认密码
        this.reg_email();//邮箱
        this.reg_mobile();//手机
        this.judge();//判断所有输入的是否正确
        /* this.reg_msg();*/
    },
    //用户名
    reg_user: function () {

        $('.reg_user').blur(function () {
            if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())) {
                $('.user_hint').html("✔").css("color", "green");
                user_Boolean = true;
            } else {
                $('.user_hint').html("×").css("color", "red");
                user_Boolean = false;
            }
        });
    },
    //密码
    reg_password: function () {
        $('.reg_password').blur(function () {
            if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())) {
                $('.password_hint').html("✔").css("color", "green");
                password_Boolean = true;
            } else {
                $('.password_hint').html("×").css("color", "red");
                password_Boolean = false;
            }
        });
    },
    //确认密码
    reg_confirm:function () {
        $('.reg_confirm').blur(function () {
            if (($(".reg_password").val()) == ($(".reg_confirm").val())) {
                $('.confirm_hint').html("✔").css("color", "green");
                varconfirm_Boolean = true;
            } else {
                $('.confirm_hint').html("×").css("color", "red");
                varconfirm_Boolean = false;
            }
        });
    },
    //邮箱
    reg_email:function () {
        $('.reg_email').blur(function () {
            if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())) {
                $('.email_hint').html("✔").css("color", "green");
                emaile_Boolean = true;
            } else {
                $('.email_hint').html("×").css("color", "red");
                emaile_Boolean = false;
            }
        });
    },
    //手机
    reg_mobile:function () {
        $('.reg_mobile').blur(function () {
            if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())) {
                $('.mobile_hint').html("✔").css("color", "green");
                Mobile_Boolean = true;
            } else {
                $('.mobile_hint').html("×").css("color", "red");
                Mobile_Boolean = false;
            }
        });
    },
    //判断所有输入的是否正确
    judge:function () {
        $('.red_button').click(function () {
            /* if(user_Boolean && password_Boolea && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true){*/
            if (user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true) {
                /*$.get("http://60.205.181.47/myPHPCode3/register.php",function(){

                 })*/
                $.ajax({
                    url:"http://60.205.181.47/myPHPCode2/checkname.php",//接口
                    data:{regname:"zhangshan"},//注册的值
                    success:function(data){
                        alert(data);//提示是否可以注册
                    },
                    error:function(){
                        alert("error")
                    }
                })

                alert("注册成功");
            } else {
                alert("请完善信息");
            }
        });
    },

    //注册
    /*    red_button:function () {

     $(".red_button").click(function () {
     if(judge()==true){


     }




     })
     }*/


}







// click

