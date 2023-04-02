var video;

function getVideo() {
	video = document.querySelector("video");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and Looping are turned off.");
}

window.addEventListener("load", function() {
	console.log("Good job opening the window!")
	getVideo();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Video is playing.");

	var volumeSlider = document.querySelector("#slider");
	var sliderValue = volumeSlider.value;
	document.querySelector('#volume').innerHTML = sliderValue + '%';

	volumeSlider.addEventListener('input', function() {
		var sliderValue = volumeSlider.value;
		document.querySelector('#volume').innerHTML = sliderValue + '%';
		video.volume = this.value / 100;
	});
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Video paused.");
});



document.querySelector("#slower").addEventListener("click", function() {
  video.playbackRate = video.playbackRate * 0.9;
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
  video.playbackRate = video.playbackRate * (1/0.9);
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
	  video.currentTime = 0;
	} else {
	  video.currentTime += 10;
	}
	console.log("Current video time is: " + video.currentTime);
  });

  document.querySelector('#mute').addEventListener('click', function() {
	if (video.muted) {
	  video.muted = false;
	  document.querySelector('#mute').innerHTML = 'Mute';
	} else {
	  video.muted = true;
	  document.querySelector('#mute').innerHTML = 'Unmute';
	}
  });

  document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("In Old School");
  });

  document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("In Original");
  });



