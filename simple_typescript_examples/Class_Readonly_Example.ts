class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs)
oct.name = "Man with the 3-piece suit";