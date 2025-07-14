const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

async function extractStyles(htmlPath, cssPath = 'styles.css') {
    try {
        // 读取 HTML 文件
        const htmlContent = await fs.promises.readFile(htmlPath, 'utf-8');

        // 解析 HTML
        const root = parse(htmlContent);
        const styleTags = root.querySelectorAll('style');

        if (styleTags.length === 0) {
            console.log('未找到 <style> 标签');
            return;
        }

        // 提取并合并样式
        const styles = styleTags.map(tag => tag.textContent).join('\n\n');

        // 写入 CSS 文件
        await fs.promises.writeFile(cssPath, styles, 'utf-8');
        console.log(`成功提取 ${styleTags.length} 个样式块到: ${path.resolve(cssPath)}`);

        return cssPath;
    } catch (error) {
        console.error('处理失败:', error);
        process.exit(1);
    }
}

// 使用示例 (从命令行参数获取路径)
// const [htmlPath, cssPath] = process.argv.slice(2);

if (!htmlPath) {
    console.log('使用方法: node extractStyles.js <html文件> [输出css文件]');
    console.log('示例: node extractStyles.js index.html styles.css');
} else {
    extractStyles(htmlPath, cssPath);
}