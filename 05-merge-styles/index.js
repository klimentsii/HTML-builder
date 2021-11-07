const fs = require('fs')
var path = require('path')

fs.readdir('05-merge-styles/project-dist/', function(err) {
    if (err) throw err;
    fs.unlink(require('path').join('05-merge-styles/project-dist/', 'bundle.css'), err => {
        if (err) throw err;
    });
});

fs.readdir("05-merge-styles/styles", function(err, files) {
    if (err) throw err;
    files.forEach(file => {
        if(path.extname(file) == '.css') {
            fs.readFile(`05-merge-styles/styles/${file}`, "utf8", function(error,data) {
                if(error) throw error;
                fs.appendFile(`05-merge-styles/project-dist/bundle.css`, data, function(error) {
                    if(error) throw error;
                }); 
            });
        }
    })
})