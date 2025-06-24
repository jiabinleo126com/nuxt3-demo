const fs = require('fs');
const path = require('path');

const jsDir = path.resolve(__dirname, '../dist/js');

// 检查目录是否存在
if (!fs.existsSync(jsDir)) {
    console.error(`目录不存在: ${jsDir}`);
    process.exit(1);
}