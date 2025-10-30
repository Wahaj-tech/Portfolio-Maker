const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
  });
}


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
        y:-10,
        opacity:0,
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

document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mousemove",(dets)=>{
    gsap.to(elem.querySelector("img")),{
      opacity:1,
      ease:Power1,
    }
  })
})
