var mainTl = new TimelineMax({
	paused: true,
});

mainTl.eventCallback("onComplete", function() {
	console.log("timeline played");
})
.from("#main", 2, {
	opacity: 0,
}, "start timeline")
// glasses lime
.fromTo(".lime", 2, {
	rotation: "-30deg",
  opacity: 1,
}, {
	rotation: "-18deg",
	opacity: 0.8,
}, "start timeline += 2")
// glasses gold
.fromTo(".gold", 2, {
	rotation: "-30deg",
}, {
	rotation: "-6deg",
}, "start timeline += 1.5")
// glasses tiger
.fromTo(".tiger", 2, {
	rotation: "-30deg",
  opacity: 1,
}, {
	rotation: "6deg",
	opacity: 0.8,
}, "start timeline += 1")
// glasses marbled
.fromTo(".marbled", 2, {
	rotation: "-30deg",
  opacity: 1,
}, {
	rotation: "18deg",
	opacity: 0.6,
}, "start timeline += 0.5")
.staggerFromTo(".container-text p", 0.75,{
	height: "0px",
  // opacity: 0,
}, {
	height: "71px",
}, 0.5, "start timeline += 1.5");

document.addEventListener('keydown', function(event) {
	if (event.code === "Space") {
		mainTl.restart();
	}
});
