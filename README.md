# Angular

## Install Node (Package Manager)

- https://nodejs.org/en/download
- https://www.npackd.org/p/org.nodejs.NodeJS/14.15.5

## Javascript Doc

- https://masteringjs.io/tutorials/node/import

## Check Node Version

```sh
(base) rocks-Air:Angular rock$ node -v
v20.9.0

(base) rocks-Air:Angular rock$ npm -v
10.1.0
```

## Execute Javascript Code

```sh
(base) rocks-Air:simple_javascript_examples rock$ node Helloworld.js 
Hello, world!

(base) rocks-Air:simple_javascript_examples rock$ node calPrime.js 
[ 2, 3, 5, 7 ]

(base) rocks-Air:simple_javascript_examples rock$ node getConsole.js 
```

## To Install the Angular CLI

```sh
(base) rocks-Air:Angular rock$ npm install -g @angular/cli

added 245 packages in 19s

38 packages are looking for funding
  run `npm fund` for details
```

## Install Typescript

```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc -v
bash: tsc: command not found

(base) rocks-Air:simple_typescript_examples rock$ npm i -g typescript
added 1 package in 3s

(base) rocks-Air:simple_typescript_examples rock$ tsc -v
Version 5.2.2
```

## Execute Typescript

```sh
# Write some JavaScript or TypeScript
(base) rocks-Air:simple_typescript_examples rock$ ls
test1.ts

# We can now compile this down into JavaScript with the following command
(base) rocks-Air:simple_typescript_examples rock$ tsc test1.ts 

# TSC will compile the code into JavaScript and output it in a file called test1.js
(base) rocks-Air:simple_typescript_examples rock$ ls
test1.js        test1.ts

# If you want to specify the name of the output file
tsc test1.ts --outfile file-name.js

# If you want TSC to compile your code automatically, whenever you make a change, add the "watch" flag
tsc index.ts -w

# An interesting thing about TypeScript is that it reports errors in your text editor whilst you are coding, but it will always compile your code – whether there are errors or not.
```
```ts
// For example, the following causes TypeScript to immediately report an error:
var sport = 'football';
var id = 5;

id = '5'; // Error: Type 'string' is not assignable to 
type 'number'.
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc test2.ts 
test2.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'.

4 id = '5'; // Error: Type 'string' is not assignable to type 'number'.
  ~~


Found 1 error in test2.ts:4
```
- But if we try to compile this code with tsc index, the code will still compile, despite the error.
- This is an important property of TypeScript: it assumes that the developer knows more. Even though there's a TypeScript error, it doesn't get in your way of compiling the code. It tells you there's an error, but it's up to you whether you do anything about it.

## Create a new Angular application by typing

- Standard Import Example
```sh
(base) rocks-Air:Angular rock$ ng new standard-import-example
? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible 
options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) (Y/n) 
(base) rocks-Air:Angular rock$ cd standard_import/
(base) rocks-Air:standard_import rock$ ng new standard-import-example
? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible 
options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) Yes
Appended `source <(ng completion script)` to `/Users/rock/.bash_profile`. Restart your terminal or run the following to autocomplete `ng` commands:

    source <(ng completion script)
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
CREATE standard-import-example/README.md (1075 bytes)
CREATE standard-import-example/.editorconfig (274 bytes)
CREATE standard-import-example/.gitignore (548 bytes)
CREATE standard-import-example/angular.json (2785 bytes)
CREATE standard-import-example/package.json (1054 bytes)
CREATE standard-import-example/tsconfig.json (901 bytes)
CREATE standard-import-example/tsconfig.app.json (263 bytes)
CREATE standard-import-example/tsconfig.spec.json (273 bytes)
CREATE standard-import-example/.vscode/extensions.json (130 bytes)
CREATE standard-import-example/.vscode/launch.json (470 bytes)
CREATE standard-import-example/.vscode/tasks.json (938 bytes)
CREATE standard-import-example/src/main.ts (214 bytes)
CREATE standard-import-example/src/favicon.ico (948 bytes)
CREATE standard-import-example/src/index.html (307 bytes)
CREATE standard-import-example/src/styles.css (80 bytes)
CREATE standard-import-example/src/app/app-routing.module.ts (245 bytes)
CREATE standard-import-example/src/app/app.module.ts (393 bytes)
CREATE standard-import-example/src/app/app.component.css (0 bytes)
CREATE standard-import-example/src/app/app.component.html (22709 bytes)
CREATE standard-import-example/src/app/app.component.spec.ts (1042 bytes)
CREATE standard-import-example/src/app/app.component.ts (227 bytes)
CREATE standard-import-example/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```

## Difference between Angular and Angularjs

- One vital distinction between Angular vs AngularJS is AngularJS is JavaScript-based while Angular is TypeScript based.

## Angular - Typescript

- https://angular.io/
- https://angular.io/docs
- https://angular.io/guide/understanding-angular-overview
- https://code.visualstudio.com/docs/nodejs/angular-tutorial
- https://angular.io/guide/releases

## Typescript

- https://www.typescriptlang.org/
  - TypeScript is JavaScript with syntax for types.
  - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Python Flask Web with Angular

- https://avishkabalasuriya980330.medium.com/serve-angular-application-in-python-flask-server-bd37c8a0b431
- https://realpython.com/flask-by-example-integrating-flask-and-angularjs/
- https://www.telerik.com/blogs/how-to-use-angular-create-next-level-ui-python-apps-why-do-it

### Introduction to the Angular docs

Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.

- Assumptions
  - HTML
    - https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
  - CSS
    - https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps
  - JavaScript
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview
  - Latest standards
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
  - Classes
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    - Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
  - TypeScript
    - https://www.typescriptlang.org/
    - https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
    - `JavaScript and More`
      - TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
    - `A Result You Can Trust`
      - TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
    - `Safety at Scale`
      - TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
  - import
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    - The static import declaration is used to import read-only live bindings which are exported by another module. The imported bindings are called live bindings because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.
    - In order to use the import declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the <script> tag. Modules are automatically interpreted in strict mode.
```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```
    - Forms of import declarations
      - There are four forms of import declarations:
```text
Named import: import { export1, export2 } from "module-name";
Default import: import defaultExport from "module-name";
Namespace import: import * as name from "module-name";
Side effect import: import "module-name";
```
```js
// Named import
import { myExport } from "/modules/my-module.js";
import { foo, bar } from "/modules/my-module.js";
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
import { "a-b" as a } from "/modules/my-module.js";

//Default import
import myDefault from "/modules/my-module.js";
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
import myDefault, { foo, bar } from "/modules/my-module.js";
import { default as myDefault } from "/modules/my-module.js";

//Namespace import
import * as myModule from "/modules/my-module.js";
myModule.doAllTheAmazingThings();

//Import a module for its side effects only
import "/modules/my-module.js";
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line
import * as myModule from "/modules/my-module.js";
```

- **`Standard Import`**
```js
// getPrimes.js
/**
 * Returns a list of prime numbers that are smaller than `max`.
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}

import { getPrimes } from "/modules/getPrimes.js";
console.log(getPrimes(10)); // [2, 3, 5, 7]
```

- **`Imported values can only be modified by the exporter`**
```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);


// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2; my-module has updated its value
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // The importing module can only read the value but can't re-assign it.
}, 1000);
```

### Typescript Basics

- https://www.typescriptlang.org/docs/handbook/classes.html

- Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript programmers can build their applications using this object-oriented class-based approach. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

- **`Classes`**

```ts
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");
console.log(greeter.greet());
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Class_Example.js 
Hello, world
```

- **`Inheritance`**

- In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance.
- Let’s take a look at an example:
```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
 
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}
 
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Inheritence_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Inheritence_Example.js 
Woof! Woof!
Animal moved 10m.
Woof! Woof!
```

```ts
class Animal {
    name: string;
    constructor(theName: string) {
    this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        console.log("Inside Snake Class Constructor!!");
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        console.log("Inside Horse Class Constructor!!");
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

console.log("Started!!");
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move();
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Inheritence_Adv_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Inheritence_Adv_Example.js 
Started!!
Inside Snake Class Constructor!!
Inside Horse Class Constructor!!
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 45m.
```

- **`Public, private, and protected modifiers`**

- Public by default

  - In our examples, we’ve been able to freely access the members that we declared throughout our programs. If you’re familiar with classes in other languages, you may have noticed in the above examples we haven’t had to use the word public to accomplish this; for instance, C# requires that each member be explicitly labeled public to be visible. In TypeScript, each member is public by default.
  - You may still mark a member public explicitly. We could have written the Animal class from the previous section in the following way:
```ts
class Animal {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }
    
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let anm: Animal = new Animal("Elephant")
anm.move(50)
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Public_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Class_Public_Example.js
Elephant moved 50m.
```

- Understanding TypeScript’s private

  - TypeScript also has its own way to declare a member as being marked private, it cannot be accessed from outside of its containing class. For example:
```ts
class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

let anm: Animal = new Animal("Cat").name;
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Private_Example.ts 
Class_Private_Example.ts:9:5 - error TS2322: Type 'string' is not assignable to type 'Animal'.

9 let anm: Animal = new Animal("Cat").name;
      ~~~
Class_Private_Example.ts:9:37 - error TS2341: Property 'name' is private and only accessible within class 'Animal'.

9 let anm: Animal = new Animal("Cat").name;
                                      ~~~~
Found 2 errors in the same file, starting at: Class_Private_Example.ts:9
```

- Understanding protected

  - The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes. For example,
```ts
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
let per = new Person("Sam");
console.log(per.name);
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Protected_Example.ts 
Class_Protected_Example.ts:23:20 - error TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

23 console.log(howard.name);
                      ~~~~
Class_Protected_Example.ts:25:17 - error TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

25 console.log(per.name);
                   ~~~~
Found 2 errors in the same file, starting at: Class_Protected_Example.ts:23
```
```ts
class Person {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
let per = new Person("Sam");
console.log(per.name);
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Protected_Example_1.ts 
Class_Protected_Example_1.ts:23:20 - error TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

23 console.log(howard.name);
                      ~~~~
Class_Protected_Example_1.ts:24:11 - error TS2674: Constructor of class 'Person' is protected and only accessible within the class declaration.

24 let per = new Person("Sam");
             ~~~~~~~~~~~~~~~~~

Found 2 errors in the same file, starting at: Class_Protected_Example_1.ts:23
```

- Readonly modifier

  - You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs)
console.log(oct.name)
oct.name = "Man with the 3-piece suit";
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Readonly_Example.ts 
Class_Readonly_Example.ts:12:5 - error TS2540: Cannot assign to 'name' because it is a read-only property.

12 oct.name = "Man with the 3-piece suit";
       ~~~~
Found 1 error in Class_Readonly_Example.ts:12
```

- Parameter properties

  - In our last example, we had to declare a readonly member name and a constructor parameter theName in the Octopus class. This is needed in order to have the value of theName accessible after the Octopus constructor is executed. Parameter properties let you create and initialize a member in one place. Here’s a further revision of the previous Octopus class using a parameter property:
```ts
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly theName: string) { }
}

let oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs)
console.log(oct.name)
oct.name = "Man with the 3-piece suit";
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Parameter_Example.ts 
Class_Parameter_Example.ts:8:17 - error TS2339: Property 'name' does not exist on type 'Octopus'.

8 console.log(oct.name)
                  ~~~~
Class_Parameter_Example.ts:9:5 - error TS2339: Property 'name' does not exist on type 'Octopus'.

9 oct.name = "Man with the 3-piece suit";
      ~~~~
Found 2 errors in the same file, starting at: Class_Parameter_Example.ts:8
```

- Accessors
  
  - TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object.
  - Let’s convert a simple class to use get and set. First, let’s start with an example without getters and setters.

- Without setters and getters
```ts
class Employee {
  fullName: string;
}
 
let employee = new Employee();
employee.fullName = "Bob Smith";
 
if (employee.fullName) {
  console.log(employee.fullName);
}
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ node Class_Access_Without_Set_Get_Example.js
Bob Smith
```
- While allowing people to randomly set fullName directly is pretty handy, we may also want enforce some constraints when fullName is set.
- In this version, we add a setter that checks the length of the newName to make sure it’s compatible with the max-length of our backing database field. If it isn’t we throw an error notifying client code that something went wrong.
- To preserve existing functionality, we also add a simple getter that retrieves fullName unmodified.

- With setters and getters
```ts
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            console.log("Error!!")
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

    this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob";

if (employee.fullName) {
    console.log(employee.fullName);
}
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Access_With_Set_Get_Example.ts
(base) rocks-Air:simple_typescript_examples rock$ node Class_Access_With_Set_Get_Example.js
Bob
```

- Static Properties
  
  - Up to this point, we’ve only talked about the instance members of the class, those that show up on the object when it’s instantiated. We can also create static members of a class, those that are visible on the class itself rather than on the instances. In this example, we use static on the origin, as it’s a general value for all grids. Each instance accesses this value through prepending the name of the class. Similarly to prepending this. in front of instance accesses, here we prepend Grid. in front of static accesses.
```ts
class Grid {
  static origin = { x: 0, y: 0 };
 
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
 
  constructor(public scale: number) {}
}
 
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
 
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ node Class_Static_Example.js
14.142135623730951
2.8284271247461903
```

- Abstract Classes

  - Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes. Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the abstract keyword and may optionally include access modifiers.
```ts
abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department: Department; // ok to create a reference to an abstract type
//   department = new Department(); // error: cannot create an instance of an abstract class
//   Cannot create an instance of an abstract class.
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//   department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Abstract_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Class_Abstract_Example.js
Department name: Accounting and Auditing
The Accounting Department meets each Monday at 10am.
```