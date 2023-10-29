@classDecorator
class Person {}

function classDecorator(target: Object, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<any>): any{
    // do something with your class
    Object.freeze(target);
    // Object.freeze(target.prototype);
}

console.log(Object.isFrozen(Person)); // true

class Tom extends Person {} // error, cannot be extended