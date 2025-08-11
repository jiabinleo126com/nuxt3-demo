/*
 Navicat Premium Dump SQL

 Source Server         : ieduchina
 Source Server Type    : MySQL
 Source Server Version : 90400 (9.4.0)
 Source Host           : localhost:3306
 Source Schema         : ieduchina

 Target Server Type    : MySQL
 Target Server Version : 90400 (9.4.0)
 File Encoding         : 65001

 Date: 06/08/2025 17:18:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` int NOT NULL COMMENT '视频ID',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '视频标题',
  `src` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '视频链接',
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '视频封面',
  `time` datetime NOT NULL COMMENT '发布时间',
  `userid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '作者ID',
  `num` int NOT NULL COMMENT '访问量',
  PRIMARY KEY (`id` DESC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES (451, '席位告急！香港插班黄金机会，新来港学生专属规划讲座！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/4f90fd6d5145403694084396467/8AsleiOOk8gA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202508/1754374055873502.png', '2025-08-05 14:07:00', '4920', 118);
INSERT INTO `video` VALUES (450, '初中就开始搞科研？中华基金中学的竞赛培养模式大揭秘！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/b58b77225145403694082388142/hGUJv8GtansA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202508/1754373906780519.png', '2025-08-05 14:05:00', '4920', 118);
INSERT INTO `video` VALUES (449, '在香港读中学是什么体验？香港道教联合会园玄学院第二中学五年老生揭秘真实校园生活！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/9e9532235145403694085451086/wGe1LF4m7YsA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202508/1754373854626031.png', '2025-08-05 14:04:00', '4920', 118);
INSERT INTO `video` VALUES (445, '国际学校是坑还是路？90%家长转错时机毁孩子前途!', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/04e973713560136624669484595/oEb4NcZuo3AA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750927549701684.png', '2025-07-29 16:45:00', '4920', 3);
INSERT INTO `video` VALUES (444, 'DSE和A-Level 哪个更容易进港大？', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/04e9fecb3560136624669485516/YUcQGptLapMA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750927491545491.png', '2025-07-29 16:44:00', '4920', 2);
INSERT INTO `video` VALUES (443, '香港深培中学王牌活动曝光！英语+领袖力双提升！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/7f84ff9d3560136624671012685/SZdZ3jat6W8A.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750927298484653.png', '2025-07-29 16:41:00', '4920', 112);
INSERT INTO `video` VALUES (442, '不会粤语能在香港读书吗？学校广东话班+英文活动，快速适应！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/1ba620ee3560136624666385595/1CDia5b3NWcA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750927108234807.png', '2025-07-29 16:38:37', '4920', 112);
INSERT INTO `video` VALUES (441, '不想孩子太卷？香港DSE+内地高校=低压力升学方案！出路比你想的多！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/c9ef7ea63560136624665175690/GuIHfAzik9sA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750927030372456.png', '2025-07-29 16:37:00', '4920', 112);
INSERT INTO `video` VALUES (440, '200+香港学校联展来袭！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/6fa06b6f3560136624667686717/nAtxMo1KcsYA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202506/1750926962981622.png', '2025-07-29 16:36:00', '4920', 112);
INSERT INTO `video` VALUES (439, '8分钟带你了解启慧 一所坚持全人教育，深耕细作的十二年一贯制学校', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/1e1cea3b3560136623411939026/VqVRtIVWaZMA.mp4', 'https://zhaosheng.ieduchina.com/Upload/File/202506/684ce26052138.jpg', '2025-07-29 10:42:00', '75593', 1);
INSERT INTO `video` VALUES (438, '香港国际学校竞教小学生开公司？香港威雅杨副校长：学生18岁前玩转跨国商业项目！', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/706aa8e73560136621664118878/7OqIAwQNQvIA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326396640534.png', '2025-07-29 14:14:00', '4920', 112);
INSERT INTO `video` VALUES (437, '港八大录取率83.3%！沙田培英校长亲曝，内地生转香港名校真能“躺赢”', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/b5f1b9bc3560136621658046360/lNrGuzoeeFcA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326343856177.png', '2025-07-29 14:12:00', '4920', 112);
INSERT INTO `video` VALUES (436, '港八大录取率高达9成！元朗信义校长亲授 内地生选科别抄作业，这样选才稳', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/6d8cf3973560136621657231261/wTQCH8sGP78A.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202505/1748326324524434.png', '2025-07-29 14:12:00', '4920', 112);
INSERT INTO `video` VALUES (435, 'DSE与考校vs内地校？张校长揭秘：港澳子弟学校的3大碾压级优势', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/52b762ba3560136620976261006/waUymeVDyb0A.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202505/1747721905393845.png', '2025-05-20 14:24:00', '4920', 112);
INSERT INTO `video` VALUES (434, 'DSE vs A-Level终极快择！香港双轨名校校长亲曝，选错课程恐无缘港大医科？', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/771be4c43560136620973718408/iu4lFBjX8W8A.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202505/1747721548641991.png', '2025-05-20 14:18:00', '4920', 112);
INSERT INTO `video` VALUES (306, '往期营地回顾', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/84a06c963270835013337211079/GB6gEpanfugA.mp4', 'https://www.ieduchina.com/uploadfile/toutiao/202312/1701920552934977.png', '2023-12-07 11:42:00', '15357', 1);
INSERT INTO `video` VALUES (305, '“莞通万里”国际专上教育升学展', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/95116e363270835013178022058/5B28kGq1ULcA.mov', 'https://www.ieduchina.com/uploadfile/toutiao/202312/1701842274635278.jpg', '2023-12-06 13:57:00', '13350', 1);
INSERT INTO `video` VALUES (304, '【爱莎科学城】塑造与人工智能并进的教育 从知识转化为技能', 'https://1313547163.vod2.myqcloud.com/62c522c4vodcq1313547163/accfd7203270835013103687945/TbwC7M0cBtEA.m4v', 'https://www.ieduchina.com/uploadfile/toutiao/202312/1701677334436310.jpg', '2023-12-05 17:09:00', '4920', 112);

SET FOREIGN_KEY_CHECKS = 1;
