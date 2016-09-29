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
