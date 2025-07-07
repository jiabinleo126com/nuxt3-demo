<template>
    <div class="hk12">
        <img src="https://www.ieduchina.com/topic/2025/hk12/images/dd2d5130.jpg" alt="" height="0" width="0"
            img="https://www.ieduchina.com/topic/2025/hk12/images/dd2d5130.jpg" style="display:none">
        <Header />
        <section>
            <component :is="Banner" src="https://www.ieduchina.com/topic/2025/hk12/images/427ffc66.png" height=420
                alt="2025年香港名校探校之旅" />
            <component :is="About" :data="about" />
            <component :is="LiangDian" :data="liangdian" />
        </section>
        <component :is="XingCheng" :data="xingcheng" :arrImg="arrImg" />
        <component :is="School" :data="school" width="25%" />
        <component :is="Footer" />
        <component :is="VideoMask" />
        <component :is="RightFixedNav" />
        <component :is="MaskForm" mark="香港教育文化之旅第12期_国际教育网PC版" />
        <component :is="ImgMask" />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const Banner = defineAsyncComponent(() => import('~/components/topic/hkfxy/Banner.vue'))
const LiangDian = defineAsyncComponent(() => import('~/components/topic/hkfxy/LiangDian.vue'))
const XingCheng = defineAsyncComponent(() => import('~/components/topic/hkfxy/XingCheng.vue'))
const School = defineAsyncComponent(() => import('~/components/topic/hkfxy/School.vue'))
const Footer = defineAsyncComponent(() => import('~/components/topic/HK-Footer.vue'))
const About = defineAsyncComponent(() => import('~/components/topic/hkfxy/About.vue'))
const MaskForm = defineAsyncComponent(() => import('~/components/topic/hkfxy/MaskForm.vue'))
const RightFixedNav = defineAsyncComponent(() => import('~/components/topic/hkfxy/RightFixedNav.vue'))
const ImgMask = defineAsyncComponent(() => import('~/components/topic/hkfxy/ImgMask.vue'))
const VideoMask = defineAsyncComponent(() => import('~/components/topic/hkfxy/VideoMask.vue'))

import { onMounted, ref } from "vue";

const about = ref([
    "【香港教育文化之旅】第12期在1月21日落下帷幕，为参访家庭带来了一场难忘的教育探索之旅。在教育资源多元且优质的当下，香港的顶尖中学以其独特的教育理念和卓越的教学成果吸引着众多家长和学生的目光。为了让大家深入了解香港的中学教育，国际教育网精心策划并圆满完成了这次独家定制的香港名校探访团活动。",
    "此次探访团深入体验了香港七所顶尖中学，路线巧妙地覆盖了香港核心教育区，真正做到了一站式领略名校风采。在2天的行程中家长们体验了一场充实又震撼的教育探索之旅。",
    "国际教育网专家团队的全程陪伴，是这次探访团的一大亮点。在每一所学校，专家们都凭借着深厚的专业知识和丰富的行业经验，为家长们深度解析学校特色与教学理念。他们不仅讲解了学校的课程设置、师资力量，还分享了国际教育的发展趋势，让家长们对每所学校有了全方位、深层次的认识。",
    "校长和老师们的全程相伴导览，更是让来访家庭有机会近距离探索校园细节，饱览校园风光。从现代化的教学楼到设施完备的实验室，从充满艺术氛围的艺术教室到活力四射的运动场，大家亲身感受着每所学校独特的校园文化。校长和老师们热情地解答大家的疑问，分享学校的历史故事和办学成果，让家长和学生对学校的了解不再停留在表面。",
    "校长亲授的普通话升学讲座，无疑是本次探访团的重头戏。在讲座中，校长们精准对接香港教育体系，详细介绍了香港中学的升学途径、招生政策以及如何做好升学准备。他们用丰富的案例和实用的建议，为家长们和学生们答疑解惑，帮助大家前瞻布局择校规划蓝图，量身定做个性化升学路径。许多家长表示，这场讲座让他们对孩子的升学之路有了清晰的方向，收获颇丰。"
]);
const school = ref([
    {
        path: "https://schoollist.ieduchina.com/school/cfss/",
        name: "中华基金中学",
        logo: "https://www.ieduchina.com/uploadfile/college/202309/1695808686.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/calfsshk/",
        name: "迦密爱礼信中学",
        logo: "https://zhaosheng.ieduchina.com/Upload/File/202402/65c325d6557ee.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/tmcss/",
        name: "屯门天主教中学",
        logo: "https://zhaosheng.ieduchina.com/Upload/File/202402/65c1cbccbbee0.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/pyc/",
        name: "沙田培英中学",
        logo: "https://www.ieduchina.com/uploadfile/college/202310/1698053489.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/evangel/",
        name: "播道书院",
        logo: "https://www.ieduchina.com/uploadfile/college/202401/1704353550.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/cccsshk/",
        name: "新界西贡坑口区郑植之中学",
        logo: "https://zhaosheng.ieduchina.com/Upload/File/202402/65d1a9a706b6e.jpg"
    },
    {
        path: "https://schoollist.ieduchina.com/school/uccke/",
        name: "汇基书院(东九龙)",
        logo: "https://www.ieduchina.com/uploadfile/college/202310/1697439246.jpg"
    }
])

const liangdian = reactive(["独家定制香港名校探访团，深入体验香港六所顶尖中学", "路线覆盖香港核心教育区，一站式领略名校风采", "国际教育网专家团队讲解，深度解析学校特色与教学理念", "校长老师全程相伴导览，探索校园细节，饱览校园风光", "校长亲授普通话升学讲座，精准对接香港教育体系", "前瞻布局择校规划蓝图，量身定做个性化升学路径"])
const xingcheng = reactive([
    {
        title: "每日行程",
        list: [
            {
                title: "2025年01月20日访校行程安排",
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
                        title: "中华基金中学",
                        path: "https://schoollist.ieduchina.com/school/cfss/",
                        desc: [
                            "学校类别： 直资、男女校，全年学费约$19,820",
                            "Banding：Band 1B",
                            "创校历史： 2000 年创立",
                            "办学团体：中华历史文化教育基金会有限公司让学生确立正面的价值观，不断追求卓越；在学习及社化教育上养成正确的态度，发展专业才能，追求终身学习；培养责任心和投入感，成为未来社会具教养及开放思维的理想公民，共创未来。",
                            "教学语言： 学校以英文为主要教学语言",
                            "全校语文政策：以英语为主要授课语言，全部英语老师基准试达标，学生英语水平达到当局在「中学教学语言政策」中的英语教学要求。中一设英文适应课程，初中一、二中国语文选用普通话教学。学校非常重视提升「两文三语」能力。此外，初中生可在课堂学习日语及西班牙语。高中学生亦可选读其他语言科目，如法语及日语。",
                            "办学宗旨：学校致力提供优质教育；运用现代科技及方法，培养学生的领导才能、批判思考、创造力和自信心；增进学生的知识和技能，为他们日后贡献社会作好准备。",
                            "学校有联系小学：仁德天主教小学、青山天主教小学 在中学统一派位，联系中学可为其联系小学保留最多25% 的学位。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/1c1d3e7f.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/b82e27d0.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/ba8c9875.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/fe1a699a.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/e5a5136b.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/1b2bf54e.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/3fe49dea.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/cc0bb275.jpg"
                            }
                        ]
                    },
                    {
                        time: "11:30-12:30",
                        title: "午餐加午休"
                    },
                    {
                        time: "12:30-13:30",
                        title: "交通"
                    },
                    {
                        time: "13:30-14:30",
                        title: "迦密爱礼信中学",
                        path: "https://schoollist.ieduchina.com/school/calfsshk/",
                        desc: [
                            "学校类别： 资助、男女校、基督教；位于葵青区",
                            "Banding：Band 2C–2B",
                            "创校历史： 1982 年创立",
                            "办学团体：基督教兴学会",
                            "校训：明道律己忠主善群",
                            "教学语言： 学校以中文为主要教学语言",
                            "全校语文政策：中一至中三以母语教学为主，数学及综合科学科英语教学元素占高比重，所有科目均有跨科目英语学习元素。中四至中六的选修科目中，数学、生物、化学科设中、英文组及数学延伸单元，让学生因应语文能力、升学目标，选择合适组别。",
                            "办学宗旨：学校为一所提供全人教育的基督教中学，学校不断提高学术水平，帮助同学认识神，建立正确的人生观和价值观、慎思明辨、律己尽责、孝顺父母、忠主善群。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/0c3280e7.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/41f1c52a.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/88edad7d.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/8fcae8c2.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/ea629427.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/c067b113.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/e0b4e0ac.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/0960f590.jpg"
                            }
                        ]
                    },
                    {
                        time: "14:30-15:30",
                        title: "交通"
                    },
                    {
                        time: "15:30-16:50",
                        title: "屯门天主教中学",
                        path: "https://schoollist.ieduchina.com/school/tmcss/",
                        desc: [
                            "学校类别：资助、男女校、天主教；位于屯门区",
                            "Banding：Band 2",
                            "创校历史： 1987 年创立",
                            "办学团体：天主教香港教区",
                            "校训：真、谦、恒、诚",
                            "教学语言： 学校以英文为主要教学语言",
                            "全校语文政策：1：学校初中大部份班别以英语授课，除中文科、中国历史、普通话、生活与社会、宗教及伦理、阅读课外，其余科目均以英语教学。部份学生英文、数学和科学以英语教学，以便照顾学习差异；2：高中部份科目衔接初中，维持以英语为授课语言。",
                            "办学宗旨：传扬耶稣基督爱和公义的福音精神，培养学生以勇气实践伦理道德，成己达人；培养学生运用智慧，应用所学，创造美好的人生，贡献社群。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/18f5f5ad.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/1c90b6fc.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/94e94221.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/36167d1e.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/963ba2cd.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/82858a5d.jpg"
                            }
                        ]
                    },
                    {
                        time: "17:00-18:00",
                        title: "回程"
                    }
                ]
            },
            {
                title: "2025年01月21日访校行程安排",
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
                        title: "沙田培英中学",
                        path: "https://schoollist.ieduchina.com/school/pyc/",
                        desc: [
                            "学校类别： 资助、男女校、基督教；位于沙田区",
                            "Banding：Band 1B–1A",
                            "创校历史： 1978 年创立",
                            "办学团体：中华基督教会香港区会",
                            "校训：信、望、爱",
                            "教学语言： 学校以英文为主要教学语言",
                            "全校语文政策：学校初中除中文有关科目、生活与社会科及宗教教育科（基督教）外，全以英语授课。着重英语教学，致力栽培学生达致中、英兼擅。",
                            "办学宗旨：以基督精神办学，注重学生在德、智、体、群、美、灵的发展；鼓励学生扩阔视野，发挥潜能，并提升学生人文素养，培育领袖，以建立丰盛生命，贡献社会。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/ce67c924.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/3f5bbec8.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/a8150ab5.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/a5bd2b98.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/e2102044.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/347a2401.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/6cd5b9b6.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/15bba9a1.jpg"
                            }
                        ]
                    },
                    {
                        time: "10:20-11:00",
                        title: "交通"
                    },
                    {
                        time: "11:00-12:00",
                        title: "播道书院",
                        path: "https://schoollist.ieduchina.com/school/evangel/",
                        desc: [
                            "学校类别： 直资、男女校、基督教，全年学费约$28,700",
                            "创校历史： 2006 年创立",
                            "办学团体：香港基督教播道会联会",
                            "校训：播扬真理，道育幼苗",
                            "教学语言：学校以英文为主要教学语言",
                            "全校语文政策：学校中、英并重；采用英语为主要教学语言，亦会努力推动普通话的学习，好让同学掌握全世界最通用的两个口语，有所需之口语能力来走遍中国、踏足世界。学校实施粤教中政策，全面促进中国语文之听、说、读、写、品德、情意、高阶思维、文化、文学、自学十大能力范畴之学习。",
                            "办学宗旨：以圣经真理为基础，为青少年提供全人教育及优质教育，建立正确生活价值观，启发潜能，以达致灵、德、智、体、群、美均衡发展。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/796609e0.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/b88ac3f1.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/37a0e5d0.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/45f1df96.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/5d3d2563.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/9b6bf56d.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/7d164a5c.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/8fff513b.jpg"
                            }
                        ]
                    },
                    {
                        time: "12:20-13:10",
                        title: "午餐加午休"
                    },
                    {
                        time: "13:10-13:40",
                        title: "交通"
                    },
                    {
                        time: "13:40-15:00",
                        title: "新界西贡坑口区郑植之中学",
                        path: "https://schoollist.ieduchina.com/school/cccsshk/",
                        desc: [
                            "学校类别：资助、男女校；位于西贡区",
                            "Banding：Band 3A–2C",
                            "创校历史：1979 年创立",
                            "办学团体：新界西贡坑口区中学有限公司",
                            "教学语言： 学校以中文为主要教学语言",
                            "全校语文政策：学校由中一开始，在数学（中一至中三）、科学（中一至中二）、物理（中三）、化学（中三）及生物（中三）各科辅以英语延展教学活动，积极提升同学语文水平。从课程设计、教学法及增润措施，巩固同学英语能力。",
                            "办学宗旨：学校着重发展全人教育，并培育学生积极面对知识型社会的挑战。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/e7fd4c1d.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/c0414147.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/4df213ae.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/92c894a0.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/3b44c525.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/319f6e32.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/9b864659.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/8e98d67a.jpg"
                            }
                        ]
                    },
                    {
                        time: "15:00-15:30",
                        title: "交通"
                    },
                    {
                        time: "15:30-16:30",
                        title: "汇基书院(东九龙)",
                        path: "https://schoollist.ieduchina.com/school/uccke/",
                        desc: [
                            "学校类别：直资、男女校、基督教，全年学费约$29,800",
                            "Banding：Band 1B–1A",
                            "创校历史：2003 年创立",
                            "办学团体：汇基书院有限公司",
                            "校训：明道尚主勤学立德",
                            "教学语言： 学校以英文为主要教学语言",
                            "全校语文政策：学校以英语为教学语言，大部份学科均以英语授课。初中个别班别以普通话教授中国语文。除两文三语外，亦开办日语和法文班。",
                            "办学宗旨：学校秉着神的爱和圣经真理，为每位学生提供优质的基督教全人教育，协助学生发展上帝所赐的天赋潜质，成为有信仰、有道德、有知识、有文化及有理想的人。",
                        ],
                        images: [
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/06eef388.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/73139b2f.jpg"
                            },
                            {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/88cd857e.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/bfc3de59.jpg"
                            }, {
                                image: "//www.ieduchina.com/topic/2025/hk12/images/5d7eebf7.jpg",
                                preview: "//www.ieduchina.com/topic/2025/hk12/images/7e2e218d.jpg"
                            }
                        ]
                    },
                    {
                        time: "16:30-17:00",
                        title: "颁发结营证书"
                    },
                    {
                        time: "17:00-17:30",
                        title: "回程"
                    },
                ]
            }
        ]
    }
])
const arrImg = ref("//www.ieduchina.com/topic/2025/hk13/images/70084d28.png")
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
    title: "香港教育文化之旅第12期-香港探校 - 国际教育网",
    meta: [
        {
            name: "keywords",
            content: "香港探校"
        },
        {
            name: "description",
            content: "【香港教育文化之旅】第12期在1月21日落下帷幕，为参访家庭带来了一场难忘的教育探索之旅。在教育资源多元且优质的当下，香港的顶尖中学以其独特的教育理念和卓越的教学成果吸引着众多家长和学生的目光。为了让大家深入了解香港的中学教育，国际教育网精心策划并圆满完成了这次独家定制的香港名校探访团活动。"
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
<style lang="less" scoped>
.hk12 {
    --primary: #273770;
    --next: #A13424;
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
    background-color: #273770;
}

section.green>div>h3 {
    color: #fff;
}
</style>