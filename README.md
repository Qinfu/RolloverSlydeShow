RollOver Slydeshow
-----------------------

【説明】  
マウスオーバーで画像が切り変わるスライドショー。 要、jQuely。  


【使い方】  

1.jQuely、cRollSlyder.js、cRollSlyder.cssを読み込み。

2.スライド画像には「rsImg」、サムネイルには「rsThum」をClass指定。

3.jQuelyのロード完了を待って、スライドショー実行

【簡易リファレンス】  

●スライド初期化  
　　　　cRollSlyder.initSlyde(<i>xSlideNum,xTime</i>);  
　　　　　　　　xSlideNum:最初に表示させるスライドの番号（0～）  
　　　　　　　　xTime：フェード時間（ミリ秒）  

 
●スライドの自動切換え開始  
　　　　cRollSlyder.autoPlay(<i>xTime</i>);  
　　　　　　　　xTime：スライド切替えまでの時間（ミリ秒）  

ex）  

    $(function(){  
        cRollSlyder.initSlyde(3,1000);  
        cRollSlyder.autoPlay(3000);  
    });