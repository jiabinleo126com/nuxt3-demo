
//微信分享
var ShareLink = window.location.href; //默认分享链接
var ShareImgUrl = $("#share") && $("#share").attr("src") ? $("#share").attr("src") : "https://m.ieduchina.com/statics/share.jpg"; // 分享图标
var ShareTitle = document.title;//分享标题
var ShareDesc = "";//分享描述
var ajaxurl = "/indexPhp/index.php?m=content&c=ajax&a=get_weixin_sign";
var url = location.href.split('#')[0];
var meta = document.getElementsByTagName("meta");
var weixinSign ={};
for (i in meta) {
    if (typeof meta[i].name != "undefined" && meta[i].name.toLowerCase() == "description") {
        ShareDesc = meta[i].content;
    }
}
$.ajax({
    type: "post",
    url: ajaxurl,
    data: { url: url },
    cache: false,
    async: false,
    dataType: 'json',
    success: function (data) {
        weixinSign = data;
    }
});
//console.log(weixinSign);

// 微信配置
wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: weixinSign.appId, // 必填，公众号的唯一标识
    timestamp: weixinSign.timestamp, // 必填，生成签名的时间戳
    nonceStr: weixinSign.nonceStr, // 必填，生成签名的随机串
    signature: weixinSign.signature,// 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
});

wx.checkJsApi({
    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function (res) {
        console.log(res);
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
});

// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在 页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready 函数中。
wx.ready(function () {
    console.log("success");
    var shareData = {
        title: ShareTitle,
        desc: ShareDesc,
        link: ShareLink,
        imgUrl: ShareImgUrl
    };

    //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
    wx.updateAppMessageShareData(shareData);
    //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
    wx.updateTimelineShareData(shareData);

});
wx.error(function (res) {
    console.log(res);
});