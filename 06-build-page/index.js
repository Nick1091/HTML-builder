const path = require('path');
const fs = require('fs');
const styles = path.join(__dirname, 'styles');
const projectDist = path.join(__dirname, 'project-dist');
const components = path.join(__dirname, 'components');
const template = path.join(__dirname, 'template.html');
const currentAssets = path.join(__dirname, 'assets');
const assets = path.join(projectDist, 'assets');

fs.mkdir(projectDist, {recursive: true}, (err) =>{
  if (err) throw err;
}) 
fs.writeFile(`${projectDist}/style.css`, '', (err) => {
  if (err) throw err;
});   
//write css
fs.readdir(styles, {withFileTypes: true }, (err, data) =>{
  if (err) throw err;
  data.forEach(file => {
    if(path.extname(file.name) == '.css'){
      fs.readFile(`${styles}/${file.name}`, 'utf-8', (err, data) => {
        if (err) throw err;
        fs.appendFile(`${projectDist}/style.css`, `${data}\n`, (err) => {
          if (err)  throw err;
        })
      })
    }
  })
})
// write html
fs.readFile(template, 'utf-8', (err, teg) => {
  if (err) throw err;
fs.readdir(components, {withFileTypes: true }, (err, data) =>{
  if (err) throw err;
  data.forEach(file => {
    if(path.extname(file.name) == '.html'){
      fs.readFile(`${components}/${file.name}`, 'utf-8', (err, data) => {
        if (err) throw err;
        teg = teg.replace(`{{${file.name.split('.')[0]}}}`, data)
        fs.writeFile(`${projectDist}/index.html`, teg , (err) => {
          if (err) throw err;
       });         
      })
     }
    })
  })
})
// if(assets){
fs.mkdir(assets, {recursive: true}, (err) =>{
  if (err) throw err;
}) 
fs.rm(assets, {recursive: true}, (err) =>{
  if (err) throw err;
fs.mkdir(assets, {recursive: true}, (err) =>{
  if (err) throw err;
  function copyFille(fromDir, destDir){
    fs.readdir(fromDir, {withFileTypes: true }, (err, data ) =>{
        if (err) throw err;
        data.forEach(file => {
          if(file.isDirectory()){ 
          const first = path.join(fromDir, file.name);
          const destPath = path.join(destDir, file.name);
          copyFille(first, destPath)
        } else{
          fs.mkdir(destDir, {recursive: true}, (err) => {
          if (err) throw err;
          })
          fs.copyFile(`${fromDir}/${file.name}`, `${destDir}/${file.name}`, (err) => {
            if (err) throw err;
          })
        }
      })
    })
  }
  copyFille(currentAssets, assets);
})
})

