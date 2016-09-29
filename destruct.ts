var foo = { bar: { bas: 123, bat: 456}};
var {bar: {bas, bat}} = foo;
//js:
//var foo = { bar: { bas: 123, bat: 456 } };
//var _a = foo.bar, bas = _a.bas, bat = _a.bat;
bat === 456 && console.log('ok')

var [x, , ...rest] = [1,2,3,4]
x === 1 && rest[0] === 3 && rest[1] === 4 && console.log('ok')

function add(x: number, y: number) {
  console.log(`x(${x}) + y(${y}) = ${x + y}`);
  return x + y;
}

add(...rest)
//Q: NOT EXPECTED
//destruct.ts(16,1): error TS2346: Supplied parameters do not match any signature of call target.
