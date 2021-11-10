const fs = require('fs');
const { stdout } = require('process');
const stream = fs.createReadStream( require('path').join(__dirname, '/text.txt'), 'utf8' );

stream.on('data', (data) => stdout.write(data));
stream.on('error', (err) => stdout.write(`Err: ${err}`));