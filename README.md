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