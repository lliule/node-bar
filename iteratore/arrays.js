let _ = require('underscore');

//排除数组的后n个元素，不指定，排除最后一个元素
// initial();
function initial() {

   let res =  _.initial([1,2,3,4,5]);
   let res1 =  _.initial([1,2,3,4,5],3);
   let res2 =  _.initial([1,2,3,4,5],0);

   console.log(res);
   console.log(res1);
   console.log(res2);

}

//截取数组的前N个元素后返回剩下的
// rest();
function rest() {
    let res = _.rest([1,2,3,4]);
    let res1 = _.rest([1,2,3,4],2);
    let res2 = _.rest([1,2,3,4],0);

    console.log(res);
    console.log(res1);
    console.log(res2);
}

//返回一个除去所有false值的 array副本。
// //在javascript中, false, null, 0, "", undefined 和 NaN 都是false值.
// compact();
function compact() {
    let res = _.compact([null,NaN,0,false,123]);
    console.log(res);
}

//让多维数组变成一维数组，如果指定第二个参数，则n维数组变成n-1维数组
// flatten();
function flatten() {
    let list = [1,2,[3,4],[[5,6],[7,8]]];
    let res = _.flatten(list);
    let res1 = _.flatten(list,true);


    console.log(res);
    console.log(res1);
}

//返回排除指定值后（可以是多个指定值）的所有元素
// without();
function without() {
    let res = _.without([1,2,3,0,12,3,67],0,3);
    console.log(res);
}

//将多个集合去重后按顺序组成一个集合，并集
// union();
function union(){
    let res = _.union([1,2,3],[101,2,1,10],[2,101,102]);
    console.log(res);
}

// intersection();
//交集
function intersection() {

    let res = _.intersection([1,2,3],[11,2,3],[32,2,3223]);
    console.log(res);
}

// difference();
//去除其他数组中存在的元素后返回
function difference() {

    let res = _.difference([1,2,3,4],[1,2],[4]);
    console.log(res);
}

// zip <--> unzip
// zip();
function zip() {

    // let list = {a:"aaa",b:{a:"bbb",b:"bbbb"},c:{a:"c",b:"cc",c:{a:"c2"}}};
    let res = _.zip([11,22,33],["aa","bb",'cc'],["q","w"]);
    console.log(res);
}


object();
function object() {
    // let res = _.object([1,2,3]);

    let res = [1,2,3].join(',');
    console.log(res);
}