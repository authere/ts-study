let foo = 123;
if (true) {
      var foo = 456;
// let.ts(1,5): error TS2451: Cannot redeclare block-scoped variable 'foo'.
//  let.ts(3,11): error TS2451: Cannot redeclare block-scoped variable 'foo'.
}
console.log(foo); // 456
