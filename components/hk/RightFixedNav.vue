<template>
    <div class="gotop">
        <ul>
            <li><img src="images/37cfcae2.png" alt="咨詢我們"> <img src="images/fc33df53.png" alt="咨詢我們">
                <p>咨詢我們</p>
                <div class="in"><img src="/statics/pcc/img/ada.png" alt=""></div>
            </li>
            <li><img src="images/6f33e6c5.png" alt="電話咨詢"> <img src="images/ec431536.png" alt="電話咨詢">
                <p>電話咨詢</p>
                <div class="in tel">
                    <p>电话咨询：</p>
                    <p>400-900-8516</p>
                </div>
            </li>
            <li id="gotop"><img src="images/7cc474eb.png" alt="置顶"> <img src="images/7cf45f6b.png" alt="置顶">
                <p>置顶</p>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
.gotop {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 85px;
    z-index: 50;
    cursor: pointer;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    border-radius: 10px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);
    box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);
}

.gotop ul li {
    width: 85px;
    height: 85px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    margin-top: 15px;
}

.gotop ul li:first-of-type {
    margin-top: 0;
}

.gotop ul li img {
    width: 50px;
    height: 50px;
    margin-top: 6px;
}

.gotop ul li img:nth-of-type(2) {
    display: none;
}

.gotop ul li p {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
}

.gotop ul li .in {
    display: none;
    position: absolute;
    right: 85px;
    top: 0;
    border-radius: 0;
    padding: 5px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);
    box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);
}

.gotop ul li .in.tel {
    padding: 24px 13px;
}

.gotop ul li .in.tel p {
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
    white-space: nowrap;
}

.gotop ul li .in.tel p:first-of-type {
    font-size: 14px;
    padding-bottom: 8px;
}

.gotop ul li .in img {
    width: 120px;
    height: 120px;
}

.gotop ul li:hover {
    background-color: #2c2e71;
}

.gotop ul li:hover>img:nth-of-type(1) {
    display: none;
}

.gotop ul li:hover>img:nth-of-type(2) {
    display: inline-block;
}

.gotop ul li:hover .in {
    display: block;
}

.gotop ul li:hover>p {
    color: white;
}

.gotop ul li#gotop {
    cursor: pointer;
    display: none;
}
</style>