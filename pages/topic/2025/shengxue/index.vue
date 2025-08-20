<script setup>
import logo from '~/assets/topic/2025/shengxue/logo@1x.png'
import banner1 from '~/assets/topic/2025/shengxue/banner1.png'
import banner2 from '~/assets/topic/2025/shengxue/banner2.png'
import banner3 from '~/assets/topic/2025/shengxue/banner3.png'
import banner4 from '~/assets/topic/2025/shengxue/banner4.jpg'
import banner5 from '~/assets/topic/2025/shengxue/banner5.png'
import banner6 from '~/assets/topic/2025/shengxue/banner6.png'

import ywtext_icon1 from '~/assets/topic/2025/shengxue/容器@1x.png'
import ywtext_icon2 from '~/assets/topic/2025/shengxue/容器@1x (1).png'
import ywtext_icon3 from '~/assets/topic/2025/shengxue/容器@1x (2).png'
import ywtext_icon4 from '~/assets/topic/2025/shengxue/容器@1x (3).png'
import ywtext_icon5 from '~/assets/topic/2025/shengxue/容器@1x (4).png'

import _offer_1 from '~/assets/topic/2025/shengxue/offer/offer/资源 1.png'
import _offer_2 from '~/assets/topic/2025/shengxue/offer/offer/资源 2.png'
import _offer_3 from '~/assets/topic/2025/shengxue/offer/offer/资源 3.png'
import _offer_4 from '~/assets/topic/2025/shengxue/offer/offer/资源 4.png'
import _offer_5 from '~/assets/topic/2025/shengxue/offer/offer/资源 5.png'
import _offer_6 from '~/assets/topic/2025/shengxue/offer/offer/资源 6.png'
import _offer_7 from '~/assets/topic/2025/shengxue/offer/offer/资源 7.png'
import _offer_8 from '~/assets/topic/2025/shengxue/offer/offer/资源 8.png'
import _offer_9 from '~/assets/topic/2025/shengxue/offer/offer/资源 9.png'
import _offer_10 from '~/assets/topic/2025/shengxue/offer/offer/资源 10.png'
import _offer_11 from '~/assets/topic/2025/shengxue/offer/offer/资源 11.png'
import _offer_12 from '~/assets/topic/2025/shengxue/offer/offer/资源 12.png'
import _offer_13 from '~/assets/topic/2025/shengxue/offer/offer/资源 13.png'
import _offer_14 from '~/assets/topic/2025/shengxue/offer/offer/资源 14.png'
import _offer_15 from '~/assets/topic/2025/shengxue/offer/offer/资源 15.png'
import _offer_16 from '~/assets/topic/2025/shengxue/offer/offer/资源 16.png'
import _offer_17 from '~/assets/topic/2025/shengxue/offer/offer/资源 17.png'
import _offer_18 from '~/assets/topic/2025/shengxue/offer/offer/资源 18.png'
import _offer_19 from '~/assets/topic/2025/shengxue/offer/offer/资源 19.png'
import _offer_20 from '~/assets/topic/2025/shengxue/offer/offer/资源 20.png'
import _offer_21 from '~/assets/topic/2025/shengxue/offer/offer/资源 21.png'
import _offer_22 from '~/assets/topic/2025/shengxue/offer/offer/资源 22.png'
import _offer_23 from '~/assets/topic/2025/shengxue/offer/offer/资源 23.png'
import _offer_24 from '~/assets/topic/2025/shengxue/offer/offer/资源 24.png'

import offer1 from '~/assets/topic/2025/shengxue/offer/1.png'
import offer2 from '~/assets/topic/2025/shengxue/offer/2.png'
import offer3 from '~/assets/topic/2025/shengxue/offer/3.png'
import offer4 from '~/assets/topic/2025/shengxue/offer/4.png'
import offer5 from '~/assets/topic/2025/shengxue/offer/5.png'
import offer6 from '~/assets/topic/2025/shengxue/offer/6.png'
import offer7 from '~/assets/topic/2025/shengxue/offer/7.png'
import offer8 from '~/assets/topic/2025/shengxue/offer/8.png'
import offer9 from '~/assets/topic/2025/shengxue/offer/9.png'
import offer10 from '~/assets/topic/2025/shengxue/offer/10.png'
import offer11 from '~/assets/topic/2025/shengxue/offer/11.png'
import offer12 from '~/assets/topic/2025/shengxue/offer/12.png'
import offer13 from '~/assets/topic/2025/shengxue/offer/13.png'
import offer14 from '~/assets/topic/2025/shengxue/offer/14.png'
import offer15 from '~/assets/topic/2025/shengxue/offer/15.png'
import offer16 from '~/assets/topic/2025/shengxue/offer/16.png'
import offer17 from '~/assets/topic/2025/shengxue/offer/17.png'
import offer18 from '~/assets/topic/2025/shengxue/offer/18.png'
import offer19 from '~/assets/topic/2025/shengxue/offer/19.png'
import offer20 from '~/assets/topic/2025/shengxue/offer/20.png'
import offer21 from '~/assets/topic/2025/shengxue/offer/21.png'
import offer22 from '~/assets/topic/2025/shengxue/offer/22.png'
import offer23 from '~/assets/topic/2025/shengxue/offer/23.png'
import offer24 from '~/assets/topic/2025/shengxue/offer/24.png'
import offer25 from '~/assets/topic/2025/shengxue/offer/25.png'
import offer26 from '~/assets/topic/2025/shengxue/offer/26.png'



import offer_1 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/25.4.29-香港啟曆學校-南京英国学校Y10在讀.png'
import offer_2 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.7-录取圣方济爱德小学.png'
import offer_3 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.8-Y4录取-香港耀中国际学校.png'
import offer_4 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.11-順德聯誼總會翁祐中學录取.png'
import offer_5 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.17-将军澳香岛中学-浙江公立中學在讀G8录取.png'
import offer_6 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.17-录取香港青年协会李兆基书院.png'
import offer_7 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.1.17-羅定邦中學廣東省惠州市大亞灣區外語實驗學校-G10录取.png'
import offer_8 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.5-香港茵维特录取-深圳第三高级中学国际部G11在读.png'
import offer_9 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.5-香港茵维特录取-香港一諾中學在讀Y10.png'
import offer_10 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.6-九龍塘學校-香港直資中學在讀G9录取.png'
import offer_11 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.19香港培道小學幼稚園.png'
import offer_12 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.19-香港斯坦福美國學校Y9录取.png'
import offer_13 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.24-香港紫荊書院.png'
import offer_14 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.2.ESF-智新书院-录取香港威雅国际学校在读.png'
import offer_15 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.3.1-中華基金中學.jpg'
import offer_16 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.3.12-香港墨尔文.png'
import offer_17 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.3.18-香港李宝椿世界联合书院-成都国际学校在读G10录取.png'
import offer_18 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.3.24-新加坡国际录取Y4.png'
import offer_19 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.4.1-培僑書院录取-在讀G9.png'
import offer_20 from '~/assets/topic/2025/shengxue/25.01-25.04香港学校录取海报/2025.4.1-苏浙公学录取-深圳公立小學在讀G6.png'
import offer_21 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/25.7.13-李国宝中学录取-北京市廣渠門中學--在讀G9.png'
import offer_22 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.5.4李寶椿聯合世界書院-佛山市南海外國語高級中學，G10在讀.jpg'
import offer_23 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.5.13-香港李宝椿世界联合书院-惠州华润小径湾贝赛思国际学校，G10在讀.png'
import offer_24 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.5.15-香港耀中國際學校录取-香港美國國際學校，G8在讀.png'
import offer_25 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.5.29香港英基港岛中學（國際學校）-G9在讀.png'
import offer_26 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.6.15-香港加拿大國際學校在讀G8录取.png'
import offer_27 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.6.16-保良局顏寶鈴書院在讀G9录取.png'
import offer_28 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.10-基督教中國佈道會聖道迦南書院.png'
import offer_29 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.10-將軍澳香島中學.png'
import offer_30 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.10-培僑中學-G6录取.png'
import offer_31 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.10-香島中學-G6录取.png'
import offer_32 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.10-香島中學-G7录取.png'
import offer_33 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-黃棣珊紀念中學-禮賢會彭學高紀念中學G7在讀.png'
import offer_34 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-黃棣珊紀念中學-羅定邦中學G9在讀.png'
import offer_35 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-羅定邦中學录取-荔林小學.png'
import offer_36 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-羅定邦中學录取-南山中英文協同港籍學生部G6录取.png'
import offer_37 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-羅定邦中學深圳前海哈罗港人子弟学校G6.png'
import offer_38 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.11-香港培英中学-中一在读.png'
import offer_39 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-基督教聖約教會堅樂中學录取-深圳大學附屬實驗中學-在讀G10.png'
import offer_40 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-基督教香港信義會心誠中學录取-深圳市福田區外國語學校-在讀G6.png'
import offer_41 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-迦密愛禮信小學录取-福建省福州市錢塘小學-在讀G5.png'
import offer_42 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-禮賢會彭學高紀念中學录取-深圳大學附屬實驗中學-在讀G10.png'
import offer_43 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-圣道迦南书院-東莞市東華初級中學-在讀G8.png'
import offer_44 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-聖文德書院-录取.png'
import offer_45 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-聖文德書院录取-蘇浙公學-在讀G10.png'
import offer_46 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-順德聯誼總會梁潔華小學录取-福建省福州市錢塘小學-在讀G5.png'
import offer_47 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-田家炳中學录取-五旬節于良發小學-在讀G6.png'
import offer_48 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-五旬節中學录取-中山市迪茵公學--在讀G6.png'
import offer_49 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-香島中學-深圳香港培僑書院龍華信義學校-在讀G9.png'
import offer_50 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.13-香港威雅學校录取-德萃小學-在讀G5.png'
import offer_51 from '~/assets/topic/2025/shengxue/25.05-25.07香港学校录取海报/2025.7.17-順德聯誼總會翁祐中學录取-深圳市蛇口育才教育集團育才三中-在讀G9.png'
// import offer_52 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/25-南山中英文港籍班-G7录取.jpg'
import offer_53 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.1.24-方方乐趣-G5录取.jpg'
import offer_54 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.03-广州暨大录取-谭世华.jpg'
import offer_55 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.3.19-广州暨大港澳子弟学校（ASJ）-中山民办国际化学校在读G7录取.jpg'
import offer_56 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.04-广州暨大录取-G8王子俊.jpg'
import offer_57 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.05-福景外国语-G9录取.jpg'
import offer_58 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.5.23-G8培侨录取.jpg'
import offer_59 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.5.26 G6培侨录取.jpg'
import offer_60 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025.5.26-深圳培侨信义-G7录取offer.jpg'
import offer_61 from '~/assets/topic/2025/shengxue/2025内地国际学校录取/2025-深圳外国语湾区学校-中六录取.jpg'

import fwlc from '~/assets/topic/2025/shengxue/资源 2@1x.png'

import teacher1 from '~/assets/topic/2025/shengxue/teacher/图片1.png'
import teacher2 from '~/assets/topic/2025/shengxue/teacher/图片2.png'
import teacher3 from '~/assets/topic/2025/shengxue/teacher/图片3.png'
import teacher4 from '~/assets/topic/2025/shengxue/teacher/图片4.png'
import teacher5 from '~/assets/topic/2025/shengxue/teacher/图片5.png'
import teacher6 from '~/assets/topic/2025/shengxue/teacher/图片6.png'
import teacher7 from '~/assets/topic/2025/shengxue/teacher/图片7.png'
import teacher8 from '~/assets/topic/2025/shengxue/teacher/图片8.png'
import teacher9 from '~/assets/topic/2025/shengxue/teacher/图片9.png'
import teacher10 from '~/assets/topic/2025/shengxue/teacher/图片10.png'
import teacher11 from '~/assets/topic/2025/shengxue/teacher/图片11.png'
import teacher12 from '~/assets/topic/2025/shengxue/teacher/图片12.png'
import teacher13 from '~/assets/topic/2025/shengxue/teacher/图片13.png'
import teacher14 from '~/assets/topic/2025/shengxue/teacher/图片14.png'
import teacher15 from '~/assets/topic/2025/shengxue/teacher/图片15.png'
import teacher16 from '~/assets/topic/2025/shengxue/teacher/图片16.png'
import teacher17 from '~/assets/topic/2025/shengxue/teacher/图片17.png'
import teacher18 from '~/assets/topic/2025/shengxue/teacher/图片18.png'

import addressicon from '~/assets/topic/2025/shengxue/map-pin-fill@1x.png'
import telicon from '~/assets/topic/2025/shengxue/容器@1x (5).png'

import fixed1 from '~/assets/topic/2025/shengxue/37cfcae2.png'
import fixed2 from '~/assets/topic/2025/shengxue/6f33e6c5.png'
import fixed3 from '~/assets/topic/2025/shengxue/7cc474eb.png'
import fixed4 from '~/assets/topic/2025/shengxue/yuyue@1x.png'
import fixed1_ from '~/assets/topic/2025/shengxue/fc33df53.png'
import fixed2_ from '~/assets/topic/2025/shengxue/ec431536.png'
import fixed3_ from '~/assets/topic/2025/shengxue/7cf45f6b.png'
import fixed4_ from '~/assets/topic/2025/shengxue/yueyue@1x.png'

import xqdz from '~/assets/topic/2025/shengxue/资源 1@1x.png'

import ewm1 from '~/assets/topic/2025/shengxue/image@1x.png'
import ewm2 from '~/assets/topic/2025/shengxue/image@1x (1).png'

import bg from '~/assets/topic/2025/shengxue/bg.png'

const teacher = [
  {
    name: "connie",
    image: teacher17,
    desc: '香港大学翻译硕士，香港浸会大学翻译本科，9年教学经验，曾任教于香港及内地国际学校，熟悉DSE、雅思托福及中考体系。雅思阅读听力满分，辅导学生获DSE 5**及中考115+高分。持香港PGDE及中国教师资格证，教学成果显著。'
  },
  {
    name: "Nathalie",
    image: teacher18,
    desc: '香港浸会大学翻译硕士，北京理工大学英语本科，拥有扎实的学术背景和丰富的国际教育经验。曾在香港英基国际学校教授IB课程，专精于小学全科、DSE及IB英语文学教学，擅长激发学生英语学习热情，提升语言应用能力，助力学生成功申请国际名校。持有雅思8分、英语专八及CATTI二级翻译证书。'
  },
  {
    name: "kenny",
    image: teacher1,
    desc: '毕业于香港中文大学物理系，获二级荣誉学位，具备扎实的学术背景。其成长经历独特，小学从内地转至香港就读，后考入大埔区迦密圣道中学，最终升读顶尖学府，深谙两地教育差异及香港升学路径。拥有多年丰富教学经验，涵盖小学至中学数学、物理辅导，曾任职于香港补习社及内地教育机构。擅长个性化教学，在短期内帮助中六学生将DSE数学、物理成绩提升至少2个等级，助力升入聖公會莫壽增會督中學、王肇枝中學等名校；并指导多名学生在校内数理测验中取得年级前五及满分。注重培养逻辑思维，将生活案例融入教学，显著提升学生独立思考能力。教学风格耐心细致，善于因材施教，通过精准评估学生强弱项制定针对性方案，同时以鼓励式沟通建立信任，深受学生及家长好评。'
  },
  {
    name: "janet",
    image: teacher2,
    class: "t2",
    desc: '毕业于美国华盛顿大学（University of Washington），获教育基础文学学士学位，具备扎实的教育学理论及跨文化教学背景。高中就读于香港Band 1名校圣嘉勒女校，深谙香港教育体系及DSE考试要求，同时拥有丰富的国际教育经验。教学经验多元，曾于美国西雅图小学执教，熟悉美式教育体系；并专注托福辅导，擅长在短期内帮助学生提升成绩10-30分。此外，长期从事香港国际学校入学备考及同步衔接课程，通过强化听、说、读、写四大技能，助力学生考入福建中学、香岛中学等名校，平均成绩提升10分以上。教学风格生动互动，注重语言实际应用，结合情境对话、角色扮演等方式，激发学生自信表达，在轻松氛围中高效提升英语能力。'
  },
  {
    name: "Mina",
    image: teacher3,
    class: "t3",
    desc: '毕业于香港中文大学统计学专业，并以优异成绩毕业。数学基础扎实，高中就读于香港本地传统名校，DSE数学获5级佳绩。具备多年丰富教学经验，曾任职于香港补习社及奥数机构，累计辅导数百名中小学生。教学范围覆盖小学至高中常规数学及奥数，精通香港本地教材及DSE考试体系，同时对IB等国际课程体系亦有涉猎。擅长个性化教学方案设计，其学生平均成绩显著提升3-%-50%，并成功助力众多学生考入理想的学校。教学能力突出，能无缝衔接小、初、高不同学段课程，并采用数据化管理建立学生成长档案以量化进度。注重激发学习兴趣，善于将数学知识与现实应用结合。'
  },
  {
    name: "William",
    image: teacher4,
    class: 'top3',
    desc: '中学时期就读于香港传统名校英华书院，接受全英文教育，英语水平接近母语者，深谙英式教育体系及文化。毕业于澳大利亚伍伦贡大学，被誉为世界五星级大学，主修计算机软件工程，具备国际化的学术背景。拥有丰富的教学经验，擅长教授小学至高中全科，尤其精通DSE英文、数学（M1/M2），并自主研发备考教材，帮助学生快速掌握答题技巧，显著提升成绩至3-4级。熟悉国际学校入学考试体系（如MAP、CAT4等），成功辅导学生考入汉基、沪江维多利亚、新加坡国际等顶级国际学校，以及香岛中学、李国宝中学等本地名校。教学风格生动互动，注重理论与实践结合，通过系统化的方法培养学生高效学习习惯。持有香港高考英语A级（Top 0.3%）的优异语言成绩，确保教学的专业性与权威性。'
  },
  {
    name: "sam",
    image: teacher5,
    desc: '小学、中学就读于香港英文学校，高中主修物理、化学，熟悉双语教育体系与考核方式。香港科技大学能源工程学士，DSE数、理、化5分获得者，拥有7年A-Level/IB/AP数理化全科教学经验。他独创"双语三维教学法"，通过中文解构概念、英语强化表达、工程案例辅助理解，帮助学员高效掌握国际课程。2022至今，他指导的学员86%获得A-Level A*-A，32人成功考入英国G5/港三大名校，基础班学员平均提升2.5个等级。Sam老师擅长针对不同基础的学生定制教学方案，并提供免费学术诊断和升学规划服务，是深受家长信赖的国际课程金牌导师。'
  },
  {
    name: "melody",
    image: teacher6,
    class: "t6",
    desc: '拥有香港教育大学TESOL硕士（亚洲排名第二）和加拿大滑铁卢大学本科，持有雅思8.0的优异成绩。8年教学经验，在雅思、托福培训、国际学校同步和香港学校备考等方面经验丰富。成功帮助88%的学生将雅思成绩从4.5-5.5提升至6.0+，其中20%突破6.5+高分。精通IB/AP/A-Level等国际课程体系，特别擅长国际学校入学备考，所辅导学生100%成功入读深国交、贝赛思、汉基等顶尖国际学校，以及香港圣士提反、颜宝龄、李国宝、香岛中学等Band1名校。其教学融合学术英语强化、标化考试技巧与国际课程衔接，为每位学生量身定制升学方案。'
  },
  {
    name: "frannie",
    image: teacher7,
    desc: '毕业于香港浸会大学金融数学专业毕业的双语数学教育专家，拥有7年以上国际学校数学教学经验。作为资深双语数学教师，她精通大陆、香港及国际课程体系（包括DSE、A-level、AP、IB、IGCSE等），特别擅长MAP、CAT4等国际考试备考辅导。她已帮助数百名学生成功考入香港圣士提反、英华书院、香岛中学等传统名校，及培侨信义、城市绿洲、贝赛思、广州暨大等国际学校，其中更有学生以数学第一名的成绩入读新哲文院。Frannie老师教学风格亲切耐心，善于通过个性化方案激发学生学习兴趣，其学生在3-6个月内平均提升20多分。'
  },
  {
    name: "jess",
    image: teacher8,
    class: 't4',
    desc: '毕业于澳洲国立大学，持有雅思8分（听力8.5）和TESOL高阶证书。凭借其接近母语者的英语能力和对西方教育体系的深刻理解，她专注于英语标化考试辅导和国际课程教学。Jess老师精通雅思、DSE等考试体系，擅长使用National Geographic Learning等国际教材，通过个性化教学方法帮助学生显著提升成绩。其教学风格轻松活泼且严谨高效，注重培养学生英语思维能力和跨文化理解，所辅导学生全部成功升入目标学校。特别擅长针对港系学校和国际学校的备考需求，提供精准的语言能力诊断和因材施教方案。'
  },
  {
    name: "天悦",
    image: teacher9,
    desc: '持有伦敦国王学院教育学硕士学位，本科阶段参与联合国夏令营翻译工作，具备国际视野。中学就读于深圳外国语学校（深圳四大名校之一），接受多年全英教育，奠定卓越的英语能力。帮助学生进行雅思培训，独创"四维提分法"，已帮助300+学生实现1-1.5分跃升（5.5→6.5-7分）。精通国际学校衔接课程，擅长诊断英系/港系教材（如朗文、牛津等）学习痛点，成功辅导学生考入顶尖香港学校。尤其擅长帮助内地学生突破英语学习瓶颈，近3年学员名校录取率达92%。'
  },
  {
    name: "alex",
    image: teacher10,
    class: 'top8',
    desc: '英文母语者，拥有纯正美式教育背景，高中时期更荣获奥巴马总统签名的学术成就奖。凭借母语级英语优势，五年来已成功帮助数百名学生进入贝赛思、深国交、哈罗等顶尖国际学校，以及香港汉基、沪江维多利亚、耀中等名校。精通DSE、美系CCSS/AP、英系IGCSE及IB课程体系，特别擅长MAP/CAT4等国际入学考试辅导，同时是雅思/托福/SAT快速提分专家。其教学涵盖从KET基础到学术写作提升全阶段，更提供个性化升学规划服务，近年学生录取率达98%。'
  },
  {
    name: "Alex chen",
    image: teacher11,
    desc: '拥有北京师范大学统计学硕士学位，数学功底深厚，中高考数学成绩优异，高考数学143分。作为资深国际课程专家，精通DSE、A-Level、AP等数学课程体系，独创"符号系统对照教学法"有效解决中英数学思维转换难题。教学成果显著，所带学生获牛津、帝国理工等世界名校录取；开发的"思维可视化看板"和"三位一体讲义”荣获校区教学创新奖。特别擅长通过生活化类比解析抽象数学概念，针对大湾区考生特点设计的AMC思维强化训练效果突出。善于从知识本质出发，通过分层题库和变式训练帮助学生突破学习瓶颈，教学风格细致、耐心。'
  },
  {
    name: "Hazel",
    image: teacher12,
    class: "t12",
    desc: '拥有香港城市大学语言学硕士和武汉大学英语本科的卓越学历背景，持有雅思7.5、托福105高分及TESOL国际认证。凭借10年国际教育经验，精通DSE、A-Level、IB、AP等课程体系，在标化考试辅导方面成效显著。其教学成果突出，已助力数百名学生考入香港培侨、圣士提反等传统名校及深国交、贝赛思、哈罗等顶尖国际学校。特别注重笔试面试的实战辅导，学员国际学校录取率高达92%。作为融合内地扎实基础与香港国际视野的双师型人才，其数据驱动的个性化教学和跨文化浸润式培养深受家长信赖。'
  },
  {
    name: "charlotte",
    image: teacher13,
    class: "t13",
    desc: '香港中文大学应用英语语言学硕士，雅思8分，并拥有专业八级等多项英语教学资质。拥有扎实的英文基础、文学素养和丰富国际学校教学经验，擅长教授英文文学课程、国际学校/港系学校备考课程及雅思考试培训。教学风格生动活泼，其因材施教的教学方式和对North Star、Pathways、Longman EDGE等国际教材的熟练运用，使学生在学术英语能力和标化考试成绩上获得显著进步。'
  },
  {
    name: "kitty",
    image: teacher14,
    desc: '国际教育 IB 历史经济老师，历史与政治经济学文学学士，相关课程有统计学、国际政治、行为经济学、政治经济学、英国历史。具备多领域知识。实习经历丰富，在咨询、营销领域有实践，能进行财务建模、数字推广等工作。活动组织能力强，举办文化音乐会等。具备出色的跨文化沟通与问题解决能力，性格外向，适应力强，乐于团队合作。掌握多种语言，熟练使用办公软件，实践与技能兼备。'
  },
  {
    name: "john",
    image: teacher15,
    desc: '中山大学汉语言文学学士及英国莱斯特大学国际教育硕士，作为粤语母语者和岭南文化研究者，拥有1500+课时的国际学校语文教学经验。他独创"文化浸润式"教学法，成功帮助学员考入香港Band1-2学校，并开发了特色"粤语快速提升"课程。陈老师深谙香港DSE中文考试体系，擅长通过生动有趣的课堂激发学习兴趣，能精准辅导从幼儿到成人的粤语学习需求，尤其擅长香港地道粤语发音训练和粤普语言差异解析，其学员在语言能力和考试成绩上均取得显著提升。'
  },
  {
    name: "selena",
    image: teacher16,
    desc: '毕业于香港城市大学，具备国际化教育背景，高中就读于香港Band 1A传统名校圣杰灵女子中学，以英语为主要教学语言，奠定扎实的学术基础，英文接近母语水平。拥有丰富的国际学校教学经验，擅长辅导英语、数学、语文及经济等科目，精通DSE考试体系。教学过程中注重学情评估与个性化方案制定，采用数据化追踪系统（如学习档案与定期测评），帮助学生提升学习效率20%。独创“3E反馈法”（Example-Explanation-Encouragement），有效提高学生参与度35%，家长满意度达92%。教学风格严谨认真，致力于提升学生成绩，助力学生考入更高Banding的学校。'
  },
];

const address = [
  {
    title: '香港尖沙咀校区 '
  },
  {
    title: '深圳湾校区'
  },
  {
    title: '福田联合校区'
  },
  {
    title: '福田田面校区'
  },
  {
    title: '福田安托山校区'
  },
  {
    title: '深圳北校区'
  }
]

const ewm = [
  {
    image: ewm1,
    title: "扫码关注官方公众号"
  },
  {
    image: ewm2,
    title: "扫码咨询升学小助手"
  }
]


import { defineAsyncComponent, onMounted } from 'vue';

const Title = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Title.vue`))
const Footer = defineAsyncComponent(() => import(`~/components/topic/2025/shengxue/Footer.vue`))

const ywtext1 = [
  {
    icon: ywtext_icon1,
    title: '国际学校升学规划与备考',
    text: [
      {
        title: "英系学校",
        text: "深国交、城市绿洲、深大师院等"
      },
      {
        title: "美系学校",
        text: "贝赛思、万科梅沙书院、清澜山等"
      },
      {
        title: "港系学校",
        text: "培侨、民心、暨大等"
      }
    ]
  }, {
    icon: ywtext_icon2,
    title: '香港学校升学规划与备考',
    text: [
      {
        title: "升学目标",
        text: "港岛、九龙、新界以及香港本地名校及顶尖国际学校"
      },
      {
        title: "学校包括",
        text: "圣保罗、拔萃、圣士提反、汉基、哈罗、德瑞以及BAND1.2学校等"
      },
      {
        title: "香港身份咨询",
        text: "进修移民、高才、专才、优才"
      }
    ]
  }
]
const ywtext2 = [
  {
    icon: ywtext_icon3,
    title: '国际课程·香港本地课程',
    text: [
      {
        title: "课程体系",
        text: "DSE/IB/A-Level/IGCSE/AP"
      },
      {
        title: "科目覆盖",
        text: "英文、数学、中文、物理、化学、经济等"
      },
      {
        title: "课程模式",
        text: "一对一/小班教学/学期同步辅导"
      }
    ]
  },
  {
    icon: ywtext_icon4,
    title: '雅思·托福·国际竞赛',
    text: [
      {
        title: "语言标化",
        text: "IELTS/TOEFL/PTE/PET/SAT/ACT"
      },
      {
        title: "国际竞赛",
        text: "AMC/BPHO/USACO/模联/经济学术挑战等强化学术竞争力，助力申请全球名校"
      }
    ]
  }
]
const ywtext3 = [{
  icon: ywtext_icon5,
  title: '留学规划·背景提升',
  text: [
    {
      title: "海外留学",
      text: "牛剑G5、藤校、港三、英美港澳加世界前100院校规划"
    },
    {
      title: "升学流程",
      text: "模拟测评 →制定升学方案 →>背景提升 →>正式申请"
    },
    {
      title: "个性化规划",
      text: "根据学生目标与优势量身打造升学路径"
    }
  ]
}
]

const offers1 = [offer26, offer1, offer2, offer3, offer4, offer5, offer6, offer7, offer8, offer9, offer10, offer11, offer12, offer13, offer14, offer15, offer16, offer17, offer18, offer19, offer20, offer21, offer22, offer23, offer24, offer25]

const offers2 = [
  _offer_24, _offer_23, _offer_22, _offer_21, _offer_20, _offer_19, _offer_18, _offer_17, _offer_16, _offer_15, _offer_14, _offer_13, _offer_12, _offer_11, _offer_10, _offer_9, _offer_8, _offer_7, _offer_6, _offer_5, _offer_4, _offer_3, _offer_2, _offer_1,
  offer_1, offer_2, offer_3, offer_4, offer_5, offer_6, offer_7, offer_8, offer_9, offer_10, offer_11, offer_12, offer_13, offer_14, offer_15, offer_16, offer_17, offer_18, offer_19, offer_20, offer_21, offer_22, offer_23, offer_24, offer_25, offer_26, offer_27, offer_28, offer_29, offer_30, offer_31, offer_32, offer_33, offer_34, offer_35, offer_36, offer_37, offer_38, offer_39, offer_40, offer_41, offer_42, offer_43, offer_44, offer_45, offer_46, offer_47, offer_48, offer_49, offer_50, offer_51, offer_53, offer_54, offer_55, offer_56, offer_57, offer_58, offer_59, offer_60, offer_61]

const banner = [
  {
    image: banner1,
    title: "国际教育网升学中心"
  },
  {
    image: banner2,
    title: "一站式国际课程辅导与升学服务"
  },
  {
    image: banner3,
    title: "香港本地国际学校入学备考"
  },
  {
    image: banner4,
    title: "国际同步课程辅导"
  },
  {
    image: banner5,
    title: "雅思托福&国际竞赛"
  },
  {
    image: banner6,
    title: "留学规划、背景提升"
  }
]

onMounted(() => {
  $(() => {
    const swiper1 = new Swiper('.banner_swiper', {
      loop: true,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.banner_swiper_pagination',
        clickable: true,
      },
    });

    const swiper2 = new Swiper('.cg1', {
      effect: 'coverflow',
      centeredSlides: true,
      spaceBetween: -46,
      slidesPerView: 3,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 3,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.cg1-swiper-button-next',
        prevEl: '.cg1-swiper-button-prev',
      }
    });
    const swiper3 = new Swiper('.cg2', {
      effect: 'coverflow',
      centeredSlides: true,
      spaceBetween: -46,
      slidesPerView: 3,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 3,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.cg2-swiper-button-next',
        prevEl: '.cg2-swiper-button-prev',
      }
    });

    const swiper4 = new Swiper('.team_swiper2', {
      slidesPerView: 5,
      loop: true,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.team2-swiper-button-next',
        prevEl: '.team2-swiper-button-prev',
      }
    });

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          swiper1.autoplay.start();
        } else {
          swiper1.autoplay.stop();
        }
      });
    }, {
      threshold: 0.2
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          swiper2.autoplay.start();
        } else {
          swiper2.autoplay.stop();
        }
      });
    }, {
      threshold: 0.2
    });
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          swiper3.autoplay.start();
        } else {
          swiper3.autoplay.stop();
        }
      });
    }, {
      threshold: 0.2
    });
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          swiper4.autoplay.start();
        } else {
          swiper4.autoplay.stop();
        }
      });
    }, {
      threshold: 0.2
    });
    observer1.observe(document.querySelector('.banner_swiper'));
    observer2.observe(document.querySelector('.cg1'));
    observer3.observe(document.querySelector('.cg2'));
    observer4.observe(document.querySelector('.team_swiper2'));
    swiper2.el.onmouseenter = function () {
      swiper2.autoplay.stop();
    };
    swiper2.el.onmouseleave = function () {
      swiper2.autoplay.start();
    };
    swiper3.el.onmouseenter = function () {
      swiper3.autoplay.stop();
    };
    swiper3.el.onmouseleave = function () {
      swiper3.autoplay.start();
    };
    swiper4.el.onmouseenter = function () {
      swiper4.autoplay.stop();
    };
    swiper4.el.onmouseleave = function () {
      swiper4.autoplay.start();
    };

    $(".banner_swiper").hover(function () {
      swiper1.autoplay.stop();
    }, function () {
      swiper1.autoplay.start();
    })

    $("#next").click(function () {
      $(".cg1-swiper-button-next").click()
    })
    $("#next2").click(function () {
      $(".cg2-swiper-button-next").click()
    })
    $("#prev").click(function () {
      $(".cg1-swiper-button-prev").click()
    })
    $("#prev2").click(function () {
      $(".cg2-swiper-button-prev").click()
    })
    // $("#next3").click(function () {
    //   $(".team1-swiper-button-next").click()
    // })
    $("#next4").click(function () {
      $(".team2-swiper-button-next").click()
    })
    // $("#prev3").click(function () {
    //   $(".team1-swiper-button-prev").click()
    // })
    $("#prev4").click(function () {
      $(".team2-swiper-button-prev").click()
    })

    $("menu").on("click", "a", function () {
      const ids = $(this).attr("class")
      if (ids) {
        const scrollTop = $(`#${ids}`).offset().top - 30
        $("html,body").animate({
          scrollTop
        }, 500)
      }
    })

    $(window).scroll(function () {
      if ($(window).scrollTop() > $(window).height()) {
        $("#gotop").show();
      }
      else {
        $("#gotop").hide();
      }
    });
    $("#gotop").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
    });

    $('select').change(function () {
      $(this).css('color', '#333')
    })
    $(document).on('click', '#close', function () {
      $('#mask').removeClass('show')
      $(this).parents('#mask').find('form')[0].reset()
    })
    $(document).on('click', '#open', function () {
      $('#mask').addClass('show')
    })
    const inputs = []
    $.each($("[name]"), (index, item) => {
      if ($(item).attr("required")) {
        inputs.push(item)
      }
    })
    $('button[type=submit]').on('click', function () {
      const form = $(this).closest('form')
      const errors = []
      const msg = inputs.reduce((acc, input) => {
        const val = form.find(input).val()
        if (!val) {
          errors.push($(input).attr("placeholder"))
        }
        return errors[0]
      }, '')
      if (msg) {
        layer.msg(msg)
      }
      else {
        $.ajax({
          url: `${form[0].action}&t=${Math.random().toString()}`,
          type: form[0].method,
          dataType: 'JSON',
          data: form.serialize(),
          success(res) {
            if (res.status === 1) {
              $('#mask').removeClass('show')
              layer.msg('您已报名成功，谢谢您的参与！')
              form[0].reset()
            }
            else {
              layer.msg(res.info)
            }
          },
          error() {
            layer.msg('报名失败，请稍后再试')
          },
        })
      }
      return false
    })
  })
})
useHead({
  script: [
    // {
    //   innerHTML: `
    //   /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.location.href="/m/topic/2025/shengxue/");
    //   `
    // },
    {
      src: 'https://www.ieduchina.com/statics/js/jquery-3.2.1.min.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/statics/pcc/js/swiper.min.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/statics/js/layer.js',
      type: 'text/javascript',
      body: true
    },
    {
      src: 'https://www.ieduchina.com/topic/tgFrom.js',
      type: 'text/javascript',
      defer: true,
      body: true
    },
  ],
  link: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//www.ieduchina.com/statics/pcc/img/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/pc/css/swiper.min.css',
    },
  ],
  title: '国际学校入学备考-香港学校升学规划与备考 - 国际教育网升学中心',
  meta: [
    {
      name: 'keywords',
      content: '国际学校入学备考,香港学校升学规划',
    },
    {
      name: 'description',
      content: '国际教育网升学中心提供国际学校和香港学校升学规划与备考服务,国际学校升学规划与备考涵盖了英系、美系和港系的名校,香港学校升学规划与备考主要涵盖了香港本地名校及顶尖国际学校,以及香港身份咨询与规划服务.',
    },
    {
      name: 'applicable-device',
      content: 'pc',
    },
  ],
})
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.con">
      <a href="">
        <img :src="logo" alt=""></img>
      </a>
      <menu>
        <a class="ywjs">业务介绍</a>
        <a class="jxtd">教学团队</a>
        <a class="fwlc">服务流程</a>
        <a class="xqhj">校区环境及地址</a>
        <a class="lxwm">联系我们</a>
      </menu>
    </div>
  </header>
  <section>
    <div :class="$style.banner" class="banner_swiper">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in banner" class="swiper-slide" :class="$style.slide">
          <img :src="item.image" :alt="item.title">
        </div>
      </div>
      <div :class="$style.pagination" class="banner_swiper_pagination"></div>
    </div>
    <div :class="$style.yw" id="ywjs">
      <component :is="Title" en="SERVICE" cn="业务介绍" />
      <ul :class="$style.title">
        <li v-for="(item, index) in ywtext1" :key="index">
          <img :src="item.icon" :alt="item.title">
          <div :class="$style.desc">
            <span>{{ item.title }}</span>
            <p v-for="it in item.text">
              <i>{{ it.title }}</i>：{{ it.text }}
            </p>
          </div>
        </li>
      </ul>
      <div :class="$style.cgzs">
        <h2>升学备考成果展示（部分）</h2>
        <div :class="$style.cg" class="cg cg1">
          <div class="swiper-wrapper" :class="$style.wrap">
            <div v-for="item in offers1" class="swiper-slide" :key="item">
              <img :class="$style.img" :src="item" alt="" height="440" width="340"></img>
            </div>
          </div>
          <div class="cg1-swiper-button-prev"></div>
          <div class="cg1-swiper-button-next"></div>
        </div>
        <div id="prev" :class="$style.prev"></div>
        <div id="next" :class="$style.next"></div>
      </div>
      <ul :class="[$style.title, $style.title2]">
        <li v-for="(item, index) in ywtext2" :key="index">
          <img :src="item.icon" :alt="item.title">
          <div :class="$style.desc">
            <span>{{ item.title }}</span>
            <p v-for="it in item.text">
              <i>{{ it.title }}</i>：{{ it.text }}
            </p>
          </div>
        </li>
      </ul>
      <ul :class="[$style.title, $style.title3]">
        <li v-for="(item, index) in ywtext3" :key="index">
          <img :src="item.icon" :alt="item.title">
          <div :class="$style.desc">
            <span>{{ item.title }}</span>
            <p v-for="it in item.text">
              <i>{{ it.title }}</i>：{{ it.text }}
            </p>
          </div>
        </li>
      </ul>
      <div :class="$style.bgt">
        <img :src="bg" alt="">
      </div>
      <div :class="$style.cgzs" class="cgzs">
        <h2>世界名校录取成果展示（部分）</h2>
        <div :class="$style.cg" class="cg cg2">
          <div class="swiper-wrapper" :class="$style.wrap">
            <div v-for="item in offers2" class="swiper-slide" :key="item">
              <img :class="$style.img" :src="item" loading="lazy" alt="" height="440" width="340"></img>
            </div>
          </div>
          <div class="cg2-swiper-button-prev"></div>
          <div class="cg2-swiper-button-next"></div>
        </div>
        <div id="prev2" :class="$style.prev"></div>
        <div id="next2" :class="$style.next"></div>
      </div>
    </div>
    <!-- <div :class="$style.td" id="gwtd">
      <div :class="$style.con">
        <component :is="Title" en="team" cn="顾问团队" tip="24小时为您提供咨询服务，个性化制定升学方案" />
      </div>
      <div :class="$style.team_swiper" class="team_swiper team_swiper1">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in gw" class="swiper-slide" :class="$style.slide">
            <img :src="item.image" :alt="item.name">
            <span><i>{{ item.name }}</i></span>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
      <div id="prev3" :class="$style.prev" class="team1-swiper-button-prev"></div>
      <div id="prev3" :class="$style.next" class="team1-swiper-button-next"></div>
      <div :class="$style.bg"><span></span></div>
    </div> -->
    <div :class="$style.td" id="jxtd">
      <div :class="$style.con">
        <component :is="Title" en="team" cn="教学团队" tip="24小时为您提供咨询服务，个性化制定升学方案" />
      </div>
      <div :class="$style.team_swiper" class="team_swiper team_swiper2">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in teacher" class="swiper-slide" :class="$style.slide">
            <div :class="$style.wrap" class="_wrap_50jo0_117">
              <img :class="$style[item.class]" :src="item.image" :alt="item.name"></img>
            </div>
            <span><i>{{ item.name }}</i></span>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
      <div id="prev4" :class="$style.prev" class="team2-swiper-button-prev"></div>
      <div id="prev4" :class="$style.next" class="team2-swiper-button-next"></div>
      <div :class="$style.bg"><span></span></div>
    </div>
    <div :class="$style.fw" id="fwlc">
      <div :class="$style.con">
        <component :is="Title" en="SERVICE" cn="服务流程" />
        <img :src="fwlc" alt="服务流程">
      </div>
    </div>
    <div :class="$style.environment" id="xqhj">
      <div :class="$style.con">
        <component :is="Title" en="environment" cn="校区环境及地址" />
        <img :class="$style.img" :src="xqdz" alt="校区环境及地址">
        <div :class="$style.top">
          <div :class="$style.title">深港六大校区 CAMPUS</div>
          <div :class="$style.tel">
            <img :src="telicon" alt="">
            咨询热线：400-168-1016
          </div>
        </div>
        <div :class="$style.bottom">
          <ul>
            <li v-for="item in address">
              <span><img :src="addressicon" :alt="item.title">{{ item.title }}</span>
            </li>
          </ul>
          <div :class="$style.ewm">
            <div v-for="item in ewm" :class="$style.e">
              <img :src="item.image" alt="">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <component :is="Footer" :ewm1 :ewm2 />
  <div :class="$style.right_fixed">
    <ul>
      <li id="open"><img :src="fixed4" alt="预约报名"> <img :src="fixed4_" alt="预约报名">
        <p>预约报名</p>
      </li>
      <li><img :src="fixed1" alt="咨询我们"> <img :src="fixed1_" alt="咨询我们">
        <p>咨询我们</p>
        <div :class="$style.in"><img :src="ewm2" alt="ada"></div>
      </li>
      <li><img :src="fixed2" alt="电话咨询"> <img :src="fixed2_" alt="电话咨询">
        <p>电话咨询</p>
        <div :class="[$style.in, $style.tel]">
          <p>电话咨询：</p>
          <p>400-168-1016</p>
        </div>
      </li>
      <li id="gotop">
        <img :src="fixed3" alt="置頂">
        <img :src="fixed3_" alt="置顶">
        <p>置顶</p>
      </li>
    </ul>
  </div>
  <div :class="$style.mask" id="mask">
    <div :class="$style.con">
      <div :class="$style.form">
        <h3>学校咨询表单填写</h3><i id="close" :class="$style.close"></i>
        <form action="/index.php?m=college&amp;c=index&amp;a=collegereg" method="post">
          <input name="mark" type="hidden" value="国际教育网PC版_升学">
          <h4>请您填写信息，专业老师将尽快联系您</h4>
          <label for="">
            <span>孩子姓名</span>
            <input name="name" type="text" required placeholder="请输入孩子姓名" autocomplete="off" :class="$style.name">
          </label>
          <label for=""><span>电话号码 </span>
            <input name="mobile" type="text" required placeholder="请输入电话号码" autocomplete="off"
              :class="$style.mobile"></label>
          <label for=""><span>在读年級</span>
            <select class="grade" name="grade" required placeholder="请选择年级">
              <option value="">请选择年级</option>
              <option value="幼儿园">幼儿园</option>
              <option value="一年级">一年級</option>
              <option value="二年级">二年級</option>
              <option value="三年级">三年級</option>
              <option value="四年级">四年級</option>
              <option value="五年级">五年級</option>
              <option value="六年级">六年級</option>
              <option value="七年级">七年級</option>
              <option value="八年级">八年級</option>
              <option value="九年级">九年級</option>
              <option value="十年级">十年級</option>
              <option value="十一年级">十一年級</option>
              <option value="十二年级">十二年級</option>
              <option value="大一">大一</option>
              <option value="大二">大二</option>
              <option value="大三">大三</option>
              <option value="大四">大四</option>
              <option value="已毕业">已毕业</option>
            </select>
          </label>
          <label for=""><span>意向学校</span> <input name="want_school" type="text" required placeholder="请输入意向学校"
              autocomplete="off" :class="$style.want"></label>
          <div :class="$style.btn"><button type="submit">确认提交</button></div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="less" module scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: #083A83;
  display: flex;
  justify-content: center;

  .con {
    width: 1200px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 138px;
      height: 56px;
      object-fit: contain;
      object-position: center;
    }

    menu {
      a {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        margin-right: 26px;
        cursor: pointer;
      }
    }
  }
}

section {
  padding-top: 96px;

  .banner {
    min-width: 1200px;
    width: 100%;
    // height: 70vh;
    object-fit: cover;
    object-position: center;

    .slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .yw {
    width: 1200px;
    margin: 0 auto;
    padding-top: 82px;

    .title {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;

      &.title2 {

        li {
          padding-top: 30px;

          &:last-of-type {
            margin-left: 100px;
            flex: 1;
          }
        }
      }

      &.title3 {
        justify-content: center;

        li {
          padding-top: 0;
        }
      }

      li {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;

        img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          margin-right: 18px;
        }

        .desc {
          span {
            display: block;
            font-size: 20px;
            font-weight: bold;
            line-height: 36px;
            letter-spacing: 0em;
            color: #083A83;
            letter-spacing: -1.5px;
            border-bottom: solid 1px #D6D6D6;
          }

          p {
            font-size: 16px;
            font-weight: normal;
            line-height: 180%;
            color: #3D3D3D;

            &:first-of-type {
              margin-top: 10px;
            }

            i {
              font-weight: bold;
              font-style: initial;
            }
          }
        }
      }
    }

    .cgzs {
      margin-top: 86px;
      position: relative;

      h2 {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        color: #3D3D3D;
        padding-bottom: 30px;
      }

      .cg {
        overflow: hidden;
        width: 944px;
        margin: 0 auto;

        .wrap {

          .img {
            width: 340px;
            height: 440px;
            object-fit: contain;
          }
        }

      }

      .prev,
      .next {
        position: absolute;
        top: 260px;
        z-index: 10;
        width: 48px;
        height: 48px;
        border: solid 2px #C3AA72;
        border-radius: 50%;
        cursor: pointer;

        &::after {
          position: absolute;
          content: "";
          left: 40%;
          top: 30%;
          width: 16px;
          height: 16px;
          border-style: solid;
          border-width: 0 2px 2px 0;
          border-color: #C3AA72;
          transform: rotateZ(135deg);
          pointer-events: none;
        }
      }

      .prev {
        left: 0;
      }

      .next {
        right: 0;

        &::after {
          transform: rotateZ(-45deg);
          left: 10px;
        }
      }
    }

    .bgt {
      height: 0;
      height: 0;
      position: relative;

      img {
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: -172px;
        width: 957px;
        opacity: 0.12;
      }
    }
  }

  .fw {
    padding: 80px 0 95px;

    .con {
      width: 1200px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 345px;
        object-fit: contain;
        margin-top: 73px;
      }
    }
  }

  .td {
    padding: 80px 0 0;
    position: relative;

    .con {
      width: 1200px;
      margin: 0 auto;
    }

    .team_swiper {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      height: 628px;

      .slide {
        text-align: center;
        padding-top: 110px;

        .wrap {
          width: 174px;
          height: 174px;
          object-fit: cover;
          border-radius: 50%;
          object-position: top;
          user-select: none;
          border: solid 4px #083A83;
          background-color: white;
          overflow: hidden;
          margin: 0 auto;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.t2 {
              object-position: 0 -3px;
            }

            &.t3 {
              width: 73%;
              object-position: 0 -5px;
            }

            &.t4 {
              object-position: -23px -12px;
              width: 128%;
            }

            &.t6 {
              object-position: 0 -8px;
            }

            &.t12 {
              object-position: -12px 5px;
            }

            &.t13 {
              object-position: 0 5px;
            }
          }
        }

        p {
          margin-top: 30px;
          width: 1100px;
          position: absolute;
          left: -180%;
          display: none;
          font-size: 14px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 26px;
        }

        span {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 26px;
          padding-top: 20px;
          text-align: center;

          i {
            font-style: initial;
          }
        }
      }
    }

    .prev,
    .next {
      position: absolute;
      top: 610px;
      z-index: 10;
      width: 48px;
      height: 48px;
      border: solid 2px #C3AA72;
      border-radius: 50%;
      cursor: pointer;

      &::after {
        position: absolute;
        content: "";
        left: 40%;
        top: 30%;
        width: 16px;
        height: 16px;
        border-style: solid;
        border-width: 0 2px 2px 0;
        border-color: #C3AA72;
        transform: rotateZ(135deg);
        pointer-events: none;
      }
    }

    .prev {
      left: 50%;
      margin-left: -696px;
    }

    .next {
      right: 50%;
      margin-right: -696px;

      &::after {
        transform: rotateZ(-45deg);
        left: 25%;
      }
    }
  }

  .environment {
    background-color: #FAFAFA;

    .con {
      width: 1200px;
      padding: 100px 0;
      margin: 0 auto;

      .img {
        margin-top: 54px;
        width: 100%;
      }

      .top {
        display: flex;
        justify-content: space-between;
        padding: 46px 0 21px;
        border-bottom: solid 1px #D6D6D6;

        .title {
          font-size: 30px;
          font-weight: bold;
          line-height: 150%;
          text-transform: uppercase;
          color: #3D3D3D;

        }

        .tel {
          font-size: 24px;
          font-weight: bold;
          color: #083A83;

          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
            vertical-align: -6px;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;

        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 740px;
          padding-top: 21px;

          li {
            margin-top: 15px;
            text-align: left;
            width: 33.33%;

            span {
              color: #3D3D3D;
              font-weight: bold;
              font-size: 24px;

              img {
                width: 18px;
                height: 18px;
                object-fit: contain;
                margin-right: 4px;
                vertical-align: 1px;
              }
            }
          }
        }

        .ewm {
          display: flex;
          justify-content: space-between;
          margin-top: 21px;

          .e {
            margin-left: 17px;
            text-align: center;

            img {
              width: 100px;
              height: 100px;
              object-fit: cover;
            }

            p {
              font-size: 14px;
              line-height: 24px;
              text-align: center;
              color: #1A1A1A;
            }
          }
        }
      }
    }
  }

  .bg {
    width: 100%;
    min-width: 1200px;
    height: 380px;
    margin-top: -433px;
    background-color: #083A83;
    text-align: center;
  }
}

.right_fixed {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 85px;
  z-index: 50;
  cursor: pointer;
  transition: all 300ms;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);

  ul {
    li {
      width: 85px;
      height: 85px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      margin-top: 15px;

      &:first-of-type {
        margin-top: 0;
      }

      img {
        width: 50px;
        height: 50px;
        margin-top: 6px;

        &:nth-of-type(2) {
          display: none;
        }
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }

      .in {
        display: none;
        position: absolute;
        right: 85px;
        top: 0;
        border-radius: 0;
        padding: 5px;
        background-color: white;
        -webkit-box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);
        box-shadow: 0px 0px 20px 1px rgba(135, 135, 135, 0.1608);

        &.tel {
          padding: 24px 13px;

          p {
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
            white-space: nowrap;

            &:first-of-type {
              font-size: 14px;
              padding-bottom: 8px;
            }
          }
        }

        img {
          width: 120px;
          height: 120px;
        }
      }

      &:hover {
        background-color: #083A83;

        &>img {
          &:nth-of-type(1) {
            display: none;
          }

          &:nth-of-type(2) {
            display: inline-block;
          }
        }

        .in {
          display: block;
        }

        &>p {
          color: white;
        }
      }

      &#gotop {
        cursor: pointer;
        display: none;
      }
    }
  }
}

.mask {
  display: none;

  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);

    .form {
      background: #FFFFFF;
      border-radius: 8px;
      position: relative;
      padding-bottom: 40px;

      h3 {
        width: 100%;
        height: 67px;
        background: #083A83;
        font-size: 24px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 67px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      }

      .close {
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        right: 10px;
        top: 10px;
        z-index: 10;
        width: 30px;
        height: 30px;
        padding: 12px;
        cursor: pointer;

        &::before,
        &::after {
          pointer-events: none;
          top: 10px;
          left: 10px;
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border-top: solid 2px white;
          transform: rotateZ(45deg) translate(-48%, 45%);
          transform-origin: center center;
        }

        &::after {
          transform: rotateZ(-45deg);
        }
      }

      form {
        padding: 10px 40px 0;
        font-size: 0;

        h4 {
          font-size: 16px;
          font-weight: 400;
          color: #083A83;
          padding: 20px 0 10px;
          text-align: center;
        }

        label {
          margin-top: 20px;
          display: block;
          width: 100%;

          &:nth-of-type(3) {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 55%;
              width: 10px;
              height: 10px;
              border-style: solid;
              border-color: #333;
              border-width: 0 2px 2px 0;
              transform: translate(-100%, -100%) rotateZ(45deg);
              pointer-events: none;
            }
          }

          span {
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            text-align: right;
            padding-right: 21px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }

          input,
          select {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 323px;
            height: 40px;
            line-height: 40px;
            background: #FFFFFF;
            border-radius: 4px;
            border: 1px solid #C8C8C8;
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            padding: 0 10px;
            outline: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
          }

          select {
            option[value=""] {
              display: none;
            }
          }
        }

        .btn {
          text-align: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-top: 35px;

          button {
            cursor: pointer;
            width: 271px;
            height: 45px;
            background: #083A83;
            border-radius: 4px;
            font-size: 18px;
            font-weight: 400;
            color: #FFFFFF;
            border: none;
            outline: none;
          }
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.team_swiper {
  .swiper-slide-active {
    &+.swiper-slide {
      transform: translateX(-20px);
      transition: all 0.3s ease-in-out;

      &+.swiper-slide {
        ._wrap_50jo0_117 {
          transform: scale(1.5);
          transition: all 0.3s ease-in-out;
          border: solid 8px #083A83;
          background-color: white;
        }

        p {
          display: block !important;
          padding: 10px 182px;
        }

        span {
          margin-top: 40px;

          i {
            position: relative;

            &::after {
              left: 50%;
              transform: translateX(-50%);
              bottom: -21px;
              content: "";
              position: absolute;
              width: 50px;
              height: 2px;
              background: #C3AA72;

            }
          }
        }

        &+.swiper-slide {
          transform: translateX(20px);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
}

.banner_swiper {
  width: 100%;
  overflow: hidden;
  position: relative;

  .banner_swiper_pagination {
    bottom: 30px;
    position: absolute;
    z-index: 10;
    text-align: center;
  }
}

#mask {
  &.show {
    display: block;
  }
}
</style>
<style lang="less">
body .footer_nav {
  min-width: 1200px;
  background-color: #083A83;

  .con {
    width: 1200px;
  }
}

.swiper-pagination-bullet {
  width: 9px;
  height: 9px;
  border-radius: 0;
  background-color: white;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #F6B756;
  width: 32px;
  border-radius: 0;
}
</style>