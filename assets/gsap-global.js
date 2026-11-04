const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isFirefox = /firefox/i.test(navigator.userAgent);


document.addEventListener("DOMContentLoaded", function(event){

    //gsap global settings here

    if (!isSafari && !isFirefox) {
        if(location.pathname === '/'){ 
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            ScrollSmoother.create({
                wrapper: ".smooth-wrapper",
                content: ".smooth-content",
                smooth: 1.5, 
                effects: false,
                normalizeScroll: false
            });
        }
    }
})