var mainTl = new TimelineMax({
	paused: true,
});

mainTl.eventCallback("onComplete", function() {
	console.log("timeline played");
})
.from("#main", 2, {
	opacity: 0,
	ease: Power0.easeNone,
}, "startTimeline")
.staggerFromTo([".marbled",".tiger",".gold",".lime"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[18,6,-6,-18],
	  }
}, 0.5, "startTimeline+=2")
.staggerFromTo(".container-text p", 0.75,{
	height: "0px",
}, {
	height: "71px",
}, 0.5, "startTimeline+= 2");

document.addEventListener('keydown', function(event) {
	if (event.code === "Space") {
		mainTl.restart();
	}
});
