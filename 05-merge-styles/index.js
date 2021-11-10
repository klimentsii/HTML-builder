const fs = require('fs');
const path = require('path');

const checkStyles = () => {
  fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err) throw new Error('Error with reading styles');
    const cssFiles = files.filter(file => path.extname(file) === '.css');
    readWrite(cssFiles);
  });
};

const readWrite = cssFiles => {
  const writeStream = fs.createWriteStream(path.join(path.join(__dirname, 'project-dist'), 'bundle.css'));
  cssFiles.forEach(file => {
    const readStream = fs.createReadStream(path.join(path.join(__dirname, 'styles'), file));
    readStream.pipe(writeStream);
  });
};

const bundle = async () => {
  await checkStyles();
};
bundle();