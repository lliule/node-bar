let util = require('util');

formate();
function formate() {
    let obj = {name:'dana'};
    console.log(obj);
    console.log(util.format('%j',obj)) ;
    util.format('%s','dana');
}