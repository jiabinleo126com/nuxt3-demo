const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '../dist/index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// 用正则匹配所有 <style>...</style> 标签内容
const styleTags = html.match(/<style[\s\S]*?<\/style>/gi);
if (styleTags) {
    console.log('提取的 <style> 标签内容:', styleTags);
    // 确保目标目录存在
    const cssDir = path.resolve(__dirname, '../dist/css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
        console.log('已创建目录:', cssDir);
    }
    // 保存提取的内容到文件
    const style = styleTags.join('\n').replaceAll("<style>", "").replaceAll("</style>", "");
    const extractedStylesPath = path.resolve(__dirname, '../dist/css/index.css');
    fs.writeFileSync(extractedStylesPath, style, 'utf-8');
    console.log('已保存提取的 <style> 标签内容到 extracted-styles.css');
}
// // 用正则删除所有 <style>...</style> 标签（支持跨行）
// html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
// console.log(html)

// // 保存覆盖原文件
// fs.writeFileSync(htmlPath, html, 'utf-8');
// console.log('已移除所有 <style> 标签');