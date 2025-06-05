const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '../dist/index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// 用正则删除所有 <style>...</style> 标签（支持跨行）
html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

// 保存覆盖原文件
fs.writeFileSync(htmlPath, html, 'utf-8');
console.log('已移除所有 <style> 标签');