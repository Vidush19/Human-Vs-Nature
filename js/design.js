
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.crowd', 3, {y: '-300'})
    .fromTo('.bg', 3, {y: -50},{y:0, duration: 3},"-=3")
    .to('nav',3,{top:'0%'},"-=3")
    .to('.sum',3,{top:'0%'},"-=3");

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "150%",
    triggerHook: 0
})
    .setTween(timeline)
    .addTo(controller);


