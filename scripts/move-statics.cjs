const fs = require('fs');
const path = require('path');

const src1 = path.resolve(__dirname, '../dist/school/index.html');
const dest1 = path.resolve(__dirname, '../.nuxt/dist/client/');

if (fs.existsSync(src1)) {
    fs.copyFileSync(src1, dest1);
    console.log('已复制到 css和js');
} else {
    console.log('未找到页面文件:', src1);
}