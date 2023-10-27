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