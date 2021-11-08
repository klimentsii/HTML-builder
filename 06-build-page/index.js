var fs = require('fs')

var arr = new Array
arr = ['header', 'footer', 'articles']

for(let i = 0; i < arr.length; i++) {
    fs.readFile(`06-build-page/template.html`, 'utf8', function (err, data) { if(err) throw err;
        fs.readFile(`06-build-page/components/${arr[i]}.html`, "utf-8", function(err, info) { if(err) throw err; 
            let result = data.replace(new RegExp(`{{${arr[i]}}}`, 'g'), info)
            fs.writeFile('06-build-page/template.html', result, 'utf-8', function (err) { if (err) throw err; });
        })  
    });   
}

require('ncp').ncp('06-build-page/assets/', '06-build-page/project-dist/assets/', function (err) {if(err){throw err}});

fs.readdir('06-build-page/styles/', function(err, files) { if (err) throw err
    for (const file of files) {
        fs.readdir('06-build-page/project-dist', {recursive: true}, err => { if (err) throw err
            fs.readFile(`06-build-page/styles/${file}`, (err, files) => {
                fs.appendFile('06-build-page/project-dist/style.css', files, (err) => { if (err) throw err })    
            })
        })
    }
})