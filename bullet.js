class Bullet
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:0,
			density:0,
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
    
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255)
			
			ellipseMode(RADIUS)
			ellipse(stonepos.x,stonepos.y,this.r, this.r)
			pop()
			
	}

}