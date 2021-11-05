const path = require('path');
const fs = require('fs');
const styles = path.join(__dirname, 'styles');
const projectDist = path.join(__dirname, 'project-dist');

fs.writeFile(`${projectDist}/bundle.css`, '', (err) => {
      if (err) throw err;
});
fs.unlink(`${projectDist}/bundle.css`,(err) =>{
  if (err) throw err;
})
fs.readdir(styles, {withFileTypes: true }, (err, data) =>{
  if (err) throw err;
  data.forEach(file => {
    if(path.extname(file.name) == '.css'){
      fs.readFile(`${styles}/${file.name}`, 'utf-8', (err, data) => {
        if (err) throw err;
        fs.appendFile(`${projectDist}/bundle.css`,  `${data}\n`, (err) => {
            if (err)  throw err;
          })
      })
    }
  })
})

