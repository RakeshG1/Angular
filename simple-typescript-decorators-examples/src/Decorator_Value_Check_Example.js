// function checkGreaterThan(minValue: number): MethodDecorator {
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value! as Function;
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
function simpleMethodDecorator(originalMethod, _context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var message = args[0] + "Method Decorator :-)";
        // console.log(originalMethod.name);
        console.log(_context);
        console.log(message);
        console.log("Step: 1 --> Decorating method");
        // originalMethod.call(this.message, ...args);
        originalMethod.call(this, message);
    };
}
var ExampleClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _someMethod_decorators;
    return _a = /** @class */ (function () {
            function ExampleClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            ExampleClass.prototype.someMethod = function (message) {
                console.log("Step: 2 --> Executing someMethod --> " + message);
            };
            return ExampleClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _someMethod_decorators = [simpleMethodDecorator];
            __esDecorate(_a, null, _someMethod_decorators, { kind: "method", name: "someMethod", static: false, private: false, access: { has: function (obj) { return "someMethod" in obj; }, get: function (obj) { return obj.someMethod; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var example = new ExampleClass();
example.someMethod("Hello!!");
