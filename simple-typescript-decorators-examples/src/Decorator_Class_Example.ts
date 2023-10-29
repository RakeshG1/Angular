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