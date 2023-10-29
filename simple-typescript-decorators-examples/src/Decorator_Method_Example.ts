// // function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// function log(target: any, propertyKey: string) {    
//     console.log(`target ${target}`);
//     console.log(`Logging ${propertyKey}`);
//     // const originalMethod = descriptor.value;
//     // descriptor.value = function (...args: any[]) {
//     //     console.log(`Method ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
//     //     const result = originalMethod.apply(this, args);
//     //     console.log(`Method ${propertyKey} returned: ${JSON.stringify(result)}`);
//     //     return result;
//     // };
//     // return descriptor;
// }

// class MyClass {
//     @log
//     myMethod(arg1: string, arg2: string) {
//         return `Hello, ${arg1}! You passed in ${arg2}.`;
//     }
// }

// const myInstance = new MyClass();
// myInstance.myMethod("world", "42");


function logger(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log("start:", originalMethod.name);
        const result = originalMethod.call(this, ...args);
        console.log("end:", originalMethod.name);
        return result;
    }

    return replacementMethod;
}

class User {
    constructor(private name: string, private age: number) {}

    @logger
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    @logger
    printAge() {
        console.log(`I am ${this.age} years old`);
    }
}

const user = new User("Ron", 25);
user.greet();
user.printAge();