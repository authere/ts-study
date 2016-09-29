class Foo {}
interface Bar {}
type Bas = {}

var someVar = Foo;

namespace ns {
  export class Foo {};
}

import Barr = ns.Foo;
var bar: Barr = {};

console.log(`typeof Barr ${typeof Barr}`);
console.log(`typeof bar ${typeof bar}`);
//console.log(`typeof Bas ${typeof Bas}`);

var power: any;
var num: number;
power = num;
num = power; //ok!

var num: number;
var str: string;
var xx: void;
num = null;
str = undefined;
xx = null;
