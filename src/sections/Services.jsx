// src/pages/Services.jsx
import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";

const Services = () => {
  return (
    <section id="services" className="bg-white text-black">
      {/* Header */}
      <div className="h-[90vh] sm:h-screen relative flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Big Text */}
        <h1 className="text-10xl sm:text-[17rem] font-extrabold tracking-wide z-0">
          Services
        </h1>

        {/* Foreground Image (transparent PNG) */}
        <img
          src="/images/service-header.png" // replace with your background-removed image
          alt="Service Hero"
          className="absolute inset-0 h-full w-auto mx-auto object-contain z-10 transition-transform duration-100 hover:scale-110"
        />
      </div>

      {/* Film Making */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-20 py-16 bg-[#D9D9D9] gap-10">
        <img
          src="/images/home-gallery-1.jpg"
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
            to="/contact"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* TV Commercial */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between px-5 sm:px-20 py-16 bg-white gap-10">
        <img
          src="/images/home-gallery-2.jpg"
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
            to="/contact"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#b67c35]">
              "Great ads don't just sell, they tell unforgettable stories."
            </p>
            <img
              src="/images/home-bento-7.jpg"
              alt="TV Inspiration"
              className="w-1/3 sm:w-1/2 rounded-lg shadow-md mb-4"
            />
          </div>
        </div>
      </div>

      {/* Music Production */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-20 py-16 bg-[#D9D9D9] gap-10">
        <img
          src="/images/home-gallery-3.jpg"
          alt="Music Production"
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover rotate-[-7deg] hover:rotate-0 hover:scale-105 transition-transform duration-300"
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
            to="/contact"
            className="bg-black text-white font-serif px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold"
          >
            Explore
          </Link>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#b67c35]">
              "Where words fail, music speaks."
            </p>
            <img
              src="/images/home-bento-7.jpg"
              alt="Inspiration"
              className="w-1/3 sm:w-1/2 rounded-lg shadow-md mb-4"
            />
          </div>
        </div>
      </div>

      {/* Documentary Making */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between px-5 sm:px-20 py-16 bg-white gap-10">
        <img
          src="/images/home-gallery-4.jpg"
          alt="Documentary Making"
          className="w-full sm:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#b67c35]">
            Documentary Making
          </h2>
          <AnimatedTextLines text="Real stories, authentic voices. We create documentaries that
            highlight truth, impact, and human connection." className="text-lg sm:text-2xl font-serif"/>
          
          <Link
            to="/contact"
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
              src="/images/home-bento-1.jpg"
              alt=""
              className="rounded-lg object-cover"
            />
            <h3 className="text-4xl font-bold text-[#b67c35]">
              Cinematography
            </h3>
            <p className="font-serif">Capturing breathtaking visuals with artistic excellence.</p>
          </div>
          <div className="bg-white text-black rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <img
              src="/images/home-bento-2.jpg"
              alt=""
              className="rounded-lg object-cover"
            />
            <h3 className="text-4xl font-bold text-[#b67c35]">Editing</h3>
            <p className="font-serif">
              Polishing stories with professional cuts, effects, and precision.
            </p>
          </div>
          <div className="bg-white h-fit pb-20 text-black rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <img
              src="/images/home-bento-3.jpg"
              alt=""
              className="rounded-lg object-cover"
            />
            <h3 className="text-4xl font-bold text-[#b67c35]">Animation</h3>
            <p className="font-serif">Adding motion and creativity to elevate every visual project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
