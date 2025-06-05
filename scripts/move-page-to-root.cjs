const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../dist/topic/2025/hk13/index.html');
const dest = path.resolve(__dirname, '../dist/index.html');

if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('已复制到 dist/index.html');
} else {
    console.log('未找到页面文件:', src);
}