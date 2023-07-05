//Scroll Magic script from 
//https://youtu.be/wLUJ9VNzZXo

//Media Query Javascript targeting from
//https://www.youtube.com/watch?v=6fTGj1TY6rE


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const section1 = document.querySelector('.section1');
const line1Div = document.querySelector('.line1');
const line1 = line1Div.querySelector('.horizontal-line1');

let videoDuration;
let mediaOffset;
let line1Offset;

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();


    //Scenes control with media query
    //Targeting Media Query 
    let query = window.matchMedia("(max-width: 700px)");
    if (query.matches) {
        //if the page is narrower than 700px
        console.log('under 700px');
        videoDuration = 100;
        mediaOffset = 0;
        line1Offset = 200;
    }
    else {
        //if the page is wider than 700px
        console.log('over 700px');
        videoDuration = 3000;
        mediaOffset = 2000;
        line1Offset = 500;
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
        // .addIndicators()
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

    let mainTextOff = new ScrollMagic.Scene({
        duration: 10,
        offset: -1,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(textAni0)
    .addTo(controller);

    const textAni1 = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 1});

    let mainTextStart = new ScrollMagic.Scene({
        duration: 1000,
        offset: mediaOffset+10,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(textAni1)
    .addTo(controller);

    const textAni2 = TweenMax.fromTo(text, 1, {opacity: 1}, {opacity: 0});
    // const textAni2 = TweenMax.fromTo(text, 3, {opacity: 1, left: "50%"}, {opacity: 0, left: "120%"});

    let mainTestEnd = new ScrollMagic.Scene({
        duration: 1000,
        offset: mediaOffset+1010,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(textAni2)
    .addTo(controller);

    //horizontal-line1 Animation
    // const line1Ani = TweenMax.fromTo(line1, 1, {left: "-100%"}, {left: "0%"});
    const line1Ani = TweenMax.fromTo(line1, 1, {height: '0%', margin: '0% 0% 0% -100%'}, {height: '4%', margin: '0% 0% 0% -0%'});
    let line1Start = new ScrollMagic.Scene({
        duration: line1Offset + 100,
        offset: -line1Offset,
        triggerElement: section1,
        triggerHook: 0
    })
    .addIndicators()
    .setTween(line1Ani)
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