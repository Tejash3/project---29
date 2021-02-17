class Box2 {
    constructor(x,y,width,height){
        var option = {
    'density':2,
    'friction':0.5,
    'restitution':0.1,
    isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        strokeWeight(3)
        stroke('black')
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
    }