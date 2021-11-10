const fs = require('fs');

fs.readdir(require('path').join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, items) => {
  if(err) throw err;

  items.forEach(item => {
    if (item.isFile()) {
      fs.stat(require('path').join(__dirname, 'secret-folder', item.name), (err, stats) => {
        if(err) throw err;
        else {
          console.log(`${require('path').parse(item.name).name} - ${require('path').parse(item.name).ext.slice(1)} - ${stats.size}b`);
        }
      });
    }
  });
});