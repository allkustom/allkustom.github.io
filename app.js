//Scroll Magic script from 
//https://youtu.be/wLUJ9VNzZXo

//Media Query Javascript targeting from
//https://www.youtube.com/watch?v=6fTGj1TY6rE


const intro = document.querySelector('.intro');

const pinBox = document.querySelector('.section1PinBox');

const videoBox = document.querySelector('.videoBox');
const video = videoBox.querySelector('video');

const section1 = document.querySelector('.section1');
const line1Div = document.querySelector('.line1');
const line1 = line1Div.querySelector('.horizontal-line1');

const text1Section = document.querySelector('.text1');
const textH1 = text1Section.querySelector('h1');
const p1 = document.querySelector('p1');
const p2 = document.querySelector('p2');
const p3 = document.querySelector('p3');
const p4 = document.querySelector('p4');

let mediaBool;
let videoDuration;
let mediaOffset;
let headerDuration;
let headerOffset;
let section1PinDuration;
let section1TitleDuration;
let section1TitleOffset;
let line1Duration
let line1Offset;
let section1ContentDuration;
let artLinkTimer;
let selectedTitleDuration;
let selectedTitleOffset;
let selectedArtworkDuration;
let selectedArtworkOffset;
let allworkTitleDuration;
let allworkTitleOffset;
let allworkContentDuration;
let allworkContentOffset;
let contactTitleDuration;
let contactTitleOffset;
let contactContentDuration;
let contactContentOffset;

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
    intro.classList.toggle("blurSection");
    section1.classList.toggle("blurSection");
    selectedSection.classList.toggle("blurSection");
    artSection.classList.toggle("blurSection");
    contactSection.classList.toggle("blurSection");
    boxContainer.classList.toggle("blurSection");

}

    //Scenes control with media query
    //Targeting Media Query 
    let query = window.matchMedia("(max-width: 1400px)");
    if (query.matches) {
        //if the page is narrower than 700px
        console.log('under 700px');
        mediaBool = false;

        videoDuration = 100;
        endIntro = 0;
        mediaOffset = 0;

        headerDuration = 200;
        headerOffset = 900;
        section1PinDuration = 1200;

        section1TitleDuration = 350;
        section1TitleOffset = -200;
        line1Duration = 600;
        line1Offset = -500;
        artLinkTimer = 700;

        selectedTitleDuration = 500;
        selectedTitleOffset = -650;
        selectedArtworkDuration = 500;
        selectedArtworkOffset = -600
        allworkTitleDuration = 600;
        allworkTitleOffset = -700;
        allworkContentDuration = 600;
        allworkContentOffset = -700;
        contactTitleDuration = 600;
        contactTitleOffset = -700;
        contactContentDuration = 500;
        contactContentOffset = -650;
    }
    else {
        //if the page is wider than 700px
        console.log('over 700px');
        mediaBool = true;

        videoDuration = 4000;
        endIntro = 4500;
        mediaOffset = 2000;

        headerDuration = 200;
        headerOffset = 1200;
        section1TitleDuration = 1000;
        section1PinDuration = endIntro + section1TitleDuration + 600;

        section1TitleOffset = 0;
        line1Duration = 1300;
        line1Offset = 0;
        section1ContentDuration = 700;
        artLinkTimer = 0;
        
        selectedTitleDuration = 800;
        selectedTitleOffset = -1000;
        selectedArtworkDuration = 800;
        selectedArtworkOffset = -900
        allworkTitleDuration = 600;
        allworkTitleOffset = -600;
        allworkContentDuration = 500;
        allworkContentOffset = -600;
        contactTitleDuration = 800;
        contactTitleOffset = -850;
        contactContentDuration = 300;
        contactContentOffset = -500;
    }

    //0. Mobile intro image Section ----------------------------------------------------------------------------------------------------

    const introScrollImageBox = intro.querySelector('.mobileScrollIamge');
    const introScrollImage = introScrollImageBox.querySelector('img');
    const introLogoImageBox = intro.querySelector('.mobileLogoImage');
    const introLogoImage = introLogoImageBox.querySelector('img');


    if(mediaBool == false){
        let mobileScene = new ScrollMagic.Scene({
            //Duration of the video, trigger next step after it
            duration: 1600,
            triggerElement: intro,
            triggerHook: 0
        })
            // .addIndicators()
            .setPin(intro)
            .addTo(controller);

        //Scroll Iamge Opacity
        const scrollImageAni = TweenMax.fromTo(introScrollImage, 1, {opacity: 0.8, width: '20%', filter: 'blur(0px)'}, {opacity: 0, width: '18%', filter: 'blur(2px)'});

        let scrollImageStart = new ScrollMagic.Scene({
            duration: 500,
            offset: 0,
            triggerElement: intro,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(scrollImageAni)
        .addTo(controller);    

        //Logo Iamge Opacity
        const logoImageAni = TweenMax.fromTo(introLogoImage, 1, {opacity: 0, width: '20%', filter: 'blur(10px)'}, {opacity: 0.9, width: '70%', filter: 'blur(0px)'});

        let logoImageStart = new ScrollMagic.Scene({
            duration: 1000,
            offset: 500,
            triggerElement: intro,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(logoImageAni)
        .addTo(controller);    

    }




//-----------------------------------------------------------------------------------------------------------------------------------
    
        let pinBoxSet = new ScrollMagic.Scene({
            //Duration of the video, trigger next step after it
            duration: section1PinDuration,
            triggerElement: pinBox,
            triggerHook: 0
        })
            //Scroll Magic trigger indicators
            // .addIndicators()
            .setPin(pinBox)
            .addTo(controller);

    
            //Video Animation
            let accelAmount = 0.1;
            let scrollPos = 0;
            let delay = 0;
    
            pinBoxSet.on('update', e => {
                scrollpos = e.scrollPos / 1000;
                // console.log(e);
            });
    
            setInterval(()=>{
                delay += (scrollpos - delay) * accelAmount;
                // console.log(scrollpos, delay);
    
                // video.currentTime = scrollpos;
                video.currentTime = delay;
            }, 33.3);
            
        //VideoBox Opacity
        const videoBoxOpacityAni = TweenMax.fromTo(videoBox, 1, {opacity: 1}, {opacity: 0});

        let videoBoxOpacityStart = new ScrollMagic.Scene({
            duration: 500,
            offset: videoDuration,
            triggerElement: pinBox,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(videoBoxOpacityAni)
        .addTo(controller);    

        //VideoBox Display none
        if(mediaBool == true){
            const videoBoxDisplayAni = TweenMax.fromTo(videoBox, 1, {display: 'flex'}, {display: 'none'});

            let videoBoxDisplayStart = new ScrollMagic.Scene({
                duration: 1,
                offset: videoDuration+500,
                triggerElement: pinBox,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(videoBoxDisplayAni)
            .addTo(controller);            
    
        }




    //0. Header Animation ----------------------------------------------------------------------------------------------------
    const header = document.querySelector('header');

    const headerAni = TweenMax.fromTo(header, 1, {opacity: 0, filter: 'blur(10px)'}, {opacity: 1, filter: 'blur(0px)'});
    let headerAniStart = new ScrollMagic.Scene({
        duration: headerDuration,
        offset: endIntro + headerOffset,
        triggerElement: pinBox,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(headerAni)
    .addTo(controller);


    //Section1 ----------------------------------------------------------------------------------------------------
    // let scene2 = new ScrollMagic.Scene({
    //     //Duration of the video, trigger next step after it
    //     duration: endIntro + section1PinDuration,
    //     triggerElement: section1,
    //     triggerHook: 0
    // })
    //     //Scroll Magic trigger indicators
    //     // .addIndicators()
    //     .setPin(section1)
    //     .addTo(controller);



    //horizontal-line1 Animation
    const line1Ani = TweenMax.fromTo(line1, 1, {height: '0%', margin: '40% 0% 0% -100%', filter: 'blur(1.5px)'}, {height: '3%', margin: '40% 0% 0% 0%', filter: 'blur(0px)'});
    let line1Start = new ScrollMagic.Scene({
        duration: line1Duration,
        offset: endIntro + line1Offset,
        triggerElement: pinBox,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(line1Ani)
    .addTo(controller);
    

    //Main Page Text Opacity Animation
        //allkustom(Title)
        const textH1Ani = TweenMax.fromTo(textH1, 1, {opacity: 0, filter: 'blur(3px)'}, {opacity: 1, filter: 'blur(0px)'});
        let textH1AniStart = new ScrollMagic.Scene({
            duration: section1TitleDuration,
            offset: endIntro + section1TitleOffset,
            triggerElement: pinBox,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(textH1Ani)
        .addTo(controller);

        //Fisrt text line - p1
        const p1Ani = TweenMax.fromTo(p1, 1, {opacity: 0, filter: 'blur(5px)'}, {opacity: 1, filter: 'blur(0px)'});
        let p1Start = new ScrollMagic.Scene({
            duration: section1ContentDuration,
            offset: endIntro + 200,
            triggerElement: pinBox,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p1Ani)
        .addTo(controller);

        //Fisrt text line - p2
        const p2Ani = TweenMax.fromTo(p2, 1, {opacity: 0, filter: 'blur(5px)'}, {opacity: 1, filter: 'blur(0px)'});
        let p2Start = new ScrollMagic.Scene({
            duration: section1ContentDuration,
            offset: endIntro + 400,
            triggerElement: pinBox,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p2Ani)
        .addTo(controller);

        //Secons text line - p3
        const p3Ani = TweenMax.fromTo(p3, 1, {opacity: 0, filter: 'blur(5px)'}, {opacity: 1, filter: 'blur(0px)'});
        let p3Start = new ScrollMagic.Scene({
            duration: section1ContentDuration,
            offset: endIntro + 600,
            triggerElement: pinBox,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p3Ani)
        .addTo(controller);

        //Second text line - p4
        const p4Ani = TweenMax.fromTo(p4, 1, {opacity: 0, filter: 'blur(5px)'}, {opacity: 1, filter: 'blur(0px)'});
        let p4Start = new ScrollMagic.Scene({
            duration: section1ContentDuration,
            offset: endIntro + 800,
            triggerElement: pinBox,
            triggerHook: 0
        })
        //.addIndicators()
        .setTween(p4Ani)
        .addTo(controller);


    //Selcted Work section ----------------------------------------------------------------------------------------------------
    const selectedSection = document.querySelector("#selectedWork");

    const selectedTitle = document.querySelector(".selectedTitle");
    const selecteTitleText = selectedTitle.querySelector("h1");
    const selectedLine = document.querySelector('.selectedHorizontal-line');
    
        //Title Opacity
        const selectedTitleAni = TweenMax.fromTo(selecteTitleText, 1, {opacity: 0, filter: 'blur(5px)'}, {opacity: 1, filter: 'blur(0px)'});
        let selectedTitleStart = new ScrollMagic.Scene({
            duration: selectedTitleDuration,
            offset: selectedTitleOffset,
            triggerElement: selectedSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(selectedTitleAni)
        .addTo(controller);

        //Line Animation
        const selectedLineAni = TweenMax.fromTo(selectedLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 0% -100%', filter: 'blur(1px)'}, {opacity: 1, height: '2px', margin: '0% 0% 0% 0%', filter: 'blur(0px)'});
        let selectedLineStart = new ScrollMagic.Scene({
            duration: selectedTitleDuration,
            offset: selectedTitleOffset,
            triggerElement: selectedSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(selectedLineAni)
        .addTo(controller);        

        //Artwork Animation
        const boxContainer = document.querySelector('.selected-container');

        if(mediaBool == true){
            const boxContainerAni = TweenMax.fromTo(boxContainer, 1, {opacity: 0, margin: '50% 12vw 0 12vw', filter: 'blur(10px)'}, {opacity: 1,margin: '0% 12vw 0 12vw', filter: 'blur(0px)'});
            let boxConatinerStart = new ScrollMagic.Scene({
                duration: selectedArtworkDuration,
                offset: selectedArtworkOffset,
                triggerElement: selectedSection,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(boxContainerAni)
            .addTo(controller);
        }else if(mediaBool == false){
            const boxContainerAni = TweenMax.fromTo(boxContainer, 1, {opacity: 0, margin: '50% 5% 0 5%'}, {opacity: 1,margin: '0% 5% 0 5%'});
            let boxConatinerStart = new ScrollMagic.Scene({
                duration: selectedArtworkDuration,
                offset: selectedArtworkOffset,
                triggerElement: selectedSection,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(boxContainerAni)
            .addTo(controller);
        }


    //All artWork section ----------------------------------------------------------------------------------------------------
    const artSection = document.querySelector(".allWorkSection");

    const allworkTitleDiv = document.querySelector('.title2');
    const allworkTitle = allworkTitleDiv.querySelector('h1');
    const allworkTitleLine = allworkTitleDiv.querySelector('.line2');
    const allworkTextDiv = document.querySelector('.text2');
    const allworkText = allworkTextDiv.querySelector('p');
    const allworkContainer = document.querySelector('.artContainer');

        //Title Opacity
        const allworkTitleAni = TweenMax.fromTo(allworkTitle, 1, {opacity: 0, filter: 'blur(3px)'}, {opacity: 1, filter: 'blur(0px)'});
        let allworkTitleStart = new ScrollMagic.Scene({
            duration: allworkTitleDuration,
            offset: allworkTitleOffset,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkTitleAni)
        .addTo(controller);
        
        //Line Opacity
        const allworkLineAni = TweenMax.fromTo(allworkTitleLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 2% -100%;'}, {opacity: 1, height: '2px', margin: '0% 0% 2% 0%;'});
        let allworkLineStart = new ScrollMagic.Scene({
            duration: allworkTitleDuration,
            offset: allworkTitleOffset,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkLineAni)
        .addTo(controller);

        //Main text Animation
        const allworkTextAni = TweenMax.fromTo(allworkText, 1, {opacity: 0, margin: '50% 0% 0% 0%;', filter: 'blur(2px)'}, {opacity: 1, margin: '0% 0% 0% 0%;', filter: 'blur(0px)'});
        let allworkTextStart = new ScrollMagic.Scene({
            duration: allworkContentDuration,
            offset: allworkContentOffset,
            triggerElement: artSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(allworkTextAni)
        .addTo(controller);

        //All art preview Animation
        const allworkContainerAni = TweenMax.fromTo(allworkContainer, 1, {opacity: 0, margin: '0% 0% 0% -100%;', filter: 'blur(10px)'}, {opacity: 1, margin: '0% 0% 0% 0%;', filter: 'blur(0px)'});
        let allworkContainerStart = new ScrollMagic.Scene({
            duration: allworkContentDuration,
            offset: allworkContentOffset,
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

    //Contact Section ----------------------------------------------------------------------------------------------------
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
        const contactTitleAni = TweenMax.fromTo(contactTitle, 1, {opacity: 0, filter: 'blur(3px)'}, {opacity: 1, filter: 'blur(0px)'});
        let contactTitleStart = new ScrollMagic.Scene({
            duration: contactTitleDuration,
            offset: contactTitleOffset,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTitleAni)
        .addTo(controller);

        
        //Title3 Line Animation
        const contactTitleLineAni = TweenMax.fromTo(contactTitleLine, 1, {opacity: 0, height: '0.5px', margin: '0% 0% 2.5% -100%;'}, {opacity: 1, height: '2px', margin: '0% 0% 2.5% 0%;'});
        let contactTitleLineStart = new ScrollMagic.Scene({
            duration: contactTitleDuration,
            offset: contactTitleOffset,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTitleLineAni)
        .addTo(controller);

        //Text3 Animation
        const contactTextAni = TweenMax.fromTo(contactText, 1, {opacity: 0, margin: '50% 0% 0% 0%;', filter: 'blur(3px)'}, {opacity: 1, margin: '0% 0% 0% 0%;', filter: 'blur(0px)'});
        let contactTextStart = new ScrollMagic.Scene({
            duration: contactContentDuration,
            offset: contactContentOffset,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactTextAni)
        .addTo(controller);

        //Contact Social Animation
        const contactSocialAni = TweenMax.fromTo(contactSocialBox, 1, {opacity: 0, margin: '100% 0% 0% 0%', filter: 'blur(3px)'}, {opacity: 1, margin: '0% 0% 0% 0%', filter: 'blur(0px)'});
        let contactSocialStart = new ScrollMagic.Scene({
            duration: contactContentDuration,
            offset: contactContentOffset,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactSocialAni)
        .addTo(controller);

        //Contact Logo Animation
       
    


        if(mediaBool == true){
            const contactLogoAni = TweenMax.fromTo(contactLogo, 1, {opacity: 0, margin: 'auto auto -10% -50%', filter: 'blur(0px)'}, {opacity: 0.3, margin: 'auto auto -10% -15%', filter: 'blur(10px)'});
            let contactLogoStart = new ScrollMagic.Scene({
                duration: contactContentDuration,
                offset: contactContentOffset,
                triggerElement: contactSection,
                triggerHook: 0
            })
            // .addIndicators()
            .setTween(contactLogoAni)
            .addTo(controller);
        }else if(mediaBool == false){ const contactLogoAni = TweenMax.fromTo(contactLogo, 1, {opacity: 0, margin: 'auto auto -10% -50%', filter: 'blur(0px)'}, {opacity: 0.5, margin: 'auto auto 10% 10%', filter: 'blur(3px)'});
        let contactLogoStart = new ScrollMagic.Scene({
            duration: contactContentDuration,
            offset: contactContentOffset,
            triggerElement: contactSection,
            triggerHook: 0
        })
        // .addIndicators()
        .setTween(contactLogoAni)
        .addTo(controller);
        }