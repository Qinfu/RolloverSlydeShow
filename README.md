#RollOver Slydeshow

A simple slydeshow script with mouse over action. need jQuely. 


##Installation 

1.Include jQuely, cRollSlyder.js, cRollSlyder.css

2.Set "rsImg" class to Slyde images.And set "rsThum" to thumbnail.

3.Call init function after page datas loaded.


##Usage  

Initialise Slydeshow.:  
　　　　cRollSlyder.initSlyde(<i>xSlideNum,xTime</i>);  
　　　　　　　　xSlideNum:default slyde number  
　　　　　　　　xTime:fade in/out time（millisecond)  

 
Start auto change slyde timer:   
　　　　cRollSlyder.autoPlay(<i>xTime</i>);  
　　　　　　　　xTime: dilay time（millisecond)  

ex）  

    $(function(){  
        cRollSlyder.initSlyde(3,1000);  
        cRollSlyder.autoPlay(3000);  
    });
