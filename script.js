$(document).ready(function() {
    //初始化
    $(`#list1`).hide()
    $(`#list2`).hide()
    var alpha = 0
    var scl = 0
    var logstatus = 0
    var ifpassage = 0
    var timer = setInterval(changepic, 5000)
    $(`#icon_point ul li img:eq(0)`).css("opacity", "100%")
    var pages = 1
    if (localStorage.getItem("account") != null) {
        logstatus = 1
        $("#sbm").text("EDIT")
        $("#reg").text("POST")
        $("#inpt").hide()
        $("#logi").hide()
        $("#logout").show()
        $(".logst").html(`username: ${localStorage.getItem("account")}<br><br>Welcome`)
        $(".logst").css("margin-top", "16px")
        $("#sbm").click(function() {
            $('html,body').animate({ scrollTop: "950px" });
            $("#moren").hide()
            $("#regi").hide()
            $("#post-passage").hide()
            $("#post").hide()
            $("#edit").css("display", "inline-block")
        })
        $("#reg").click(function() {
            $('html,body').animate({ scrollTop: "950px" });
            $(editor)
            $("#moren").hide()
            $("#regi").hide()
            $("#post-passage").hide()
            $("#edit").hide()
            $("#post").css("display", "inline-block")
        })
    }
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
            if (ifpassage == 0) {
                if (scl < 930) {
                    $(".f-menu").css("color", "white")
                    $(".f-menu:eq(0)").css("color", "tomato")
                } else if (scl >= 930 && scl < 1200) {
                    $(".f-menu").css("color", "white")
                    $(".f-menu:eq(1)").css("color", "tomato")
                } else {
                    $(".f-menu").css("color", "white")
                    $(".f-menu:eq(2)").css("color", "   tomato")
                }
            }


            // 菜单栏滚动渐变动画
            alpha = scl / $(window).height();
            $("#header-bar-bg").css("opacity", `${alpha-0.2}`)
            $(".s-menu li").css("background-color", `rgba(44,62,80,${alpha-0.2})`)
            $("#center").css("opacity", `${alpha}`)
            if (scl < 900) {
                $(".bgimg").css("opacity", 1 - 0.3 * alpha)
            }

            // 菜单栏滚动渐变动画结束

            $("#read p").text(` ${parseInt((scl/ $(document).height()) * 100+37)}%`)

        })
        // 滚动监听结束

    $(".f-menu").mouseenter(function() {
        $(this).css("color", "rgb(248, 153, 136)")
    })

    $(".f-menu").mouseleave(function() {
        $(this).css("color", "white")
        if (ifpassage == 0) {
            if (scl < 930) {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(0)").css("color", "tomato")
            } else if (scl >= 930 && scl < 1200) {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(1)").css("color", "tomato")
            } else {
                $(".f-menu").css("color", "white")
                $(".f-menu:eq(2)").css("color", "   tomato")
            }
        } else {
            $(".f-menu").css("color", "white")
            $(".f-menu:eq(3)").css("color", "   tomato")
        }
    })

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
    $(`.f-menu:eq(3)`).mouseenter(function() {
        $("#list1").fadeIn()
        $("#list2").fadeOut()
    })
    $(`.f-menu:eq(2)`).mouseenter(function() {
        $("#list2").fadeIn()
        $("#list1").fadeOut()
    })
    $(".main").mouseenter(function() {
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
    $(".f-menu:eq(1)").mouseenter(function() {
        $("#list1").fadeOut()
        $("#list2").fadeOut()
    })

    // 菜单栏小标签show结束
    $(".f-menu").click(function() {
        $("#post").hide()
        $("#regi").hide()
        $("#edit").hide()
        $("#post-passage").hide()
        ifpassage = 0
        $("#moren").css("display", "inline-block")
    })
    $("#passage").click(function() {
        $('html,body').animate({ scrollTop: "950px" });
        $("#post-passage").css("display", "inline-block")
        ifpassage = 1
        $(refresh_passage)
        $(".f-menu").css("color", "white")
        $(".f-menu:eq(3)").css("color", "   tomato")
        $("#moren").hide()
        $("#list1").fadeOut()
    })
    $("#top").click(function() {
        $('html,body').animate({ scrollTop: "0px" });
    })
    $("#index").click(function() {
        $('html,body').animate({ scrollTop: "0px" });
    })

    $("#else").click(function() {
        $('html,body').animate({ scrollTop: "950px" });
    })
    $("#about").click(function() {
        $('html,body').animate({ scrollTop: "1302px" });
    })
    $("#logi").click(function() {
        $('html,body').animate({ scrollTop: "1178px" });
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
    $("#logout").click(function() {
        localStorage.clear()
    })
    $("#x").click(function() {
        $('#ad').fadeOut()
    })

    // network
    if (logstatus == 0) {
        $("#reg").click(function() {
            $('html,body').animate({ scrollTop: "950px" });
            $("#moren").hide()
            $("#post").hide()
            $("#edit").hide()
            $("#regi").css("display", "inline-block")
        })



        $("#sbm").click(function() {
            let msg = {
                account: $("#login input:eq(0)").val(),
                password: $("#login input:eq(1)").val()
            }
            $.post("http://127.0.0.1:9696/login", msg, function(res) {
                if (res.status == 1) {
                    localStorage.setItem("account", res.account);
                    $("#sbm").text("EDIT")
                    $("#reg").text("POST")
                    $("#inpt").hide()
                    $("#logi").hide()
                    $("#logout").show()
                    $(".logst").html(`username: ${res.account}<br><br>Welcome`)
                    $(".logst").css("margin-top", "16px")
                    $("#sbm").click(function() {
                        $('html,body').animate({ scrollTop: "950px" });
                        $("#moren").hide()
                        $("#regi").hide()
                        $("#post-passage").hide()
                        $("#post").hide()
                        $("#edit").css("display", "inline-block")
                    })
                    $("#reg").click(function() {
                        $('html,body').animate({ scrollTop: "950px" });
                        $(editor)
                        $("#moren").hide()
                        $("#regi").hide()
                        $("#post-passage").hide()
                        $("#edit").hide()
                        $("#post").css("display", "inline-block")
                    })
                } else {
                    alert(res.msg)
                }
            })
        })
    }
    $("#regi-subm").click(function() {
        let msg = {
            account: $("#regi input:eq(0)").val(),
            email: $("#regi input:eq(2)").val(),
            password: $("#regi input:eq(1)").val()
        }
        $.post("http://127.0.0.1:9696/register", msg, function(res, status) {
            alert("注册成功")
            location.replace("http://127.0.0.1:5500")
        })
    })


    //markdown editor area
    var editor = function() {
        editormd("editor", {
            width: "100%",
            height: "740px",
            path: "./nodeapp/node_modules/editor.md/lib/",
        })
    }
    $(editor)

    $("#markdown-button").click(function() {
            var doc = $("#editormd-textarea").text()
            doc += '<hr style="height : 0px ;border : 0px; border-bottom: 3px solid #6772e5;box-shadow: 4px 2px 8px #6772e5;">'
            var title = doc.split("\n")[0]
            console.log(doc);
            console.log(title)
            $.post("http://127.0.0.1:9696/pw", {
                "account": localStorage.getItem("account"),
                "title": title,
                "article": doc
            }, function(data, status) {
                console.log("发帖返回:", data)
                if (data.code == 1) {
                    alert(data.msg)
                } else {
                    alert("发帖失败")
                }

            })
        })
        //markdown print

    var print = function() {
        var testView = editormd.markdownToHTML("test-markdown-view", {
            htmlDecode: "style,script,iframe",
            emoji: true,
            taskList: true
                //codeFold: true,
        })
    }

    var article = 0
    var refresh_passage = function() {
        $.post("http://127.0.0.1:9696/pa", function(data, status) {
            var model = data.data.model
            for (i in model) {
                article = model[i].article
                console.log(article)
                $("#test-markdown-view").html($("#test-markdown-view").html() + `<textarea id="view-markdown-area" style="display:none;">${article}</textarea>`)
                $(print)
            }
        })
    }

})