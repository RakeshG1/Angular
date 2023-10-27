class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly theName: string) { }
}

let oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs)
console.log(oct.name)
oct.name = "Man with the 3-piece suit";