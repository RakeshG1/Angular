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