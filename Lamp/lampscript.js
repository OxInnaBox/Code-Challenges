let lightOn = false;

function lightSwitch() {
    if (lightOn == false) {
        document.getElementById("lamp").src = "media/bulb-on.png";
        document.getElementById("bg").style.backgroundColor = "white";
        document.getElementById("btn").innerHTML = "Turn Off";
        lightOn = true;
    }
    else if (lightOn == true) {
        document.getElementById("lamp").src = "media/bulb-off.png";
        document.getElementById("bg").style.backgroundColor = "black";
        document.getElementById("btn").innerHTML = "Turn On";
        lightOn = false;
    }
}

document.getElementById("btn").onclick = lightSwitch;