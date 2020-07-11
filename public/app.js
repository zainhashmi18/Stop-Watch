var min=0;
var sec=0;
var msec=0;
var minhead=document.getElementById("min");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");
var interval;

function watch(){
    msec++;
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++;
        sechead.innerHTML=sec+":";
        msec=0;
    }
    else if(sec>=60){
        min++;
        minhead.innerHTML=min+":";
        sec=0;
    }
}
function start(){
    interval=setInterval(watch,10); 
    document.getElementById("btn1").style.backgroundColor = "#5a73ad";
    document.getElementById("btn2").style.backgroundColor = "transparent";
    document.getElementById("btn3").style.backgroundColor = "transparent";
    document.getElementById("btn3").style.backgroundColor = "transparent";
    document.getElementById('btn1').disabled = true;

}
function stop(){
    clearInterval(interval)
    document.getElementById("btn2").style.backgroundColor = "#5a73ad";
    document.getElementById("btn1").style.backgroundColor = "transparent";
    document.getElementById("btn3").style.backgroundColor = "transparent";
    document.getElementById('btn1').disabled = false;
}
function reset(){
    clearInterval(interval)
    min="00";
    sec="00";
    msec="00";
    minhead.innerHTML=min+":";
    sechead.innerHTML=sec+":";
    msechead.innerHTML=msec;
    document.getElementById("btn1").style.backgroundColor = "transparent";
    document.getElementById("btn3").style.backgroundColor = "#5a73ad";
    document.getElementById("btn2").style.backgroundColor = "transparent";
    document.getElementById('btn1').disabled = false;
}