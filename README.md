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

- **`Understanding protected`**

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

- **`Readonly modifier`**

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

- **`Parameter properties`**

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

- **`Accessors`**
  
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

- **`Static Properties`**
  
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

- **`Abstract Classes`** 

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

- **`Advanced Techniques`**

  - Constructor functions

    - When you declare a class in TypeScript, you are actually creating multiple declarations at the same time. The first is the type of the instance of the class.
    - In this example, greeter1 works similarly to before. We instantiate the Greeter class, and use this object. This we have seen before.
    - Next, we then use the class directly. Here we create a new variable called greeterMaker. This variable will hold the class itself, or said another way its constructor function. Here we use typeof Greeter, that is “give me the type of the Greeter class itself” rather than the instance type. Or, more precisely, “give me the type of the symbol called Greeter,” which is the type of the constructor function. This type will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class. We show this by using new on greeterMaker, creating new instances of Greeter and invoking them as before. It is also good to mention that changing static property is frowned upon, here greeter3 has "Hey there!" instead of "Hello, there" on standardGreeting.

```ts
class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}
 
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"
 
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
 
let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
 
let greeter3: Greeter;
greeter3 = new Greeter();
console.log(greeter3.greet()); // "Hey there!"
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Constructor_Funcation_Example.ts
(base) rocks-Air:simple_typescript_examples rock$ node Class_Constructor_Funcation_Example.js
Hello, there
Hey there!
Hey there!
```

- **`Using a class as an interface`**

```ts
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
console.log(point3d.x);
console.log(point3d.y);
console.log(point3d.z);
```
```sh
(base) rocks-Air:simple_typescript_examples rock$ tsc Class_Interface_Example.ts 
(base) rocks-Air:simple_typescript_examples rock$ node Class_Interface_Example.js
1
2
3
```

- **`Decorators`**
- https://www.typescriptlang.org/docs/handbook/decorators.html#decorators
- https://hackernoon.com/using-decorators-in-typescript
- https://fireship.io/lessons/ts-decorators-by-example/

```sh
(base) rocks-MacBook-Air:simple_typescript_examples rock$ tsc --target ES5 --experimentalDecorators
Version 5.2.2
tsc: The TypeScript Compiler - Version 5.2.2 
```

- Create tsconfig.json file like below
```json
{
    "compilerOptions": {
      "target": "ES5",
      "experimentalDecorators": true
    }
  }
```

  - A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
  - For example, given the decorator @sealed we might write the sealed function as follows:
```ts
function sealed(target) {
  // do something with 'target' ...
}
```

  - Decorator Factories
    - If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.
```ts
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
```

  - Decorator Composition
  - Multiple decorators can be applied to a declaration, for example on a single line:
```ts
@f @g x

@f
@g
x
```
    - When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).
    - As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:
      - The expressions for each decorator are evaluated top-to-bottom.
      - The results are then called as functions from bottom-to-top.
```ts
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}
```
```sh
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
```
  - Decorator Evaluation
    - There is a well defined order to how decorators applied to various declarations inside of a class are applied:
      - Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
      - Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
      - Parameter Decorators are applied for the constructor.
      - Class Decorators are applied for the class.

  - Class Decorators
    - A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).
```ts
  @sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```
- When @sealed is executed, it will seal both the constructor and its prototype, and will therefore prevent any further functionality from being added to or removed from this class during runtime by accessing BugReport.prototype or by defining properties on BugReport itself (note that ES2015 classes are really just syntactic sugar to prototype-based constructor functions). This decorator does not prevent classes from sub-classing BugReport.

  - Method Decorators
    - A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).
```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
```

- Decorator Factories
  - Since decorators are functions, we might need to pass in some additional options so as to customize how the decorator works. To do this, we make use of Decorator Factories. A Decorator Factory is simply a function that returns a function. This returned function would then implement the decorator.
```ts
const decoratorFactory = (value: string) => {
  // the decorator factory returns a decorator function
 
  return (target: any) => {
    // the returned decorator uses 'target' and 'value'
  }
}
```

- Class Decorators
  - A Class Decorator is used to decorate a class declaration. The class decorator receives the constructor of the class as its only argument. The decorator can be used to observe, modify, or replace a class definition.
```ts
const classDecorator = (constructor: Function) => {
  // do something with your class
}

@classDecorator
class Person {}
```

## Decorators using Node project
  - Not as just typescript files

- https://blog.logrocket.com/practical-guide-typescript-decorators/

- **Setup**
```sh
$ mkdir simple-typescript-decorators-examples
$ cd simple-typescript-decorators-examples
$ npm init -y

# Wrote to /Users/rock/Git_Repo/Angular/simple-typescript-decorators-examples/package.json:

# {
#   "name": "simple-typescript-decorators-examples",
#   "version": "1.0.0",
#   "description": "",
#   "main": "index.js",
#   "scripts": {
#     "test": "echo \"Error: no test specified\" && exit 1"
#   },
#   "keywords": [],
#   "author": "",
#   "license": "ISC"
# }

# Next, install TypeScript as a development dependency
$ npm install -D typescript @types/node
# added 3 packages, and audited 4 packages in 1m
# found 0 vulnerabilities
```
- The @types/node package contains the Node.js type definitions for TypeScript. We need this package to access some Node.js standard libraries.
- Add an npm script in the package.json file to compile your TypeScript code:
```json
{
  // ...
  "scripts": {
    "build": "tsc"
  }
}
```
```sh
#Before
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ cat package.json 
{
  "name": "simple-typescript-decorators-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.8.9",
    "typescript": "^5.2.2"
  }
}

#After adding compiling as tsc in scripts section
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ cat package.json 
{
  "name": "simple-typescript-decorators-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.8.9",
    "typescript": "^5.2.2"
  }
}
```
- Until TypeScript 5.0, we had to explicitly set a flag, experimentalDecorators, to use decorators in our code. With TypeScript 5.0, this is no longer the case. While such a flag is likely to stay around for the foreseeable future, we can use new-style decorators without it. As a matter of fact, the old-style decorators modeled a different version of the proposal (Stage 2). We can use both styles in our code because the type rules are different, but it’s not advisable to do so.
- Remember to configure your working environment to use at least TypeScript 5. Otherwise, the code in this article won’t compile.
- We’ll use ES6 as a target for TypeScript because it’s supported by all modern browsers:
```sh
# Checking typescript version
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ tsc --version
Version 5.2.2
```
```json
{
  "compilerOptions": {
    "target": "ES6"
  }
}
```
```sh
# Added "target": "ES6"
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ cat package.json 
{
  "name": "simple-typescript-decorators-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.8.9",
    "typescript": "^5.2.2"
  },
  "compilerOptions": {
    "target": "ES6"
  }
}
```
- Next, we’ll create a simple TypeScript file to test the project out:
```sh
// console.log("Hello, world!");

$ npm run build
$ node hello_world.js
// Hello, world!
```
```sh
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ npm run build

> simple-typescript-decorators-examples@1.0.0 build
> tsc

Version 5.2.2
tsc: The TypeScript Compiler - Version 5.2.2 

(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ node hello_world.js 
Hello, world!
```
- Instead of repeating this command over and over, we can simplify the compilation and execution process by using a package called ts-node. It’s a community package that enables us to run TypeScript code directly without compiling it first.
- Let’s install it as a development dependency:
```sh
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ npm install -D ts-node

added 17 packages, and audited 21 packages in 6s

found 0 vulnerabilities
```
- Next, add a start script to the package.json file:
- Create typescript file -> hello_world.ts
```json
{
  "scripts": {
    "build": "tsc",
    "start": "ts-node hello_world.ts"
  }
}
```
```sh
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ cat package.json 
{
  "name": "simple-typescript-decorators-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "ts-node hello_world.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.8.9",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  },
  "compilerOptions": {
    "target": "ES6"
  
```
- Simply run npm start to run your code:
```sh
(base) rocks-MacBook-Air:simple-typescript-decorators-examples rock$ npm start

# > simple-typescript-decorators-examples@1.0.0 start
# > ts-node hello_world.ts

# Hello, world!
```

- **New TypeScript decorators**

- In TypeScript, decorators are functions that can be attached to classes and their members, such as methods and properties.
- In this section, we’re going to look at new-style decorators. First, the new Decorator type is defined as follows:
```ts
type Decorator = (target: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  private?: boolean;
  static?: boolean;
  addInitializer?(initializer: () => void): void;
}) => Output | void;
```
```text
The type definition above looks complex, so let’s break it down one piece at a time:

target represents the element we’re decorating, whose type is Input
context contains metadata about how the decorated method was declared, namely:
kind: the type of decorated value. As we’ll see, this can be either class, method, getter, setter, field, or accessor
name: the name of the decorated object
access: an object with references to a getter and setter method to access the decorated object
private: whether the decorated object is a private class member
static: whether the decorated object is a static class member
addInitializer: a way to add custom initialization logic at the beginning of the constructor (or when the class is defined)
Output represents the type of value returned by the Decorator function
```

- **Types of decorators**

- `Class decorators`
  - When you attach a function to a class as a decorator, you’ll receive the class constructor as the first parameter:
```ts
// function AnimalDetails(target: typeof Animal, context): typeof Animal {
    function AnimalDetails(target: typeof Animal, context){    
    if (context.kind === "class") {
        target.prototype.name = "Tiger"
        // target.prototype.isEmpty = (): boolean => {
        // return this.name == "Cheetah"
        // }
    }
    return this.name 
}

@AnimalDetails
class Animal {
    name: String;
}

const anm = new Animal()
console.log((anm as any).name)
// console.log(`Is the animal empty? ${(anm as any).isEmpty()}`)
```
```sh
(base) rocks-MacBook-Air:src rock$ tsc Decorator_Class_Example.ts
(base) rocks-MacBook-Air:src rock$ node Decorator_Class_Example.js
Tiger
```

- `Method decorators`
- Another good place to attach a decorator is class methods. In this case, the type of the decorator function is as follows:
- https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f

```ts
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
```
```sh
(base) rocks-MacBook-Air:src rock$ tsc Decorator_Value_Check_Example.ts 
(base) rocks-MacBook-Air:src rock$ node Decorator_Value_Check_Example.js
{
  kind: 'method',
  name: 'someMethod',
  static: false,
  private: false,
  access: { has: [Function: has], get: [Function: get] },
  metadata: undefined,
  addInitializer: [Function (anonymous)]
}
Hello!!Method Decorator :-)
Step: 1 --> Decorating method
Step: 2 --> Executing someMethod --> Hello!!Method Decorator :-)
```

- `Accessor Decorators`
  - An Accessor Decorator is declared just before an accessor declaration. The accessor decorator is applied to the Property Descriptor for the accessor and can be used to observe, modify, or replace an accessor’s definitions. An accessor decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).
```ts
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
```
```sh
(base) rocks-MacBook-Air:src rock$ tsc Decorator_Access_Example.ts 
(base) rocks-MacBook-Air:src rock$ node Decorator_Access_Example.js
Decorating accessor
42
```

- `Property Decorators`
  - A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).
```ts
```
```sh
```
- Note : Throws error


- `Parameter Decorators`
  - A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration. A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).
```ts
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
```
```sh
(base) rocks-MacBook-Air:src rock$ tsc Decorator_Parameter_Example.ts 
(base) rocks-MacBook-Air:src rock$ node Decorator_Parameter_Example.js

{
  kind: 'method',
  name: 'someMethod',
  static: false,
  private: false,
  access: { has: [Function: has], get: [Function: get] },
  metadata: undefined,
  addInitializer: [Function (anonymous)]
}
example
42
Step: 1 --> Decorating method
Step: 2 --> Executing someMethod
```

- `Metadata`
Some examples use the reflect-metadata library which adds a polyfill for an experimental metadata API. This library is not yet part of the ECMAScript (JavaScript) standard. However, once decorators are officially adopted as part of the ECMAScript standard these extensions will be proposed for adoption.
```ts
```
```sh
```
- Note : complex to understand