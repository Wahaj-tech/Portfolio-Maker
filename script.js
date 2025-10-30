const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();

function firstPageAnim(){
    let tl=gsap.timeline();
    tl.from("#nav",{//from m gayab hoke aa jaata h
        y:-10,//upr seh neeche aayega if +10 then neeche seh upr aata 
        opacity:0,//starting m invisible hoga 
        duration:1,//itne second baad ayega
        ease:Expo.easeInOut
    })
    tl.to(".boundingelem",{//to m reh k gayab ho jaata h but here pehle nhi tha firr aagya
        y:0, 
        duration:1,
        ease:Expo.easeInOut,
        stagger:.3 //isse .3 k delay aayega hrr element m sbh ek saath nhi aayenge.
    })
    tl.from("#herofooter",{
        y:0,
        opacity:-10,
        duration:.5,
        ease:Expo.easeInOut
    })
    tl.from("#second",{
        y:10,
        duration:2,
        opacity:0,
        ease:Expo.easeInOut,
        
    })
}

firstPageAnim();