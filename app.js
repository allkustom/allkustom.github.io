//Scroll Magic script from 
//https://youtu.be/wLUJ9VNzZXo

//Media Query Javascript targeting from
//https://www.youtube.com/watch?v=6fTGj1TY6rE


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text0 = intro.querySelector('h1');

const section1 = document.querySelector('.section1');
const line1Div = document.querySelector('.line1');
const line1 = line1Div.querySelector('.horizontal-line1');

const text1Section = document.querySelector('.text1');
const textH1 = text1Section.querySelector('h1');
const p1 = document.querySelector('p1');
const p2 = document.querySelector('p2');
const p3 = document.querySelector('p3');
const p4 = document.querySelector('p4');

let videoDuration;
let mediaOffset;
let line1Duration
let line1Offset;
let workGridBool;
let artLinkTimer;

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Mobile Header Animation
let scrollBool = false;
const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuOption = document.querySelector('.mobileMenuOption');
const htmlDiv = document.querySelector('html');
const logo = document.querySelector('.logo');
let menuCheck = false;
function MenuOn(x){
    mobileMenu.classList.toggle("change");
    mobileMenuOption.classList.toggle("turnOn");
    x.disabled = true;
    menuCheck = true;
    x.classList.toggle("turnOff");
    htmlDiv.classList.toggle("turnOff");
    logo.classList.toggle("moveLeft");
}

    //Scenes control with media query
    //Targeting Media Query 
    let query = window.matchMedia("(max-width: 700px)");
    if (query.matches) {
        //if the page is narrower than 700px
        console.log('under 700px');
        videoDuration = 100;
        mediaOffset = 0;
        line1Duration = 600;
        line1Offset = -600;
        workGridBool = false;
        artLinkTimer = 700;
    }
    else {
        //if the page is wider than 700px
        console.log('over 700px');
        videoDuration = 3000;
        mediaOffset = 2000;
        line1Duration = 500;
        line1Offset = -600;
        workGridBool = true;
        artLinkTimer = 0;
    }

    //SCENES1
    // console.log(videoDuration);
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

    //Title Text Animation
    const textAni0 = TweenMax.fromTo(text0, 1, {opacity: 0}, {opacity: 0});

    let mainTextOff = new ScrollMagic.Scene({
        duration: 10,
        offset: -1,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(textAni0)
    .addTo(controller);

    const textAni1 = TweenMax.fromTo(text0, 1, {opacity: 0}, {opacity: 1});

    let mainTextStart = new ScrollMagic.Scene({
        duration: 1000,
        offset: mediaOffset+10,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(textAni1)
    .addTo(controller);

    const textAni2 = TweenMax.fromTo(text0, 1, {opacity: 1}, {opacity: 0});
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


    //Header Animation
    const header = document.querySelector('header');

    const headerAni = TweenMax.fromTo(header, 1, {opacity: 0}, {opacity: 1});
    let headerAniStart = new ScrollMagic.Scene({
        duration: 50,
        offset: -50,
        triggerElement: section1,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(headerAni)
    .addTo(controller);


    //SCENE 2
    let scene2 = new ScrollMagic.Scene({
        //Duration of the video, trigger next step after it
        duration: 1000,
        triggerElement: section1,
        triggerHook: 0
    })
        //Scroll Magic trigger indicators
        // .addIndicators()
        .setPin(section1)
        .addTo(controller);



    //horizontal-line1 Animation
    const line1Ani = TweenMax.fromTo(line1, 1, {height: '0%', margin: '40% 0% 0% -100%'}, {height: '4%', margin: '40% 0% 0% 0%'});
    let line1Start = new ScrollMagic.Scene({
        duration: 2000,
        offset: line1Offset,
        triggerElement: section1,
        triggerHook: 0
    })
    //.addIndicators()
    .setTween(line1Ani)
    .addTo(controller);
    

    //Main Page Text Opacity Animation
        //allkustom(Title)
        const textH1Ani = TweenMax.fromTo(textH1, 1, {opacity: 0}, {opacity: 1});
        let textH1AniStart = new ScrollMagic.Scene({
            duration: 1000,
            offset: line1Offset,
            triggerElement: section1,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(textH1Ani)
        .addTo(controller);

        //Fisrt text line - p1
        const p1Ani = TweenMax.fromTo(p1, 1, {opacity: 0}, {opacity: 1});
        let p1Start = new ScrollMagic.Scene({
            duration: line1Duration,
            offset: 100,
            triggerElement: section1,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p1Ani)
        .addTo(controller);

        //Fisrt text line - p2
        const p2Ani = TweenMax.fromTo(p2, 1, {opacity: 0}, {opacity: 1});
        let p2Start = new ScrollMagic.Scene({
            duration: line1Duration,
            offset: 200,
            triggerElement: section1,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p2Ani)
        .addTo(controller);

        //Secons text line - p3
        const p3Ani = TweenMax.fromTo(p3, 1, {opacity: 0}, {opacity: 1});
        let p3Start = new ScrollMagic.Scene({
            duration: line1Duration,
            offset: 300,
            triggerElement: section1,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p3Ani)
        .addTo(controller);

        //Second text line - p4
        const p4Ani = TweenMax.fromTo(p4, 1, {opacity: 0}, {opacity: 1});
        let p4Start = new ScrollMagic.Scene({
            duration: line1Duration,
            offset: 400,
            triggerElement: section1,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p4Ani)
        .addTo(controller);


    //Selcted Work section
    const selectedSection = document.querySelector("#selectedWork");

    const selectedTitle = document.querySelector(".selectedTitle");
    const selecteTitleText = selectedTitle.querySelector("h1");
    const selectedLine = document.querySelector('.selectedHorizontal-line');
    
        //Title Opacity
        const selectedTitleAni = TweenMax.fromTo(selecteTitleText, 1, {opacity: 0}, {opacity: 1});
        let selectedTitleStart = new ScrollMagic.Scene({
            duration: 800,
            offset: -800,
            triggerElement: selectedSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(selectedTitleAni)
        .addTo(controller);

        //Line Animation
        const selectedLineAni = TweenMax.fromTo(selectedLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 0% -100%'}, {opacity: 1, height: '2px', margin: '0% 0% 0% -0%'});
        let selectedLineStart = new ScrollMagic.Scene({
            duration: 800,
            offset: -800,
            triggerElement: selectedSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(selectedLineAni)
        .addTo(controller);        

        //Artwork Animation
        const boxContainer = document.querySelector('.selected-container');

        if(workGridBool == true){
            const boxContainerAni = TweenMax.fromTo(boxContainer, 1, {opacity: 0, margin: '20% 12vw 0 12vw'}, {opacity: 1,margin: '0% 12vw 0 12vw'});
            let boxConatinerStart = new ScrollMagic.Scene({
                duration: 500,
                offset: -500,
                triggerElement: selectedSection,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(boxContainerAni)
            .addTo(controller);
        }else if(workGridBool == false){
            const boxContainerAni = TweenMax.fromTo(boxContainer, 1, {opacity: 0, margin: '20% 5% 0 5%'}, {opacity: 1,margin: '0% 5% 0 5%'});
            let boxConatinerStart = new ScrollMagic.Scene({
                duration: 500,
                offset: -500,
                triggerElement: selectedSection,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(boxContainerAni)
            .addTo(controller);
        }


    //All artWork section
    const artSection = document.querySelector(".allWorkSection");

    const allworkTitleDiv = document.querySelector('.title2');
    const allworkTitle = allworkTitleDiv.querySelector('h1');
    const allworkTitleLine = allworkTitleDiv.querySelector('.line2');
    const allworkTextDiv = document.querySelector('.text2');
    const allworkText = allworkTextDiv.querySelector('p');
    const allworkContainer = document.querySelector('.artContainer');

        //Title Opacity
        const allworkTitleAni = TweenMax.fromTo(allworkTitle, 1, {opacity: 0}, {opacity: 1});
        let allworkTitleStart = new ScrollMagic.Scene({
            duration: 800,
            offset: -600,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkTitleAni)
        .addTo(controller);
        
        //Title Line Opacity
        const allworkLineAni = TweenMax.fromTo(allworkTitleLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 2% -100%;'}, {opacity: 1, height: '2px', margin: '0% 0% 2% 0%;'});
        let allworkLineStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkLineAni)
        .addTo(controller);

        //Main text Animation
        const allworkTextAni = TweenMax.fromTo(allworkText, 1, {opacity: 0, margin: '50% 0% 0% 0%;'}, {opacity: 1, margin: '0% 0% 0% 0%;'});
        let allworkTextStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkTextAni)
        .addTo(controller);

        //All art preview Animation
        const allworkContainerAni = TweenMax.fromTo(allworkContainer, 1, {opacity: 0, margin: '0% 0% 0% -100%;'}, {opacity: 1, margin: '0% 0% 0% 0%;'});
        let allworkContainerStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkContainerAni)
        .addTo(controller);
        


    //All artwork Link Function
    function motionLink(){
        setTimeout(function(){
            window.location.href = "#";
        },artLinkTimer)
    }

    function iamgeLink(){
        setTimeout(function(){
            window.location.href = "#";
        },artLinkTimer)
    }

    function codeLink(){
        setTimeout(function(){
            window.location.href = "#";
        },artLinkTimer)
    }

    function physicalLink(){
        setTimeout(function(){
            window.location.href = "#";
        },artLinkTimer)
    }


    const contactSection = document.querySelector('.contactSection');
    const contactTitleDiv = contactSection.querySelector('.title3');
    const contactTitleBox = contactTitleDiv.querySelector('.title3TextBox');
        const contactTitle = contactTitleBox.querySelector('h1');
    const contactTitleLineBox = contactTitleDiv.querySelector('.line3Box');
        const contactTitleLine = contactTitleLineBox.querySelector('.line3');
    const contactTextBox = contactSection.querySelector('.text3');
        const contactText = contactTextBox.querySelector('.text3Box');
    const contactSocial = contactSection.querySelector('.contactSocial');
        const contactSocialBox = contactSocial.querySelector('.contactSocialBox');
    const contactLogoBox = contactSection.querySelector('.contactLogo');
        const contactLogo = contactLogoBox.querySelector('img');
    
        //Title3 Opacity
        const contactTitleAni = TweenMax.fromTo(contactTitle, 1, {opacity: 0}, {opacity: 1});
        let contactTitleStart = new ScrollMagic.Scene({
            duration: 800,
            offset: -600,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTitleAni)
        .addTo(controller);

        
        //Title3 Line Animation
        const contactTitleLineAni = TweenMax.fromTo(contactTitleLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 2.5% -100%;'}, {opacity: 1, height: '2px', margin: '0% 0% 2.5% 0%;'});
        let contactTitleLineStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTitleLineAni)
        .addTo(controller);

        //Text3 Animation
        const contactTextAni = TweenMax.fromTo(contactText, 1, {opacity: 0, margin: '50% 0% 0% 0%;'}, {opacity: 1, margin: '0% 0% 0% 0%;'});
        let contactTextStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTextAni)
        .addTo(controller);

        //Contact Social Animation
        const contactSocialAni = TweenMax.fromTo(contactSocialBox, 1, {opacity: 0, margin: '100% 0% 0% 0%'}, {opacity: 1, margin: '0% 0% 0% 0%'});
        let contactSocialStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactSocialAni)
        .addTo(controller);

        //Contact Logo Animation
        const contactLogoAni = TweenMax.fromTo(contactLogo, 1, {opacity: 0, margin: 'auto auto -10% -50%', filter: 'blur(0px)'}, {opacity: 0.3, margin: 'auto auto -10% -15%', filter: 'blur(5px)'});
        let contactLogoStart = new ScrollMagic.Scene({
            duration: 500,
            offset: -500,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactLogoAni)
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