const fs = require('fs');
var path = require('path');

fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
  files.forEach(file => {
    if(fs.statSync("03-files-in-folder/secret-folder/" + file).size != 0) {
      console.log(path.basename(file, path.extname(file)) + ' - ' + path.extname(file).split('.').join('') + ' - ' + `${fs.statSync("03-files-in-folder/secret-folder/" + file).size*1024} kb`);
    } 
  });
})