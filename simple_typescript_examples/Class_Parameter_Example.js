var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.theName = theName;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs);
console.log(oct.name);
oct.name = "Man with the 3-piece suit";
