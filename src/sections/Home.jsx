import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const upperHeaderRef = useRef(null);
  const lowerHeaderRef = useRef(null);
  const tl = useRef(null);

  const imgContainerRef = useRef(null);
  const heroImg1Ref = useRef(null);
  const heroImg2Ref = useRef(null);
  const heroImg3Ref = useRef(null);
  const heroImg4Ref = useRef(null);
  const heroImgTL = useRef(null);

  const bentoContainerRef = useRef(null);
  const bentoText1Ref = useRef(null);
  const bentoText2Ref = useRef(null);
  const bentoText3Ref = useRef(null);
  const bentoImg1Ref = useRef(null);
  const bentoImg2Ref = useRef(null);
  const bentoImg3Ref = useRef(null);
  const bentoTL = useRef(null);

  const modelText1 =
    "Modelling is more than just striking a pose, it's the art of presence, confidence, and storytelling through movement. At Ahuja's Production, we believe every model carries not just a look, but a legacy. From the subtle power of a glance to the commanding energy of a runway stride, modelling transforms individuals into icons who define culture and inspire generations.";

  const modelText2 =
    "Our approach is rooted in precision and passion. We craft experiences that highlight individuality while aligning with the evolving demands of the fashion and entertainment world. Whether it's high-fashion editorials, commercial campaigns, or artistic showcases, we build platforms where talent doesn't just fit in, it stands out. Modelling, in our vision, is not about fitting a mold, but breaking it with bold authenticity.";

  const futureText1 =
    "Modelling is no longer just a pose—it's presence, confidence, and the art of telling stories without words. At Ahuja's Production we believe every model carries more than a look — they carry a legacy.";

  const futureText2 =
    "What does the future demand—fitting in, or standing apart? For us, the answer is clear: we don't follow trends, we define them. Modelling isn't about moulds. It's about breaking them with bold authenticity.";

  const joinUsText =
    "Discover opportunities, showcase your talent, and connect with a network that values authenticity and ambition. This is where modelling careers begin and grow.";

  useGSAP(() => {
    // hero section timeline
    tl.current = gsap
      .timeline()
      .from(upperHeaderRef.current, {
        y: 200,
        autoAlpha: 0,
        duration: 2.3,
        ease: "power4.out",
      })
      .from(
        lowerHeaderRef.current,
        { y: 200, autoAlpha: 0, duration: 2.3, ease: "power4.out" },
        "<"
      );

    // image gallery timeline
    if (isMobile) {
      // MOBILE: each image animates on its own, no scrub
      gsap.from(heroImg1Ref.current, {
        scrollTrigger: {
          trigger: heroImg1Ref.current,
          start: "top 80%",
        },
        duration: 3,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(heroImg2Ref.current, {
        scrollTrigger: {
          trigger: heroImg2Ref.current,
          start: "top 80%",
        },
        duration: 3,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(heroImg3Ref.current, {
        scrollTrigger: {
          trigger: heroImg3Ref.current,
          start: "top 80%",
        },
        duration: 3,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(heroImg4Ref.current, {
        scrollTrigger: {
          trigger: heroImg4Ref.current,
          start: "top 80%",
        },
        duration: 3,
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });
    } else {
      // DESKTOP/TABLET: scrubbed timeline
      heroImgTL.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgContainerRef.current,
          start: "center center",
          scrub: true,
          pin: true,
          end: "+=300%",
        },
      });

      heroImgTL.current
        .from(heroImg1Ref.current, { y: 100, opacity: 0, ease: "circ.out" })
        .from(heroImg2Ref.current, { y: 100, opacity: 0, ease: "circ.out" })
        .from(heroImg3Ref.current, { y: 100, opacity: 0, ease: "circ.out" })
        .from(heroImg4Ref.current, { y: 100, opacity: 0, ease: "circ.out" });
    }

    // bento timeline
    if (!bentoContainerRef.current) return;

    bentoTL.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: bentoContainerRef.current,
          start: "center center",
          scrub: true,
          pin: true,
          end: "+=300%",
        },
      })
      .from(bentoText1Ref.current, { opacity: 0, ease: "circ.out" })
      .from(bentoText2Ref.current, { opacity: 0, ease: "circ.out" })
      .from(bentoText3Ref.current, { opacity: 0, ease: "circ.out" })
      .from(bentoImg1Ref.current, { opacity: 0, ease: "circ.out" })
      .from(bentoImg2Ref.current, { opacity: 0, ease: "circ.out" })
      .from(bentoImg3Ref.current, { opacity: 0, ease: "circ.out" });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="home">
      {/* Hero Section */}
      <div className="hero h-[90vh] sm:h-[90vh] relative flex flex-col items-center justify-center text-white px-5 sm:px-10 overflow-hidden ">
        <img
          src="/images/home-hero.jpg"
          alt="Ahuja's Production"
          className="absolute h-full w-full object-cover object-center -z-10"
        />
        <div
          ref={upperHeaderRef}
          className="absolute text-white/90 top-0 sm:top-0 left-0 m-5 sm:m-10 text-6xl sm:text-[150px] font-bold"
        >
          Ahuja's
        </div>
        <div
          ref={lowerHeaderRef}
          className="absolute text-[#e29231cd] bottom-10 sm:bottom-0 right-0 m-5 sm:m-10 text-6xl sm:text-[150px] font-bold"
        >
          Production
        </div>
      </div>

      {/*About Modelling Section */}
      <div className="Modelling min-h-screen bg-paper flex flex-col justify-center px-5 sm:px-10 gap-15 py-20">
        <h1 className="text-[#b67c35] text-5xl sm:text-9xl">
          <AnimatedTextLines text="Modelling" />
        </h1>
        <div className="flex flex-col gap-7 px-2">
          <p className="text-3xl sm:text-5xl">
            <AnimatedTextLines text="What is Modelling?" />
          </p>
          <p className="text-xl sm:text-4xl max-w-[90%] text-pretty font-serif">
            <AnimatedTextLines text={modelText1} />
          </p>
        </div>
        <div className="flex flex-col gap-7 px-2">
          <p className="text-xl sm:text-4xl max-w-[90%] text-pretty font-serif">
            <AnimatedTextLines text={modelText2} />
          </p>
        </div>
      </div>

      {/* Images Gallery */}
      <div
        ref={imgContainerRef}
        className="flex flex-col sm:flex-row min-h-screen items-center justify-center px-5 sm:px-10 gap-1 sm:gap-2 pt-50 pb-70 bg-black overflow-x-hidden"
      >
        <img
          ref={heroImg1Ref}
          src="/images/home-gallery-1.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-paper translate-y-0"
        />
        <img
          ref={heroImg2Ref}
          src="/images/home-gallery-2.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-paper -translate-x-6 sm:translate-y-20 -rotate-12 z-10"
        />
        <img
          ref={heroImg3Ref}
          src="/images/home-gallery-3.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-paper sm:-translate-y-10"
        />
        <img
          ref={heroImg4Ref}
          src="/images/home-gallery-4.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-paper rotate-12 sm:rotate-0 sm:translate-y-20"
        />
      </div>

      {/*Future Section */}
      <div className="Modelling min-h-screen flex flex-col sm:flex-row justify-between px-5 sm:px-10 gap-15 py-30 ">
        <div className="h-full w-full flex flex-col justify-center gap-15   ">
          <h1 className="text-primary text-5xl sm:text-9xl">
            <AnimatedTextLines text="Future" />
          </h1>
          <div className="flex flex-col gap-7 px-2">
            <p className="text-3xl sm:text-5xl">
              <AnimatedTextLines text="What is the Future of Modelling?" />
            </p>
            <p className="text-xl sm:text-4xl w-full text-pretty font-serif">
              <AnimatedTextLines text={futureText1} />
            </p>
          </div>
          <div className="flex flex-col gap-7 px-2">
            <p className="text-xl sm:text-4xl w-full text-pretty font-serif">
              <AnimatedTextLines text={futureText2} />
            </p>
          </div>
        </div>
        <img
          src="/images/home-future.jpg"
          alt=""
          className="w-full sm:max-w-1/3 h-full rounded-tr-full rounded-bl-full"
        />
      </div>

      {/* Bento Grid */}

      <div
        ref={bentoContainerRef}
        className="flex h-screen items-center justify-center px-5 sm:px-10 gap-2 my-0 sm:my-50 bg-white py-10 relative"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full w-full">
          <div
            ref={bentoText1Ref}
            className="flex justify-center items-center col-span-2 row-span-1 bg-orange-400 text-white rounded-lg text-3xl sm:text-8xl text-center"
          >
            <div>Step into the</div>
          </div>
          <div ref={bentoImg1Ref} className="col-span-1 row-span-1 rounded-lg">
            <img
              src="/images/home-bento-9.jpg"
              alt=""
              className="rounded-lg shadow-md h-full w-full object-cover object-center"
            />
          </div>
          <div ref={bentoImg2Ref} className="col-span-1 row-span-1 rounded-lg">
            <img
              src="/images/home-bento-1.jpg"
              alt=""
              className="col-span-1 row-span-1 rounded-lg shadow-md h-full w-full object-cover object-[center_20%]"
            />
          </div>
          <div
            ref={bentoText2Ref}
            className="flex justify-center items-center col-span-1 row-span-1 bg-black text-primary rounded-lg text-3xl sm:text-8xl"
          >
            <div>Future</div>
          </div>
          <div
            ref={bentoText3Ref}
            className="flex flex-col gap-3 justify-center items-center col-span-1 row-span-2 rounded-lg bg-pink-500 text-white text-md sm:text-6xl"
          >
            <div>of</div>
            <div>Modelling</div>
          </div>
          <div ref={bentoImg3Ref} className="col-span-2 row-span-1 rounded-lg">
            <img
              src="/images/home-bento-5.jpg"
              alt=""
              className="col-span-1 row-span-1 rounded-lg shadow-md h-full w-full object-cover object-[center_40%]"
            />
          </div>
        </div>
      </div>

      {/* Join Us Card */}
      <div className="flex justify-center items-center h-[200px] sm:h-screen px-5 sm:px-10 my-30 sm:my-50 py-0 sm:py-10">
        <div className="flex gap-7 relative w-full h-full">
          <div className="flex flex-col gap-10 justify-center items-left w-full h-full z-10 text-white px-5 sm:px-10 py-10">
            <div className="flex flex-col gap-5">
              <div className="text-2xl sm:text-5xl font-bold">
                <AnimatedTextLines text="Become a Star" />
              </div>
              <div className="hidden sm:block text-2xl font-bold w-full max-w-1/2 text-white/90 font-serif">
                <AnimatedTextLines text={joinUsText} />
              </div>
            </div>
            <Link
              className="bg-white text-black font-bold px-0 sm:px-5 py-2 sm:py-2 rounded-2xl max-w-[120px] sm:max-w-[200px] text-center text-xl sm:text-3xl cursor-pointer tracking-widest"
              to="/form"
            >
              Join Us
            </Link>
          </div>

          <img
            src="/images/home-join-card.jpg"
            alt=""
            className="rounded-3xl absolute inset-0 w-full h-full object-cover object-[0%_20%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
