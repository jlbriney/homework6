var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate *= .9;
});

document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playblackRate);
	video.playbackRate /= .9;
	
});

document.getElementById("skip").addEventListener("click"		, function() {
	console.log("New Speed is");
	video.playbackRate = 0.9;
	
});

document.getElementById("skip").addEventListener("click", function() {
	console.log("New Speed is");
	if (video.currentTime < video.duration-5){
	video.currentTime += 5;}	
	else {video.currentTime = 0}
	
});

var button = document.getElementById('mute');
	button.onclick = function (){
		if (video.muted == false){
			video.muted = true;
			nm = 'Unmute';
			document.querySelector('#mute').innerHTML = nm;
		}
		else{
			video.muted = false;
			nm = 'Mute';
			document.querySelector('#mute').innerHTML = nm;
		}
	};

	document.querySelector("#old").addEventListener("click", function() {
		console.log("Old School")
		video.classList.add("oldTime");
	});

	document.querySelector("#original").addEventListener("click", function() {
		console.log("Original");
		video.classList.remove("oldTime")
		});

