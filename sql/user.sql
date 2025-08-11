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

 Date: 06/08/2025 17:18:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL COMMENT '用户ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户头像',
  `brief` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '简介',
  `follow` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '粉丝',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (4920, '选校砖家', 'https://www.ieduchina.com/uploadfile/gzh/202112/164024959930856.jpg', '国际教育门户，提供关于国际教育的实用、全面、的价值信息，帮助中国学生更好地选择国际学校，并为其提供全面的指导和参考建议。', '13344,14168');
INSERT INTO `user` VALUES (5593, '上海美达菲学校', 'https://www.ieduchina.com/uploadfile/toutiao/202210/1665196245814007.png', '上海美达菲学校为上海市教委批准成立的民办普通高中，是上海市老牌正统开设国际课程的民办高中，开设IBDP 、AP 、ALEVEL以及加拿大OSSD课程，成立于2014年，迄今为止60%的学生考入世界TOP50大学，100%学生考入TOP100大学。', '0');
INSERT INTO `user` VALUES (7064, '广州暨大港澳子弟学校', 'https://www.ieduchina.com/uploadfile/gzh/202110/163512691354531.jpg', '广州暨大港澳子弟学校是全国首家港澳子弟学校', '0');
INSERT INTO `user` VALUES (10974, '香港名校通', 'https://www.ieduchina.com/uploadfile/gzh/202210/166718280294136.jpg', '10+年香港新移民家庭升学服务经验，专注于为港宝提供香港及内地优质学校升学、转学、入学及备考等一站式VIP名校升学服务。', '0');
INSERT INTO `user` VALUES (11170, 'LEHF佛山霍利斯国际学校', 'https://www.ieduchina.com/uploadfile/gzh/202111/163731099312982.jpg', 'Proudly Educating Students Since 1710 | 享誉英式国际教育三百年', '0');

SET FOREIGN_KEY_CHECKS = 1;
