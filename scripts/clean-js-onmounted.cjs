const fs = require('fs');
const path = require('path');

const jsDir = path.resolve(__dirname, '../dist/static/js');

fs.readdirSync(jsDir).forEach(file => {
    if (!file.endsWith('.js')) return;
    const filePath = path.join(jsDir, file);
    const code = fs.readFileSync(filePath, 'utf-8');

    // 判断是否包含 onMounted
    const onMountedMatch = code.match(/onMounted\s*\(\s*\(\s*\)\s*=>\s*\{([\s\S]*?)\}\s*\)/);

    if (!onMountedMatch) {
        // 没有 onMounted，删除文件
        fs.unlinkSync(filePath);
        console.log('已删除:', file);
    } else {
        // 只保留 onMounted 函数体
        const innerCode = onMountedMatch[1].trim();
        fs.writeFileSync(filePath, innerCode, 'utf-8');
        console.log('已保留 onMounted 代码:', file);
    }
});