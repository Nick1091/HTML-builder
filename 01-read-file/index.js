const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// )
const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8')
readableStream.on('data', stream => console.log(stream));