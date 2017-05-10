let listen = require('./listen');
let time = 5;
let res = [];
while(time>0){
    res1 = setInterval(function (time) {
        console.log(time);
    },5,time);
    time --;
    res.push(res1);
}
res.forEach(function (res2) {
    clearInterval(res2);
});
console.log("end");