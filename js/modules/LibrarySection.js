class LibrarySection {
  constructor() {
    this.library();
  }

  library() {
  
    /** Gallery Variables */
    const library = $(".library");
    const libTextInner = $(library).find(".text-inner");
    const book = $(library).find(".book");

    const animDuration = 0.75;
    const animEaseIn = Expo.easeIn;
    const animEaseOut = Expo.easeOut;


    /** Animations */
    const libTL = new TimelineMax({ paused: true });
    libTL
      .fromTo(libTextInner, animDuration,
        { y: 150, ease: animEaseIn },
        { y: 0, ease: animEaseOut })
      .staggerFromTo(book, animDuration,
        { y: 10, opacity: 0, ease: animEaseIn },
        { y: 0, opacity: 1, ease: animEaseOut }, 0.15);


    /** Gallery Scene */
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".library",
      triggerHook: 0.65
    })
      .setTween(libTL)
      // .addIndicators()
      .reverse(false)
      .addTo(controller);
    
  }
}

export default LibrarySection;