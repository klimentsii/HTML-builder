const fs = require('fs');

fs.readdir('04-copy-directory/files-copy/', (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(require('path').join('04-copy-directory/files-copy/', file), err => {
      if (err) throw err;
    });
  }
});

copyDir(require('ncp').ncp)

function copyDir(ncp) {
    ncp('04-copy-directory/files/', '04-copy-directory/files-copy/', function (err) {
        if (err) { return console.error(err); }
    });
}