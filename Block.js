class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.6,
          friction :1.0,
          density :1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     strokeWeight(2);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
}

