class Pig {
    constructor(x, y,colour) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, 30,30, options);
      this.width = 30;
      this.height = 30;
     this.colour=colour; 
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(this.colour);
      
      rect(0, 0, 30,30);
      pop();
    }
  };