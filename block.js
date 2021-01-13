class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.3,
            'friction': 1.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("glass.png")
        this.width = width;
        this.height = height;


        World.add(world, this.body);
    }
    display() {
       

var pos = this.body.position;
            
            imageMode(CENTER);

            image(this.image, pos.x, pos.y, this.width, this.height);
}
}