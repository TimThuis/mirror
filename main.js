var glassesName = "";
var glassesType = "";
var currentTl = "";
var glassesNameElement = document.querySelector(".glasses-name");
var glassesTypeElement = document.querySelector(".glasses-type");

// timelines
var mainTl = new TimelineMax({ paused: true });
var wesTl = new TimelineMax({ paused: true });
var hudsonTl = new TimelineMax({ paused: true });
var pierceTl = new TimelineMax({ paused: true });

mainTl.from("#main", 2, {
	opacity: 0,
	ease: Power0.easeNone,
}, "startTimeline")
.add(function(){
	switch (currentTl) {
		case "wes":
			wesTl.play();
			break;
		case "hudson":
			hudsonTl.play();
			break;
		case "pierce":
			pierceTl.play();
			break;
	}
}, "startTimeline+=2")
.staggerFromTo(".container-text p", 0.75,{
	height: "0px",
}, {
	height: "71px",
}, 0.5, "startTimeline+= 2");

wesTl.staggerFromTo([".marbled",".tiger",".gold",".lime"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[18,6,-6,-18],
	  }
}, 0.5);

hudsonTl.staggerFromTo([".havana",".caramel-havana",".caramel",".tiger-wood"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[18,6,-6,-18],
	  }
}, 0.5);

pierceTl.staggerFromTo([".pierce-tiger",".orchied",".champagne",".chocolate", ".taupe"], 1.5, {
		rotation: -30,
	},{
  cycle:{
	    rotation:[30,18,6,-6,-18],
	  }
}, 0.5);

document.addEventListener('keydown', function(event) {
	switch (event.code) {
		case "Digit1":
			console.log("timeline one Wes");
			setText("Bart", "Yellow Gold");
			setTimeline("wes");
			break;
		case "Digit2":
			console.log("timeline two Hudson");
			setText("Felix", "Sunny Black");
			setTimeline("hudson");
			break;
		case "Digit3":
			console.log("timeline tree Pierce");
			setText("Anna", "See Through");
			setTimeline("pierce");
			break;
		default:
			console.log(event.code);

	}
});

function setText(name, type) {
	glassesName = name;
	glassesType = type;
	glassesNameElement.innerHTML = glassesName;
	glassesTypeElement.innerHTML = glassesType;
}

function setTimeline(tl) {
	currentTl = tl;
	mainTl.play();
}
