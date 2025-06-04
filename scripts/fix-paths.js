import { replaceInFile } from 'replace-in-file'

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