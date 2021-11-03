const fs = require('fs');
const path = require('path');
const mainPath = path.join(__dirname, 'secret-folder');
fs.readdir(mainPath, {withFileTypes: true }, (err, data ) =>{
  if (err) throw err;
  // console.log(data)
  data.forEach(file => {
    if(file.isFile()){
      fs.stat(path.join(__dirname, `secret-folder/${file.name}`), (err, fi) =>{
        if (err) throw err;
        if(fi.isFile){
          // console.log(file.name.split('.')[0]+' - '+file.name.split('.')[1]+' - '+fi.size / 1000 + 'kb' )
          console.log(file.name.split('.')[0]+' - '+path.extname(file.name).slice(1)+' - '+fi.size / 1000 + 'kb' )
        }
      })
    }
  })
})

// // path.parse('/home/user/dir/file.txt');
// import { readdir } from 'fs/promises'
// try {
//   const files = await readdir('secret-folder');
//   for (const file of files)
//     console.log(file);
// } catch (err) {
//   console.error(err);
// }
// {withFileTypes: true}

// import { watch } from 'fs';
// // Example when handled through fs.watch() listener
// watch('./tmp', { encoding: 'buffer' }, (eventType, filename) => {
//   if (filename) {
//     console.log(filename);
//     // Prints: <Buffer ...>
//   }
// });



    // console.log(file.split('.')[0]+'-'+path.extname(file).split('.').join(''));
    // console.log(path.extname(file).split('.').join(''))
    // console.log(path.extname(file).split('.').join(''))

    // fs.stat (data, (err, file) =>{
    //   if (err) throw err;
    //   console.log(file)
    // })
