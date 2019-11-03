class InfoSection {
  constructor() {
    this.infoSection();
  }

  infoSection(){
    const controller = new ScrollMagic.Controller();
    const infoTL = new TimelineMax({ paused: true });

    /** Info Variables */
    const info = $(".info");
    const infoImageContainer = $(info).find(".img-container");
    const infoTextInner = $(info).find(".text-inner");

    const animDuration = 0.75;
    const animEaseIn = Expo.easeIn;
    const animEaseOut = Expo.easeOut;

    /** Animations */
    infoTL
      .fromTo(info, animDuration,
        { y: 100, opacity: 0, ease: animEaseIn },
        { y: 0, opacity: 1, ease: animEaseOut })
      .staggerFromTo(infoTextInner, animDuration,
        { y: 50, opacity: 0, ease: animEaseIn },
        { y: 0, opacity: 1, ease: animEaseOut }, 0.05);

    /** Info Scene */
    new ScrollMagic.Scene({
      triggerElement: ".info",
      triggerHook: 0.85
    })
      .setTween(infoTL)
      // .addIndicators()
      .reverse(false)
      .addTo(controller);
  }
}

export default InfoSection;