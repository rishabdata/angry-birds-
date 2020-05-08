class Slingshot{

    constructor(object1,object2){
     var options={
         bodyA:object1,
         bodyB:object2,
         length:10,
         stiffness:0.5
     }
        this.sling= Constraint.create(options)
        World.add(world,this.sling)

    }
    display(){
        strokeWeight(4);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
        


    }
}