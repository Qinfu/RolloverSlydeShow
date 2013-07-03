var cRollSlyder ={
	_numOfSlydes:0,
	_currentSlyde:0,
	_slydeID:".rsImg",
	_naviClass:".rsThum",
	_fadeSpeed:500,
	_timerDilay:0,
	_autoPlayTimer:-1,
	
	initSlyde:function (xFstSlyde,xFadeSpeed){
		this._indexArray = [];
		
		if(xFstSlyde){
			this._currentSlyde = xFstSlyde;
		}

		if(xFadeSpeed){
			this._fadeSpeed = xFadeSpeed;
		}
		
		this._numOfSlydes = $(this._slydeID).length;
	    //$(this._slydeID).css('display','none');
	    
		var xCurrentSlyde = $(this._slydeID)[this._currentSlyde];
	    $(xCurrentSlyde).css('display','block');
	    
		var _tg = this;
	   	$(this._naviClass).bind("mouseenter",function(){_tg.changeSlydeTriger(this)});
	   	$(this._naviClass).bind("mouseleave",function(){_tg.resetTimer(this)});
	    //$(this._naviClass).bind("click ",function(){_tg.selectSlydeTrigger(this)});
	    //
	    $(this._naviClass).eq(this._currentSlyde).addClass("tumOver");
	},
		
	changeSlydeTriger:function(evt){
		var xIndexNum = $(this._naviClass).index(evt);
		this.changeSlyde(xIndexNum);
		this.stopTimer();
	},
	
	selectSlydeTrigger:function (evt){
		var xIndexNum = $(this._naviClass).index(evt);
		fsSelectSlyde(xIndexNum);
	},
	
	changeSlyde:function(xIndexNum){
		if (xIndexNum != this._currentSlyde && xIndexNum >= 0 && xIndexNum < this._numOfSlydes){
			var _tg = this;
			$(this._naviClass).eq(xIndexNum).addClass("tumOver");
			$(this._naviClass).eq(this._currentSlyde).removeClass("tumOver");
			
			var xMainID =  this._slydeID;
			$(xNextSlyde).stop();
			
			var xCurrentSlyde = $(this._slydeID)[this._currentSlyde];
			var xNextSlyde = $(this._slydeID)[xIndexNum];
			
			$(xCurrentSlyde).stop();
			$(xCurrentSlyde).stop(true, false).fadeTo(this._fadeSpeed,0.0);
			$(xNextSlyde).stop(true, false).fadeTo(this._fadeSpeed,1.0,function(){_tg.endFade()});
			
			this._currentSlyde = xIndexNum;
		}
	},
	
	endFade:function(){
		//
	},
	
	autoPlay:function(xTime){
		this._timerDilay = xTime;
		var _tg = this;
		this._autoPlayTimer = setInterval(function(){_tg.timeUp();},xTime); 
	},
		
	resetTimer:function(evt){
		if(this._timerDilay > 0){
			this.stopTimer();
			var _tg = this;
			this._autoPlayTimer = setInterval(function(){_tg.timeUp();},this._timerDilay); 
		}
	},
	
	stopTimer:function(){
		if(this._autoPlayTimer > 0){
			clearInterval(this._autoPlayTimer);
			this._autoPlayTimer = -1;
		}
	},
	
	timeUp:function(){
		var xNextSlyde = this._currentSlyde +1;
		if (xNextSlyde >= this._numOfSlydes){
			xNextSlyde = 0;
		}
		this.changeSlyde(xNextSlyde);
	}

}

function rsSelectSlyde(xNum){
	//
}