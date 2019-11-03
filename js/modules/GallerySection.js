class GallerySection {
  constructor() {
    this.gallery();
  }

  gallery() {
   
    /** Gallery Variables */
    const gallery = $(".gallery");
    const galleryRevealer = $(gallery).find(".revealer");
    const galleryImgRevealer = $(gallery).find(".img-revealer");

    const animDuration = 0.75;
    const animEaseIn = Expo.easeIn;
    const animEaseOut = Expo.easeOut;

    /** Animations */
    const galleryTL = new TimelineMax({ paused: true });
    galleryTL
      .fromTo(gallery, animDuration,
        { x: "-100%", ease: animEaseIn },
        { x: "0%", ease: animEaseOut })
      .fromTo(galleryRevealer, animDuration,
        { x: "0%", ease: animEaseIn },
        { x: "100%", ease: animEaseOut })
      .fromTo(galleryImgRevealer, animDuration,
        { x: "-100%", ease: animEaseIn },
        { x: "100%", ease: animEaseOut }, "-=0.28");
    
    // galleryTL.play();

    /** Info Scene */
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".gallery",
      triggerHook: 0.75
    })
      .setTween(galleryTL)
      // .addIndicators()
      .reverse(false)
      .addTo(controller);
  }
}

export default GallerySection;