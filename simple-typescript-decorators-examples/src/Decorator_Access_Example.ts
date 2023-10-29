function simpleAccessorDecorator(originalMethod: any, _context: any) {
    console.log(`Decorating accessor`);
}

class ExampleClass {
    private _value: number = 0;

    @simpleAccessorDecorator
    get value(): number {
        return this._value;
    }

    set value(newValue: number) {
        this._value = newValue;
    }
}

const example = new ExampleClass();
example.value = 42; // This will trigger the accessor decorator for the 'value' property
const currentValue = example.value; // This will trigger the accessor decorator for the 'value' property
console.log(currentValue);
