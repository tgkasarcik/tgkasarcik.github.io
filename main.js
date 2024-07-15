var numClicks = 0;
function buttonClicked() {
    numClicks++;
    document.getElementById("p1").innerHTML = "The button has been clicked " + numClicks + " times.";
}