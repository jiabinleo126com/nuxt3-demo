<template>
    <div class="mask_form">
        <div class="inner">
            <div class="form">
                <h2 class="title">
                    <span>下一期探校预约</span>
                </h2>
                <form action="/index.php?m=college&c=index&a=collegereg&dopost=reg" method="post">
                    <div>
                        <input name="name" type="text" class="username" placeholder="请输入学生姓名" autocomplete="off">
                    </div>
                    <div>
                        <input name="mobile" type="text" class="telphone" placeholder="请输入家长手机号" autocomplete="off"
                            datatype="m" maxlength="11">
                    </div>
                    <div class="select">
                        <select class="grateClass" name="grade">
                            <option style="display:none" value="">请选择就读年级</option>
                            <option style="color:#333" value="幼儿园">幼儿园</option>
                            <option style="color:#333" value="一年级">一年级</option>
                            <option style="color:#333" value="二年级">二年级</option>
                            <option style="color:#333" value="三年级">三年级</option>
                            <option style="color:#333" value="四年级">四年级</option>
                            <option style="color:#333" value="五年级">五年级</option>
                            <option style="color:#333" value="六年级">六年级</option>
                            <option style="color:#333" value="初一">初一</option>
                            <option style="color:#333" value="初二">初二</option>
                            <option style="color:#333" value="初三">初三</option>
                            <option style="color:#333" value="高一">高一</option>
                            <option style="color:#333" value="高二">高二</option>
                            <option style="color:#333" value="高三">高三</option>
                            <option style="color:#333" value="其他">其他</option>
                        </select>
                    </div>
                    <div>
                        <input name="want_school" type="text" class="username" placeholder="请输入您的意向学校"
                            autocomplete="off">
                    </div>
                    <div>
                        <input name="email" type="text" class="username" placeholder="请输入您的邮箱" autocomplete="off">
                    </div>
                    <input name="mark" type="hidden" :value="mark">
                    <p class="error-tips"></p>
                    <button class="submit" type="submit">立即报名</button>
                </form>
            </div>
            <div class="bottom">
                <img src="//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png" class="close">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    mark: String
})
</script>

<style lang="less" scoped>
.mask_form {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1200;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;

    &.show {
        display: flex;
    }
}

.mask_form .inner .form {
    width: 436px;
    padding-bottom: 30px;
    background: #fff;
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
}

.mask_form .inner .form h2.title {
    padding: 37px 0 11px;
    text-align: center;
}

.mask_form .inner .form h2.title span {
    font-size: 28px;
}

.mask_form .inner .form h2.title span::after,
.mask_form .inner .form h2.title span::before {
    position: absolute;
    content: "";
    top: 0;
    width: 29px;
    height: 34px;
}

.mask_form .inner .form h2.title span::before {
    left: -46px;
}

.mask_form .inner .form h2.title span::after {
    right: -46px;
}

.mask_form .inner .form form div {
    overflow: hidden;
    width: 368px;
    height: 50px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    margin: 20px auto 0;
}

.mask_form .inner .form form div.select {
    position: relative;
}

.mask_form .inner .form form div.select::after {
    position: absolute;
    right: 18px;
    top: 20px;
    content: "";
    z-index: 10;
    width: 16px;
    height: 10px;
    object-position: center;
    object-fit: contain;
    pointer-events: none;
    background: url(https://www.ieduchina.com/topic/2024/hk7/images/06d922bf.png) center / contain no-repeat;
}

.mask_form .inner .form form div input {
    box-sizing: border-box;
    padding: 0 20px;
    width: 368px;
    height: 50px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    outline: none;
}

.mask_form .inner .form form div input::-webkit-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999;
}

.mask_form .inner .form form div input::-moz-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999;
}

.mask_form .inner .form form div input:-ms-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999;
}

.mask_form .inner .form form div input::-ms-input-placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999;
}

.mask_form .inner .form form div input::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: #999;
}

.mask_form .inner .form form div select {
    box-sizing: border-box;
    padding: 0 20px;
    width: 368px;
    height: 50px;
    font-size: 18px;
    font-weight: 400;
    color: #999;
    border: none;
    outline: none;
    appearance: none;
}

.mask_form .inner .form form div select:-internal-autofill-previewed,
.mask_form .inner .form form div select:-internal-autofill-selected {
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-out 0.5s;
}

.mask_form .inner .form form p.error-tips {
    font-size: 16px;
    color: red;
    height: 0;
    line-height: 60px;
    text-align: center;
}

.mask_form .inner .form form button[type=submit] {
    display: block;
    width: 368px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 4px;
    margin: 30px auto 0;
    font-size: 26px;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
}

.mask_form .inner .bottom {
    text-align: center;
}

.mask_form .inner .bottom img {
    width: 48px;
    height: 48px;
    margin-top: 40px;
    cursor: pointer;
}
</style>