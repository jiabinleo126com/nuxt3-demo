const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const filesToDelete = ['200.html', '404.html'];

filesToDelete.forEach(filename => {
  const filePath = path.join(distDir, filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`已删除: ${filePath}`);
  } else {
    console.log(`未找到: ${filePath}`);
  }
});