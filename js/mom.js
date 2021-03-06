var momObj = function()
{
	this.x;
	this.y;
	this.angele;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}

momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angele = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png"
}

momObj.prototype.draw = function()
{
	//lerp x,y 趋向于一个目标
	this.x = lerpDistance(mx ,this.x ,0.98);
	this.y = lerpDistance(my ,this.y ,0.98);

	//angele
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;

	this.angele = lerpAngle(beta , this.angele, 0.6);


	ctx1.save();
	ctx1.translate(this.x , this.y );
	ctx1.rotate(this.angele);
	ctx1.drawImage( this.bigEye , -this.bigEye.width * 0.5 , -this.bigEye.height * 0.5 );
	ctx1.drawImage( this.bigBody ,-this.bigBody.width * 0.5 , -this.bigBody.height * 0.5 );
	ctx1.drawImage( this.bigTail ,-this.bigTail.width * 0.5 + 30 , -this.bigTail.height * 0.5 );


	ctx1.restore();

}