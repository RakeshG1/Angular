function simpleParameterDecorator(originalMethod: any, _context: any) {
    return function(this: any, ...args: any[]) {
    // console.log(`Decorating parameter ${parameterIndex} of ${propertyKey} in ${target}`);
    const param1 = args[0] 
    const param2 = args[1] 
    console.log(originalMethod.name);
    console.log(_context);
    console.log(param1);
    console.log(param2);
    console.log(`Step: 1 --> Decorating method`);
    // originalMethod.call(this, param1);
    originalMethod.call(this, param1, param2);
    }
}

class ExampleClass {
    @simpleParameterDecorator
    someMethod(param1: string, param2: number) {
        console.log("Step: 2 --> Executing someMethod");
    }
}

const example = new ExampleClass();
example.someMethod("example", 42);