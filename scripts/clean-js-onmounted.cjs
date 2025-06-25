
const str = `
        <link rel="modulepreload" as="script" crossorigin href="/statics/BjMc_dpO.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/B2nxbcr0.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/CMwx5ZQn.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/CTT0ojD3.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/BIkg7Gxa.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/DAJ8V5CI.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/DVeotA7P.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/CZtcLXhU.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/B6gFKAUK.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/Bir2QqeQ.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/Bo-jdRwm.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/CoamDGnz.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/WCC0iDTe.js">
        <link rel="modulepreload" as="script" crossorigin href="/statics/C6Miu_Cd.js">
`


const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../dist/statics');

fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    console.log(file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        if (!content.includes('onMounted')) {
            fs.unlinkSync(filePath);
            console.log(`已删除不包含 onMounted: ${file}`);
        } else if (!str.includes(file)) {
            fs.unlinkSync(filePath);
            console.log(`已删除不包含预加载: ${file}`);
        } else {
            console.log(`保留: ${file}`);
        }
    }
});