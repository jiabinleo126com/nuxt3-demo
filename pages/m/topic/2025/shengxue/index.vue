<script setup>
import { useHead } from 'nuxt/app';

import logo from '~/assets/hk/7ac0a9fb.png';
import banner1 from '~/assets/m/topic/2025/shengxue/组 2926@2x.png';
import banner2 from '~/assets/m/topic/2025/shengxue/1 拷贝@2x.png';
import banner3 from '~/assets/m/topic/2025/shengxue/2 拷贝@2x.png';
import banner4 from '~/assets/m/topic/2025/shengxue/3 拷贝@2x.png';
import banner5 from '~/assets/m/topic/2025/shengxue/4 拷贝@2x.png';
import banner6 from '~/assets/m/topic/2025/shengxue/5 拷贝@2x.png';
import ywtext_icon1 from '~/assets/m/topic/2025/shengxue/容器@2x.png'
import ywtext_icon2 from '~/assets/m/topic/2025/shengxue/容器@2x (1).png'
import ywtext_icon3 from '~/assets/m/topic/2025/shengxue/容器@2x (2).png'
import ywtext_icon4 from '~/assets/m/topic/2025/shengxue/容器@2x (3).png'
import ywtext_icon5 from '~/assets/m/topic/2025/shengxue/容器@2x (4).png'
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
import fwlc from '~/assets/m/topic/2025/shengxue/资源 2@2x.png'
import environment from '~/assets/m/topic/2025/shengxue/资源 1@2x.png'
import mobileicon from '~/assets/m/topic/2025/shengxue/路径@2x.png'
import yyicon from '~/assets/m/topic/2025/shengxue/yuyue@2x.png'
import zdicon from '~/assets/m/topic/2025/shengxue/组 2883@2x.png'
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
import addressicon from '~/assets/m/topic/2025/shengxue/map-pin-fill@2x.png'
import ewm1 from '~/assets/m/topic/2025/shengxue/image@2x.png'
import ewm2 from '~/assets/m/topic/2025/shengxue/蒙版组 121@2x.png'
import bg from '~/assets/topic/2025/shengxue/bg.png'

const { data: { value: { teacher, address, ywtext1, ywtext2, ywtext3, offers1, offers2, banner } } } = await useFetch('/api/topic/2025/shengxue')

const images = {
  banner1, banner2, banner3, banner4, banner5, banner6, ywtext_icon1, ywtext_icon2, ywtext_icon3, ywtext_icon4, ywtext_icon5, _offer_1, _offer_2, _offer_3, _offer_4, _offer_5, _offer_6, _offer_7, _offer_8, _offer_9, _offer_10, _offer_11, _offer_12, _offer_13, _offer_14, _offer_15, _offer_16, _offer_17, _offer_18, _offer_19, _offer_20, _offer_21, _offer_22, _offer_23, _offer_24, offer1, offer2, offer3, offer4, offer5, offer6, offer7, offer8, offer9, offer10, offer11, offer12, offer13, offer14, offer15, offer16, offer17, offer18, offer19, offer20, offer21, offer22, offer23, offer24, offer25, offer26, offer_1, offer_2, offer_3, offer_4, offer_5, offer_6, offer_7, offer_8, offer_9, offer_10, offer_11, offer_12, offer_13, offer_14, offer_15, offer_16, offer_17, offer_18, offer_19, offer_20, offer_21, offer_22, offer_23, offer_24, offer_25, offer_26, offer_27, offer_28, offer_29, offer_30, offer_31, offer_32, offer_33, offer_34, offer_35, offer_36, offer_37, offer_38, offer_39, offer_40, offer_41, offer_42, offer_43, offer_44, offer_45, offer_46, offer_47, offer_48, offer_49, offer_50, offer_51, offer_53, offer_54, offer_55, offer_56, offer_57, offer_58, offer_59, offer_60, offer_61, fwlc, teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10, teacher11, teacher12, teacher13, teacher14, teacher15, teacher16, teacher17, teacher18, addressicon, ewm1, ewm2, bg
}

import { defineAsyncComponent, onMounted } from 'vue';

const Title = defineAsyncComponent(() => import(`~/components/m/topic/2025/shengxue/Title.vue`))

onMounted(() => {
  $(() => {
    const swiper1 = new Swiper('.banner_swiper_wap', {
      loop: true,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.banner_swiper_wap_pagination',
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
      }
    });
    const swiper4 = new Swiper('.team_swiper_wap', {
      slidesPerView: 3,
      loop: true,
      autoplay: false,
      autoplay: {
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
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
      threshold: 0.5
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
      threshold: 0.5
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
      threshold: 0.5
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
      threshold: 0.5
    });
    observer1.observe(document.querySelector('.banner_swiper_wap'));
    observer2.observe(document.querySelector('.cg1'));
    observer3.observe(document.querySelector('.cg2'));
    observer4.observe(document.querySelector('.team_swiper_wap'));

    $("#year").text(new Date().getFullYear());

    $(document).on("click", ".show_fixed", function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
    })
    $(window).scroll(function () {
      $(".top_menu").removeClass("show")
      if ($(window).scrollTop() > $(window).height()) {
        $(".fixed_menu").addClass("show_fixed");
      }
      else {
        $(".fixed_menu").removeClass("show_fixed");
      }
    });
    function setMenuActive() {
      $.each($(".banner_swiper_wap").siblings("[id]"), function (index, item) {
        if ($(item).offset().top - $(window).scrollTop() + $(item).height() - $(window).height() / 2 > 0) {
          $(`a[href='#${$(item).attr("id")}']`).parent().addClass("active").siblings().removeClass("active")
          return false
        }
      })
    }
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
        layer.open({
          content: msg,
          skin: "msg",
          time: 2
        })
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
              layer.open({
                content: '您已报名成功，谢谢您的参与！',
                skin: "msg",
                time: 2
              })
              form[0].reset()
            }
            else {
              layer.open({
                content: res.info,
                skin: "msg",
                time: 2
              })
            }
          },
          error() {
            layer.open({
              content: "报名失败，请稍后再试",
              skin: "msg",
              time: 2
            })
          },
        })
      }
      return false
    })

    $(document).on("click", ".menu_btn", function () {
      setMenuActive()
      $(".top_menu").addClass("show")
    })
    $(document).on("click", ".top_menu.show", function (e) {
      if ($(e.target).hasClass("show")) {
        $(".top_menu").removeClass("show")
      }
    })
  })
})

useHead({
  script: [
    {
      innerHTML: `
      (function () {
            function onResize() {
                var width = document.documentElement.clientWidth;
                var style = document.createElement("style");
                style.setAttribute('id', 'style')
                var html = '';
                if (/Android|webOS|iPhone|iPod|BlackBerry|OpenHarmony/i.test(navigator.userAgent)) {
                    html = "html{font-size: " + width / 375 + "px !important;}";
                } else {
                    html = "html{font-size: " + 2 + "px !important;width:750px !important;margin:0 auto !important;}";
                }
                if (document.getElementById('style')) {
                    document.getElementById('style').innerHTML = html
                } else {
                    style.innerHTML = html;
                    document.head.appendChild(style);
                }
            }
            window.addEventListener('resize', onResize);
            onResize()
        })();
      `
    },
    {
      src: 'https://m.ieduchina.com/statics/js/jquery-3.7.1.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://www.ieduchina.com/statics/common/js/swiper.min.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/m/js/layer.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/statics/w/js/tgFrom.js',
      type: 'text/javascript',
      body: true,
    },
    {
      src: 'https://m.ieduchina.com/topic/weixinShare.js?t=2025',
      type: 'text/javascript',
      defer: true,
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://www.ieduchina.com/statics/common/css/swiper.min.css',
    },
    {
      itemprop: 'image',
      content: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'apple-touch-icon',
      href: "https://m.ieduchina.com/statics/share.jpg",
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '//m.ieduchina.com/favicon.ico',
    }
  ],
  title: '国际教育网升学中心',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
    },
    {
      name: 'applicable-device',
      content: 'mobile',
    },
    {
      name: 'keywords',
      content: '国际学校入学备考,香港学校升学规划',
    },
    {
      name: 'description',
      content: '国际教育网升学中心提供国际学校和香港学校升学规划与备考服务,国际学校升学规划与备考涵盖了英系、美系和港系的名校,香港学校升学规划与备考主要涵盖了香港本地名校及顶尖国际学校,以及香港身份咨询与规划服务.',
    },
  ],
})
</script>
<template>
  <header :class="$style.header">
    <div :class="$style.menu_btn" class="menu_btn"><i></i></div>
    <h1><img :src="logo" alt="国际教育网升学中心"></h1>
  </header>
  <section :class="$style.section">
    <div :class="$style.banner" class="banner_swiper_wap">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in banner" class="swiper-slide" :class="$style.slide">
          <img :src="images[item.image]" :alt="item.title">
        </div>
      </div>
      <div :class="$style.pagination" class="banner_swiper_wap_pagination"></div>
    </div>
    <div :class="$style.ywjs" id="ywjs">
      <component :is="Title" en="SERVICE" cn="业务介绍" />
      <ul :class="$style.title">
        <li v-for="(item, index) in ywtext1" :key="index">
          <img :src="images[item.icon]" :alt="item.title">
          <span>{{ item.title }}</span>
          <div :class="$style.desc_wrap">
            <p v-for="it in item.text">
              <i>{{ it.title }}</i>：{{ it.text }}
            </p>
          </div>
        </li>
      </ul>
      <div :class="$style.cgzs">
        <h2>成果展示（部分）</h2>
        <div :class="$style.cg" class="cg cg1">
          <div class="swiper-wrapper" :class="$style.wrap">
            <div v-for="item in offers1" class="swiper-slide" :key="item">
              <img :class="$style.img" :src="images[item]" alt="" height="440" width="340"></img>
            </div>
          </div>
        </div>
      </div>
      <ul :class="$style.title">
        <li v-for="(item, index) in ywtext2" :key="index">
          <img :src="images[item.icon]" :alt="item.title">
          <span>{{ item.title }}</span>
          <div :class="$style.desc_wrap">
            <p v-for="it in item.text">
              <i>{{ it.title }}</i>：{{ it.text }}
            </p>
          </div>
        </li>
        <li v-for="(item, index) in ywtext3" :key="index">
          <img :src="images[item.icon]" :alt="item.title">
          <span>{{ item.title }}</span>
          <div :class="$style.desc_wrap">
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
              <img :class="$style.img" :src="images[item]" loading="lazy" alt="" height="440" width="340"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.jxtd" id="jxtd">
      <div :class="$style.con">
        <component :is="Title" en="team" cn="教学团队" tip="24小时为您提供咨询服务，个性化制定升学方案" />
      </div>
      <div :class="$style.team_swiper" class="team_swiper_wap">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in teacher" class="swiper-slide" :class="$style.slide">
            <div :class="$style.wrap" class="_wrap_50jo0_117">
              <img :class="$style[item.class]" :src="images[item.image]" :alt="item.name"></img>
            </div>
            <span><i>{{ item.name }}</i></span>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
      <div :class="$style.bg"><span></span></div>
    </div>
    <div :class="$style.fwlc" id="fwlc">
      <div :class="$style.con">
        <component :is="Title" en="SERVICE" cn="服务流程" />
      </div>
      <img :src="fwlc" alt="服务流程">
    </div>
    <div :class="$style.fwlc" id="xqhj">
      <div :class="$style.con">
        <component :is="Title" en="environment" cn="校区环境及地址" />
      </div>
      <img :src="environment" alt="校区环境及地址">
    </div>
    <div :class="$style.address" id="lxwm">
      <p :class="$style.title">深港六大校区 CAMPUS</p>
      <ul>
        <li v-for="item in address"><img :src="addressicon" :alt="item.title">{{ item.title }}</li>
      </ul>
      <div :class="$style.tel">
        <a href="tel:400-168-1016"><img :src="mobileicon" alt="">咨询热线: 400-168-1016</a>
      </div>
      <div :class="$style.ewm_wrap">
        <div :class="$style.ewm">
          <img :src="ewm1" alt="扫码关注官方公众号">
          <p>扫码关注官方公众号</p>
        </div>
        <div :class="$style.ewm">
          <img :src="ewm2" alt="扫码咨询升学小助手">
          <p>扫码咨询升学小助手</p>
        </div>
      </div>
    </div>
  </section>
  <footer :class="$style.footer">Copyright © <span id="year">2025</span> 国际教育网 版权所有</footer>
  <div :class="$style.fixed_menu">
    <div :class="$style.in" id="open">
      <img :src="yyicon" alt="预约报名">
      <p>预约报名</p>
    </div>
    <div :class="$style.in" class="fixed_menu">
      <img :src="zdicon" alt="置顶">
      <p>置顶</p>
    </div>
  </div>
  <div :class="$style.mask" id="mask">
    <div :class="$style.con">
      <div :class="$style.form">
        <h3>学校咨询表单填写</h3><i id="close" :class="$style.close"></i>
        <form action="/index.php?m=college&c=index&a=collegereg" method="post">
          <input name="mark" type="hidden" value="市场部_升学中心-官网专题页_选校砖家WAP版">
          <h4>请您填写信息，专业老师将尽快联系您</h4>
          <label for="">
            <input name="name" type="text" required placeholder="请输入孩子姓名" autocomplete="off" :class="$style.name">
          </label>
          <label for="">
            <input name="mobile" type="text" required placeholder="请输入电话号码" autocomplete="off"
              :class="$style.mobile"></label>
          <label for="">
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
          <label for="">
            <input name="want_school" type="text" required placeholder="请输入意向学校" autocomplete="off"
              :class="$style.want"></label>
          <div :class="$style.btn"><button type="submit">确认提交</button></div>
        </form>
      </div>
    </div>
  </div>
  <div :class="$style.top_menu" class="top_menu">
    <div :class="$style.content">
      <h2>
        <img :src="logo" alt="国际教育网 升学中心">
      </h2>
      <ul>
        <li class="active"><a href="#ywjs">业务介绍</a></li>
        <li><a href="#jxtd">教学团队</a></li>
        <li><a href="#fwlc">服务流程</a></li>
        <li><a href="#xqhj">校区环境及地址</a></li>
        <li><a href="#lxwm">联系我们</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped module>
.header {
  position: fixed;
  top: 0;
  z-index: 100;
  max-width: 750px;
  width: 100%;
  height: 50rem;
  background-color: #083A83;

  .menu_btn {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 15rem;
    padding: 0 13rem;
    cursor: pointer;

    i {
      pointer-events: none;
      position: relative;
      display: block;
      width: 20rem;
      height: 2.5rem;
      border-radius: 2rem;
      background-color: white;

      &::before,
      &::after {
        position: absolute;
        left: 0;
        top: -6rem;
        content: "";
        display: block;
        width: 20rem;
        height: 2.5rem;
        border-radius: 2rem;
        background-color: white;
      }

      &::before {
        top: 6rem;
      }
    }
  }

  h1 {
    width: 80rem;
    margin: 0 auto;
    text-align: center;

    img {
      height: 50rem;
      width: 80rem;
      object-fit: contain;
      object-position: center;
    }
  }

  .menu_btn {
    height: 50rem;
  }
}

.section {
  padding-top: 50rem;

  .banner {
    width: 100%;
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

  .ywjs {
    padding: 36rem 15rem 0;

    .title {
      li {
        text-align: center;
        margin-top: 26rem;

        img {
          width: 92rem;
        }

        span {
          display: block;
          font-size: 20rem;
          font-weight: bold;
          color: #083A83;
          margin: 0 12rem;
          padding-bottom: 8rem;
        }

        .desc_wrap {
          border-top: 1rem solid #D8D8D8;
          padding-top: 6rem;

          p {
            font-weight: 400;
            font-size: 16rem;
            text-align: left;
            line-height: 1.8;
            color: #3D3D3D;

            i {
              font-weight: bold;
              font-style: initial;
            }
          }
        }
      }
    }

    .cgzs {
      margin-top: 43rem;
      position: relative;

      h2 {
        text-align: center;
        font-size: 16rem;
        font-weight: bold;
        color: #3D3D3D;
        padding-bottom: 15rem;
      }

      .cg {
        overflow: hidden;
        width: 100%;
        margin: 0 auto;

        .wrap {

          .img {
            width: 136rem;
            height: 177rem;
            object-fit: contain;
          }
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
        bottom: -86rem;
        width: 100%;
        opacity: 0.12;
      }
    }
  }

  .jxtd {
    padding: 36rem 0 0;
    position: relative;

    .con {
      margin: 0 15rem;
    }

    .team_swiper {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      height: 550rem;
      padding-top: 43rem;

      .slide {
        text-align: center;
        padding-top: 46rem;

        .wrap {
          width: 82rem;
          height: 82rem;
          object-fit: cover;
          border-radius: 50%;
          object-position: top;
          user-select: none;
          border: solid 2rem #083A83;
          background-color: white;
          overflow: hidden;
          margin: 0 auto;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.t2 {
              object-position: 0 -2rem;
            }

            &.t3 {
              width: 73%;
              object-position: 0 -2rem;
            }

            &.t4 {
              object-position: -12rem -6rem;
              width: 128%;
            }

            &.t6 {
              object-position: 0 -4rem;
            }

            &.t12 {
              object-position: -6rem 3rem;
            }

            &.t13 {
              object-position: 0 3rem;
            }
          }
        }

        p {
          margin-top: 0rem;
          position: absolute;
          display: none;
          font-size: 7rem;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 13rem;
        }

        span {
          display: block;
          font-size: 12rem;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 13rem;
          padding-top: 10rem;
          text-align: center;

          i {
            font-style: initial;
            text-transform: capitalize;
          }
        }
      }
    }

    .bg {
      background-color: #083A83;
      height: 410rem;
      margin-top: -420rem;
    }
  }

  .fwlc {
    padding: 36rem 15rem 0;

    img {
      margin: 35rem 0 0;
      width: 100%;
    }
  }

  .address {
    padding: 26rem 15rem 0;

    .title {
      font-size: 18rem;
      font-weight: bold;
      line-height: 150%;
      text-transform: uppercase;
      color: #3D3D3D;
      padding-bottom: 6rem;
      border-bottom: solid 1rem #D6D6D6;
    }

    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 14rem;

      li {
        font-size: 14rem;
        font-weight: bold;
        line-height: 150%;
        text-transform: uppercase;
        color: #3D3D3D;
        text-align: left;
        margin-bottom: 9rem;

        img {
          width: 14rem;
          height: 14rem;
          object-fit: contain;
          margin-right: 1rem;
          vertical-align: -2rem;
        }

        &:nth-of-type(3n+1) {
          width: 35%;
        }

        &:nth-of-type(3n+2) {
          width: 35%;
        }

        &:nth-of-type(3n) {
          width: 30%;
        }
      }
    }

    .tel {
      text-align: center;

      a {
        font-size: 16rem;
        font-weight: bold;
        color: #083A83;
        line-height: 30rem;

        img {
          width: 18rem;
          height: 18rem;
          object-fit: contain;
          margin-right: 4rem;
          vertical-align: -3.5rem;
        }
      }
    }

    .ewm_wrap {
      display: flex;
      justify-content: space-between;
      margin: 20rem 42rem 24rem;

      .ewm {
        text-align: center;

        img {
          width: 100rem;
          height: 100rem;
        }

        p {
          font-size: 14rem;
          line-height: 24rem;
          text-align: center;
          color: #1A1A1A;
        }
      }
    }
  }
}

.footer {
  background: #083A83;
  text-align: center;
  line-height: 53rem;
  font-size: 12rem;
  color: #FFFFFF;
}

.fixed_menu {
  position: fixed;
  z-index: 100;
  right: 15rem;
  bottom: 80rem;
  width: 56rem;

  .in {
    width: 56rem;
    height: 56rem;
    margin-bottom: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    border-radius: 8rem;
    background-color: white;
    box-shadow: 0 0 8rem 1rem rgba(0, 0, 0, 0.1);

    &:last-of-type {
      background-color: #083A83;
      box-shadow: 0 0 8rem 1rem rgba(8, 58, 131, 0.1);
      pointer-events: none;
      opacity: 0;

      p {
        color: white;
      }
    }

    img {
      width: 24rem;
      height: 24rem;
    }

    p {
      font-size: 10rem;
      font-weight: 350;
      line-height: 20rem;
      color: #333333;
      width: 100%;
      margin-top: -16rem;
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
      border-radius: 4rem;
      position: relative;
      padding-bottom: 20rem;

      h3 {
        width: 100%;
        height: 34rem;
        background: #083A83;
        font-size: 16rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 34rem;
        text-align: center;
        border-radius: 4rem 4rem 0 0;
      }

      .close {
        display: block;
        position: absolute;
        width: 20rem;
        height: 20rem;
        right: 5rem;
        top: 5rem;
        z-index: 10;
        width: 15rem;
        height: 15rem;
        padding: 6rem;
        cursor: pointer;

        &::before,
        &::after {
          pointer-events: none;
          top: 5rem;
          left: 5rem;
          content: "";
          position: absolute;
          width: 15rem;
          height: 15rem;
          border-top: solid 1rem white;
          transform: rotateZ(45deg) translate(-48%, 45%);
          transform-origin: center center;
        }

        &::after {
          transform: rotateZ(-45deg);
        }
      }

      form {
        padding: 5rem 30rem 0;
        font-size: 0;

        h4 {
          font-size: 12rem;
          font-weight: 400;
          color: #083A83;
          padding: 10rem 0 5rem;
          text-align: center;
        }

        label {
          margin-top: 10rem;
          display: block;
          width: 100%;

          &:nth-of-type(3) {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 55%;
              width: 8rem;
              height: 8rem;
              border-style: solid;
              border-color: #333;
              border-width: 0 1rem 1rem 0;
              transform: translate(-100%, -100%) rotateZ(45deg);
              pointer-events: none;
            }
          }

          span {
            display: inline-block;
            font-size: 12rem;
            font-weight: 400;
            color: #333333;
            text-align: right;
            padding-right: 10rem;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }

          input,
          select {
            box-sizing: border-box;
            width: 240rem;
            height: 38rem;
            line-height: 20rem;
            background: #FFFFFF;
            border-radius: 4rem;
            border: 1rem solid #C8C8C8;
            font-size: 12rem;
            font-weight: 400;
            color: #333333;
            padding: 0 5rem;
            outline: none;
            appearance: none;
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
          padding-top: 18rem;

          button {
            cursor: pointer;
            width: 135rem;
            height: 38rem;
            background: #083A83;
            border-radius: 4rem;
            font-size: 12rem;
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

.top_menu {
  position: fixed;
  top: 0;
  width: 0;
  max-width: 750px;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .content {
    width: 226rem;
    height: 100vh;
    background-color: #083A83;

    h2 {
      width: 100%;
      height: 82rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 80rem;
      }
    }

    ul {
      li {
        a {
          display: block;
          color: #FFFFFF;
          height: 50rem;
          line-height: 50rem;
          font-size: 16rem;
          color: #FFFFFF;
          padding-left: 33rem;
        }
      }
    }
  }
}
</style>

<style lang="less" scoped>
.banner_swiper_wap {
  width: 100%;
  overflow: hidden;
  position: relative;

  .banner_swiper_wap_pagination {
    bottom: 18rem;
    position: absolute;
    z-index: 10;
    text-align: center;
  }
}

.team_swiper_wap {

  .swiper-slide-active {
    transform: translateX(-10rem);
    transition: all 0.3s ease-in-out;

    &+.swiper-slide {
      transform: scale(1.7) translateY(68rem);
      transition: all 0.3s ease-in-out;

      p {
        position: absolute;
        display: block !important;
        padding: 20rem 0;
        margin: 0 -32rem 0;
      }

      span {
        margin-top: -8rem;

        i {
          position: relative;

          &::after {
            left: 50%;
            transform: translateX(-50%);
            bottom: -10rem;
            content: "";
            position: absolute;
            width: 25rem;
            height: 1rem;
            background: #C3AA72;
          }
        }
      }

      &+.swiper-slide {
        transform: translateX(10rem);
        transition: all 0.3s ease-in-out;
      }
    }
  }
}

.swiper-pagination-bullet {
  width: 6rem;
  height: 6rem;
  border-radius: 0;
  background-color: white;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #F6B756;
  width: 21rem;
  border-radius: 0;
}

.show_fixed {
  opacity: 1 !important;
  pointer-events: initial !important;
}

#mask.show {
  display: block;
}

.layui-m-layer-msg {
  pointer-events: none;
}

.top_menu {
  animation: all 2s;

  &.show {
    width: 100vw;

    ul {
      li {
        &.active {
          a {
            background: #082D63;
          }
        }
      }
    }
  }
}
</style>