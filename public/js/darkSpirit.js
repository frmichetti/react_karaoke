(function() {
	var canvasBody, $,
			w = window.innerWidth,
			h = window.innerHeight *1.4,
			gui = new dat.GUI(),
			stats = new Stats(),
			tick = 0,
			pi = Math.PI,
			pi2 = pi*2,
			piD2 = pi/2,
			piD3 = pi/3,
			piD6 = pi/6,
			pi2D3 = pi2/3,
			piDeg = pi/180,
			hexagons = [],
			canvasStyles = {
				position: "absolute",
				top: "0px",
				left: "0px",
				"background-color": "white",
				"z-index": -1
			},
			Mouse = new Vector2(w/2, h/2),
			mousePressed = false,
			flames = [],
			opts = {
				bgc: "rgba(255,255,255,0.05)",
				showFPS: false,
				sA: 18, //sparkAmount
				height: h/2  /6,
				width: 20,
				sW: 30, //sparkWidth
				sC: "white", //sparkColor
				aH: 200, //addedHeight
				speed: 6,
				populate: function(){
					flames=[];
					for(var i = 0; i < w*1.1; i+=opts.sW){
						flames.push(new Fire(i, h));
					}
				}
			},
			Fire = function(X, Y){
				this.pos = new Vector2(X, Y);
				this.sparks = [];
				this.aH = Math.random()*opts.aH;
				this.eq = function(deg){
					return [Math.sin(deg*piDeg), -deg*piDeg]
				}
				this.init();
			};
	
	Fire.prototype = {
		init: function(){
			for(var i = 0; i<opts.sA; i++){
				this.sparks.push({
					x: 0,
					y: 0,
					a: Math.random()*360,
					d: Math.random()<0.5?1:-1,
					xO: (Math.random()*opts.sW)-(opts.sW)//xOffset
				});
			}
		},
		update: function(){
			for(var i =0;i<this.sparks.length;i++){
				var s = this.sparks[i];
				s.a<360?this.sparks[i].a+=opts.speed:this.sparks[i]={
					x: 0,
					y: 0,
					a: 0,
					d: Math.random()<0.5?1:-1,
					xO: (Math.random()*opts.sW)-(opts.sW)												}
				var eqR = this.eq(this.sparks[i].a);
				this.sparks[i].x=eqR[0]*opts.width*s.d+s.xO;
				this.sparks[i].y=eqR[1]*(opts.height+this.aH/6);
			}
			return this;
		},
		render: function(){
			for(var i=0; i<this.sparks.length;i++){
				var s = this.sparks[i];
				var a = 1-s.a/360;
				var color = "rgba(0,0,0,"+a+")";
				$.fillStyle = color;
				$.beginPath();
				$.arc(s.x+this.pos.x, s.y+this.pos.y, Math.abs(opts.sW*a), 0, pi2);
				$.closePath();
				$.fill();
			}
		}
	}
	
	function setup(){
		createCanvas();
		addListeners();
		opts.populate();
		gui.add(opts, "populate");
		gui.add(opts, "showFPS");
		gui.add(opts, "sW", 2, 50).onFinishChange(opts.populate).name("sparkMaxWidth");
		gui.add(opts, "aH", 0, h/2).onFinishChange(opts.populate).name("addedHeight");
		gui.add(opts, "width", 0, w/2).name("singleFlameWidth");
		gui.add(opts, "sA", 1, 100).onFinishChange(opts.populate).name("sparkAmount");
		gui.add(opts, "speed", 0.5, 20);
		document.body.appendChild(stats.domElement);
		window.requestAnimationFrame(loop);
		gui.close();
	}
	function loop(){
		stats.begin();
		drawBg();
		$.globalCompositeOperation = "";
		flames.map(function(F){
			F.update().render();
		})
		tick++;
		opts.showFPS ? stats.domElement.style["display"] = "block" : stats.domElement.style["display"] = "none";
		window.requestAnimationFrame(loop);
		stats.end();
	}
	function createCanvas() {
		var el = document.createElement("canvas"),
				ctx = el.getContext("2d");
		for (var style in canvasStyles) {
			el.style[style] = canvasStyles[style];
		}
		document.body.appendChild(el);
		canvasBody = el;
		$ = ctx;
		canvasBody.width = w;
		canvasBody.height = h;
		document.body.style["overflow-x"] = "hidden"
		return [el, ctx];
	}
	function drawBg() {
		$.fillStyle = opts.bgc;
		$.fillRect(0, 0, w, h);
		// $.clearRect(0,0,w,h);
	}
	
	function addListeners(){
		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", mouseMove);
		canvasBody.addEventListener("mousedown", mouseDown);
		canvasBody.addEventListener("mouseup", mouseUp);
		canvasBody.addEventListener("touchmove", touchMove);
		canvasBody.addEventListener("touchstart", touchStart);
		canvasBody.addEventListener("touchend", touchEnd);
	}
	function resize(){
		w = canvasBody.width = window.innerWidth;
		h = canvasBody.height = window.innerHeight;
		opts.populate();
	}
	function mouseDown(event){
		mousePressed = true;
		Mouse.set(event.pageX, event.pageY);
	}
	function mouseUp(event){
		mousePressed = false;
	}
	function mouseMove(event){
		Mouse.set(event.pageX, event.pageY);
	}
	function touchMove(event){
		var touches = event.changedTouches;
		Mouse.set(touches[0].pageX, touches[0].pageY);
	}
	function touchStart(event){
		e.preventDefault();
		mousePressed = true;
		touchMove(event);
	}
	function touchEnd(event){
		mousePressed = false;
	}
	setup();
})()