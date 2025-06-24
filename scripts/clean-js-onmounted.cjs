const fs = require('fs');
const path = require('path');

const jsDir = path.resolve(__dirname, '../dist/js');

// 检查目录是否存在
if (!fs.existsSync(jsDir)) {
    console.error(`目录不存在: ${jsDir}`);
    process.exit(1);
}

// 提取 `onMountedStart` 和 `onMountedEnd` 之间的代码
function extractOnMountedRange(code) {
    const startIndex = code.indexOf('onMountedStart');
    const endIndex = code.indexOf('onMountedEnd');

    // 如果没有找到 `onMountedStart` 或 `onMountedEnd`，返回 null
    if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
        console.error('未找到完整的 onMountedStart 和 onMountedEnd 范围');
        return null;
    }

    // 提取 `onMountedStart` 和 `onMountedEnd` 之间的代码
    const extractedCode = code.slice(startIndex + 'onMountedStart'.length, endIndex).trim();
    console.log('提取的代码:', extractedCode); // 调试输出
    return extractedCode;
}

fs.readdirSync(jsDir).forEach(file => {
    if (!file.endsWith('.js')) return;
    const filePath = path.join(jsDir, file);
    const code = fs.readFileSync(filePath, 'utf-8');

    // 提取 `onMountedStart` 和 `onMountedEnd` 之间的代码
    const onMountedContent = extractOnMountedRange(code);

    if (!onMountedContent) {
        // 删除没有 `onMountedStart` 和 `onMountedEnd` 的文件
        fs.unlinkSync(filePath);
        console.log(`未找到 onMountedStart 和 onMountedEnd 范围，已删除文件: ${file}`);
    } else {
        // 写入提取的内容到文件
        fs.writeFileSync(filePath, onMountedContent, 'utf-8');
        console.log('已保留 onMounted 范围代码:', file);
    }
});