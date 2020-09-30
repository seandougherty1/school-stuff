class Shape  {
    constructor(name,){
        this.name = name;
    }
}

class Square extends Shape{
    constructor(sideLength){
        super('square', length)
        this.sideLength = length
    }

    calculateArea(){
        return Math.pow(this.sideLength, 2)
    }
}

class Circle extends Shape{
    constructor(radius){
        super('Circle')
        this.radius = radius;
    }

    calculateArea() {
        return(math.PI * math.PI(radius, 2))
    }
}
square1 = new Square(2)
circle1 = new Circle(3)

console.log(square1.calculateArea)
console.log(circle1.calculateArea)


