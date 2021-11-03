const readline = require('readline');
const path = require('path');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);
 
console.log('Hello, Enter you text:')

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    '', (err) => {
        if (err) throw err;
    }
);

rl.on('line', (data) => {
  if(data.trim() == 'exit'){
    console.log('good bye');
    process.exit();
  }
  fs.appendFile(
    path.join(__dirname, 'text.txt'),
    `${data}\n`, (err) => {
      if (err) {
        throw err;
      }
    }
  );  
})
rl.on('close', () => {
  console.log('good bye');
  rl.close();
});
