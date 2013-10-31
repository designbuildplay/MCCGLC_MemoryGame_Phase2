// Clock interval counter ====================================================
function clock(){

    gamePlaying = true;
  
    var clock = document.getElementById("clock");
    clock.style.display = "inline";
    
    totalSeconds = 0;
    
     $('#clock').prepend('<label id="minutes">00</label>:<label id="seconds">00</label>');

       //Sets clock to 00:00
       $('#clock > #seconds').html("00");
       $('#clock > #minutes').html("00");

        timerCount = setInterval(setTime, 1000);
        function setTime()
        {
            ++totalSeconds;
            $('#clock > #seconds').html(pad(totalSeconds%60));
            $('#clock > #minutes').html(pad(parseInt(totalSeconds/60)));
        }
        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
}


function countdown(){
    var countdownDiv = document.getElementById("count_num");
    countdownDiv.style.display = "inline";
    countdownDiv.style.opacity = "1";
    var waitscrn = document.getElementById("screen_wait");
    waitscrn.style.visibility = "hidden";

    $("#count_num").html("3");

    var timer = setInterval(function(){
    $("#count_num").html(function(i,html){
       
    if(parseInt(html)>1)
       {
       return parseInt(html)-1;
       }
       else
       {
         clearTimeout(timer);
            return "GO!"
            
       }
     });

    },1000);

    //hideCount()
    TweenLite.to(countdownDiv, 0.5, {opacity:0, delay:3.5, onComplete:hideCount});
}

function hideCount(){
    var countdownDiv = document.getElementById("count_num");
    countdownDiv.style.display = "none";
    clock() //STARTS THE TIMER
}

