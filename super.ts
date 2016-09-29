module quz {
    class Base {
        log = () => { console.log('hello world'); }
    }
    class Child extends Base {
        logWorld() { super.log() };
//super.ts(6,28): error TS2340: Only public and protected methods of the base class are accessible via the 'super' keyword.
    }
}
