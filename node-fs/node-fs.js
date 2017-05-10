let fs = require('fs');
let util = require('util');
let path = require('path');
// link();
function link() {
    fs.link('./file/file1.txt','./file/file.txt',function (err) {
        if(err)
           return  console.log(err);
        console.log('success');
    })
}

// lstat();
function lstat() {
    fs.lstat('./file/file.txt',function (err, data) {
        if(err)
            return console.log(err);
        util.log(data.isFile());
        util.log(data.isDirectory());
        util.log(data.isBlockDevice());
        util.log(data.isCharacterDevice());
        util.log(data.isSymbolicLink());
        util.log(data.isFIFO());
        util.log(data.isSocket());
    })
}

// mkdtemp();
function mkdtemp() {
    let sep = path.sep;
    fs.mkdtemp('./file'+sep,function (err, folder) {
        if(err)
            throw err;
        console.log(folder);
    })
}

// truncate();
function truncate() {
    fs.truncate('./file/file.txt',10,function (err, data) {
        if(err)
            return console.log(err);
        console.log(data);
    });
}


// resolve();
function resolve() {
    let res = require.resolve('fs-extra');
    console.log(res);
}