var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var oct = new Octopus("Man with the 8 strong legs");
console.log(oct.numberOfLegs);
oct.name = "Man with the 3-piece suit";
