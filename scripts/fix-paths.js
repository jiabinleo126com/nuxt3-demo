import { replaceInFile } from 'replace-in-file'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

const options = {
  files: 'dist/**/*.html',
  from: [
    /href="\/static\//g,
    /src="\/static\//g,
    /href="\/_payload\.json/g,
    /data-src="\/_payload\.json/g,
    /src="\/_nuxt\//g,
    /href="\/_nuxt\//g
  ],
  to: [
    'href="static/',
    'src="static/',
    'href="_payload.json',
    'data-src="_payload.json',
    'src="_nuxt/',
    'href="_nuxt/'
  ],
};

try {
  const results = await replaceInFile(options);
  console.log('替换完成:', results);
} catch (error) {
  console.error('发生错误:', error);
}


// 递归查找 dist 目录下所有 html/css/js 文件
const files = glob.sync('dist/**/*.{html,css,js}', { nodir: true })

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8')
  // 匹配 /statics/xxx.XXX.png 这类路径，全部转小写
  content = content.replace(/(\/statics\/[a-z0-9_.-]+\.[a-z0-9]{8})\.([a-z0-9A-Z]+)\.([a-z0-9A-Z]+)(\.[a-z0-9]+)/g, (m) => m.toLowerCase())
  // 兼容常见的 /statics/xxx.XXX.png 形式
  content = content.replace(/(\/statics\/[a-z0-9_.-]+\.[a-z0-9A-Z]+)(\.[a-z0-9A-Z]+)?/g, (m) => m.toLowerCase())
  fs.writeFileSync(file, content, 'utf8')
})

console.log('所有静态资源引用路径已转为小写');