class Block{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.4,
            'friction':0.0
        }
        this.Visibility=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.x=x;
        //this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    score(){
        if(this.Visibility<0&&this.Visibility>-1005){
            score++;
        }
    } 

    display(){
        /*var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");*/
        /*var rand=Math.round(random(1,4));
        if(rand==1||rand==4){
            fill("pink");
        }
        else if(rand==2){
            fill("blue");
        }
        if(rand==3){
            fill("green");
        }*/
        /*stroke("white");
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();*/
        if(this.body.speed<3){
          //this.body.Visibility=true;
          var angle=this.body.angle;
          var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          fill("blue");
          stroke("white");
          strokeWeight(2);
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          
          this.Visibility=this.Visibility-5;
          //tint(255,this.Visibility);
          //image(this.image,this.body.position.x,this.body.position.y,50,50);
          
          pop();
          
        }
    
      }

      
    

      
  
  };
  