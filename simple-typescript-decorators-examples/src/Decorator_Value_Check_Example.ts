// function checkGreaterThan(minValue: number): MethodDecorator {
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value! as Function;

//         descriptor.value = function(this: any, arg: number) {
//             if (typeof arg === 'number' && arg > minValue) {
//                 return originalMethod.apply(this, [arg]);
//             } else {
//                 throw new Error(`Value must be a number greater than ${minValue}`);
//             }
//         };

//         return descriptor;
//     };
// }

// class ExampleClass {
//     @checkGreaterThan(10)
//     performOperation(value: number) {
//         // Perform operation here
//         console.log('Operation performed successfully');
//     }
// }

// const example = new ExampleClass();
// example.performOperation(15); // This will execute successfully since the value is greater than 10

// // This will throw an error because the value is not greater than 10
// example.performOperation(5);

// function checkGreaterThan10(target: any, methodName: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[])

//     {
//     const result = originalMethod.apply(this, args);
//     if (result > 10) {    
//     return result;
//     } else {
//         throw new Error("Result must be greater than 10");
//     }
//     };
// }
// class MyClass
// {
//     @checkGreaterThan10(target, methodName, descriptor)
//     addTwoNumbers(a: number, b: number): number {
//         return a + b;
//     }
// }

// const myClass = new MyClass();
// console.log(myClass.addTwoNumbers(11, 12));

// function Techfunc(target: Object, 
//     propertyKey: string, 
//     descriptor: TypedPropertyDescriptor<any>): any {
//     const realMethod = descriptor.value;
  
//     descriptor.value = function (...args: any[]) {
//     //   console.log(`function Name: ${propertyName}`);
//       return realMethod.apply(this, args);
//     };
//   }
  
//   class CoolClass {
//     @Techfunc
//     testFunc() {
//       console.log('from testFunc');
//     }
//   }
  
//   const instance = new CoolClass();
//   instance.testFunc();

// function f() {
//     console.log("f(): evaluated");
//     return function (targetClass: any, propertyKey: string, descriptor?: TypedPropertyDescriptor<() => void>) {
//         console.log("f(): called with " + arguments.length + " arguments");
//     }
// }

// class C {
//     @f()
//     method() { }
// }

function simpleMethodDecorator(originalMethod: any, _context: any) {
    return function(this: any, ...args: any[]) {
        const message = args[0] + "Method Decorator :-)"
        // console.log(originalMethod.name);
        console.log(_context);
        console.log(message);
        console.log(`Step: 1 --> Decorating method`);
        // originalMethod.call(this.message, ...args);
        originalMethod.call(this, message);
    }
}

class ExampleClass {
    @simpleMethodDecorator
    someMethod(message: string) {
        console.log("Step: 2 --> Executing someMethod --> "+message);
    }
}

const example = new ExampleClass();
example.someMethod("Hello!!");