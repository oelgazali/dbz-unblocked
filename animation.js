var tt = gsap.to, tf = gsap.from, tft = gsap.fromTo, td = gsap.delayedCall, ts = gsap.set, tweenDelay = .1;
gsap.registerPlugin(MotionPathPlugin);

init = function () {
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	build_timeline_main();
	addListeners();
}

function build_timeline_main() {
	//Show Ad
	ts("#container_dc", { display: "block" });
	ts([".flip_container"], {perspective:400})
	ts(["#card_container1"], {transformStyle:"preserve-3d"})
	ts([".cta_over"], {display:"none"})

	


	var mainTL = gsap.timeline({ defaults: { duration:.9, ease: "power4.inOut", force3D: true } });
	mainTL

		.add("fr0", "+=0")
		.to(bgFade, { autoAlpha: 0, overwrite: "none", onComplete: hideBGFade }, "fr0")
		
		
		
		
		.add("fr1", "-=.25")
		.from(".copy1a",{display:"none", stagger:.1},"fr1")		
		.from(".plane",{scale:0,ease: "back.out(1.7)", duration:.25, transformOrigin:"565px 24px"},"-=.75")		
		.from(".plane",{x:-15, y:15, ease: "power4.out", duration:.5},"-=.75")		

		.from(".copy1b",{display:"none", stagger:.15},"+=.1")		
		.from(".hotel",{scale:0, ease: "back.out(1.7)", duration:.25, transformOrigin:"325px 50px"},"-=.65")		


		.from(".copy1c",{display:"none", stagger:.2},"-=.3")		



		.add("fr2", "+=.75")
		.from("#bg1",{y:90, duration:.5},"fr2")		

		.from(".copy2a",{display:"none", stagger:.1},"fr2+=.4")		
		.from(".points",{scale:0, ease: "back.out(1.7)", duration:.25, transformOrigin:"308px 22px"},"-=.75")		

		.from(".copy2b",{display:"none", stagger:.15},"-=.1")		


		.from(".copy2c",{display:"none", stagger:.2},"-=.5")		

		.from(".hand_container",{scale:0, ease: "back.out(1.7)", duration:.25, transformOrigin:"480px 59px"},"-=.65")		
		.from(".hand",{rotation:10, duration:.1, repeat:6, yoyo:"true", transformOrigin:"480px 59px"},"-=.75")		

	//	.from("#legal",{autoAlpha:0, duration:.5},"fr2")		



		.add("fr3", "+=.75")
		.from("#bg2",{y:90, duration:.5},"fr3")		
		.from("#logo2", {autoAlpha:0},"fr3")

		.from(".copy3a",{display:"none", stagger:.1},"fr3+=.4")		
		.from("#card_container1",{scale:0, ease: "back.out(1.7)", duration:.25, transformOrigin:"378px 20px"},"-=.75")		
		.from("#card_container1", {rotationY:-180, duration:.5, ease: "back.out(1.7)", transformOrigin:"378px 20px"},"-=.75")


		.from(".copy3b",{display:"none", stagger:.15},"-=.1")		
		.from(".line_container",{x:-200, duration:.5},"-=.8")		
		.from(".line",{x:200, duration:.5},"-=.8")		


		.from(".copy3c",{display:"none", stagger:.12},"-=.75")		

		//.from(".hand_container",{scale:0, ease: "back.out(1.7)", duration:.25, transformOrigin:"217px 128px"},"-=.65")		
		//.from(".hand",{rotation:10, duration:.1, repeat:6, yoyo:"true", transformOrigin:"217px 128px"},"-=.75")		

		.add("fr4", "-=.25")


		.from("#cta", {autoAlpha:0, scale:.5, ease: "back.out(1.7)", duration:.25, transformOrigin:"50% 75px", onComplete:setRoll},"fr4")



		.add("ef")
		.call(function () { console.log(mainTL.duration()); });
//	mainTL.seek("fr3")
	//mainTL.timeScale(.75)
}


hideBGFade = function () {
	bgFade.style.display = "none";
}


//Add Event Listeners
setRoll = function () {
	var x = document.getElementById("background_exit_dc");
	if (x.addEventListener) {
		// For all major browsers, except IE 8 and earlier
		x.addEventListener('mouseover', bgOverHandler, false);
		x.addEventListener('mouseout', bgOutHandler, false);
	} else {
		// For IE 8 and earlier versions hide rollover effect
	}
}
addListeners = function () {
	//setRoll()
}


bgOverHandler = function (e) {
	ts(".cta_over", {display:"block", overwrite: "true" });
}

bgOutHandler = function (e) {

	ts(".cta_over", {display:"none", overwrite: "true" });

}

function bgExitHandler(e) {

}






