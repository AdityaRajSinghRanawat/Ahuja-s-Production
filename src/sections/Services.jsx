// src/pages/Services.jsx
import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";

const Services = () => {
  return (
    <section id="services" className="bg-white text-black">
      {/* Header */}
      <section
        id="hero"
        className="relative h-[50vh] sm:h-[40vh] lg:h-[90vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center"
      >
        <div className=" flex text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[300px] gap-5 tracking-wider">
          <span className="text-primary">Serv</span>
          <span className="text-paper">ices</span>
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/service-header.webp"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover md:object-center  h-full"
          />
        </div>
      </section>

      {/* Film Making */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-20 py-16 bg-[#D9D9D9] gap-10">
        <img
          src="/images/service-1.jpg"
          alt="Film Making"
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b67c35]">
            Film Making
          </h2>
          <p className="text-lg sm:text-2xl font-serif">
            Crafting stories for the big screen with cinematic precision,
            creativity, and passion. Our film-making services bring ideas to
            life.
          </p>
          <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* TV Commercial */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between px-5 sm:px-20 py-16 bg-white gap-10">
        <img
          src="/images/service-2.jpg"
          alt="TV Commercial"
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b67c35]">
            TV Commercial
          </h2>
          <p className="text-lg sm:text-2xl font-serif">
            Creative ads that captivate audiences, communicate brands, and leave
            a lasting impression across every screen.
          </p>
          <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#b67c35]">
              "Great ads don't just sell, they tell unforgettable stories."
            </p>
            <img
              src="/images/service-small-1.jpg"
              alt="TV Inspiration"
              className="w-1/3 sm:w-1/2 rounded-lg shadow-md mb-4"
            />
          </div>
        </div>
      </div>

      {/* Music Production */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-20 py-16 bg-[#D9D9D9] gap-10">
        <img
          src="/images/service-3.jpg"
          alt="Music Production"
          className="w-[80%] sm:w-1/3 rounded-lg shadow-lg object-cover rotate-[-7deg] hover:rotate-0 hover:scale-105 transition-transform duration-300"
        />

        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b67c35]">
            Music Production
          </h2>
          <p className="text-lg sm:text-2xl font-serif">
            From soulful tracks to energetic beats, we produce music that
            connects, inspires, and elevates every project.
          </p>
          <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#b67c35]">
              "Where words fail, music speaks."
            </p>
            <img
              src="/images/service-small-2.jpg"
              alt="Inspiration"
              className="w-1/3 sm:w-1/2 rounded-lg shadow-md mb-4"
            />
          </div>
        </div>
      </div>

      {/* Documentary Making */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between px-5 sm:px-20 py-16 bg-white gap-10">
        <img
          src="/images/service-4.webp"
          alt="Documentary Making"
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b67c35]">
            Documentary Making
          </h2>
          <AnimatedTextLines
            text="Real stories, authentic voices. We create documentaries that
            highlight truth, impact, and human connection."
            className="text-lg sm:text-2xl font-serif"
          />

          <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="bg-black text-white py-20 px-5 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-white h-fit pb-35 text-black rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <img
              src="/images/service-end-1.webp"
              alt=""
              className="rounded-lg object-cover max-h-[50vh]"
            />
            <h3 className="text-3xl md:text-4xl font-bold text-[#b67c35]">
              Cinematography
            </h3>
            <p className="font-serif">
              Capturing breathtaking visuals with artistic excellence.
            </p>
            <Link
              to="/form"
              className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white text-black rounded-xl shadow-lg p-8 flex flex-col gap-4 pb-20">
            <img
              src="/images/service-end-2.webp"
              alt=""
              className="rounded-lg object-cover"
            />
            <h3 className="text-4xl font-bold text-[#b67c35]">Editing</h3>
            <p className="font-serif">
              Polishing stories with professional cuts, effects, and precision.
            </p>
            <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Learn More
          </Link>
          </div>
          <div className="bg-white h-fit pb-20 text-black rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <img
              src="/images/service-end-3.jpg"
              alt=""
              className="rounded-lg object-cover"
            />
            <h3 className="text-4xl font-bold text-[#b67c35]">Animation</h3>
            <p className="font-serif">
              Adding motion and creativity to elevate every visual project.
            </p>
            <Link
            to="/form"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Learn More
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
