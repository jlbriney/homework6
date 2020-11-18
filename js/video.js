var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting")
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol=document.querySelector("#volume").innerHTML= (100 * video.volume) + "%";
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


document.getElementById("skip").addEventListener("click", function() {
	console.log("New Speed is" + video.currentTime);
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

	document.querySelector("#volumeSlider").addEventListener("change", function() {
		console.log(this);
		console.log(this.value);
		let vol=document.querySelector("#volume").innerHTML= this.value + "%";
		let x=document.querySelector("#myVideo").volume=this.value/100;
	});

