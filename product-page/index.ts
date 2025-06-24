declare const Swiper: any;
declare const TCPlayer: any;
declare const layer: any;
declare const $: any;
declare const layui: any;

import "./index.less";

$(function (this: HTMLElement) {
    new Swiper(".swiper-hours24", {
        direction: "vertical",
        loop: true,
        // 循环模式选项
        autoplay: {
            delay: 3e3,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 0
    });
    $("#title > li").hover(function (this: HTMLElement) {
        $(this).addClass("active").siblings().removeClass("active");
        $(".boxwrap").find(".contents").eq($(this).index()).find(".info-list").find("a.more").attr("href", $(this).find("a").attr("href"));
        $(".boxwrap").find(".contents").eq($(this).index()).css("display", "flex").siblings(".contents").css(
            "display",
            "none"
        );
    }, function (this: HTMLElement) {
    });
    $("#school-title > li").hover(function (this: HTMLElement) {
        if ($(this).index() != $("#school-title li").length - 1) {
            $(this).addClass("active").siblings().removeClass("active");
        }
        $(".school-con").find(".school-list").eq($(this).index()).css("display", "flex").siblings(".school-list").css(
            "display",
            "none"
        );
    }, function (this: HTMLElement) {
    });
    $("#cityExpress > li").hover(function (this: HTMLElement) {
        $(this).addClass("active").siblings().removeClass("active");
        $(".city-express-wrap").find(".contents").eq($(this).index()).css("display", "flex").siblings(".contents").css(
            "display",
            "none"
        );
    }, function (this: HTMLElement) {
    });
    new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        // 循环模式选项
        autoplay: {
            delay: 3e3,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        // 如果需要分页器
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        spaceBetween: 0
    });
    if ($(".swiper-banner-list").find(".swiper-slide").length > 3) {
        new Swiper(".swiper-banner-list", {
            direction: "vertical",
            loop: true,
            autoplay: {
                delay: 3e3,
                disableOnInteraction: false
            },
            slidesPerView: 4,
            spaceBetween: 0
        });
    } else {
        $(".swiper-banner-list").addClass("noswiper");
    }
    $(".title").on("click", "button", function (this: HTMLElement) {
        var flag2 = $(this).hasClass("s");
        if (flag2) {
            $(this).removeClass("s").find("span").text($(this).find("a.c").text());
            $(this).closest("li").find(".list").animate({ "height": 0 }, 800);
        } else {
            $(this).addClass("s").find("span").text($(this).find("a.g").text());
            $(this).closest("li").find(".list").animate({ "height": $(this).closest("li").find(".wrap").height() }, 800);
        }
    });
    var previewLength = $("img[preview]").length;
    $.each($("img[preview]"), function (index: number, item: HTMLElement) {
        $(item).attr("index", index);
    });
    var previewIndex = 0;
    $(document).on("click", "img[preview]", function (this: HTMLElement) {
        var src = $(this).attr("preview");
        $(".img-mask img").attr("src", src);
        $(".img-mask").addClass("show");
        previewIndex = Number($(this).attr("index"));
    });
    $(document).on("click", ".close-img-mask", function (this: HTMLElement) {
        $(".img-mask").removeClass("show");
        $(".img-mask img").attr("src", "");
    });
    $(".img-mask").on("click", function (this: HTMLElement, e: MouseEvent) {
        if (e.target == this) {
            $(this).removeClass("show");
            $(".img-mask img").attr("src", "");
        }
    });
    $(".arr").on("click", "span", function (this: HTMLElement) {
        var img: any = "";
        $(".img-mask img").attr("src", "");
        if ($(this).hasClass("left")) {
            previewIndex = previewIndex - 1;
        } else if ($(this).hasClass("right")) {
            previewIndex = previewIndex + 1;
        }
        if (previewIndex < 0) {
            previewIndex = previewLength - 1;
        } else if (previewIndex > previewLength - 1) {
            previewIndex = 0;
        }
        img = $("img[preview][index='" + previewIndex + "']");
        $(".img-mask img").attr("src", img.attr("preview"));
    });
    $("#fullyear").text((/* @__PURE__ */ new Date()).getFullYear());
    new Swiper(".case_swiper", {
        effect: "coverflow",
        centeredSlides: true,
        spaceBetween: -80,
        slidesPerView: 2,
        loop: true,
        autoplay: 500,
        coverflowEffect: {
            rotate: 0,
            stretch: 60.8,
            depth: 80,
            modifier: 3,
            slideShadows: true
        }
    });
    if ($(".video_swiper").find(".swiper-slide").length > 4) {
        new Swiper(".video_swiper", {
            loop: true,
            slidesPerView: 4,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    }
    try {
        var player = TCPlayer("swipervideo", {});
        player.src($("#swipervideo").attr("value"));
        player.poster($("#swipervideo").attr("poster2"));
    } catch (err) {
    }
    $("#videos").on("click", "img[value]", function (this: HTMLElement) {
        var img = $(this).attr("src");
        var value = $(this).attr("value");
        var name = $(this).attr("alt");
        player.src(value);
        player.poster(img);
        $(this).closest("#videos").siblings("p").text(name);
        setTimeout(function (this: HTMLElement) {
            player.play();
        }, 300);
    });
    var player2 = TCPlayer("mask_video", {});
    $("select").change(function (this: HTMLElement) {
        $(this).css("color", "#333");
    });
    $(".mask .wrap>img").on("click", function (this: HTMLElement) {
        $(".mask").hide();
        player2.pause();
    });
    $(document).on("click", ".showTk", function (this: HTMLElement) {
        $(".mask_form").addClass("show");
    });
    $(document).on("click", ".close", function (this: HTMLElement) {
        $(".mask_form").removeClass("show");
        $(".error-tips").html("");
        $(this).parents(".mask_form").find("form")[0].reset();
    });
    $("#go-top").on("click", function (this: HTMLElement) {
    });
    var flag = true;
    if ($(".school").length) {
        $(window).on("scroll", function (this: HTMLElement) {
            var st = $(window).scrollTop();
            var wh = $(".school").offset().top;
            if (st > wh - 48 && flag && !$(".img-mask").hasClass("show")) {
                $(".showTk").click();
                flag = false;
            }
        });
    }
    var inputs = [
        {
            name: "name",
            message: "请输入学生姓名"
        },
        {
            name: "mobile",
            message: "请输入家长手机号"
        },
        {
            name: "grade",
            message: "请选择就读年级"
        },
        {
            name: "want_school",
            message: "意向学校"
        },
        {
            name: "email",
            message: "您的邮箱"
        }
    ];
    $(".submit").on("click", function (this: HTMLElement) {
        var form = $(this).closest("form");
        var errors: any = [];
        var msg = inputs.reduce(function (acc, input) {
            var val = form.find('[name="'.concat(input.name, '"]')).val();
            if (!val) {
                errors.push(input.message);
            }
            return errors[0];
        }, "");
        if (msg) {
            layer.msg(msg);
        } else {
            $.ajax({
                url: "".concat(form[0].action, "&t=").concat(Math.random().toString()),
                type: form[0].method,
                dataType: "JSON",
                data: form.serialize(),
                success: function (res: any) {
                    if (res.status == 1) {
                        $(".mask_form").removeClass("show");
                        layer.msg("您已报名成功，谢谢您的参与！");
                        form[0].reset();
                    } else {
                        layer.msg(res.info);
                    }
                },
                error: function (this: HTMLElement) {
                    layer.msg("报名失败，请稍后再试");
                }
            });
        }
        return false;
    });
    $(".contact ul").hover(function (this: HTMLElement) {
        $(".right-fixed-nav").hide();
    }, function (this: HTMLElement) {
        $(".right-fixed-nav").show();
    });
    layui.use("form", function (this: HTMLElement) {
        var form = layui.form;
        form.on("select(provinceid)", function (value: any) {
            var provinceid = value.value;
            $.ajax({
                url: "/indexPhp/api.php?op=api&do=getCity",
                type: "GET",
                data: {
                    provinceid
                },
                success: function (res: any) {
                    $("select[name='cityid']").html(res);
                    form.render();
                },
                error() {
                }
            });
        });
        form.render();
    });
    if ($(".banner").length) {
        new Swiper(".banner", {
            autoplay: true,
            //可选选项，自动滑动
            loop: true,
            pagination: {
                el: ".banner-swiper-pagination"
            }
        });
    }
    var applyFlag = true;
    $(document).on("click", ".submitdata", function (this: HTMLElement, e: MouseEvent) {
        e = e || window.event;
        e.preventDefault();
        var form = $(this).parents("form");
        var error = form.find(".error-tips");
        error.html("");
        var btnTxt = $(this).html();
        var result = false;
        var self = this;
        var con = [];
        form.find("input, select").each(function (this: HTMLElement) {
            result = check(this);
            if ($(this).attr("mark") && $(this).val()) {
                con.push(($(this).attr("mark") == "mark" ? "" : $(this).attr("mark") + ":") + $(this).val());
            }
            return result;
        });
        var content = form.serialize();
        if (result && applyFlag) {
            applyFlag = false;
            $.ajax({
                url: "/index.php?m=activity&c=index&a=ajax_activity_baoming&t=" + Math.random(),
                type: "POST",
                dataType: "json",
                data: content,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    "X-XXS-Protection": "1;mode=block",
                    "X-Frame-Options": "deny"
                },
                success: function (data: any) {
                    if (data.status == 1) {
                        $(".mask").hide();
                        $(".readschool").hide();
                        form[0].reset();
                        layer.open({
                            content: "您已预约成功，谢谢您的参与！",
                            skin: "msg",
                            time: 3e3
                            //3秒后自动关闭
                        });
                    } else {
                        layer.open({
                            content: data.info,
                            skin: "msg",
                            time: 3e3
                            //3秒后自动关闭
                        });
                    }
                    applyFlag = true;
                    $(self).html(btnTxt);
                },
                error: function (this: HTMLElement) {
                    applyFlag = true;
                    $(self).html(btnTxt);
                    layer.open({
                        content: "预约失败，请稍后再试",
                        skin: "msg",
                        time: 3e3
                        //3秒后自动关闭
                    });
                }
            });
        }
    });
    var dataReg: any = {
        m: /^[1][0-9]{10}$/
    };
    function check(element: HTMLElement) {
        var error = $(element).parents("form").find(".error-tips");
        var datatype = $(element).attr("datatype");
        var value = $(element).val();
        if (!value && $(element).attr("nullmsg")) {
            layer.open({
                content: $(element).attr("nullmsg"),
                skin: "msg",
                time: 3e3
                //3秒后自动关闭
            });
            return false;
        }
        if (datatype && !dataReg[datatype].test(value)) {
            layer.open({
                content: $(element).attr("errormsg"),
                skin: "msg",
                time: 3e3
                //3秒后自动关闭
            });
            return false;
        }
        error.html("");
        $(element).parents(".item").removeClass("error");
        return true;
    }
    var is_getcode = false;
    $(".getcode").on("click", function (this: HTMLElement) {
        var _this = $(this);
        if (is_getcode) return;
        var telnum = _this.closest("form").find("input[name='tel']");
        if (!check(telnum)) {
            return false;
        }
        var val = telnum.val();
        val = $.trim(val);
        is_getcode = true;
        $.ajax({
            url: "/index.php?m=activity&c=index&a=send_mobile_yzm&t=1616380473",
            data: { tel: val },
            type: "POST",
            dataType: "json",
            success: function (this: HTMLElement) {
                _this.css("background", "#ccc");
                var i = 60;
                var t = setInterval(function (this: HTMLElement) {
                    i--;
                    if (i == 0) {
                        clearInterval(t);
                        _this.css("background", "#e5e5e5").html("获取验证码");
                        is_getcode = false;
                        return;
                    }
                    var text = i + "秒后重试";
                    _this.html(text);
                }, 1e3);
                is_getcode = false;
            },
            error: function (this: HTMLElement) {
                layer.open({
                    content: "验证码获取失败，请稍后再试",
                    skin: "msg",
                    time: 3e3
                    //3秒后自动关闭
                });
                is_getcode = false;
            }
        });
    });
    $(document).on("click", ".showtk", function (this: HTMLElement) {
        $(".box-alert").show();
    });
    $(document).on("click", "#close", function (this: HTMLElement) {
        $(this).closest(".box-alert").hide();
    });
    layui.use(["form", "layer"], function (this: HTMLElement) {
        layui.form;
        layui.layer;
        var laydate = layui.laydate;
        laydate.render({
            elem: "#date",
            type: "month"
        });
    });
    $(document).on("click", ".kefu", function (this: HTMLElement) {
        open_kefu();
    });
    function open_kefu() {
        var url = "https://p.qiao.baidu.com/cps/chat?siteId=17703851&userId=33651932&siteToken=25b3e7ac69f5b12c1fc2e0367d02eb0d";
        var name;
        var iWidth = 800;
        var iHeight = 700;
        var iTop = (window.screen.height - 30 - iHeight) / 2;
        var iLeft = (window.screen.width - 10 - iWidth) / 2;
        window.open(url, name, "height=" + iHeight + ",,innerHeight=" + iHeight + ",width=" + iWidth + ",innerWidth=" + iWidth + ",top=" + iTop + ",left=" + iLeft + ",toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no");
    }
    var player = TCPlayer("player-container-id", {});
    var src = $("#player-container-id").attr("src");
    player.src(src);
    setTimeout(() => {
        $("#share").share({
            sites: ["wechat", "qq", "qzone", "weibo"]
        });
    }, 1e3);
    var shipinid = $("input[name=shipin_id]").val();
    var url = "/indexPhp/index.php?m=video&c=index&a=ajaxAddViews&shipinid=" + shipinid + "&t=" + Math.random();
    $.post(url, { "do": 1 }, function (res: any) {
        var res = JSON.parse(res);
    });
    $(".container-video").on("click", ".thumbs", function (this: HTMLElement) {
        $(this).hasClass("active");
        var id = $("input[name=shipin_id]").val();
        var user_id = $("input[name=user_id]").val();
        var like_count = $(this).attr("value");
        $("input[name=is_like]").val();
        var video_likes_active_id = "#video_likes_active_" + id;
        $.ajax({
            type: "post",
            url: "/indexPhp/index.php?m=video&c=index&a=like",
            data: { "id": id, "user_id": user_id, "like_count": like_count },
            dataType: "json",
            success: function (res: any) {
                if (res == 1) {
                    like_count = Number(like_count) + 1;
                    $("#likes_count").html(like_count);
                    $(".container-video .thumbs").attr("value", like_count);
                    $(".container-video .thumbs").addClass("active");
                    $(video_likes_active_id).addClass("active");
                }
            }
        });
    });
    $(".container-video .box").on("click", "button", function (this: HTMLElement) {
        $(this).hasClass("active");
        var id = $("input[name=shipin_id]").val();
        var user_id = $("input[name=user_id]").val();
        var shipin_user_id = $("input[name=shipin_user_id]").val();
        $.ajax({
            type: "post",
            url: "/indexPhp/index.php?m=video&c=index&a=follow",
            data: { "id": id, "user_id": user_id, "shipin_user_id": shipin_user_id },
            dataType: "json",
            success: function (res: any) {
                if (res == 1) {
                    $(".container-video .box button").addClass("active");
                    $(".container-video .box button").html("已关注");
                } else if (res == 2) {
                    $(".container-video .box button").removeClass("active");
                    $(".container-video .box button").html("<i></i>关注");
                } else if (res == 3) {
                    window.location.href = "/login.html";
                }
            }
        });
    });
    $(".search-hover").on("click", "li", function (this: HTMLElement) {
        $("#searchContent").text($(this).text());
        $("#searchid").val($(this).attr("value"));
        $(".search-hover").find(".submenu").hide();
    });
    $("#searchbtn").click(function (this: HTMLElement) {
        var txt = $("#q").val().replace(/(^\s*)|(\s*$)/g, "");
        if (txt == "输入搜索内容" || txt == "请输入搜索内容" || txt == "") {
            return false;
        }
    });
    function isShowMenu() {
        var ad_height = $("#pc_ad_top").height() || 0;
        var top = $(window).scrollTop();
        var position = top > $(".bar-header").height() + $(".bar-title").height() + ad_height ? "fixed" : "initial";
        $(".iedu-menu-box").css({
            position
        });
    }
    $(document).on("scroll", function (this: HTMLElement) {
        isShowMenu();
    });
    isShowMenu();
    $(".parentMenu").hover(function (this: HTMLElement) {
        $(this).find(".submenu").show();
    }, function (this: HTMLElement) {
        $(this).find(".submenu").hide();
    });
    function getcookieval(objname: any) {
        var arrstr = document.cookie.split("; ");
        for (var i = 0; i < arrstr.length; i++) {
            var temp = arrstr[i].split("=");
            if (temp[0] == objname)
                return decodeURI(unescape(temp[1]));
        }
    }
    var live_username = getcookieval("live_username");
    if (live_username) {
        var userUrl = "//www.ieduchina.com/usercenter/index/index.html";
        var html = "<p class='logout'><span><a rel='nofollow' target='_blank' href='" + userUrl + "'> " + live_username + " </a></span><span> | </span><a href='//www.ieduchina.com/logout.html'>退出</a></p>";
        $("#login-before").html(html);
    }
});