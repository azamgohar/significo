function homeAnimation() {
    gsap.set(".marque_text_slide", {
        scale: 8,
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })

    tl
    .to('.video_div', {
        '--clip': "0%",
        ease: Power2,
    }, 'make_scale_animation_together')

    .to('.marque_text_slide', {
        scale: 1,
        ease: Power2,
    }, 'make_scale_animation_together')
    .to('.go_left', {
        xPercent: -10,
        stagger: .03,
        ease: Power4,
    }, 'make_animation_together')

    .to('.go_right', {
        xPercent: 10,
        stagger: .03,
        ease: Power4,
    }, 'make_animation_together')
}

function realSlidesAnimation() {
    gsap.to(".slides", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        xPercent: -289,
        ease: Power4,
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function(el) {
        el.addEventListener("mousemove",  function(dets){
            // console.log()
            // console.log(gsap.version)
            gsap.to(this.querySelector(".picture"), {
                opacity: 1, 
                scale: 1,
                x:  gsap.utils.mapRange(0, window.innerWidth, -150, 150, dets.clientX), 
                y: gsap.utils.mapRange(0, window.innerHeight, -200, 200, dets.clientY), 
                ease: Power4, 
                duration: .5
            })
        })
        
        el.addEventListener("mouseleave",  function(dets){
            gsap.to(this.querySelector(".picture"), {
                opacity: 0, 
                scale: 0.9, 
                ease: Power4, 
                duration: .5})
        })
    })
}

function textParaAnimation() {
    var clutter = "";
    document.querySelector(".text_paragraph").textContent.split("").forEach(function(e) {
        if(e === " ") clutter += "<span>&nbsp</span>"
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".text_paragraph").innerHTML = clutter;

    gsap.set(".text_paragraph span", {opacity: .1});
    gsap.to(".text_paragraph span", {
        scrollTrigger: {
            trigger: ".para_section",
            start: "top 90%",
            end: "bottom 95%",
            scrub: 2,
        },
        opacity: 1,
        stagger: 0.3,
        ease: Power4,
    })

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation() {
    gsap.to(".capsule2", {
        scrollTrigger: {
            trigger: ".capsule_section",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4,

    })
}

function bodyColorChange() {
    
    document.querySelectorAll(".section").forEach(function(e) {
       ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        // markers:  true,
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)    
        },
       }) 
    })
}


loco();
homeAnimation();
realSlidesAnimation();
teamAnimation();
textParaAnimation();
capsuleAnimation();
bodyColorChange();