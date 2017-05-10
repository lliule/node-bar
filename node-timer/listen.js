let EventEmitter = require('events');
let util = require('util');
class Emitter1 extends  EventEmitter{}

// util.inherits()

let emitter1 = new Emitter1();


function event() {
     emitter1.on('event',function(data){
     console.log('NO1监听到');
     setTimeout(function () {
     data.emit('ok',{ready:true});
     },0);

     });

     emitter1.on('event',function(){
     console.log('NO2监听到');
     setTimeout(function (emit) {
     emit.emit('ok',{ready2:true})
     },0,this);
     });

     emitter1.emit('event',emitter1);
     emitter1.on('ok',(data)=>{
     console.log(data);
     });
}

//监听到当前线程有错误
process.on('uncaughtException',(err)=>{
    console.error('有错误');
    console.log(err);
});
// error();
function error() {

    test();
    function test() {
        throw new Error('111');
    }

//监听错误事件。一般来说我们不可控什么时候事件监听抛出异常，所以直接在本线程中监听异常
//但是作为最佳实践，应该始终为 'error' 事件注册监听器。
    emitter1.on('error',function (err) {
        console.log(err);
    });
    emitter1.emit('error',new Error('dana'));
}

/**
 *注册了newListener事件后，当emitter添加了新的监听器（on('event)）,会触发newListener事件，
 * 这个时间添加一个监听器，添加的监听器在原来的监听器 之前 执行
 */
// newListen();
function newListen() {
    emitter1.once('newListener',function (event, listener) {
        if(event == 'event'){
            emitter1.on('event',function (data) {
                console.log('B');
            })
        }
    });

    emitter1.on('event',function (data) {
        console.log('A');
    });

    emitter1.emit('event');
}

// prependListener();
// C -- B --- A
function prependListener() {
    emitter1.once('newListener',function (event, listener) {
        if(event == 'event'){
            emitter1.on('event',function (data) {
                console.log('B');
            })
        }
    });
    emitter1.prependListener('event',function () {
        console.log('C');
    });
    emitter1.on('event',function () {
        console.log('A');
    });
    emitter1.emit('event');
}

// removeListener();
//remove删除的监听器，本次无效，下次触发有效
// A -- B -- C -- A -- B
function removeListener() {
    let cb1 = function () {
      console.log('B');
    };
    let cb2 = ()=>{
        console.log("C");
    };

    emitter1.on('event',function () {
        console.log('A');
        emitter1.removeListener('event',cb2);
    });

    emitter1.on('event',cb1);
    emitter1.on('event',cb2);

    emitter1.emit('event');
    emitter1.emit('event');
}