
function timelineOne(){
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      pin: true,
      end: "bottom -250%",
    },
  });
  tl.to(
    "#circle #btm img",
    {
      rotate: "-180deg",
      scale: 1,
      duration: 1,
      stagger: 0.1,
    },
    "hello"
  )
    .to(
      "#circle #top img",
      {
        scale: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
      },
      "hello"
    )
  
    .to(
      "#cimage  img",
      {
        scale: 0,
        duration: 1,
        stagger: 0.1,
      },
      "hello"
    )
  
    .to(
      "#centerimg  h5",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "hello"
    )
  
    .to(
      "#circle",
      {
        scale: 0.6,
      },
      "hello"
    )
    .to(
      "#overlay>h1#gallery",
      {
        bottom: "-50%",
      },
      "hello"
    )
  
    .to(
      "#gola",
      {
        top: "50%",
        scale: 2,
      },
      "hello"
    )
    .to(
      "#gola",
      {
        opacity: 0,
        duration: 2.2,
      },
      "hello2"
    )
    .to(
      "#overlay>h1#pf",
      {
        rotate: 0,
        bottom: "2%",
      },
      "hello2"
    )
    .to(
      "#smcircle",
      {
        scale: 0,
        duration: 2,
      },
      "hello2"
    )
    .to(
      "#circle",
      {
        scale: 0,
        duration: 2,
      },
      "hello2"
    )
    .to(
      "#pinkpart",
      {
        rotate: 0,
        top: 0,
        duration: 5,
      },
      "hello2"
    )
    .to("#pinkpart", {
      top: "-40%",
      duration: 3,
    });
}
function timelineTwo() {
  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#second",
      scrub:1,
      start:"top top",
      end:"bottom -150%",
      pin:true
    }
  })
  tl2.to("#stop .circle",{
    top:"50%",
    stagger:.1,
  })
  .to(".circle",{
    left:"50%",
    stagger:.1,
  })
  .to(".pi",{
    scale:10
  
  })
  .to(".pi",{
    background:"linear-gradient(to right, #d5a7b4,#B4AAD5)",

  })
  .to("#stop h1",{
    left:"-150%",
    duration:8

  },"a")
  .to("#sbtm #two",{
    opacity:0,
    duration:3
   },"a")
  .to("#sbtm #one",{
   opacity:1,
   duration:3,
   delay:1
  },"a")
  
}
timelineOne()
timelineTwo()