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
        if(fi.isFile()){
          // console.log(file.name.split('.')[0]+' - '+file.name.split('.')[1]+' - '+fi.size / 1000 + 'kb' )
          console.log(file.name.split('.')[0]+' - '+path.extname(file.name).slice(1)+' - '+fi.size / 1024 + 'kb' )
        }
      })
    }
  })
})