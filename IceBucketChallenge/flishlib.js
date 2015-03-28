(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/mn.png", id:"mn"},
		{src:"images/zpf.png", id:"zpf"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,438);


(lib.mn = function() {
	this.initialize(img.mn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,654);


(lib.zpf = function() {
	this.initialize(img.zpf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,606);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.zpf();
	this.instance.setTransform(-30,-35.8,0.118,0.118);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-35.8,60,71.6);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.zpf();
	this.instance.setTransform(-30,-35.8,0.118,0.118);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-35.8,60,71.6);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mn();
	this.instance.setTransform(-25,-32,0.098,0.098);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-32,50,64.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mn();
	this.instance.setTransform(-25,-32,0.098,0.098);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-32,50,64.1);


(lib.Bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,1.029,0.913);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,400);


(lib.down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		if(this.parent){
			this.parent.removeChild(this);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxHpQhZgqgNg6ILAAAIgBABQgNA6hZApQhAAghQALIgEAAIgbgBIgaABQgMABAAABQAAACAMABIAJABQgcACgdAAQiSAAhogzgADpGFIrAAAImdAAIAAugIboAAIAAOggADpGFg");
	mask.setTransform(38.5,-54);

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(29,-36.2);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(30,35.8);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:30,y:35.8},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-72,60,71.6);


(lib.up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{godown:39});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
		
		if(this.parent){
			this.parent.removeChild(this);
		}
	}
	this.frame_48 = function() {
		this.stop();
		
		if(this.parent){
			this.parent.removeChild(this);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(10).call(this.frame_48).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxHpQhZgqgNg6ILAAAIgBABQgNA6hZApQhAAghQALIgEAAIgbgBIgaABQgMABAAABQAAACAMABIAJABQgcACgdAAQiSAAhogzgADpGFIrAAAImdAAIAAugIboAAIAAOggADpGFg");
	mask.setTransform(38.5,-54);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(25,32.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(25,-32.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(29,-36.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(30,35.8);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-32.9},14).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).wait(10).to({startPosition:0},0).to({y:32.1},14).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({_off:true,x:30,y:35.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,0);


// stage content:



(lib.flishlib = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;