
// stop watch
var hour=0;
var min=0;
var sec=0;
var msec=0;

var hourHeading=document.getElementById("hour");
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecHeading.innerHTML=msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML=sec;
        msec = 0;
        if(sec >=59){
            min++;
            minHeading.innerHTML=min;
            sec = 0;
            if(min >=59){
                hour++;
                hourHeading.innerHTML=hour;
                min = 0;
            }
        }
    }
}

function start()// start fun
{

interval = setInterval(timer,10);

}

function stop()/// stop function
{
    clearInterval(interval);
    

    
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    stop();
}

function disable(){
    var disabled=document.getElementById('start').disabled = true;
    
}

function visible(){
    var disabled=document.getElementById('start').disabled =false;
    
}