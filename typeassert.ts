interface Foo {
    bar: number;
    bas: string;

}
//Type assertion
// as Foo vs. <Foo>, JSX에서 헤깔리므로 'as Foo' Win!
var foo = {bar: 2} as Foo;
var bar = <Foo> {bar: 2};

bar.bas = 'bas';

//function type
function func(foo: Foo): Foo {
  return foo;
}

func(bar);
var a = {bar:2, bas: 'bas', foo: 'foo'}
func(a);

//Freshness: strict object literal
func({bar:2, bas: 'bas', foo: 'foo'});
//typeassert.ts(18,26): error TS2345: Argument of type '{ bar: number; bas: string; foo: string; }' is not assignable to parameter of type 'Foo'.
//    Object literal may only specify known properties, and 'foo' does not exist in type 'Foo'.
