<template>
    <div class="school">
        <h3 en="SCHOOLS" class="title">参与院校</h3>
        <ul>
            <li><a href="https://schoollist.ieduchina.com/school/cfss/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://www.ieduchina.com/uploadfile/college/202309/1695808686.jpg" alt="中华基金中学">
                    <p>中华基金中学</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/calfsshk/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://zhaosheng.ieduchina.com/Upload/File/202402/65c325d6557ee.jpg" alt="迦密爱礼信中学">
                    <p>迦密爱礼信中学</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/tmcss/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://zhaosheng.ieduchina.com/Upload/File/202402/65c1cbccbbee0.jpg" alt="屯门天主教中学">
                    <p>屯门天主教中学</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/pyc/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://www.ieduchina.com/uploadfile/college/202310/1698053489.jpg" alt="沙田培英中学">
                    <p>沙田培英中学</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/evangel/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://www.ieduchina.com/uploadfile/college/202401/1704353550.jpg" alt="播道书院">
                    <p>播道书院</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/cccsshk/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://zhaosheng.ieduchina.com/Upload/File/202402/65d1a9a706b6e.jpg" alt="新界西贡坑口区郑植之中学">
                    <p>新界西贡坑口区郑植之中学</p>
                </a></li>
            <li><a href="https://schoollist.ieduchina.com/school/uccke/?tgform=香港教育文化之旅" target="_blank"><img
                        src="https://www.ieduchina.com/uploadfile/college/202310/1697439246.jpg" alt="汇基书院(东九龙)">
                    <p>汇基书院(东九龙)</p>
                </a></li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.school {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0 65px;
}

.school ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-top: 8px;
}

.school ul li {
    text-align: center;
    margin-top: 40px;
    width: 25%;
}

.school ul li:first-of-type img {
    padding: 10px;
}

.school ul li img {
    width: 218px;
    height: 90px;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
    background-color: #fff;
    border-radius: 6px;
}

.school ul li p {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    padding-top: 20px;
}
</style>
