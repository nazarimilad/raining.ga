var isPlaying = false;
var rainSound = document.getElementById("rainSound");
function controlSound() {
	if(isPlaying) {
        	rainSound.pause();      
                isPlaying = false;      
        }
        else {
        	rainSound.play();
                isPlaying = true;
        }
}

