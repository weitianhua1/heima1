window.onload=function(){
    leftSwipe();
    itcast.iScroll({
        swipeDom:document.querySelector('.hm_category_right'),
        swipeType:'y',
        swipeDistance:100
    });
};

function leftSwipe(){
    var parentBox=document.querySelector('.hm_category_left');
    var childBox=parentBox.querySelector('ul');
    var parentHeight=parentBox.offsetHeight;
    var childHeight=childBox.offsetHeight;
    var maxPosittion=0;
    var minPosition=parentHeight-childHeight;
    var distance=150;
    var maxSwipe=maxPosittion+150;
    var minSwipe=minPosition-150;
    var addTransition=function(){
        childBox.style.webkitTransition="all .2s";
        childBox.style.transition="all.2s";
    };
  
    var addTransition=function(){
        childBox.style.webkitTransition="none";
        childBox.style.transition="none";
    };

    var setTranslateY=function(TranslateY){
        childBox.style.webkitTransform="translateY("+translateY+"px)";
        childBox.style.transform="translateY("+translateY+"px)";
    };
    var startY=0;
    var moveY=0;
    var distanceY=0;

    var currY=0;
    childBox.addEventListener('touchstart',function(e){
        startY=e.touches[0].clientY;tion
    });
    childBox.addEventListener('touchmove',function(e){
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;
        if((currY=distanceY)<maxSwipe&&(currY+distanceY)>
        minSwipe){
     
            removeTransition();
           
            setTranslateY(currY+distanceY);
        }
    });
  
    window.addEventListener('touchend',function(e){
                 if((currY+distanceY)>maxPosittion){
                     currY=maxPosittion;
                     addTransition();
                     setTranslateY(currY);
                 }
               
                 else if((currY=distanceY)<minPositionV){
                          currY=minPosition;
                          addTransition();
                          setTranslateY(currY);
                 }
              
                 startY=0;
                 moveY=0;
                 distanceY=0;
    });
    var lis=childBox.querySelectorAll('li');
    itcast.tap(childBox,function(e){
           for(var i=0; i<lis.length;i++){
               lis[i].className="";
               lis[i].index=i;
           }
             var li=e.target.parentNode;
             li.className='now';
             console.log(li.index);
             var translateY=-li.index*50;
             if(translateY>minPosition){
                 currY=translateY;
                 addTransition();
                 setTranslateY(currY);
             }else{
                 currY=minPosition;
                 addTransition();
                 setTranslateY(currY);
             }
            });}
