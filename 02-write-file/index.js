const fs = require("fs");

console.log('Введите любой текст:');

process.openStdin().on('data', function(way) { 
    if(way.toString('utf8').trim() != 'exit') {
        fs.appendFile("02-write-file/text.txt", way, function(error) {
            if(error) throw error;
        });
    } else {
        console.log('Success!');
        process.exit(0);
    }
});
 
process.on('SIGINT', () => {
    console.log('Success!');
    process.exit(0);
})