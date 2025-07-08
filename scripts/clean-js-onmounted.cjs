
const str = `
<link rel="modulepreload" as="script" crossorigin href="/statics/PrgmiIFN.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/B6uJ4_zS.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/DYyw2SLm.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/CYnbHgmx.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/BCYHog36.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/c1t_SHFH.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/50yN2Mrk.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/CVbAEW18.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/BJcPOflr.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/D13Vbbmc.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/B8ltdI2B.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/BQvQ0e8a.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/CioS0WMc.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/QdSaVu61.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/DOkHyEJd.js">
<link rel="modulepreload" as="script" crossorigin href="/statics/BU4cwJh_.js">
`


const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../dist/statics');

fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    // console.log(file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        if (!content.includes('onMounted')) {
            fs.unlinkSync(filePath);
            // console.log(`已删除不包含 onMounted: ${file}`);
        } else if (!str.includes(file)) {
            fs.unlinkSync(filePath);
            // console.log(`已删除不包含预加载: ${file}`);
        } else {
            // console.log(`保留: ${file}`);
        }
    }
    // else if (fs.statSync(filePath).isFile() && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))) {
    //     if (!str.includes(file)) {
    //         fs.unlinkSync(filePath);
    //         console.log(`已删除不包含预加载图片: ${file}`);
    //     }
    // }
    // else if (!(fs.statSync(filePath).isFile() && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')))) {
    //     // fs.unlinkSync(filePath);
    //     console.log(`已删除不包含预加载: ${file}`);
    // } else {
    //     console.log(`保留了: ${file}`);
    // }
});