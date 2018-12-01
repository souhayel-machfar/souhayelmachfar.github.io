// Canva element
var canvas1 = document.getElementById("canvas");
var context = canvas1.getContext("2d");

/**** Circle abject *****/
function Circle(x, y, dx, dy, radius, color){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.draw = function(){
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.fillStyle = color;
		context.strokeStyle = "black";
		context.lineWidth = "1";
		context.fill();	
		context.stroke();	
	};
	this.update = function(){
		if (this.x + this.radius > canvas1.width || this.x - this.radius < 0)
			this.dx = -this.dx;
		if (this.y + this.radius > canvas1.height || this.y - this.radius < 0)
			this.dy = -this.dy;

		this.x += this.dx;
		this.y += this.dy;
		this.draw();	
	};
}
/** instance **/
var circleArray = [];
var tabColor = Array("#c92042","#761628","#e74c3c","#c0392b","#bdc3c7","#c92042","#761628","#e67e22","#2c3e50","#2980b9");
	for (var i = 0; i < 10 ; i++){
	//Variables
	var radius = 6;
	var x = Math.random() * (canvas1.width - radius * 2) + radius;
	var y = Math.random() * (canvas1.height - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 8;
	var dy = (Math.random() - 0.5) * 8;
	var color = tabColor[Math.floor(Math.random()*9)];
	circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

// functions
function animate(){
	requestAnimationFrame(animate);
	context.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}


animate();
var xx = document.querySelector('canvas').addEventListener('click', function(){
		alert('animation created with HTML5 canvas element :)');
});