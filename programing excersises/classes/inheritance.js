class shape  {
    constructor(name, length,){
        this.name = name;
        this.length = length;
    }
}

class sqaure extends shape{
    constructor(name){
        super(square, 15)
    }

    calculate(){
        let area = length*lenth
        console.log(`The area of the ${this.name} is equal too: ${this.length}`)
    }
}
