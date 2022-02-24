import { gsap, Power3, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  useEffect(() => {

    gsap.fromTo(
        ".headerGsap",
        {
          y: -100,
          autoAlpha: 0,
        },
        {
          y: 0,
          duration: 3,
          autoAlpha: 1,
          ease: "Expo.easeOut",
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

    //hacer animacion para que se muevan en Y 3 elementos no al mismo tiempo y con delay de 1 segundo cada uno con scrollTrigger con las clases box1 box2 y box3
    gsap.fromTo(
      ".box1",
      {
        autoAlpha: 0,
        x: 50,
      },
      {
        autoAlpha: 1,
        duration: 5,
        x: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".box1",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".box2",
      {
        autoAlpha: 0,
        y: -50,
      },
      {
        autoAlpha: 1,
        duration: 5,
        y: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".box2",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".box3",
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        duration: 5,
        x: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: ".box3",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Imagenes animacion

    gsap.fromTo(
        ".imgGsap1",
        {
          autoAlpha: 0,
          x: 500,
        },
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgGsap1",
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".imgGsap2",
        {
          autoAlpha: 0,
          x: -500,
        },
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgGsap2",
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      //contactanos
    
      gsap.fromTo(
        ".contactAnimate",
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          duration: 1,
          y: 0,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: ".contactAnimate",
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );

  }, []);
};

export default Gsap;
