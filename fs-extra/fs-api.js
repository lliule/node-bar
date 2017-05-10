let fs = require('fs-extra');

// copy();
//copy文件或者文件夹及其子文件
function copy() {
    "use strict";
    fs.copy('../iteratore','ite',function (err) {
        if(err){
            console.log(err);
        }
    });

    //promise
    fs.copy('../package.json','config2.json')
        .then(()=>{
        console.log('success');
        }).catch((err)=>{
        console.log(err);
    })
}

//将一个文件夹置空。如果不存在，就创建,可以嵌套多层文件目录
// emptyDir();
function emptyDir() {
    fs.emptyDir('./test/file',(err)=>{
        if(err)
            console.log(err);
        fs.writeFile('./test/file/file2.txt','aaa','utf8',(err)=>{
            if(err)
                console.log(err);
            console.log('success');
        })
    });
}

//确定使文件存在。，如果不存在，就连同目录一级级创建，如果存在，不会修改！
// ensureFile();
function ensureFile() {
    fs.ensureFile('./test/file/aaa/tt.txt',err=>{
        if(err)
            console.log(err);
        console.log('sucesss')
    })
}

//确定文件夹存在，如果不存在，就层层创建
// ensureDir();
function ensureDir() {
    fs.ensureDir('./test/file/aaa',err=>{
        if(err)
            console.log(err);
        console.log('success')
    })
}

//把srcpath下的文件（不能是文件夹）复制到dstpath下
// ensureLink();
function ensureLink() {
    let srcpath = './test/file.txt';
    let dstpath = './tmp/this/path/does/not/exist/file.txt';
    fs.ensureLink(srcpath,dstpath)
        .then(()=>{console.log('success')})
        .catch(err=>{console.log(err)});
}

//把文件移动到另一个目录，若目录不存在则创建
// move();
function move() {
    fs.move('./test/file.txt', './tmp/this/path/does/not/exist/file.txt')
        .then(() => {
            console.log('success')
        })
        .catch(err => {
            console.log(err)
        });
}

// outputFile();
//类似writeFile.但是如果父目录不存在，就创建。
function outputFile() {
    let file = './test/file.txt';
    fs.outputFile(file,'你好',err=>{
        if(err)
            console.log(err);
        fs.readFile(file,'utf8',(err,data)=>{
            if(err)
                console.log(err);
            console.log(data);
        })
    })
}

// outputJson();
//写入json
function outputJson() {
    let file = './test/file2.json';
    fs.outputJson(file,{name:'你好'},err=>{
        if(err)
            return console.error(err);
        fs.readJson(file,(err,data)=>{
            if(err)
                return console.log(err);
            console.log(data.name);
        })
    })
}

// pathExists();
function pathExists() {
    let file = './test/file1.txt';
    fs.pathExists(file)
        .then((data)=>{
        console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
}

// readJson();
function readJson() {
    let file = './test/file12.json';
    fs.readJson(file)
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
}

// remove();
//相当于 rm -rf .
//删除文件或者目录，目录有子文件，全部删除
function remove() {
    let file = './test';
    fs.remove(file)
        .then(()=>{
        console.log('sucess');
        })
        .catch(err=>{
            console.log(err);
        })

}