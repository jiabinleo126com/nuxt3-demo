

const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const dir = path.resolve(__dirname, '../dist/topic/2025/sz/');
const staticsdir = path.resolve(__dirname, '../dist/statics');
var tsContent = "//@ts-nocheck \n import \"./index.less\"; \n";

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = path + '/' + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                // fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

deleteFolderRecursive('product-page');

fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    console.log("filePath")
    console.log(filePath)
    if (fs.statSync(filePath).isFile() && (file.endsWith('200.html') || file.endsWith('404.html'))) {
        // fs.unlinkSync(filePath);
    } else if (fs.statSync(filePath).isFile() && file.endsWith('.html')) {
        console.log(filePath)
        const content = fs.readFileSync(filePath, 'utf-8');
        fs.readdirSync(staticsdir).forEach(file_ => {
            const filePath_ = path.join(staticsdir, file_);
            if (fs.statSync(filePath_).isFile() && file_.endsWith('.js')) {
                const jsStr = fs.readFileSync(filePath_, 'utf-8');
                if (!content.includes(file_) || !jsStr.includes('onMounted')) {
                    // fs.unlinkSync(filePath);
                    console.log(`已删除不包含预加载和不包含onMounted的文件: ${file_}`);
                } else {
                    console.log(`未删除: ${file_}`);
                    tsContent += jsStr;
                }
            }
        });

        const root = parse(content);
        const styleTags = root.querySelectorAll('style');
        if (styleTags.length === 0) {
            console.log('未找到 <style> 标签');
            return;
        }
        const styles = styleTags.map(tag => tag.textContent).join('\n\n');
        const dirPath = "product-page";
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Directory ${dirPath} created.`);
        } else {
            console.log(`Directory ${dirPath} already exists.`);
        }
        // const dirPathFileLess = `${dirPath}/index.less`
        // const dirPathFileTs = `${dirPath}/index.ts`
        // if (!fs.existsSync(dirPathFileLess)) {
        //     fs.writeFileSync(dirPathFileLess, '', 'utf8'); // 创建空文件
        //     fs.writeFileSync(dirPathFileTs, '', 'utf8'); // 创建空文件
        //     console.log(`File ${dirPathFileLess} created.`);
        // } else {
        //     console.log(`File ${dirPathFileLess} already exists.`);
        // }



        console.log(`成功提取 ${styleTags.length} 个样式块到: ${path.resolve(__dirname, "../product-page/index.less")}`);
        const result = content.replace(
            /src="\/statics\/([^"]+\.png)"/g,
            'src="<%=require(`../dist/statics/$1`)%>"'
        ).replace(
            /src="\/statics\/([^"]+\.jpg)"/g,
            'src="<%=require(`../dist/statics/$1`)%>"'
        );
        var ejspath = file.replace("dist", "product-page").replace(".html", ".ejs")
        console.log(ejspath)
        fs.writeFile(path.resolve(__dirname, `../product-page/${ejspath}`), result, function (err) {
            if (err) {
                console.error(`${ejspath}创建失败`);
                console.error(err);
            }
        })
        fs.promises.writeFile(path.resolve(__dirname, `../product-page/index.less`), styles, 'utf-8');
        fs.promises.writeFile(path.resolve(__dirname, `../product-page/index.ts`), tsContent, 'utf-8');
    }
});


