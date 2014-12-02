var Sc ={
       	startBtn:document.getElementById('start'),
	canvas:document.getElementById('canvas'),
	ctx:document.getElementById('canvas').getContext('2d'),
	mainMenu:document.getElementById('mainMenu'),
	rawBoyArr:[
		'asset/boy/boy1.png',
		'asset/boy/boy2.png',
		'asset/boy/boy3.png',
		'asset/boy/boy4.png',
		'asset/boy/boy5.png',
		'asset/boy/boy6.png',
		'asset/boy/boy7.png',
		'asset/boy/boy8.png'
		],
	rawSnakeArr:[
		'asset/snake/snake0.png',
		'asset/snake/snake1.png',
		'asset/snake/snake-attack.png'
	],
	boyArr:[],
	snakeArr:[],
	loadImage:function(){},
	draw:function(){},
        setup:function(){},
	p:function(t){console.log(t);}
	};

Sc.loadImage=function(source,target){
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

Sc.draw=function(){
	var i = 0;
	for(;i<Sc.boyArr.length;i++){
		Sc.ctx.drawImage(Sc.boyArr[i],0,0,200,360,0,0,50,90);
	}
};



Sc.setup=(function(){
	Sc.startBtn.onclick=function(){
 		Sc.canvas.style.display='inline';
		Sc.mainMenu.style.display='none';
		Sc.p('Show Canvas,hide menu');
		Sc.draw();
	};
	
	Sc.loadImage(Sc.rawSnakeArr,Sc.snakeArr);
	Sc.loadImage(Sc.rawBoyArr,Sc.boyArr);
	//Sc.p(Sc.boyArr[1].src);
	
		
})();



