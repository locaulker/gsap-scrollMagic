class HeaderSection {
  constructor() {
    this.header();
  }

  header() {
    const TL = new TimelineMax({ paused: true });
  
    /** Header Variables */
    const header = $(".header");
    const navigation = $(header).find(".header-navigation");
    const mainContainer = $(header).find(".main-container");
    const textInner = $(mainContainer).find(".text-wrapper .text-inner");
    const imgContainer = $(mainContainer).find(".img-container");
  
    const animationDuration = 0.75;
    const animationEaseIn = Expo.easeIn;
    const animationEaseOut = Expo.easeOut;
    
    TL
    .fromTo(header, animationDuration,
      { y:1500, opacity: 0, ease: animationEaseIn },
      { y:0, opacity: 1, ease: animationEaseOut })
    .fromTo(navigation, animationDuration,
      { y: '-100%', opacity: 0, ease: animationEaseIn },
      { y: '0%', opacity: 1, ease: animationEaseOut }, '-=0.25')
    .staggerFromTo(textInner, animationDuration,
      { y: '120%', animationDuration, ease: animationEaseIn },
      { y: '0%', animationDuration, ease: animationEaseOut }, '-=0.15')
    .fromTo(imgContainer, animationDuration,
      { y: '-50', opacity: 0, ease: animationEaseIn },
      { y: '0', opacity: 1, ease: animationEaseOut }, '-=1.25');

    TL.play();
  }
}

export default HeaderSection;