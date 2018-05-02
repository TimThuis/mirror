var glassesName = "";
var glassesType = "";
var currentTl = "";
var glassesNameElement = document.querySelector(".glasses-name");
var glassesTypeElement = document.querySelector(".glasses-type");
var playedIntro = false;

// setting framerate
TweenLite.ticker.fps(25);

// alert("press '1', '2' or '3' to start the different kind of animations")

// timelines
var introTl = new TimelineLite({ paused: true });
var wesTl = new TimelineLite({
	paused: true,
});
var hudsonTl = new TimelineLite({
	paused: true,
});
var pierceTl = new TimelineLite({
	paused: true,
});
var titleTl = new TimelineLite({
	paused: true,
});

introTl.from("#main", 2, {
	opacity: 0,
	ease: Power0.easeNone,
});

wesTl.staggerFromTo([".marbled",".tiger",".gold",".lime"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[18,6,-6,-18],
	  }
}, 0.50);

hudsonTl.staggerFromTo([".havana",".caramel-havana",".caramel",".tiger-wood"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[18,6,-6,-18]
	  }
}, 0.50);

pierceTl.staggerFromTo([".pierce-tiger",".orchied",".champagne",".chocolate", ".taupe"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[30,18,6,-6,-18]
	  }
}, 0.50);

titleTl.staggerFromTo(".container-text p", 0.75,{
	height: "0px",
}, {
	height: "71px",
}, 0.5);

document.addEventListener('keydown', function(event) {
	switch (event.code) {
		case "Digit1":
			console.log("timeline one Wes");
			setText("Bart", "Yellow Gold");
			startTl(wesTl);
			break;
		case "Digit2":
			console.log("timeline two Hudson");
			setText("Felix", "Sunny Black");
			startTl(hudsonTl);
			break;
		case "Digit3":
			console.log("timeline tree Pierce");
			setText("Anna", "See Through");
			startTl(pierceTl);
			break;
		default:
			console.log(event.code);
	}
});

function setText(name, type) {
	glassesName = name;
	glassesType = type;
}

function startTl(tl) {

	glassesTl = [wesTl, hudsonTl, pierceTl];
	glassesTl.forEach(function(x) {
		if (x.progress() == 1 || x.isActive()) {
			x.reverse();
			titleTl.reverse();
			x.eventCallback("onReverseComplete", function() {
				tl.play();
				titleTl.play();
				glassesNameElement.innerHTML = glassesName;
				glassesTypeElement.innerHTML = glassesType;
			});
		}
	});

	if (!playedIntro) {
		tl.delay(2);
		titleTl.delay(2);

		introTl.play();
		tl.play();
		titleTl.play();

		glassesNameElement.innerHTML = glassesName;
		glassesTypeElement.innerHTML = glassesType;

		playedIntro = !playedIntro;
	}
}
