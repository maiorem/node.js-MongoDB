
const mod1 = require('./module_1');

//console.log(mod1); //export 한 데이터가 담김 (가장 마지막에 export한 것 하나만)
console.log(mod1.user.role); //exports가 붙은 모든 데이터를 가져올 수 있음
