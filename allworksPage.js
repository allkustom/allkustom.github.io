const controller = new ScrollMagic.Controller();


//Mobile Header Animation
let scrollBool = false;
const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuOption = document.querySelector('.mobileMenuOption');
const body = document.querySelector('body');
const htmlDiv = document.querySelector('html');
const logo = document.querySelector('.logo');

const boxContainer = document.querySelector('.selected-container');
const motionTag = document.querySelector("#motionTag");
const imageTag = document.querySelector("#imageTag");
const codeTag = document.querySelector("#codeTag");
const physicalTag = document.querySelector("#physicalTag");

let mobileClick;

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
    let query = window.matchMedia("(max-width: 700px)");
    let query2 = window.matchMedia("(max-width: 1380px)");

    if (query.matches) {
        //if the page is narrower than 700px
        // console.log('under 700px');
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
        // console.log('over 700px');
        if(query2.matches){
            mediaBool = true;
            artLinkTimer = 700;
        }
        else{
        mediaBool = true;
        artLinkTimer = 0;
        }
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
    

    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display = "none";
    })
    // const form1Grid = document.querySelector('.form1Grid');
    const form1MainImageDiv = document.querySelector('.form1MainImage');
    const form1MainImage = form1MainImageDiv.querySelector('img');

    let addImg = document.createElement('img');

    const overlayDiv = document.querySelector('.overlayImage');
    const overlayImageDiv = overlayDiv.querySelector('.overlayImageBox');
    const overlayImageSouceBox = overlayImageDiv.querySelector('.overlayImageSource');
    const overlayImage = overlayImageSouceBox.querySelector('img');

    const pageBackDiv = document.querySelector('.pageBackDiv');


    function ImgZoom(){
        if(mediaBool == true){
        addImg.src = form1MainImage.src;
        overlayImageSouceBox.appendChild(addImg);
        overlayDiv.style.display = "block"; 
        pageBackDiv.style.display = "none";
        body.style.overflow = "hidden";
        htmlDiv.style.overflow = "hidden";
        }
    }
    if(mediaBool == true){
        form1MainImageDiv.style.cursor = 'pointer';
    }else{
        form1MainImageDiv.style.cursor = 'default';
    }

    function ImgZoomClose(){
        if(mediaBool == true){
        overlayDiv.style.display = "none"; 
        pageBackDiv.style.display = "block";
        body.style.overflow = "";
        htmlDiv.style.overflow = "";
        }
    }

