//GLOBAL VARIABLES
function sound(soundObj) {
    let sound = document.getElementById(soundObj);
    alert("Take a 10 minuite break.");
    sound.onplay;
}

function check() {
    if (document.getElementById("input").value == 0) {
        alert("ENTER A NUMBER");
    }
}

function algo() {
    if (document.getElementById("input").value == 0) {
        alert("ENTER A NUMBER");
    } else {
        //user input
        let mins = document.getElementById("input").value;
        let realMins = mins * 60;
        //SETS THE MAX VALUE OF THE PROGRESS BAR
        document.getElementById("progressBar").max = realMins
        console.log("Working");

        //the math behind the progress bar
        let pomodoro = setInterval(function () {
            if (realMins <= 0) {
                clearInterval(pomodoro);
                sound("sound1");
            }
            document.getElementById("progressBar").value = realMins - 1;
            realMins -= 1;
        }, 1000);

        console.log(realMins);
    }
}




