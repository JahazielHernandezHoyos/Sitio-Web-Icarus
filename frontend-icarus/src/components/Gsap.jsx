import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {

  gsap.fromTo(
    ".headerGsap",
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".headerGsap",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".servicio1",
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".servicio1",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".servicio2",
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".servicio2",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    ".servicio3",
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      autoAlpha: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".servicio3",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    }
  );
  return <></>;
};

export default Gsap;
