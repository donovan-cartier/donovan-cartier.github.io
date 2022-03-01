setInterval(() => {
    minutes++;
    if(minutes == 60){
        minutes = 0;
        hours++
        if(hours == 24){
            hours = 0;
        }
        changeTimeDisplay();
    }

    timeText.innerHTML = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
}, 500);

function changeTimeDisplay(){
    switch (hours) {
        case 23:
            backgroundTime.style.background = 'linear-gradient(#012459 0%, #001322 100%)'
            break;

        case 4:
            backgroundTime.style.background = 'linear-gradient(#004372 0%, #00182b 100%)'
            break;

        case 7:
            backgroundTime.style.background = 'linear-gradient(#07729f 0%, #042c47 100%)'
            break;

        case 9:
            backgroundTime.style.background = 'linear-gradient(#74d4cc 0%, #1386a6 100%)'
            break;
    
        case 12:
            backgroundTime.style.background = 'linear-gradient(#efeebc 0%, #61d0cf 100%)'
            break;
                           
        case 16:
            backgroundTime.style.background = 'linear-gradient(#fda65a 0%, #ffe467 100%)'
            break;
                                       
        case 19:
            backgroundTime.style.background = 'linear-gradient(#f18448 0%, #ffd364 100%)'
            break;
                    
        case 21:
            backgroundTime.style.background = 'linear-gradient(#371a79 0%, #713684 100%)'
            break;
            
        default:
            break;
    }
}