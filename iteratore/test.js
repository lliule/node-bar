let _ = require('underscore');
/**
 * map
 * @type {{one: number, two: number, three: number}}
 */
function map() {
    let demo = {one:1,two:2,three:3};
    let val = _.map(demo,function (num, index, list) {
        console.log('index='+index+'--'+JSON.stringify(list));
        return num*3;
    });
    console.log(val);
}
// reduce();
function reduce() {
    let sum = _.reduce([1,2,3],function (memo, num) {
        return memo+num;
    },0);//0 被赋值给memo,
    console.log(sum);
}
// reduceRight();
function reduceRight() {
    let list = [0,2,3,6,5];
    _.reduceRight(list,function (a, b) {
        console.log(a-b);
    })
}

//类比lambda表达式
// find();
//返回第一个迭代到的对象
function find() {
    let even =_.find([1,2,3,4,5],function (num) {
        return num%2 == 0;
    });
    console.log(even);
}

// filter();
//遍历所有符合条件的对象
function filter() {
    let evens = _.filter([1,2,3,4],function (num) {
        return num%2 == 0;
    });
    console.log(evens);
}

// reject();
function reject() {
    let odds = _.reject([1,2,3,4],function (num) {
        return num %2 == 0;
    });
    console.log(odds);
}


//遍历数组，返回所有含有某个key-value的json
// where();
function where() {
    let files = [
        {1:1,11:11},
        {1:1,22:22},
        {1:1,33:33},
        {44:44}
    ];
    let res = _.where(files,{1:1});
    console.log(res);
}

// every();
function every() {
    let list = [true,1,null,'yes'];
    let res = _.every(list,_.identity);
    console.log(res);
}
//匹配到任何一个就返回true,
// some();
function some() {
    let list  = [null,0,'yes',false];
    let res = _.some(list,function (val) {
        return val ? (val.length>4 ? val : false) : false;
    });
    console.log(res);
}

//匹配到元素就返回true，否则返回false
// contains();
function contains() {
    let list = [1,2,3];
    let res = _.contains(list,4);
    console.log(res);
}

// invoke();
//接受任意一个方法名，执行该方法
function invoke() {
    let res = _.invoke([[5,1,7],[3,1,2]],'sort');
    console.log(res);
}

// pluck();
//萃取出一个数组中某个元素的所有值，返回值的数组
function pluck() {
    let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let res = _.pluck(stooges,'name');
    console.log(res);
}

// size();
//返回list长度或者对象的元素个数
function size() {
    let list = {1:1,2:2,3:3};
    let list2 = [1,2,3,4];
    console.log(_.size(list));
    console.log(_.size(list2));
}

// partition();
//拆分数组,第一个数组符合表达式，后一个不符合
function partition() {
    let list = [0,1,2,3,4,5];
    let res = _.partition(list,function (num) {
        return num%2==0;
    });
    console.log(res);
}

