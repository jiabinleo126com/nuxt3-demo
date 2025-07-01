<template>
    <img src="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" alt="" height="0" width="0"
        img="//www.ieduchina.com/topic/2025/hk13/images/1d83b8f1.jpg" style="display:none">
    <Header />
    <section>
        <component :is="Banner" src="https://www.ieduchina.com/topic/2025/hk13/images/b01ba60e.jpg" height=420
            alt="2025年香港名校探校之旅" />
        <component :is="About" :data="about" />
        <component :is="LiangDian" :data="liangdian" className="c003d96" />
    </section>
    <component :is="XingCheng" className="c003d96" :data="xingcheng" :arrImg="arrImg" />
    <component :is="School" className="c003d96" :data="school" />
    <component :is="Footer" />
    <div class="mask">
        <div class="wrap">
            <img src="//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png" alt="">
            <div class="video-play">
                <video height="405" id="mask_video" playsinline poster="" preload="auto" value="" webkit-playsinline
                    width="520"></video>
            </div>
        </div>
    </div>
    <component :is="RightFixedNav" className="c003d96" />
    <component :is="MaskForm" className="c003d96" mark="香港教育文化之旅第13期_国际教育网PC版" />
    <component :is="ImgMask" />
</template>

<script setup>
import { defineAsyncComponent, reactive } from "vue";
const Banner = defineAsyncComponent(() => import('~/components/topic/hkfxy/Banner.vue'))
const LiangDian = defineAsyncComponent(() => import('~/components/topic/hkfxy/LiangDian.vue'))
const XingCheng = defineAsyncComponent(() => import('~/components/topic/hkfxy/XingCheng.vue'))
const School = defineAsyncComponent(() => import('~/components/topic/hkfxy/School.vue'))
const Footer = defineAsyncComponent(() => import('~/components/topic/HK-Footer.vue'))
const About = defineAsyncComponent(() => import('~/components/topic/hkfxy/About.vue'))
const MaskForm = defineAsyncComponent(() => import('~/components/topic/hkfxy/MaskForm.vue'))
const RightFixedNav = defineAsyncComponent(() => import('~/components/topic/hkfxy/RightFixedNav.vue'))
const ImgMask = defineAsyncComponent(() => import('~/components/topic/hkfxy/ImgMask.vue'))


import { onMounted, ref } from "vue";

const about = ref([
    "5月2日-5月3日，【香港教育文化之旅】第13期圆满收官。此次活动如教育盛宴，为参访家庭带来难忘探索体验。", "当下教育资源优质且丰富，香港凭借独特地理位置与深厚教育底蕴，成为众多学子求学圣地，其顶尖中学以先进教育理念和卓越教学成果吸引众多目光。为助大家深入了解香港中学教育，国际教育网精心策划此次独家定制的香港名校探访团活动。", "行程丰富紧凑，探访团深入走访香港十所顶尖中学，路线涵盖DSE课程学校与国际课程学校，让参访家庭一站式领略不同名校风采。", "国际教育网专家团队全程相伴，每到一所学校，便如知识引路人，凭借专业造诣和行业经验，深度解析学校特色与教学理念，详细讲解课程设置、师资力量，还分享教育发展趋势，让家长全方位了解学校。", "校长和老师全程导览，带领大家参观校园各处，从现代化教学楼到实验室、艺术教室、运动场，展示校园文化魅力，热情解答疑问，分享学校发展历程、办学理念与成果，让家长和学生深入了解学校。", "校长们亲授的普通话升学讲座是探访团亮点。校长们以专业素养和对教育体系的把握，介绍DSE与国际课程学校的升学途径、招生政策及升学准备，用案例和建议为家长学生拨开迷雾。家长们称讲座如及时雨，让他们对升学之路方向清晰，收获颇丰。"
]);
const school = [
    {
        path: "https://schoollist.ieduchina.com/school/hofung/",
        name: "可风中学(啬色园主办)",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/59f653cd.png"
    }, {
        path: "https://schoollist.ieduchina.com/school/lwfsshk/",
        name: "世界龙冈学校刘皇发中学",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/d5191299.png"
    }, {
        path: "https://schoollist.ieduchina.com/school/tmcss/",
        name: "屯门天主教中学",
        logo: "https://zhaosheng.ieduchina.com/Upload/File/202402/65c1cbccbbee0.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/yllhk/",
        name: "基督教香港信义会元朗信义中学",
        logo: "https://www.ieduchina.com/topic/2024/hk8/images/af6a1a94.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/ktssshk/",
        name: "九龙塘学校(中学部)",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/389a7674.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/ccckeitohk/",
        name: "中华基督教会基道中学",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/9a4d802d.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/xgdlyjnd/",
        name: "香港德思齐加拿大国际学校",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/ccfb325f.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/evangel/",
        name: "播道书院",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/1cc1684a.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/szgxgjb/",
        name: "香港苏浙公学国际部",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/77922d59.png"
    },
    {
        path: "https://schoollist.ieduchina.com/school/lpcuwc/",
        name: "UWC李宝椿联合世界书院",
        logo: "//www.ieduchina.com/topic/2025/hk13/images/cec9b52f.png"
    }
]
const liangdian = reactive(["独家定制香港中学探访团，深入体验香港十所顶尖中学", "路线覆盖香港核心名校区，一站式领略学校风采", "名师带队讲解，深度解析学校特色与教学理念", "校长老师全程相伴导览，探索校园细节，饱览校园风光", "校长亲授普通话升学讲座，精准把握香港教育体系脉络", "前瞻布局择校规划蓝图，量身定制个性化升学路径"])
const xingcheng = reactive([
    {
        title: "每日行程（DSE路线）",
        list: [
            {
                title: "2025年05月02日访校行程安排",
                list: [
                    {
                        time: "07:40",
                        title: "香港校区集合(香港尖沙咀港景汇商场)"
                    },
                    {
                        time: "08:10-08:50",
                        title: "交通"
                    },
                    {
                        time: "09:00-11:00",
                        title: "可风中学(啬色园主办)",
                        path: "https://schoollist.ieduchina.com/school/hofung/",
                        desc: [
                            "創辦時間：1974 年創立",
                            "學校類別:資助、男女校、儒釋道；位於荃灣區",
                            "辦學團體：嗇色園",
                            "學校位置:新界葵湧和宜合道448號",
                            "辦學宗旨:秉承辦學團體嗇色園普濟勸善的精神，為學生提供優質教育。除了讓學生品學兼優外，更重視學生的均衡發展，俾其思維、能力、體魄和氣質風度等均能兼善。",
                            "學校特色:秉承“普濟勸善”的校訓，注重學生的全面和均衡發展，不僅在學業上追求卓越，還強調體育、藝術及課外活動的參與。以英語授課，提供多元化課程，注重兩文三語能力，並擁有創新的教學設施和方法。",
                            "課程體系:DSE",
                            "教學語言:以英語作為主要教學語言，絕大部分的學習、活動、宣佈都是以英語進行。多年來，學校均有收錄外籍交換生，使學生在校園內有更多應用英語及文化交流的機會。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/56870034.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/2ffdb74f.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/99fdbc5c.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/3152d110.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/8d6040c6.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/b2afd974.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/c36a5b21.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/e0923d56.jpg"
                            }
                        ]
                    },
                    {
                        time: "11:00-12:00",
                        title: "世界龙冈学校刘皇发中学",
                        path: "https://schoollist.ieduchina.com/school/lwfsshk/",
                        desc: [
                            "創辨時間: 1977年創立",
                            "學校類別: 資助、男女校",
                            "辦學團體: 世界龍岡學校(香港)有限公司",
                            "學校位置: 九龍大角咀詩歌舞街66號",
                            "辦學宗旨: 秉承世界各地龍岡宗親（劉、關、張、趙四姓）宏願，在香港興學育才，發揚文教，造福人群，有教無類。因應時代趨勢，作均衡有效的施教及德育陶冶。",
                            "學校特色:秉承“忠、義、仁、勇”的校訓，注重均衡教育和品德培育；校風嚴謹純樸，教師嚴而有愛，學生篤學守規；提供多元化的課程，涵蓋學術、藝術、體育、科技等領域，致力於學生的全人發展。此外，該校擁有豐富的教學設施和優秀的師資團隊。",
                            "課程體系: DSE",
                            "教學語言: 學校以中、英雙語為主要教學語言。培養學生「兩文三語、中英兼擅」的能力。初中部份班別的數學科及科學科以英語授課。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4cc2b614.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/2f18992d.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/e2b070cb.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/457f28ab.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/6305e1c9.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/e4980fd5.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/d2731704.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/b8619a07.jpg"
                            }
                        ]
                    },
                    {
                        time: "12:00-13:00",
                        title: "午休/午餐"
                    },
                    {
                        time: "13:00-13:20",
                        title: "交通"
                    },
                    {
                        time: "13:30-14:30",
                        title: "屯门天主教中学",
                        path: "https://schoollist.ieduchina.com/school/tmcss/",
                        desc: [
                            "創辨時間:1987 年創立",
                            "學校類別:資助、男女校、天主教",
                            "辦學團體:天主教香港教區",
                            "學校位置:新界屯門建生邨",
                            "辦學宗旨:傳揚耶穌基督愛和公義的福音精神，培養學生以勇氣實踐倫理道德，成己達人；培養學生運用智慧，應用所學，創造美好的人生，貢獻社群。",
                            "學校特色:學校注重全人教育。學校強調中英雙語並重，提供優質的雙語教學環境。課程設置豐富多元，涵蓋學術、藝術及體育等，鼓勵學生全面發展。同時，秉承天主教教育理念，重視品德教育，培養學生良好品德及社會責任感，為學生未來發展奠定堅實基礎。",
                            "課程體系:DSE",
                            "教學語言:學校以英文為主要教學語言。1：學校初中大部份班別以英語授課，除中文科、中國歷史、普通話、生活與社會、宗教及倫理、閱讀課外，其餘科目均以英語教學。部份學生英文、數學和科學以英語教學，以便照顧學習差異；2：高中部份科目銜接初中，維持以英語為授課語言。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/bd308c08.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/414ecd41.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/3927fb36.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/0b516689.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/6db3c163.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/3f29a2cf.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/acfe4e19.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/77f680a4.jpg"
                            }
                        ]
                    },
                    {
                        time: "14:30-15:20",
                        title: "交通"
                    },
                    {
                        time: "15:30-17:00",
                        title: "基督教香港信义会元朗信义中学",
                        path: "https://schoollist.ieduchina.com/school/yllhk/",
                        desc: [
                            "創辦時間：1967",
                            "學校類別：資助、男女校",
                            "學校位置：新界天水圍天耀邨第2期",
                            "辦學宗旨：培育學生在基督教育下建立正確的人生觀，以聖經真理、以生命影響生命的精神去引導學生，使他們能以積極的態度去珍惜生命，能堅持不斷學習，發揮潛能。",
                            "學校特色：注重全人教育，以“正心修身”為校訓，致力於培養學生的品德和學業。學校設施完善，擁有先進的教學設備和豐富的教育資源。同時，學校還注重學生的實踐能力和創新精神的培養，為學生提供廣闊的發展空間和機會。",
                            "教學語言：學校以英文為主要教學語言"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/01b30230.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/1941ff5c.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/fa8cec0a.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/a761586a.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/588bdd4d.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/46b39026.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4968c851.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/0cd0b5cf.jpg"
                            }
                        ]
                    },
                    {
                        time: "17:00",
                        title: "返程"
                    },
                ]
            },
            {
                title: "2025年05月03日访校行程安排",
                list: [
                    {
                        time: "07:40",
                        title: "香港校区集合(香港尖沙咀港景汇商场)"
                    },
                    {
                        time: "08:10-08:50",
                        title: "交通"
                    },
                    {
                        time: "09:00-10:20",
                        title: "九龙塘学校(中学部)",
                        path: "https://schoollist.ieduchina.com/school/ktssshk/",
                        desc: [
                            "創辨時間:1962 年創立",
                            "學校類別:資助、男女校",
                            "辦學團體:九龍塘學校",
                            "學校位置:九龍九龍塘舒梨道10號",
                            "辦學宗旨:學校致力提供均衡教育，幫助學生建立正確人生觀，實踐「樂善勇敢」精神，使學生充分發展多元智能，提高他們對社會、祖國的責任感及歸屬感。",
                            "學校特色:學校提供均衡教育，注重學生的多元智能發展，並實踐“樂善勇敢”的精神。學校環境優美，校風良好。學校聘請三位外籍教師，透過課堂、多元化活動提升英語教學品質。此外，學校還提供個性化的課程和輔導，確保每位學生都能得到適合自己的教育，致力於培養具有國際視野和社會責任感的全面發展人才。",
                            "課程體系:DSE",
                            "教學語言:學校以中文為主要教學語言。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/ce2711cf.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/623bccf1.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4e3cd42b.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/61bd8da4.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/0a52f6f6.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/147d71d8.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/b9ad6639.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c1a0b1e7.jpg"
                            }
                        ]
                    },
                    {
                        time: "10:20-11:00",
                        title: "交通"
                    },
                    {
                        time: "11:00-12:00",
                        title: "中华基督教会基道中学",
                        path: "https://schoollist.ieduchina.com/school/ccckeitohk/",
                        desc: [
                            "創辦時間：2003年",
                            "學校類別：資助、男女校、基督教",
                            "辦學團體：中華基督教會香港區會",
                            "學校位置：九龍土瓜灣崇安街28號",
                            "辨學宗旨：K: Knowledge and wisdom 藉學習獲得知識 T: Transcendence求突破追求卓越 S: Serving others以服侍回饋社會 S: Salvation憑信心領受救恩",
                            "學校特色：學校強調「以學生為本、以學習為中心」的教育，為學生提供寬廣知識、考察研究、生活教育、社群服務、體藝活動和信仰認識等六種學習經歷，讓學生在智能、情意、體藝及靈性方面有均衡的發展，並實踐「終身學習」的目標。",
                            "課程體系：DSE",
                            "教學語言：學校以中文為主要教學語言，注重培養學生兩文三語的能力。",
                            "加強英語能力：初中部份班別以英語教授數學、綜合科學、物理和化學科。歷史、地理、普通電腦、公民、經濟與社會、綜合藝術、音樂和家政科設有英語延展學習。高中物理、化學和數學延伸部份(代數與微積分) 及部份班別的數學科以英語教授。",
                            "加強普通話能力：初中大部分班別以普通話教授中文。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4ef64172.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/cff4c63b.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/85fed7a0.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/b1beb5d1.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/85f8a55c.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/1c6a0911.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/dabb6865.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/6f72d931.jpg"
                            }
                        ]
                    },
                    {
                        time: "12:00-13:00",
                        title: "午餐加午休"
                    },
                    {
                        time: "13:00",
                        title: "返程"
                    }
                ]
            }
        ]
    }, {
        title: "每日行程（私立国际DSE路线）",
        list: [
            {
                title: "2025年05月02日访校行程安排",
                list: [
                    {
                        time: "07:40",
                        title: "香港校区集合(香港尖沙咀港景汇商场)"
                    },
                    {
                        time: "08:10-08:50",
                        title: "交通"
                    },
                    {
                        time: "09:00-11:00",
                        title: "香港德思齐加拿大国际学校",
                        path: "https://schoollist.ieduchina.com/school/xgdlyjnd/",
                        desc: [
                            "創辦時間：1987年",
                            "學校類別：私立國際學校",
                            "辦學團體：周大福教育集團",
                            "學校位置：香港太古城太豐路",
                            "辦學宗旨：致力於培育下一代成為具創新思維、國際視野、同理心及影響力的人才。",
                            "學校特色：香港第一所加拿大學校，採用加拿大安大略省課程體系。提供從幼稚園至中學的“一條龍”教學服務。畢業生獲得OSSD證書，學歷與加拿大當地中學畢業證書等效，可直接申請全球大學。多元化學生群體，來自超過50個國家的學生彙聚一堂。注重多元文化包容性，推行編程、機器人技術、數學及創客教育。課外活動豐富，提供超過80種課外活動，並推出“OSSD+SignatureProgram”學習計畫。",
                            "課程體系：加拿大安大略省課程體系",
                            "教學語言：主要為英語，同時提供中文、法語、日語作為國際語言課的選擇。中文課程分為母語和非母語班，母語班使用人教版的教材。此外，在入學面試時，學校會根據學生的英語水準決定是否需要進入ESL（英語作為第二語言）班。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/49e76cb7.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/f640d613.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/635336a2.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/43d9d989.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/f4e51f7f.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/ef7bfab6.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/1a9b5b93.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/84f9c408.jpg"
                            }
                        ]
                    },
                    {
                        time: "11:00-12:20",
                        title: "播道书院",
                        path: "https://schoollist.ieduchina.com/school/evangel/",
                        desc: [
                            "創辨時間:2006 年創立",
                            "學校類別:直資、男女校、基督教",
                            "辦學團體:香港基督教播道會聯會",
                            "學校位置:新界將軍澳至善街7號",
                            "辦學宗旨:以聖經真理為基礎，為青少年提供全人教育及優質教育，建立正確生活價值觀，啟發潛能，以達致靈、德、智、體、群、美均衡發展。",
                            "學校特色:提供小到中一條龍教學服務，不設精英班，秉持“人人皆資優”的教育理念；以聖經真理為基礎，注重中華文化傳承，將古代聖賢名言融入教育；擁有寬敞的校園和先進的教學設施，提供均衡發展的教育，致力於學生在精神、道德、智慧、體育、社交和美學等方面的全面發展。",
                            "課程體系:DSE",
                            "教學語言:學校以英文為主要教學語言。學校中、英並重；採用英語為主要教學語言，亦會努力推動普通話的學習，好讓同學掌握全世界最通用的兩個口語，有所需之口語能力來走遍中國、踏足世界。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/d34ec39e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/a18aa460.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/13a9557e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/a16df448.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/b55b172e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/df87c5d4.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/8b96da93.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/444f352e.jpg"
                            }
                        ]
                    },
                    {
                        time: "12:20-13:00",
                        title: "午餐加午休"
                    },
                    {
                        time: "13:00-13:30",
                        title: "交通"
                    },
                    {
                        time: "13:30-14:30",
                        title: "香港苏浙公学国际部",
                        path: "https://schoollist.ieduchina.com/school/szgxgjb/",
                        desc: [
                            "創辦時間：2002年",
                            "學校類別：私立獨立的國際學校",
                            "辦學團體：香港蘇浙滬同鄉會",
                            "學校位置：香港東區寶馬山寶馬山道20號",
                            "辦學宗旨：以中國固有文化的精髓作培育學生品德的指標，體現「整齊嚴肅」的做事、做人生活態度；並在中英並重、文理並重及升學與就業並重的原則下提供均衡教育。",
                            "學校特色：蘇浙公學國際部是在學校已有的國際幼稚園和小學部門的基礎上增設的，為3至18歲的學生提供一條龍式教育。是全港首間推行英語及普通話教育的一條龍式國際學校。提供雙軌制課程，學生可以根據自身需求選擇不同的升學路徑。",
                            "課程體系：中學部提供7至13年級的教育，採用英國國家課程。提供International Baccalaureate（IBDP）課程。直資部學生完成中三課程後，可以選擇修讀IGCSE或香港中學文憑考試（HKDSE）；完成中四課程後，可以選擇修讀IBDP或HKDSE。",
                            "教學語言：學校主要以英語作為教學語言。中國語文用普通話作為教學媒介，其他科目均用英文授課。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/dec4ce13.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/ef77eb80.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/931c999b.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/d6926f25.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/a717707e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/2d743aaf.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/89d98c5d.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/7051b828.jpg"
                            }
                        ]
                    },
                    {
                        time: "14:30-15:30",
                        title: "交通"
                    },
                    {
                        time: "15:30-16:50",
                        title: "UWC李宝椿联合世界书院",
                        path: "https://schoollist.ieduchina.com/school/lpcuwc/",
                        desc: [
                            "創辦時間：1978年",
                            "學校類別：私立獨立的國際學校",
                            "學校位置：新界沙田西沙公路落禾沙裏10號",
                            "辦學宗旨：在UWC，有意識的多元化學生羣體是獨特教育體驗的核心-在這個社區中，共享經驗和協作生活旨在促進學生跨文化理解的發展。重視學生參與全財計畫，認可其個人的獨特才能和能力，而不僅僅是出色的學術成績。",
                            "學校特色：香港李寶椿聯合世界書院是隻開辦國際文憑大學預科課程(IB課程)的直資中學，也是UWC在亞洲創辦的第一所學校，只提供兩年制中學課程。是香港IB龍頭名校之一，誕生了不少IB狀元，不少畢業生升讀世界級學府，如牛津、劍橋、哈佛等。",
                            "課程體系：IB課程",
                            "教學語言：學校以英文爲主要教學語言。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/88efa747.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/1eb2dbfe.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/18a78c32.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c56a1d27.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/abe78eaf.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/5b837c7a.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/d30d6c28.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c477a6e8.jpg"
                            }
                        ]
                    },
                    {
                        time: "17:00",
                        title: "返程"
                    },
                ]
            },
            {
                title: "2025年05月03日访校行程安排",
                list: [
                    {
                        time: "07:40",
                        title: "香港校区集合(香港尖沙咀港景汇商场)"
                    },
                    {
                        time: "08:10-08:50",
                        title: "交通"
                    },
                    {
                        time: "09:00-10:20",
                        title: "九龙塘学校(中学部)",
                        path: "https://schoollist.ieduchina.com/school/ktssshk/",
                        desc: [
                            "創辨時間:1962 年創立",
                            "學校類別:資助、男女校",
                            "辦學團體:九龍塘學校",
                            "學校位置:九龍九龍塘舒梨道10號",
                            "辦學宗旨:學校致力提供均衡教育，幫助學生建立正確人生觀，實踐「樂善勇敢」精神，使學生充分發展多元智能，提高他們對社會、祖國的責任感及歸屬感。",
                            "學校特色:學校提供均衡教育，注重學生的多元智能發展，並實踐“樂善勇敢”的精神。學校環境優美，校風良好。學校聘請三位外籍教師，透過課堂、多元化活動提升英語教學品質。此外，學校還提供個性化的課程和輔導，確保每位學生都能得到適合自己的教育，致力於培養具有國際視野和社會責任感的全面發展人才。",
                            "課程體系:DSE",
                            "教學語言:學校以中文為主要教學語言。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/ce2711cf.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/623bccf1.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4e3cd42b.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/61bd8da4.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/0a52f6f6.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/147d71d8.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/b9ad6639.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c1a0b1e7.jpg"
                            }
                        ]
                    },
                    {
                        time: "10:20-11:00",
                        title: "交通"
                    },
                    {
                        time: "11:00-12:00",
                        title: "中华基督教会基道中学",
                        path: "https://schoollist.ieduchina.com/school/ccckeitohk/",
                        desc: [
                            "創辦時間：2003年",
                            "學校類別：資助、男女校、基督教",
                            "辦學團體：中華基督教會香港區會",
                            "學校位置：九龍土瓜灣崇安街28號",
                            "辨學宗旨：K: Knowledge and wisdom 藉學習獲得知識 T: Transcendence求突破追求卓越 S: Serving others以服侍回饋社會S: Salvation憑信心領受救恩",
                            "學校特色：學校強調「以學生為本、以學習為中心」的教育，為學生提供寬廣知識、考察研究、生活教育、社群服務、體藝活動和信仰認識等六種學習經歷，讓學生在智能、情意、體藝及靈性方面有均衡的發展，並實踐「終身學習」的目標。",
                            "課程體系：DSE",
                            "教學語言：學校以中文為主要教學語言，注重培養學生兩文三語的能力。",
                            "加強英語能力：初中部份班別以英語教授數學、綜合科學、物理和化學科。歷史、地理、普通電腦、公民、經濟與社會、綜合藝術、音樂和家政科設有英語延展學習。高中物理、化學和數學延伸部份(代數與微積分)及部份班別的數學科以英語教授。",
                            "加強普通話能力：初中大部分班別以普通話教授中文。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/4ef64172.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/cff4c63b.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/85fed7a0.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/b1beb5d1.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/85f8a55c.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/1c6a0911.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/dabb6865.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/6f72d931.jpg"
                            }
                        ]
                    },
                    {
                        time: "12:20-13:00",
                        title: "午餐加午休"
                    },
                    {
                        time: "13:00-13:30",
                        title: "交通"
                    },
                    {
                        time: "13:30-14:30",
                        title: "香港苏浙公学国际部",
                        path: "https://schoollist.ieduchina.com/school/szgxgjb/",
                        desc: [
                            "創辦時間：2002年",
                            "學校類別：私立獨立的國際學校",
                            "辦學團體：香港蘇浙滬同鄉會",
                            "學校位置：香港東區寶馬山寶馬山道20號",
                            "辦學宗旨：以中國固有文化的精髓作培育學生品德的指標，體現「整齊嚴肅」的做事、做人生活態度；並在中英並重、文理並重及升學與就業並重的原則下提供均衡教育。",
                            "學校特色：蘇浙公學國際部是在學校已有的國際幼稚園和小學部門的基礎上增設的，為3至18歲的學生提供一條龍式教育。是全港首間推行英語及普通話教育的一條龍式國際學校。提供雙軌制課程，學生可以根據自身需求選擇不同的升學路徑。",
                            "課程體系：中學部提供7至13年級的教育，採用英國國家課程。提供International Baccalaureate（IBDP）課程。直資部學生完成中三課程後，可以選擇修讀IGCSE或香港中學文憑考試（HKDSE）；完成中四課程後，可以選擇修讀IBDP或HKDSE。",
                            "教學語言：學校主要以英語作為教學語言。中國語文用普通話作為教學媒介，其他科目均用英文授課。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/dec4ce13.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/ef77eb80.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/931c999b.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/d6926f25.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/a717707e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/2d743aaf.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/89d98c5d.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/7051b828.jpg"
                            }
                        ]
                    },
                    {
                        time: "14:30-15:30",
                        title: "交通"
                    },
                    {
                        time: "15:30-16:50",
                        title: "UWC李宝椿联合世界书院",
                        path: "https://schoollist.ieduchina.com/school/lpcuwc/",
                        desc: [
                            "創辦時間：1978年",
                            "學校類別：私立獨立的國際學校",
                            "學校位置：新界沙田西沙公路落禾沙裏10號",
                            "辦學宗旨：在UWC，有意識的多元化學生羣體是獨特教育體驗的核心-在這個社區中，共享經驗和協作生活旨在促進學生跨文化理解的發展。重視學生參與全財計畫，認可其個人的獨特才能和能力，而不僅僅是出色的學術成績。",
                            "學校特色：香港李寶椿聯合世界書院是隻開辦國際文憑大學預科課程(IB課程)的直資中學，也是UWC在亞洲創辦的第一所學校，只提供兩年制中學課程。是香港IB龍頭名校之一，誕生了不少IB狀元，不少畢業生升讀世界級學府，如牛津、劍橋、哈佛等。",
                            "課程體系：IB課程",
                            "教學語言：學校以英文爲主要教學語言。"
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/88efa747.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/1eb2dbfe.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/18a78c32.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c56a1d27.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/abe78eaf.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/5b837c7a.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk13/images/d30d6c28.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk13/images/c477a6e8.jpg"
                            }
                        ]
                    },
                    {
                        time: "17:00",
                        title: "返程"
                    },
                ]
            }
        ]
    }
])
const arrImg = ref("https://www.ieduchina.com/topic/2025/hk13/images/70084d28.png")
useHead({
    script: [
        {
            src: "https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "https://www.ieduchina.com/statics/pcc/js/swiper.min.js",
            type: "text/javascript",
            defer: true
        },
        {
            src: "/tencent-cdn/qcloud/video/dist/tcadapter.1.0.0.min.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/TXLivePlayer-1.2.3.min.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/hls.min.1.1.5.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/flv.min.1.6.3.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/libs/dash.all.min.4.4.1.js",
            defer: true,
            crossorigin: 'anonymous'
        }, {
            src: "https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.v4.5.4.min.js",
            defer: true,
            crossorigin: 'anonymous'
            // }, {
            //     src: "/statics/video/js/videolist.js",
            //     defer: true,
            //     crossorigin: 'anonymous'
        }
    ],
    link: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "//www.ieduchina.com/statics/pcc/img/favicon.ico"
        },
        {
            rel: "stylesheet",
            href: "https://www.ieduchina.com/statics/pc/css/swiper.min.css"
        },
        {
            rel: 'stylesheet',
            href: 'https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.4/tcplayer.min.css'
        }
    ],
    title: "香港教育文化之旅第13期-香港探校 - 国际教育网",
    meta: [
        {
            name: "keywords",
            content: "香港教育文化之旅"
        },
        {
            name: "description",
            content: "5月2日-5月3日,香港教育文化之旅第13期圆满收官.此次活动如教育盛宴,为参访家庭带来难忘探索体验.行程丰富紧凑,探访团深入走访香港十所顶尖中学,路线涵盖DSE课程学校与国际课程学校,让参访家庭一站式领略不同名校风采."
        }
    ]
})
onMounted(() => {
    if ($(".video_swiper").find(".swiper-slide").length > 4) {
        new Swiper('.video_swiper', {
            loop: true,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
    try {
        var player = TCPlayer('swipervideo', {});
        player.src($("#swipervideo").attr("value"));
        player.poster($("#swipervideo").attr("poster2"));
    }
    catch (err) {
    }
    $("#videos").on("click", "img[value]", function () {
        var img = $(this).attr("src");
        var value = $(this).attr("value");
        var name = $(this).attr("alt");
        player.src(value);
        player.poster(img);
        $(this).closest("#videos").siblings("p").text(name);
        setTimeout(function () {
            player.play();
        }, 300);
    });
    var player2 = TCPlayer('mask_video', {});
    $("select").change(function () {
        $(this).css("color", "#333");
    });
    $(".mask .wrap>img").on("click", function () {
        $(".mask").hide();
        player2.pause();
    });
    $(document).on('click', '.showTk', function () {
        $('.mask_form').addClass('show');
        //$("body").addClass("noscroll");
    });
    $(document).on('click', '.close', function () {
        $('.mask_form').removeClass('show');
        //$("body").removeClass("noscroll");
        $('.error-tips').html('');
        $(this).parents('.mask_form').find('form')[0].reset();
    });
    var flag = true;
    if ($(".school").length) {
        $(window).on('scroll', function () {
            var st = $(window).scrollTop();
            var wh = $(".school").offset().top;
            if (st > (wh - 48) && flag && !$(".img-mask").hasClass("show")) {
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
        }, {
            name: "email",
            message: "您的邮箱"
        }
    ];
    $(".submit").on("click", function () {
        var form = $(this).closest("form");
        var errors = [];
        var msg = inputs.reduce(function (acc, input) {
            var val = form.find("[name=\"".concat(input.name, "\"]")).val();
            if (!val) {
                errors.push(input.message);
            }
            return errors[0];
        }, "");
        if (msg) {
            layer.msg(msg);
        }
        else {
            $.ajax({
                url: "".concat(form[0].action, "&t=").concat(Math.random().toString()),
                type: form[0].method,
                dataType: "JSON",
                data: form.serialize(),
                success: function (res) {
                    if (res.status == 1) {
                        $('.mask_form').removeClass('show');
                        //$("body").removeClass("noscroll");
                        layer.msg("您已报名成功，谢谢您的参与！");
                        form[0].reset();
                    }
                    else {
                        layer.msg(res.info);
                    }
                },
                error: function () {
                    layer.msg("报名失败，请稍后再试");
                }
            });
        }
        return false;
    });
    $(".contact ul").hover(function () {
        $(".right-fixed-nav").hide();
    }, function () {
        $(".right-fixed-nav").show();
    });
})
</script>
<style lang="less">
:root {
    --primary-color: #003d96;
}

.images {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-size: 0;
    width: 1280px;
    margin: 50px auto 0;
}

.images .left img {
    width: 560px;
    height: 305px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: left center;
    object-position: left center;
}

.images .right {
    width: 705px;
    height: 305px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.images .right img {
    width: 225px;
    height: 145px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}

.images .right img:nth-of-type(n+4) {
    margin-top: 15px;
}

body {
    min-width: 1280px;
}

body.noscroll {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding-right: 5px;
}

section {
    min-width: 1280px;
    background-color: #fff;
}

section.gray {
    background-color: #f2f4f6;
}

section.green {
    background-color: var(--primary-color);
}

section.green>div>h3 {
    color: #fff;
}

section h3.title {
    font-size: 42px;
    font-weight: bold;
    color: #000;
}

section h3.title::after {
    content: attr(en);
    font-size: 28px;
    font-weight: 500;
    color: #ccc;
    text-transform: uppercase;
    margin-left: 20px;
}

section .jc {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0 80px;
}

section .jc .swiper-container {
    height: 360px;
    margin-top: 80px;
}

section .jc .swiper-container img {
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
}

section .jc .swiper-container .swiper-slide-next,
section .jc .swiper-container .swiper-slide-prev {
    -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
}

section .sp {
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0;
}

section .sp .box {
    width: 1034px;
    height: 707px;
    margin: 80px auto 0;
}

section .sp .box .video-wrap {
    width: 1034px;
    height: 520px;
}

section .sp .box .video-wrap .tcplayer {
    width: 100%;
    height: 100%;
}

section .sp .box p {
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    background-color: #000;
}

section .sp .box .swiper_wrap {
    background-color: #656565;
    position: relative;
    padding-top: 18px;
}

section .sp .box .swiper_wrap .video_swiper {
    width: 820px;
    height: 122px;
    margin: 0 auto;
}

section .sp .box .swiper_wrap .video_swiper .swiper-wrapper .swiper-slide img {
    width: 190px;
    height: 104px;
    -o-object-position: center -19px;
    object-position: center -19px;
    -o-object-fit: cover;
    object-fit: cover;
    cursor: pointer;
}

section .sp .box .swiper_wrap .swiper-button-prev {
    position: absolute;
    left: 50px;
    top: 80px;
    width: 14px;
    height: 30px;
    background: url(https://www.ieduchina.com/topic/2024/hk7/images/10552782.png) center / contain no-repeat;
}

section .sp .box .swiper_wrap .swiper-button-next {
    position: absolute;
    right: 50px;
    top: 80px;
    width: 14px;
    height: 30px;
    background: url(https://www.ieduchina.com/topic/2024/hk7/images/10552782.png) center / contain no-repeat;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
}

.mask {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 111;
    background-color: rgba(0, 0, 0, 0.5);
}

.mask .wrap {
    position: absolute;
    background-color: #000;
    width: 1200px;
    height: 600px;
    left: 50%;
    top: 50%;
    z-index: 100;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.mask .wrap>img {
    width: 32px;
    height: 32px;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: contain;
    object-fit: contain;
    position: absolute;
    right: -30px;
    top: -30px;
    z-index: 100;
    cursor: pointer;
}

.mask .wrap .video-play {
    width: 100%;
    height: 100%;
}

.mask .wrap .video-play .tcplayer {
    width: 100%;
    height: 100%;
}

img[preview] {
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
}

.img-mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1100;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.img-mask.show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.img-mask.show img {
    height: 80vh;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.img-mask.show .close-img-mask {
    position: absolute;
    left: 50%;
    bottom: 4vh;
    margin-left: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    background: url("//www.ieduchina.com/topic/2024/hk7/images/a4ba9f2a.png") center / contain no-repeat;
}

.img-mask.show .arr span {
    position: absolute;
    top: 50%;
    margin-top: -30px;
    width: 60px;
    height: 60px;
    background: url(//www.ieduchina.com/topic/2025/hk13/images/e113f82e.png) center / contain no-repeat;
    cursor: pointer;
}

.img-mask.show .arr span.left {
    left: 5vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.img-mask.show .arr span.right {
    right: 5vw;
}
</style>