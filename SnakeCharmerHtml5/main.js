var Sc = {
       	startBtn:document.getElementById('start'),
	canvas:document.getElementById('canvas'),
	ctx:document.getElementById('canvas').getContext('2d'),
	mainMenu:document.getElementById('mainMenu'),
	lastAnimTime:null,
	normReq:null,
	winReq:null,
	loseReq:null,
	fps: 4,
	frame:0,
	rawBoyArr:[
		'asset/small/boy/boy1.png',
		'asset/small/boy/boy2.png',
		'asset/small/boy/boy3.png',
		'asset/small/boy/boy4.png',
		'asset/small/boy/boy5.png',
		'asset/small/boy/boy6.png',
		'asset/small/boy/boy7.png',
		'asset/small/boy/boy8.png'
		],
	rawSnakeArr:[
		'asset/small/snake/snake0.png',
		'asset/small/snake/snake1.png',
		'asset/small/snake/snake-attack.png'
	],
	boyArr:[],
	snakeArr:[],
	loadImage:function(){},
	draw:function(){},
        setup:function(){},
	animWin:function(){},
	animLose:function(){},
	animNormal:function(){},
	closeAnim:function(){},
	p:function(t){console.log(t);}
	};

Sc.loadImage = function(source,target){
	var i=0;
	for(;i<source.length;i++){
		try{
			target.push(new Image());
			target[i].src=source[i];
			target[i].onload=Sc.p('loaded image '+i);
		}catch(e){
			console.log(e);
			break;
		}
	}
};

//reset Sc.frame to 0 and close animation with reqID
Sc.closeAnim = function(reqId){
	window.cancelAnimationFrame(reqId);
	Sc.frame = 0;
	Sc.lastAnimTime=null;
};

Sc.animNormal = function(){
	if(!Sc.lastAnimTime)Sc.lastAnimTime=Date.now();
	Sc.normReq=requestAnimationFrame(Sc.animNormal);
	var now=Date.now();
	var delta = now - Sc.lastAnimTime;
	if(delta>(1000/Sc.fps)){
		Sc.lastAnimTime = now - (delta % (1000/Sc.fps));
		//render
		Sc.ctx.clearRect(0,0,Sc.canvas.width,Sc.canvas.height);
		Sc.ctx.drawImage(Sc.boyArr[Sc.frame%2],0,0);
		Sc.ctx.drawImage(Sc.snakeArr[Sc.frame%2],60,60);
		Sc.frame++;
	}
};

Sc.animLose = function(){
	if(!Sc.lastAnimTime)Sc.lastAnimTime=Date.now();
	Sc.loseReq=requestAnimationFrame(Sc.animLose);
	var now=Date.now();
	var delta = now - Sc.lastAnimTime;

	if(delta>(1000/Sc.fps)){
		Sc.lastAnimTime = now - (delta % (1000/Sc.fps));
		//render
		Sc.ctx.clearRect(0,0,Sc.canvas.width,Sc.canvas.height);
		if(Sc.frame<4){
			 Sc.ctx.drawImage(Sc.snakeArr[1],60,60);
		      	 Sc.ctx.drawImage(Sc.boyArr[2],0,0);
		}else{
			 Sc.ctx.drawImage(Sc.boyArr[5],0,0);
			 Sc.ctx.drawImage(Sc.snakeArr[2],60,60);
		}        
		if(Sc.frame==6)Sc.closeAnim(Sc.loseReq);
		Sc.frame++;
	}
}

Sc.animWin = function(){
	if(!Sc.lastAnimTime)Sc.lastAnimTime=Date.now();
	Sc.winReq=requestAnimationFrame(Sc.animWin);
	var now=Date.now();
	var delta = now - Sc.lastAnimTime;

	if(delta>(1000/Sc.fps)){
		Sc.lastAnimTime = now - (delta % (1000/Sc.fps));
		//render
		Sc.ctx.clearRect(0,0,Sc.canvas.width,Sc.canvas.height);
		if(Sc.frame<4){
			Sc.ctx.drawImage(Sc.boyArr[4],0,0);
			Sc.ctx.drawImage(Sc.snakeArr[0],60,60);
		}else if(Sc.frame<5){
			Sc.ctx.drawImage(Sc.boyArr[6],0,0);
			Sc.ctx.drawImage(Sc.snakeArr[1],40,60);
		}else if(Sc.frame<6){
			Sc.ctx.drawImage(Sc.boyArr[6],0,0);
			Sc.ctx.drawImage(Sc.snakeArr[0],30,60);
		}else{
			Sc.ctx.drawImage(Sc.boyArr[7],0,0);
			Sc.ctx.drawImage(Sc.snakeArr[1],25,60);
		}
		Sc.frame++;
		if(Sc.frame==10) Sc.closeAnim(Sc.winReq);
	}
};

Sc.draw = function(){
	if(!Sc.lastAnimTime)Sc.lastAnimTime=Date.now();
	requestAnimationFrame(Sc.draw);
	var now=Date.now();
	var delta = now - Sc.lastAnimTime;
	if(delta>(1000/Sc.fps)){
		Sc.lastAnimTime = now - (delta % (1000/Sc.fps));
		//render
		var t =Math.floor(Math.random()*5);
		Sc.ctx.drawImage(Sc.boyArr[t],0,0);	
	}
};


Sc.setup=(function(){
	Sc.startBtn.onclick=(function(){
 		Sc.canvas.style.display='inline';
		Sc.mainMenu.style.display='none';
		Sc.canvas.width=300;
		Sc.canvas.height=300;
		Sc.p('Show Canvas,hide menu');
		Sc.animNormal();
		setTimeout(function(){
			//window.cancelAnimationFrame(Sc.normReq);
			//window.cancelAnimationFrame(ff);
			Sc.closeAnim(Sc.normReq);
			Sc.p('close req');
		},4000);
	//	Sc.animLose();
		Sc.animWin();
	})();
	
	Sc.loadImage(Sc.rawSnakeArr,Sc.snakeArr);
	Sc.loadImage(Sc.rawBoyArr,Sc.boyArr);
	//Sc.p(Sc.boyArr[1].src);
	
		
})();



