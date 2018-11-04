window.onload=function(){
    search();
}
function search(){
    var searchBox=document.querySelector('.hm_header_box');
    var bannerBox=document.querySelector('.hm_banner');
    var h=bannerBox.offsetHeight;
    window.onscroll=function(){
        var top=document.body.scrollTop;
        var opacity=0;
        if(top<h){
            opacity=top/h*0.85
        }else{
            opacity=0.85;
        }
        searchBox.style.background="rgba(201,21,35,"+opacity+")";
    }
}

var img4=document.querySelector('#images>a:nth-child(4)');
var img4=document.getElementById('images').children[4];
var img4=document.getElementsByClassName('hiddenImg')[3];
var img4=document.getElementsByTagName('a')[4];
var imagesA=document.getElementById("images").children;



var imagesA=document.getElementById('images').children;
console.log(imagesA);

var txtList=document.querySelectorAll(".txtItem");

var currentNo=0;


function changeImg(){
    
          var nodeLength=txtList.length

    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        txtList[i].className="txtItem normalColor";
    }

    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
}
function leftImg(){
    if(currentNo>0){currentNo--;}
    else{
        currentNo=7;
    }
}
function rightImg(){
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
}

var timer=window.setInterval(rightImgGo,1000);
var imagesG=document.querySelector('#images');
console.log(imagesG);

function starChange(){
    timer=window.setInterval(rightImgGo,1000);
}
function stopChange(){
    window.clearInterval(timer);
}
var sliderDIV=document.querySelector(".slider");
sliderDIV.addEventListener('mouseover',stopChange);
sliderDIV.addEventListener('mouseout',starChange);

for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    

    txtList[i].no=i;
}
function gotoImg(){
                     console.log(this.no);
                     currentNo=this.no;
                     changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImgGo);
rightButton.addEventListener('click',rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}
function rightImgGo(){
    rightImg();
    changeImg();
}

function downTime(){
    var time=5*60*60;
    var timer=null;
    var skTime=document.querySelector('.sk_time');
    var spans=skTime.querySelectorAll('span');
    timer=setInterval(function(){
    if(time<=0){
    clearInterval(timer);
    return false;
     }
    time--;
    var h=Math.floor(time/3600);
    var m=Math.floor(time%3600/60);
    var s=time%60;
    console.log(h);
    console.log(m);
    console.log(s);
    spans[0].innerHTML=Math.floor(h/10);
    spans[1].innerHTML=h%10;
    spans[3].innerHTML=Math.floor(m/10);
    spans[4].innerHTML=m%10;
    spans[6].innerHTML=Math.floor(s/10);
    spans[7].innerHTML=s%10;
    },1000);
}

