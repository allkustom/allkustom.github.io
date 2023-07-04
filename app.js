//Scroll Magic script from 
//https://youtu.be/wLUJ9VNzZXo

//Media Query Javascript targeting from
//https://www.youtube.com/watch?v=6fTGj1TY6rE


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

let videoDuration;
let mediaOffset;

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();


    //Scenes control with media query
    //Targeting Media Query 
    let query = window.matchMedia("(max-width: 700px)");
    if (query.matches) {
        //if the page is wider than narrower than 700px
        console.log('under 700px');
        videoDuration = 100;
        mediaOffset = 0;
    }
    else {
        //if the page is wider than 700px
        console.log('over 700px');
        videoDuration = 3000;
        mediaOffset = 2000;
    }

    //SCENES
    console.log(videoDuration);
    let scene = new ScrollMagic.Scene({
        //Duration of the video, trigger next step after it
        duration: videoDuration,
        triggerElement: intro,
        triggerHook: 0
    })
        //Scroll Magic trigger indicators
        .addIndicators()
        .setPin(intro)
        .addTo(controller);


    //Video Animation
    let accelAmount = 0.1;
    let scrollPos = 0;
    let delay = 0;

    scene.on('update', e => {
        scrollpos = e.scrollPos / 1000;
        // console.log(e);
    });

    setInterval(()=>{
        delay += (scrollpos - delay) * accelAmount;
        // console.log(scrollpos, delay);

        // video.currentTime = scrollpos;
        video.currentTime = delay;
    }, 33.3);

    //Text Animation
    const textAni0 = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 0});

    let scene1 = new ScrollMagic.Scene({
        duration: 10,
        offset: -1,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setTween(textAni0)
    .addTo(controller);

    const textAni1 = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 1});

    let scene2 = new ScrollMagic.Scene({
        duration: 1000,
        offset: mediaOffset+10,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setTween(textAni1)
    .addTo(controller);

    const textAni2 = TweenMax.fromTo(text, 1, {opacity: 1}, {opacity: 0});
    // const textAni2 = TweenMax.fromTo(text, 3, {opacity: 1, left: "50%"}, {opacity: 0, left: "120%"});

    let scene3 = new ScrollMagic.Scene({
        duration: 1000,
        offset: mediaOffset+1010,
        triggerElement: intro,
        triggerHook: 0
    })
    .addIndicators()
    .setTween(textAni2)
    .addTo(controller);





//--------------------------

// //Targeting Media Query
// document.addEventListener('DOMContentLoaded', init);
// function init(){
//     let query = window.matchMedia("(max-width: 700px)");
//     if(query.matches){
//         //if the page is wider than narrower than 700px

//     }
//     else{
//         //if the page is wider than 700px
//     }
// }