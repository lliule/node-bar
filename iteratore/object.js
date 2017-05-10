let _ = require('underscore');

//获取对象的所有keys
// keys();
function keys() {
    let res = _.keys({name:'dana',age:18});
    console.log(res);

    for(let key in {name:'dana',age:18}){
        console.log(key);
    }
}


//获取所有的value
// values();
function values() {
    let res = _.values({name:'dana',age:18});
    console.log(res);
}

//遍历对象的key,value
// mapObject();
function mapObject() {
    _.mapObject({name:'dana',age:18},function (val, key) {
        if(key == 'name'){
            console.log(val);
        }
    })
}

//将对象转成数组
// pairs();
function pairs() {
    let res = _.pairs({name:'dana',age:18});
    console.log(res);
}

//key value对换
// invert();
function invert() {
    let res = _.invert({name:'dana',age:18});
    console.log(res);
}

// functions();
function getFunctions() {
    let res = _.functions(_);
    console.log(res);
}

//类似于findIndex,返回满足条件的结果
// findKey();
function findKey(){
    let res = _.findKey({name:'dana',age:18},function (val, key) {
        if(key.length>3){
            console.log(key+'---'+val);
            return val;
        }
    });
    console.log(res);
}

// tap();
function tap() {
    let res = _.chain([1,2,3,200]).filter(function (num) {
        return num%2==0;
    }).tap();
    console.log(res);
}
// has();
function has() {
    let list = {a:1,b:{c:2,d:3},e:4};
    let res = _.has(list,'a');
    console.log(res)
}

//根据key获取对象的值
// property();
function property() {
    let obj = {a:1,b:{c:2,d:3},e:4};
    let res = _.property('a')(obj);
    console.log(res);
}

// propertyOf();
function propertyOf() {
    let obj = {name:'moe'};
    let res = _.propertyOf(obj)('name');
    console.log(res)
}

//即可以判断对象，也可以判断数组是否为空
// isEmpty();
function isEmpty() {
    let obj1 = [];
    let res = _.isEmpty(obj1);
    console.log(res);
}

// isEqual();
//深度比较两个对象是否相等
function isEqual() {
    let obj1 = {name:"moe",other:{name:'mo',age:10},age:18};
    let obj2 = {name:"moe",other:{name:'mo',age:10},age:18};
    let res = _.isEqual(obj1,obj2);
    console.log(res);
}

// isMatch();
function isMatch() {
    let obj = {name:'moe',age:32};
    let res = _.isMatch(obj,{age:31});
    console.log(res);
}

// isArray();
function isArray() {
    let obj1  ={name:'moe'};
    let obj2 = [1,2];
    let res1 = _.isArray(obj1);
    let res2  = _.isArray(obj2);
    console.log('res1 = '+res1+',res2='+res2);
}

// isFunc();
function isFunc() {
    let res = _.isFunction(isArray);
    console.log(res);
}