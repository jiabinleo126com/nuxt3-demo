<template>
    <Header />
    <section>
        <component :is="Card" :data="data" />
    </section>
    <div class="form_1403">
        <div class="con">
            <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
                <h2>官方考试局将会给您发送更多考试信息</h2>
                <h3>登记后可进入官网立即报名</h3>
                <input class="mark" type="hidden" name="mark" value="国际教育网PC版_考试测评">
                <input class="want_school" type="hidden" name="want_school">
                <input class="ceping_id" type="hidden" name="xuexi_id">
                <input class="name" type="text" name="name" placeholder="姓名">
                <input class="mobile1" type="text" name="mobile" placeholder="手机">
                <select class="grade" name="grade" placeholder="年级">
                    <option value="" style="display:none">年级</option>
                    <option value="幼儿园">
                        幼儿园
                    </option>
                    <option value="一年级">
                        一年级
                    </option>
                    <option value="二年级">
                        二年级
                    </option>
                    <option value="三年级">
                        三年级
                    </option>
                    <option value="四年级">
                        四年级
                    </option>
                    <option value="五年级">
                        五年级
                    </option>
                    <option value="六年级">
                        六年级
                    </option>
                    <option value="七年级">
                        七年级
                    </option>
                    <option value="八年级">
                        八年级
                    </option>
                    <option value="九年级">
                        九年级
                    </option>
                    <option value="十年级">
                        十年级
                    </option>
                    <option value="十一年级">
                        十一年级
                    </option>
                    <option value="十二年级">
                        十二年级
                    </option>
                    <option value="大一">
                        大一
                    </option>
                    <option value="大二">
                        大二
                    </option>
                    <option value="大三">
                        大三
                    </option>
                    <option value="大四">
                        大四
                    </option>
                    <option value="学士">
                        学士
                    </option>
                    <option value="硕士">
                        硕士
                    </option>
                    <option value="博士">
                        博士
                    </option>
                </select>
                <input class="email" type="text" name="email" placeholder="邮箱">
                <button class="submit_1421" type="submit">提交</button>
            </form>
            <img src="//www.ieduchina.com/statics/xuexi/images/1e225adb.png" alt="" class="close_1409">
        </div>
    </div>
    <Footer />
</template>
<script setup>
import { useHead } from 'nuxt/app';
import { defineAsyncComponent, onMounted, reactive, watch } from 'vue';

const Card = defineAsyncComponent(() => import('~/components/xuexi/Card.vue'));

const data = reactive([
    {
        title: "入学考试",
        tip: "国际学校入学环节包括：报名、入学考试、入学面试、结果通知（录取/淘汰），其中入学考试主要基于测试孩子的学术能力（英文+数学），有自适应的机试（电脑/IPAD）或传统的笔试，以综合判断孩子的语言学术能力是否能达标国际学校的入学要求。<br>国际教育·升学中心，收集整理了top国际学校的历年真题，节选各项考核内容部分真题，让孩子和家长真实感受目前的考题形式，了解孩子的能力水平，以评估是否达国际学校入学要求。",
        list: [
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202505/681d9db5a2880.jpg",
                title: "香港中小学入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=xg&tgfrom=guanwang",
                id: "23"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bdb6e51ce8.png",
                title: "MAP入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=map&tgfrom=guanwang",
                id: "2"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb7d478fca.png",
                title: "CAT4入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=cat&tgfrom=guanwang",
                id: "3"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb83aae306.png",
                title: "英数入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=ys&tgfrom=guanwang",
                id: "5"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb8213bc9f.png",
                title: "中数入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=zs&tgfrom=guanwang",
                id: "4"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202405/664556d4ca645.png",
                title: "新加坡入学考试测评",
                path: "https://www.ieduchina.com/service/exam.html?type=xjp&tgfrom=guanwang",
                id: "22"
            }
        ]
    }, {
        title: "语言考试",
        list: [
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb863df94a.png",
                title: "雅思考试官方报名入口",
                path: "",
                id: "6"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb894b3cca.png",
                title: "托福考试官方报名入口",
                path: "",
                id: "7"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb8b94a44f.png",
                title: "多邻国考试官方报名入口",
                path: "",
                id: "8"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb8ece65c9.png",
                title: "SAT考试官方报名入口",
                path: "",
                id: "9"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb91251492.png",
                title: "GRE考试官方报名入口",
                path: "",
                id: "10"
            }
        ]
    }, {
        title: "国际考试",
        list: [
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb95c00469.png",
                title: "A-LEVEL剑桥考试局官方入口",
                path: "",
                id: "11"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb991947d8.png",
                title: "A-LEVEL 爱德思考试局官方入口",
                path: "",
                id: "12"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bb9b8841d9.png",
                title: "A-LEVEL AQA考试局官方入口",
                path: "",
                id: "13"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bba63aaffd.png",
                title: "IB考试官方报名入口",
                path: "",
                id: "14"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bba8a5df21.png",
                title: "AP考试官方报名入口",
                path: "",
                id: "15"
            },
            {
                image: "https://zhaosheng.ieduchina.com/Upload/File/202309/650bbaa5c72bd.png",
                title: "DSE考试官方报名入口",
                path: "",
                id: "16"
            }
        ]
    }
])

onMounted(() => {
    layui.use(["layer"], function () {
        var layer = layui.layer;
        var btn = null;
        $(".form_1403").on("click", ".close_1409", function () {
            $(".form_1403").removeClass("show");
        });
        var inputs = [
            {
                class: "name"
            },
            {
                class: "mobile1"
            },
            {
                class: "grade"
            },
            {
                class: "want"
            }, {
                class: "email",
                test: /@/
            }
        ];
        function msgfun(cls) {
            return (cls == "grade" ? '请选择' : "请输入") + $(".".concat(cls)).attr("placeholder");
        }
        var mark = $(".mark").val();
        $(document).on("click", "button.submit_1421", function (e) {
            e.preventDefault();
            var forms = $(this).closest("form");
            var errors = [];
            var msg = inputs.reduce(function (_acc, input) {
                var val = forms.find(".".concat(input.class)).val() + "";
                if (!val) {
                    errors.push(msgfun(input.class));
                }
                else if (input.test) {
                    if (!input.test.test(val)) {
                        errors.push("邮箱格式不正确");
                    }
                }
                return errors[0];
            }, "");
            if (msg) {
                layer.msg(msg);
                return false;
            }
            // $(".mark").val(mark + "%%%\u5E74\u9F84\uFF1A".concat($(".want").val()));
            $.ajax({
                url: forms[0].action,
                type: forms[0].method,
                data: forms.serialize(),
                dataType: "json",
                success: function (res) {
                    if (res.status == 1) {
                        if (res.url) {
                            layer.msg("正在加载网址，需耐心等待");
                            setTimeout(function () {
                                window.open(res.url);
                            }, 2000);
                            setTimeout(function () {
                                window.location.reload();
                            }, 2800);
                        }
                    }
                    else {
                        layer.msg(res.info);
                    }
                },
                error: function () {
                    layer.msg("正在加载网址，需耐心等待");
                    setTimeout(function () {
                        window.open(btn.attr("_href"));
                    }, 2000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 2800);
                }
            });
            return false;
        });
        $(document).on("click", ".gw", function () {
            btn = $(this);
            $(".form_1403").addClass("show");
            $(".want_school").val($(this).closest("li").find(".text").attr("title"));
            $(".ceping_id").val($(this).closest("li").find(".text").attr("xuexi_id"));
        });
    });
})

useHead({
    title: "入学考试资源-国际考试-数学竞赛 - 国际教育网",
    meta: [
        {
            name: "keywords",
            content: "入学考试,国际考试,数学竞赛"
        }, {
            name: "description",
            content: "国际教育网学习资源栏目提供入学考试、语言考试、国际考试与数学竞赛等学习资源."
        }
    ],
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "https://www.ieduchina.com/statics/layui/layui.js",
            type: "text/javascript",
            defer: true
        }
    ],
    link: [
        {
            rel: "icon",
            href: "https://www.ieduchina.com/favicon.ico"
        }
        ,
        {
            rel: "stylesheet",
            href: "https://www.ieduchina.com/statics/layui/css/layui.css"
        }
    ]
})
</script>
<style scoped lang="less">
section {
    background-color: #F2F4F6;
}

section .wrap_1809 {
    width: 1280px;
    margin: 0 auto;
    padding-top: 25px;
    padding-bottom: 100px;
}

.form_1403 {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.form_1403.show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.form_1403 .con {
    text-align: center;
}

.form_1403 .con form {
    width: 420px;
    padding: 30px 40px;
    background: #FFFFFF;
    border-radius: 10px;
}

.form_1403 .con form h2 {
    font-size: 26px;
    font-weight: bold;
    color: #0770D1;
    padding-bottom: 20px;
    line-height: 32px;
    letter-spacing: 3px;
}

.form_1403 .con form h3 {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    padding-bottom: 10px;
}

.form_1403 .con form input {
    width: 100%;
    height: 47px;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #DBDBDB;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    outline: none;
    margin-top: 20px;
}

.form_1403 .con form input::-webkit-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999999;
}

.form_1403 .con form input::-moz-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999999;
}

.form_1403 .con form input:-ms-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999999;
}

.form_1403 .con form input::-ms-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999999;
}

.form_1403 .con form input::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999999;
}

.form_1403 .con form select {
    width: 100%;
    height: 47px;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #DBDBDB;
    padding: 0 16px;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    outline: none;
    margin-top: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form_1403 .con form button {
    width: 100%;
    height: 47px;
    background: #0770D1;
    border-radius: 6px;
    margin-top: 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    border: none;
    outline: none;
}

.form_1403 .con .close_1409 {
    width: 30px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
}
</style>