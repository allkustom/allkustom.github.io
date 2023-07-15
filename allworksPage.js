const controller = new ScrollMagic.Controller();


//Mobile Header Animation
let scrollBool = false;
const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuOption = document.querySelector('.mobileMenuOption');
const htmlDiv = document.querySelector('html');
const logo = document.querySelector('.logo');

const boxContainer = document.querySelector('.selected-container');
const motionTag = document.querySelector("#motionTag");
const imageTag = document.querySelector("#imageTag");
const codeTag = document.querySelector("#codeTag");
const physicalTag = document.querySelector("#physicalTag");


let menuCheck = false;function MenuOn(x){
    mobileMenu.classList.toggle("change");
    mobileMenuOption.classList.toggle("turnOn");
    x.disabled = true;
    menuCheck = true;
    x.classList.toggle("turnOff");
    htmlDiv.classList.toggle("turnOff");

    logo.classList.toggle("moveLeft");
    // boxContainer.classList.toggle("blurSection");
    // motionTag.classList.toggle("blurSection");
    // imageTag.classList.toggle("blurSection");
    // codeTag.classList.toggle("blurSection");
    // physicalTag.classList.toggle("blurSection");

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
    