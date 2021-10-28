const pageContainer = document.querySelector("[data-scroll-container]");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    multiplier: 0.3,
    smartphone: {
        smooth: true
    }
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
    let allBigPhrases = gsap.utils.toArray('strong');
    allBigPhrases.forEach((phrase) => {
        gsap.to(phrase, {
            scrollTrigger: {
                trigger: phrase,
                scroller: pageContainer,
                scrub: true,
                start: 'top 85%',
            },
            opacity: 7,
            ease: "power1.inOut"
        })
    });

    let allSections = gsap.utils.toArray('section');
    allSections.forEach((section) => {
        let className = section.className;

        ScrollTrigger.create({
            trigger: 'section.' + className,
            scroller: pageContainer,
            scrub: true,
            start: 'top center',
            toggleClass: {
                targets: "body",
                className: className
            }
        })
    })

    let allInc = gsap.utils.toArray('.inc');
    allInc.forEach((strong) => {
        gsap.fromTo(strong, {
            x: 100
        }, {
            scrollTrigger: {
                trigger: strong,
                scroller: pageContainer,
                scrub: true,
                start: 'top 85%',
            },
            x: 0,
        })
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});
