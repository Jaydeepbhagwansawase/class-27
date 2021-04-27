class Slingshot{
    constructor(o1,o2){
var options={
    bodyA:o1,
    bodyB:o2,
    length:10,
    stiffness:0.04
}
this.sling=Constraint.create(options);
World.add(world,this.sling);
    }
    display(){
var A = this.sling.bodyA.position;
var B =this.sling.bodyB.position;
strokeWeight(5);
fill("black");
line(A.x,A.y,B.x,B.y);
    }
}
