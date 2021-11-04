const path = require('path');
const fs = require('fs');
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files-copy');

fs.mkdir(filesCopy, {recursive: true}, (err) =>{
  if (err) throw err;
})
fs.readdir(filesCopy, {withFileTypes: true }, (err, data ) =>{
  if (err) throw err;
  data.forEach(file => {
    fs.unlink(`${filesCopy}/${file.name}`,(err) =>{
      if (err) throw err;
    })
  })
})
fs.readdir(files, {withFileTypes: true }, (err, dat) =>{
  if (err) throw err;
  dat.forEach(fil => {
    fs.copyFile((`${files}/${fil.name}`), (`${filesCopy}/${fil.name}`), (err) => {
    if (err) throw err;
    })
  })
})