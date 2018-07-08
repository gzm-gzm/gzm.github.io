/*面向对象的写法*/
$(function () {
    app_detalis.init()
});
app_detalis = {
    init: function () {
        this.get_remo();//加的效果
        this.get_add();//减的效果
    },
    //加的效果
    get_remo: function () {
        $(".add").click(function () {

            var n = $(this).prev().html();
            var num = parseInt(n) + 1;
            if (num == 0) {
                return;
            }
            $(this).prev().html(num);
        });
    },
    //减的效果
    get_add: function () {
        $(".jian").click(function () {
            var n = $(this).next().html();
            var num = parseInt(n) - 1;
            if (num == 0) {
                return
            }
            $(this).next().html(num);
        });
    }
}



