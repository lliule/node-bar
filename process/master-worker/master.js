let fork = require('child_process').fork;

let cpus = require('os').cpus;
console.log(cpus.length);
//根据当前机器上的cpu数量复制出Node进程数
for(let i=0;i<2;i++){
    fork('./work.js');
}