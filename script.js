$(document).ready(function() {
    //初始化
    $(`#list1`).hide()
    $(`#list2`).hide()
    var alpha = 0
    var scl = 0
    var timer = setInterval(changepic, 5000)
    $(`#icon_point ul li img:eq(0)`).css("opacity", "100%")
    var pages = 1
        // 初始化结束


    // 换壁纸函数
    function changepic() {
        $(`#icon_point ul li img`).css("opacity", "30%")
        if (pages < 4) {
            pages++
        } else {
            pages = 1
        }
        $(`#pic${pages-1}`).fadeOut(500)
        $(`#pic${pages}`).fadeIn(500)

        $(`#icon_point ul li img:eq(${pages-1})`).css("opacity", "100%")
    }
    // 换壁纸函数结束


    // 滚动监听

    $(window).scroll(function() {
            scl = $(document).scrollTop() //滚动参数
            console.log(scl)
            if (scl >= 0 && scl <= 500) {

            }
            // 滚到到区域变化
            if (scl >= 900) {
                $("#header-bar").css("position", "fixed")
                $("#menu-list ul").css({ "top": "68.13px" })
            } else {
                $("#header-bar").css("position", "relative")
                $("#menu-list ul").css({ "top": "0" })
            }
            if (scl >= 500) {
                $(".s-menu").css("top", "39px")
                $(".s-menu").css("box-shadow", "4px 2px 8px rgba(44, 62, 80, 5)")
            } else {
                $(".s-menu").css("top", "-191px")
                $(".s-menu").css("box-shadow", "4px -2px 8px rgba(44, 62, 80, 5)")
            }
            if (scl >= 1000) {
                $("#side-tools").fadeIn()
            } else {
                $("#side-tools").fadeOut()
            }

            // 滚到到区域变化结束
            if (scl < 1033) {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(0)").css("color", "tomato")
            } else if (scl >= 1033 && scl < 2186) {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(1)").css("color", "tomato")
            } else if (scl >= 2186 && scl < 2371) {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(2)").css("color", "tomato")
            } else {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(3)").css("color", "tomato")
            }

            // 菜单栏滚动渐变动画
            alpha = scl / $(window).height();
            $("#header-bar").css("background-color", `rgba(44,62,80,${alpha-0.2})`)
            $(".s-menu li").css("background-color", `rgba(44,62,80,${alpha-0.2})`)
            $("#center").css("opacity", `${alpha}`)

            // 菜单栏滚动渐变动画结束

            $("#read p").text(` ${parseInt((scl/ $(document).height()) * 100+29)}%`)

        })
        // 滚动监听结束


    // 小菜单选择效果
    $(".s-menu li").mouseenter(function() {
        if (scl >= 500) {
            $(this).css("background-color", `rgba(44,62,80,${alpha-0.4})`)
        } else { $(this).css("background-color", `rgba(44,62,80,${alpha})`) }

    })
    $(".s-menu li").mouseleave(function() {
            $(this).css("background-color", `rgba(44,62,80,${alpha-0.2})`)
        })
        // 小菜单选择效果结束


    // 菜单栏小标签show
    $(`.f-menu:eq(1)`).mouseenter(function() {
        $("#list1").fadeIn()
    })
    $(`.f-menu:eq(3)`).mouseenter(function() {
        $("#list2").fadeIn()
    })
    $("#main").mouseenter(function() {
        $("#list1").fadeOut()
        $("#list2").fadeOut()
    })
    $("#blank").mouseenter(function() {
        $("#list1").fadeOut()
        $("#list2").fadeOut()
    })
    $(".f-menu:eq(0)").mouseenter(function() {
        $("#list1").fadeOut()
        $("#list2").fadeOut()
    })
    $(".f-menu:eq(2)").mouseenter(function() {
        $("#list1").fadeOut()
        $("#list2").fadeOut()
    })
    $(".f-menu:eq(4)").mouseenter(function() {
            $("#list1").fadeOut()
            $("#list2").fadeOut()
        })
        // 菜单栏小标签show结束

    $("#passage").click(function() {
        $('html,body').animate({ scrollTop: "1033px" });
        $("#list1").fadeOut()
    })
    $("#top").click(function() {
        $('html,body').animate({ scrollTop: "0px" });
    })
    $("#index").click(function() {
        $('html,body').animate({ scrollTop: "0px" });
    })

    $("#else").click(function() {
        $('html,body').animate({ scrollTop: "2186px" });
    })
    $("#about").click(function() {
        $('html,body').animate({ scrollTop: "2386px" });
    })
    $("#logi").click(function() {
        $('html,body').animate({ scrollTop: "1226px" });
    })
    $("#login input:eq(0)").click(function() {
        if ($(this).val() == "username") {
            $(this).val("")
        }
    })
    $("#login input:eq(1)").click(function() {
        if ($(this).val() == "password") {
            $(this).val("")
        }
    })
    $("#sbm").click(function() {
        let msg = {
            username: $("#login input:eq(0)").val(),
            password: $("#login input:eq(1)").val()
        }
        $.post("http://127.0.0.1:9696", msg, function(res, status) {
            $("#sbm").text("LOG OUT")
            $(".ipt").hide()
            $("#logi").fadeOut()
            $(".logst").html(`username: ${res.username}<br><br>Welcome`)
            $(".logst").css("margin-top", "16px")
        })
    })
    $("#x").click(function() {
        $('#ad').fadeOut()
    })

})