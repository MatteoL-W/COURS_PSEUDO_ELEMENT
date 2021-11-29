const pageContainer = document.querySelector("[data-scroll-container]");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    multiplier: 0.6,
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
