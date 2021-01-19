class Line{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x : this.offsetX, y : this.offsetY}
    }
    this.bodyB=bodyB;
    this.loot = Matter.Constraint.create(options)
    World.add(world,this.loot);
    
    }
    display(){
    
        var posA=this.loot.bodyA.position;
        var posB=this.loot.bodyB.position;

        strokeWeight(2)

        var Point1X = posA.x
        var Point1Y = posA.y

        var Point2X = posB.x + this.offsetX
        var Point2Y = posB.y + this.offsetY

        line(Point1X,Point1Y,Point2X,Point2Y)    
        }
        }