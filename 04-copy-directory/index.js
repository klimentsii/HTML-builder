const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

fs.rm(path.join(__dirname, 'files-copy'), {force: true, recursive: true}, (err) => {
    if (err) console.error(err.message);

    fsPromises.mkdir(path.join(__dirname, 'files-copy'), {recursive: true})
    .then( () => fsPromises.readdir(path.join(__dirname, 'files'), {withFileTypes: true}) )
    .then(data => {
        data.forEach(dirent => {
            if (dirent.isFile()) {
                const pathToFile = path.join(path.join(__dirname, 'files'), dirent.name);
                const pathToFileCopy = path.join(path.join(__dirname, 'files-copy'), dirent.name);
                fsPromises.copyFile(pathToFile, pathToFileCopy);
            } else if (dirent.isDirectory()) {
                const pathToFolder = path.join(path.join(__dirname, 'files'), dirent.name);
                const pathToFolderCopy = path.join(path.join(__dirname, 'files-copy'), dirent.name);
                fsPromises.mkdir(pathToFolderCopy, {recursive: true});
            }
        })
    })
    .catch(err => console.error(err.message));
})